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
import type { PoliticalLeaning } from "~/types";

export default class Publication extends Model {
  static table = "publications";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    journalists: { type: "has_many", foreignKey: "publication_id" }, // How journalists link back
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @children("journalists") journalists!: Query<Journalist>; // Publications have many journalists

  @text("name") name!: string;
  @text("political_leaning") politicalLeaning!: PoliticalLeaning;
  @field("reach") reach!: number;
  @field("approval_rating") approvalRating!: number;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
