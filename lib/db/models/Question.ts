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
  @field("selected_answer_index") selectedAnswerIndex!: number | null;

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
  get hasAnswerSelected(): boolean {
    return this.selectedAnswerIndex !== null;
  }

  get hasFollowUp(): boolean {
    const data = this.parseData;
    if (!data || this.selectedAnswerIndex === null) return false;

    return Boolean(data.followUps && data.followUps[this.selectedAnswerIndex]);
  }

  get followUpQuestion(): { text: string; answers: QuestionAnswer[] } | null {
    if (!this.hasFollowUp || this.selectedAnswerIndex === null) return null;

    const data = this.parseData;
    return data?.followUps?.[this.selectedAnswerIndex] || null;
  }

  get selectedAnswer(): QuestionAnswer | null {
    const data = this.parseData;
    if (!data || this.selectedAnswerIndex === null) return null;

    return data.answers[this.selectedAnswerIndex] || null;
  }

  get selectedFollowUpAnswer(): QuestionAnswer | null {
    if (!this.hasFollowUp) return null;

    const data = this.parseData;
    if (!data || this.selectedAnswerIndex === null) return null;

    const followUp = data.followUps?.[this.selectedAnswerIndex];
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

    // Validate answer index
    if (answerIndex < 0 || answerIndex >= currentData.answers.length) {
      throw new Error(`Invalid answer index: ${answerIndex}`);
    }

    // Check if there's a follow-up for this answer
    const hasFollowUp = Boolean(
      currentData.followUps && currentData.followUps[answerIndex]
    );

    // Update model status
    await this.update((question) => {
      question.status = hasFollowUp
        ? QuestionStatus.Answered
        : QuestionStatus.Answered;
      question.selectedAnswerIndex = answerIndex;
    });

    // Update data object
    await this.updateData({
      ...currentData,
      selectedAnswerIndex: answerIndex,
    });
  }

  @writer async answerFollowUp(followUpAnswerIndex: number) {
    // Ensure there's a follow-up and it's valid
    if (!this.hasFollowUp || this.selectedAnswerIndex === null) {
      throw new Error(
        "No follow-up question exists or parent question not answered"
      );
    }

    const currentData = this.parseData;
    if (!currentData) throw new Error("Cannot answer follow-up with no data");

    const followUp = currentData.followUps?.[this.selectedAnswerIndex];
    if (!followUp) throw new Error("Follow-up not found");

    // Validate follow-up answer index
    if (
      followUpAnswerIndex < 0 ||
      followUpAnswerIndex >= followUp.answers.length
    ) {
      throw new Error(`Invalid follow-up answer index: ${followUpAnswerIndex}`);
    }

    // Update status to follow-up answered
    await this.update((question) => {
      question.status = QuestionStatus.FollowUpAnswered;
    });

    // Update the data to include the selected follow-up answer
    const updatedFollowUps = {
      ...currentData.followUps,
      [this.selectedAnswerIndex]: {
        ...followUp,
        selectedAnswerIndex: followUpAnswerIndex,
      },
    };

    await this.updateData({
      ...currentData,
      followUps: updatedFollowUps,
    });
  }

  @writer async skipQuestion() {
    await this.update((question) => {
      question.status = QuestionStatus.Skipped;
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
