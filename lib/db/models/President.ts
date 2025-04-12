import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  relation,
  date,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model";

import type Game from "./Game";

export default class President extends Model {
  static table = "presidents";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @text("name") name!: string;
  @field("approval_rating") approvalRating!: number;
  @field("ps_relationship") psRelationship!: number;

  @field("game_id") game_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
