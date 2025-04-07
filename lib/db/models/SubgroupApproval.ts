import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model";

import type Game from "./Game";

export default class SubgroupApproval extends Model {
  static table = "subgroup_approvals";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @text("subgroup_key") subgroupKey!: string; // e.g., "left_wing", "tech_sector"
  @field("approval_rating") approvalRating!: number;
  @text("category") category!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
