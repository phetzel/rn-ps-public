import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  children,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Query } from "@nozbe/watermelondb";
import type Game from "./Game";
import type Journalist from "./Journalist";

export default class Publication extends Model {
  static table = "publications";

  @relation("games", "game_id") game!: Game;
  @children("journalists") journalists!: Query<Journalist>; // Publications have many journalists

  @text("name") name!: string;
  @text("political_leaning") politicalLeaning!: string;
  @field("reach") reach!: number;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
