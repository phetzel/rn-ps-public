import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
  writer,
  children,
} from "@nozbe/watermelondb/decorators";
import { Query } from "@nozbe/watermelondb";
import type { Associations } from "@nozbe/watermelondb/Model";

import type Game from "./Game";
import type Level from "./Level";
import type PressExchange from "./PressExchange";
import { situationContentSchema } from "~/lib/schemas";
import type { SituationType, SituationContent } from "~/types";

export default class Situation extends Model {
  static table = "situations";

  static associations: Associations = {
    game: { type: "belongs_to", key: "game_id" },
    level: { type: "belongs_to", key: "level_id" },
    press_exchanges: { type: "has_many", foreignKey: "situation_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @relation("levels", "level_id") level!: Relation<Level>;
  @children("press_exchanges") pressExchanges!: Query<PressExchange>;

  @text("type") type!: SituationType;
  @text("title") title!: string;
  @text("description") description!: string;
  @text("content") content!: string; // JSON string for static situation data

  @field("game_id") game_id!: string;
  @field("level_id") level_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  // Actions
  // --- Situation Progress ---
  get parseContent(): SituationContent | null {
    // Check this.content instead of this.progress
    if (!this.content) {
      return null;
    }

    try {
      // Parse this.content
      const parsedData = JSON.parse(this.content);
      // Use renamed schema
      const validationResult = situationContentSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          // Update warning message
          "Situation.content getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      // Update error message
      console.error(`Error parsing Situation ${this.id} content:`, e);
      // Log this.content
      console.error("Invalid JSON string:", this.content);
      return null;
    }
  }
}
