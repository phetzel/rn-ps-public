import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type Game from "./Game";

export default class SubgroupApproval extends Model {
  static table = "subgroup_approvals";

  @relation("games", "game_id") game!: Game;

  @text("subgroup_key") subgroupKey!: string; // e.g., "left_wing", "tech_sector"
  @field("approval_rating") approvalRating!: number;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
