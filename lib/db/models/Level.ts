import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
  children,
  writer,
} from "@nozbe/watermelondb/decorators";
import { Query } from "@nozbe/watermelondb";
import type { Associations } from "@nozbe/watermelondb/Model"; // Import for clarity if needed, but as const is sufficient
import { z } from "zod";

import type Game from "./Game";
import type Situation from "./Situation";
import {
  type LevelStatus,
  SituationStatus,
  type ActiveSituationInfo,
} from "~/types";

// Active situation JSON Schema
export const activeSituationInfoSchema = z.object({
  id: z.string(),
  status: z.nativeEnum(SituationStatus),
});
export const levelActiveSituationsSchema = z.array(activeSituationInfoSchema);

export default class Level extends Model {
  static table = "levels";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    situations: { type: "has_many", foreignKey: "start_level_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @children("situations") situations!: Query<Situation>;
  @field("year") year!: number;
  @field("month") month!: number;
  @text("status") status!: LevelStatus;
  @text("active_situations") activeSituations!: string | null; // JSON string to track active situations this level

  @field("game_id") game_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  // Actions
  // --- Active Situations ---
  get parseActiveSituations(): ActiveSituationInfo[] | null {
    if (!this.activeSituations) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.activeSituations);
      const validationResult =
        levelActiveSituationsSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          "Level.activeSituations getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Level ${this.id} activeSituationsJson:`, e);
      console.error("Invalid JSON string:", this.activeSituations);
      return null;
    }
  }

  @writer async updateActiveSituations(data: ActiveSituationInfo[] | null) {
    if (data === null) {
      await this.update((level) => {
        level.activeSituations = null;
      });
      return;
    }

    const validationResult = levelActiveSituationsSchema.safeParse(data);
    if (!validationResult.success) {
      console.error(
        "Invalid ActiveSituationInfo data:",
        validationResult.error.format()
      );
      throw new Error(
        `Invalid data structure for Level.activeSituations: ${validationResult.error.message}`
      );
    }

    await this.update((level) => {
      level.activeSituations = JSON.stringify(validationResult.data);
    });
  }
}
