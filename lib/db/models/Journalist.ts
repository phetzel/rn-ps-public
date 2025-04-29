import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  relation,
  readonly,
  children,
} from "@nozbe/watermelondb/decorators";
import { Query } from "@nozbe/watermelondb";
import type { Associations } from "@nozbe/watermelondb/Model";

// Models
import type Game from "./Game";
import type Publication from "./Publication";
import type PressExchange from "./PressExchange";
// Data
import { staticJournalists } from "~/lib/data/staticMedia";
// Enums
import type { JournalistStaticId, StaticJournalist } from "~/types";
export default class Journalist extends Model {
  static table = "journalists";

  static associations: Associations = {
    games: { type: "belongs_to", key: "game_id" },
    publications: { type: "belongs_to", key: "publication_id" },
    press_exchanges: { type: "has_many", foreignKey: "journalist_id" },
  };

  @relation("games", "game_id") game!: Relation<Game>;
  @relation("publications", "publication_id")
  publication!: Relation<Publication>;
  @children("press_exchanges") pressExchanges!: Query<PressExchange>;

  @text("static_id") staticId!: JournalistStaticId;
  @field("ps_relationship") psRelationship!: number;

  @field("game_id") game_id!: string;
  @field("publication_id") publication_id!: string;

  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  get staticData(): StaticJournalist {
    return staticJournalists[this.staticId];
  }
}
