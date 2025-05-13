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
import { exchangeContentSchema, exchangeProgressSchema } from "~/lib/schemas";
import { ExchangeContent, ExchangeProgress, Question, Answer } from "~/types";

export default class PressExchange extends Model {
  static table = "press_exchanges";

  static associations: Associations = {
    levels: { type: "belongs_to", key: "level_id" },
    situations: { type: "belongs_to", key: "situation_id" },
    journalists: { type: "belongs_to", key: "journalist_id" },
  };

  @relation("levels", "level_id") level!: Relation<Level>;
  @relation("situations", "situation_id") situation!: Relation<Situation>;
  @relation("journalists", "journalist_id") journalist!: Relation<Journalist>;

  @text("content") content!: string; // Static exchange content (JSON)
  @text("progress") progress!: string; // User's progress (JSON)

  @field("level_id") level_id!: string;
  @field("situation_id") situation_id!: string;
  @field("journalist_id") journalist_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  // --- Content and Progress Parsing ---
  get parseContent(): ExchangeContent | null {
    if (!this.content) return null;

    try {
      const parsed = JSON.parse(this.content);
      const validationResult = exchangeContentSchema.safeParse(parsed);

      if (!validationResult.success) {
        console.warn(
          "PressExchange.content getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing PressExchange ${this.id} content:`, e);
      console.error("Invalid JSON string:", this.content);
      return null;
    }
  }

  get parseProgress(): ExchangeProgress | null {
    if (!this.progress) return null;

    try {
      const parsed = JSON.parse(this.progress);
      const validationResult = exchangeProgressSchema.safeParse(parsed);

      if (!validationResult.success) {
        console.warn(
          "PressExchange.progress getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing PressExchange ${this.id} progress:`, e);
      console.error("Invalid JSON string:", this.progress);
      return null;
    }
  }

  //   Helper methods
  get currentQuestion(): Question | null {
    const content = this.parseContent;
    const progress = this.parseProgress;

    if (!content || !progress || !progress.currentQuestionId) {
      return null;
    }

    // Return the current question from content based on currentQuestionId
    return content.questions[progress.currentQuestionId] || null;
  }

  // --- Press Conference Actions ---
  @writer async answerQuestion(answerId: string) {
    const content = this.parseContent;
    const progress = this.parseProgress;

    if (!content || !progress)
      throw new Error("Exchange content or progress not found");
    if (!progress.currentQuestionId)
      throw new Error("No current question to answer");

    const currentQuestion = content.questions[progress.currentQuestionId];
    if (!currentQuestion)
      throw new Error(`Question ${progress.currentQuestionId} not found`);

    // Find the selected answer
    const selectedAnswer = currentQuestion.answers.find(
      (a) => a.id === answerId
    );
    if (!selectedAnswer)
      throw new Error(
        `Answer ${answerId} not found in question ${progress.currentQuestionId}`
      );

    // Record this answer in history
    const updatedHistory = [
      ...progress.history,
      {
        questionId: progress.currentQuestionId,
        answerId,
        skipped: false,
      },
    ];

    // Determine the next question (if any)
    const nextQuestionId = selectedAnswer.followUpId || null;

    // Update progress
    const updatedProgress = {
      history: updatedHistory,
      currentQuestionId: nextQuestionId,
    };

    await this.update((exchange) => {
      exchange.progress = JSON.stringify(updatedProgress);
    });
  }

  @writer async skipQuestion() {
    const progress = this.parseProgress;
    if (!progress || !progress.currentQuestionId)
      throw new Error("No current question to skip");

    // Record this skip in history
    const updatedHistory = [
      ...progress.history,
      {
        questionId: progress.currentQuestionId,
        skipped: true,
      },
    ];

    // Update progress (skipping means ending this question path)
    const updatedProgress = {
      history: updatedHistory,
      currentQuestionId: null,
    };

    await this.update((exchange) => {
      exchange.progress = JSON.stringify(updatedProgress);
    });
  }
}
