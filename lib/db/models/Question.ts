import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
  writer,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model";

import type Level from "./Level";
import type Situation from "./Situation";
import type Journalist from "./Journalist";
import { questionDataSchema } from "~/lib/schemas";
import { QuestionStatus, QuestionData, QuestionAnswer } from "~/types";

export default class Question extends Model {
  static table = "questions";

  static associations: Associations = {
    levels: { type: "belongs_to", key: "level_id" },
    situations: { type: "belongs_to", key: "situation_id" },
    journalists: { type: "belongs_to", key: "journalist_id" },
  };

  @relation("levels", "level_id") level!: Relation<Level>;
  @relation("situations", "situation_id") situation!: Relation<Situation>;
  @relation("journalists", "journalist_id") journalist!: Relation<Journalist>;

  @text("question_text") questionText!: string;
  @text("data") data!: string | null; // JSON string containing answers and impacts
  @text("status") status!: QuestionStatus;

  @field("level_id") level_id!: string;
  @field("situation_id") situation_id!: string;
  @field("journalist_id") journalist_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  // Actions
  // --- Question Data Parsing ---
  get parseData(): QuestionData | null {
    if (!this.data) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.data);
      const validationResult = questionDataSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          "Question.data getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Question ${this.id} data:`, e);
      console.error("Invalid JSON string:", this.data);
      return null;
    }
  }

  // --- Helper Getters ---
  get selectedAnswerIndex(): number | null {
    const data = this.parseData;
    return data?.selectedAnswerIndex ?? null;
  }

  get hasFollowUp(): boolean {
    const data = this.parseData;
    if (!data || data.selectedAnswerIndex === undefined) return false;

    return Boolean(data.followUps && data.followUps[data.selectedAnswerIndex]);
  }

  get followUpQuestion(): { text: string; answers: QuestionAnswer[] } | null {
    if (!this.hasFollowUp) return null;

    const data = this.parseData;
    if (!data || data.selectedAnswerIndex === undefined) return null;

    return data?.followUps?.[data.selectedAnswerIndex] || null;
  }

  get selectedAnswer(): QuestionAnswer | null {
    const data = this.parseData;
    if (!data || data.selectedAnswerIndex === undefined) return null;

    return data.answers[data.selectedAnswerIndex] || null;
  }

  get selectedFollowUpAnswer(): QuestionAnswer | null {
    if (!this.hasFollowUp) return null;

    const data = this.parseData;
    if (!data || data.selectedAnswerIndex === undefined) return null;

    const followUp = data.followUps?.[data.selectedAnswerIndex];
    if (!followUp || followUp.selectedAnswerIndex === undefined) return null;

    return followUp.answers[followUp.selectedAnswerIndex] || null;
  }

  // --- Data Update Methods ---
  @writer async updateData(data: QuestionData | null) {
    if (data === null) {
      await this.update((question) => {
        question.data = null;
      });
      return;
    }

    const validationResult = questionDataSchema.safeParse(data);
    if (!validationResult.success) {
      console.error(
        "Invalid QuestionData data:",
        validationResult.error.format()
      );
      throw new Error(
        `Invalid data structure for Question.data: ${validationResult.error.message}`
      );
    }

    await this.update((question) => {
      question.data = JSON.stringify(validationResult.data);
    });
  }

  // --- Question State Management ---
  @writer async answerQuestion(answerIndex: number) {
    // Get current data
    const currentData = this.parseData;
    if (!currentData) throw new Error("Cannot answer question with no data");

    const isFollowUp = this.status === QuestionStatus.Answered;
    if (!isFollowUp) {
      // Handling primary question

      // Validate answer index
      if (answerIndex < 0 || answerIndex >= currentData.answers.length) {
        throw new Error(`Invalid answer index: ${answerIndex}`);
      }

      // Check if there's a follow-up for this answer
      const hasFollowUp = Boolean(
        currentData.followUps && currentData.followUps[answerIndex]
      );

      // Set new status based on whether there's a follow-up
      const newStatus = QuestionStatus.Answered;

      // Update data with selected answer index
      const updatedData = {
        ...currentData,
        selectedAnswerIndex: answerIndex,
      };

      // Update both status and data in a single transaction
      await this.update((question) => {
        question.status = newStatus;
        question.data = JSON.stringify(updatedData);
      });
    } else {
      // Handling follow-up question

      // Validate we have a primary answer selected
      if (currentData.selectedAnswerIndex === undefined) {
        throw new Error("Cannot answer follow-up without a primary answer");
      }

      // Get the follow-up question
      const followUp = currentData.followUps?.[currentData.selectedAnswerIndex];
      if (!followUp) {
        throw new Error("No follow-up question exists for the selected answer");
      }

      // Validate follow-up answer index
      if (answerIndex < 0 || answerIndex >= followUp.answers.length) {
        throw new Error(`Invalid follow-up answer index: ${answerIndex}`);
      }

      // Update the follow-up with the selected answer
      const updatedFollowUps = {
        ...currentData.followUps,
        [currentData.selectedAnswerIndex]: {
          ...followUp,
          selectedAnswerIndex: answerIndex,
        },
      };

      // Update both status and data in a single transaction
      await this.update((question) => {
        question.status = QuestionStatus.FollowUpAnswered;
        question.data = JSON.stringify({
          ...currentData,
          followUps: updatedFollowUps,
        });
      });
    }
  }

  @writer async skipQuestion() {
    const isFollowUp = this.status === QuestionStatus.Answered;
    const newStatus = isFollowUp
      ? QuestionStatus.FollowUpSkipped
      : QuestionStatus.Skipped;

    await this.update((question) => {
      question.status = newStatus;
    });
  }

  @writer async ignoreQuestion() {
    await this.update((question) => {
      question.status = QuestionStatus.Ignored;
    });
  }

  // --- Impact Calculation ---
  getAnswerImpacts(includeFollowUp: boolean = true) {
    const impacts = {
      president: 0,
      cabinet: {} as Record<string, number>,
      publications: {} as Record<string, number>,
      subgroups: {} as Record<string, number>,
    };

    // Get initial answer impacts
    const mainAnswer = this.selectedAnswer;
    if (mainAnswer) {
      // Process president impact
      if (mainAnswer.impacts.president) {
        impacts.president += mainAnswer.impacts.president.weight;
      }

      // Process cabinet impacts
      if (mainAnswer.impacts.cabinet) {
        Object.entries(mainAnswer.impacts.cabinet).forEach(([role, impact]) => {
          impacts.cabinet[role] = (impacts.cabinet[role] || 0) + impact.weight;
        });
      }

      // Process publication impacts
      if (mainAnswer.impacts.publications) {
        Object.entries(mainAnswer.impacts.publications).forEach(
          ([id, impact]) => {
            impacts.publications[id] =
              (impacts.publications[id] || 0) + impact.weight;
          }
        );
      }

      // Process subgroup impacts
      if (mainAnswer.impacts.subgroups) {
        Object.entries(mainAnswer.impacts.subgroups).forEach(
          ([key, impact]) => {
            impacts.subgroups[key] =
              (impacts.subgroups[key] || 0) + impact.weight;
          }
        );
      }
    }

    // Add follow-up impacts if requested and available
    if (includeFollowUp && this.status === QuestionStatus.FollowUpAnswered) {
      const followUpAnswer = this.selectedFollowUpAnswer;

      if (followUpAnswer) {
        // Process president impact
        if (followUpAnswer.impacts.president) {
          impacts.president += followUpAnswer.impacts.president.weight;
        }

        // Process cabinet impacts
        if (followUpAnswer.impacts.cabinet) {
          Object.entries(followUpAnswer.impacts.cabinet).forEach(
            ([role, impact]) => {
              impacts.cabinet[role] =
                (impacts.cabinet[role] || 0) + impact.weight;
            }
          );
        }

        // Process publication impacts
        if (followUpAnswer.impacts.publications) {
          Object.entries(followUpAnswer.impacts.publications).forEach(
            ([id, impact]) => {
              impacts.publications[id] =
                (impacts.publications[id] || 0) + impact.weight;
            }
          );
        }

        // Process subgroup impacts
        if (followUpAnswer.impacts.subgroups) {
          Object.entries(followUpAnswer.impacts.subgroups).forEach(
            ([key, impact]) => {
              impacts.subgroups[key] =
                (impacts.subgroups[key] || 0) + impact.weight;
            }
          );
        }
      }
    }

    return impacts;
  }
}
