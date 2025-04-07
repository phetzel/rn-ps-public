import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Associations } from "@nozbe/watermelondb/Model"; // Import for clarity if needed, but as const is sufficient

import type Game from "./Game";
import type Publication from "./Publication";

export default class Journalist extends Model {
  static table = "journalists";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    publications: { type: "belongs_to", key: "publication_id" }, // How this journalist links to its publication
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @relation("publications", "publication_id")
  publication!: Relation<Publication>; // Journalist belongs to a publication

  @text("name") name!: string;
  @text("bias") bias!: string | null;
  @field("aggressiveness") aggressiveness!: number;
  @field("reputation") reputation!: number;
  @field("ps_relationship") relationship!: number;
  @field("is_active") isActive!: boolean;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
