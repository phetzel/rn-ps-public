import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model";

// Models
import type Game from "./Game";
// Enums
import type { SubgroupStaticId, StaticSubgroup } from "~/types";
// Data
import { staticSubgroups } from "~/lib/data/staticPolitics";

export default class SubgroupApproval extends Model {
  static table = "subgroup_approvals";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @text("static_id") staticId!: SubgroupStaticId;
  @field("approval_rating") approvalRating!: number;

  @field("game_id") game_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  get staticData(): StaticSubgroup {
    return staticSubgroups[this.staticId];
  }
}
