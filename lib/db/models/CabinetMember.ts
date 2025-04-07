import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";

// Models
import type Game from "./Game";
// Enums
import type { CabinetRole, InfluenceArea } from "~/types";

export default class CabinetMember extends Model {
  static table = "cabinet_members";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;

  @text("role") role!: CabinetRole;
  @text("name") name!: string;
  @text("influence_area") influenceArea!: InfluenceArea;
  @field("approval_rating") approvalRating!: number;
  @field("ps_relationship") psRelationship!: number;
  @field("is_active") isActive!: boolean;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
