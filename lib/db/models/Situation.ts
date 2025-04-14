import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
  writer,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model"; // Import for clarity if needed, but as const is sufficient

import type Game from "./Game";
import type Level from "./Level";
import { situationProgressSchema } from "~/lib/schemas";
import type {
  SituationType,
  SituationStatus,
  SituationProgress,
} from "~/types";

export default class Situation extends Model {
  static table = "situations";

  static associations: Associations = {
    game: { type: "belongs_to", key: "game_id" },
    start_level: { type: "belongs_to", key: "start_level_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @relation("levels", "start_level_id") startLevel!: Relation<Level>;

  @text("type") type!: SituationType;
  @text("title") title!: string;
  @text("description") description!: string;
  @text("status") status!: SituationStatus;
  @text("progress") progress!: string | null; // JSON string to track progress, branching paths etc.

  @field("game_id") game_id!: string;
  @field("start_level_id") start_level_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  // Actions
  // --- Situation Progress ---
  get parseProgress(): SituationProgress | null {
    if (!this.progress) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.progress);
      const validationResult = situationProgressSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          "Situation.progress getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Situation ${this.id} progressJson:`, e);
      console.error("Invalid JSON string:", this.progress);
      return null;
    }
  }

  @writer async updateProgress(data: SituationProgress | null) {
    if (data === null) {
      await this.update((situation) => {
        situation.progress = null;
      });
      return;
    }

    const validationResult = situationProgressSchema.safeParse(data);
    if (!validationResult.success) {
      console.error(
        "Invalid SituationProgress data:",
        validationResult.error.format()
      );
      throw new Error(
        `Invalid data structure for Situation.progress: ${validationResult.error.message}`
      );
    }

    await this.update((situation) => {
      situation.progress = JSON.stringify(validationResult.data);
    });
  }
}
