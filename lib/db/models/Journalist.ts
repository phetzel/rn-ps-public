import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type Game from "./Game";
import type Publication from "./Publication";

export default class Journalist extends Model {
  static table = "journalists";

  @relation("games", "game_id") game!: Game;
  @relation("publications", "publication_id") publication!: Publication; // Journalist belongs to a publication

  @text("name") name!: string;
  @text("bias") bias!: string | null;
  @field("aggressiveness") aggressiveness!: number;
  @field("reputation") reputation!: number;
  @field("relationship") relationship!: number;
  @field("is_active") isActive!: boolean;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
