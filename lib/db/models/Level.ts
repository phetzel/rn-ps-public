import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model"; // Import for clarity if needed, but as const is sufficient

import type Game from "./Game";

export default class Level extends Model {
  static table = "levels";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @field("year") year!: number;
  @field("month") month!: number;
  @text("scenario_briefing") scenarioBriefing!: string | null;
  @field("start_timestamp") startTimestamp!: number | null;
  @field("end_timestamp") endTimestamp!: number | null;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
