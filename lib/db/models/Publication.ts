import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  children,
  readonly,
} from "@nozbe/watermelondb/decorators";
import type { Query } from "@nozbe/watermelondb";
import type { Associations } from "@nozbe/watermelondb/Model"; // Import for clarity if needed, but as const is sufficient

// Models
import type Game from "./Game";
import type Journalist from "./Journalist";
// Enums
import type { PublicationStaticId, StaticPublication } from "~/types";
// Data
import { staticPublications } from "~/lib/data/staticMedia";

export default class Publication extends Model {
  static table = "publications";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    journalists: { type: "has_many", foreignKey: "publication_id" }, // How journalists link back
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @children("journalists") journalists!: Query<Journalist>; // Publications have many journalists

  @text("static_id") staticId!: PublicationStaticId;

  @field("game_id") game_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  get staticData(): StaticPublication {
    return staticPublications[this.staticId];
  }
}
