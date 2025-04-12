import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  relation,
  date,
  readonly,
} from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";

import type Game from "./Game";

export default class PressSecretary extends Model {
  static table = "press_secretaries";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @text("name") name!: string;
  @field("approval_rating") approvalRating!: number;
  @text("credibility") credibility!: number;

  @field("game_id") game_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
