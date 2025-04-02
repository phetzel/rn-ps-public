import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type Game from "./Game";

export default class Level extends Model {
  static table = "levels";

  // Define the relationship back to the parent Game
  // @relation(tableName, foreignKeyColumn) defines a belongs-to relationship
  // The foreignKeyColumn ('game_id') is the column IN THE 'levels' TABLE
  @relation("games", "game_id") game!: Game;

  @field("year") year!: number;
  @field("month") month!: number;
  @text("scenario_briefing") scenarioBriefing!: string | null;
  @field("start_timestamp") startTimestamp!: number | null;
  @field("end_timestamp") endTimestamp!: number | null;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
