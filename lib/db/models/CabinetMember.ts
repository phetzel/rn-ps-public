import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type Game from "./Game";

export default class CabinetMember extends Model {
  static table = "cabinet_members";

  @relation("games", "game_id") game!: Game;

  @text("role") role!: string;
  @text("name") name!: string;
  @text("influence_area") influenceArea!: string;
  @field("approval_rating") approvalRating!: number;
  @field("is_active") isActive!: boolean;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
