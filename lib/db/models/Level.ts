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

import type Game from "./Game";
import type Situation from "./Situation";
import type PressExchange from "./PressExchange";
import {
  type LevelStatus,
  SituationStatus,
  type ActiveSituationInfo,
  type OutcomeSnapshotType,
} from "~/types";
import {
  levelActiveSituationsSchema,
  outcomeSnapshotSchema,
} from "~/lib/schemas";

export default class Level extends Model {
  static table = "levels";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    situations: { type: "has_many", foreignKey: "start_level_id" },
    press_exchanges: { type: "has_many", foreignKey: "level_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @children("situations") situations!: Query<Situation>;
  @children("press_exchanges") pressExchanges!: Query<PressExchange>;

  @field("year") year!: number;
  @field("month") month!: number;
  @text("status") status!: LevelStatus;
  @text("active_situations") activeSituations!: string | null;
  @text("outcome_snapshot") outcomeSnapshot!: string | null;

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

  // --- Outcome Snapshot ---
  get parseOutcomeSnapshot(): OutcomeSnapshotType | null {
    if (!this.outcomeSnapshot) {
      return null;
    }

    try {
      const parsedData = JSON.parse(this.outcomeSnapshot);
      const validationResult = outcomeSnapshotSchema.safeParse(parsedData);

      if (!validationResult.success) {
        console.warn(
          "Level.outcomeSnapshot getter: Invalid data structure found in DB:",
          validationResult.error.format()
        );
        return null;
      }
      return validationResult.data;
    } catch (e) {
      console.error(`Error parsing Level ${this.id} outcomeSnapshot:`, e);
      console.error("Invalid JSON string:", this.outcomeSnapshot);
      return null;
    }
  }

  @writer async updateOutcomeSnapshot(data: OutcomeSnapshotType | null) {
    if (data === null) {
      await this.update((level) => {
        level.outcomeSnapshot = null;
      });
      return;
    }

    const validationResult = outcomeSnapshotSchema.safeParse(data);
    if (!validationResult.success) {
      console.error(
        "Invalid OutcomeSnapshot data:",
        validationResult.error.format()
      );
      throw new Error(
        `Invalid data structure for Level.outcomeSnapshot: ${validationResult.error.message}`
      );
    }

    await this.update((level) => {
      level.outcomeSnapshot = JSON.stringify(validationResult.data);
    });
  }
}
