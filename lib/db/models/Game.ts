import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  children,
  readonly,
  writer,
} from "@nozbe/watermelondb/decorators";
import { Query } from "@nozbe/watermelondb";
import type { Associations } from "@nozbe/watermelondb/Model";

// Models
import type Level from "./Level";
import type CabinetMember from "./CabinetMember";
import type Publication from "./Publication";
import type Journalist from "./Journalist";
import type SubgroupApproval from "./SubgroupApproval";
import type PressSecretary from "./PressSecretary";
import type President from "./President";
import type Situation from "./Situation";
// Enums
import { GameStatus } from "~/types";

export default class Game extends Model {
  static table = "games"; // Corresponds to the table name in the schema

  static associations: Associations = {
    levels: { type: "has_many", foreignKey: "game_id" },
    situations: { type: "has_many", foreignKey: "game_id" },
    cabinet_members: { type: "has_many", foreignKey: "game_id" },
    publications: { type: "has_many", foreignKey: "game_id" },
    journalists: { type: "has_many", foreignKey: "game_id" },
    subgroup_approvals: { type: "has_many", foreignKey: "game_id" },
    press_secretaries: { type: "has_many", foreignKey: "game_id" },
    presidents: { type: "has_many", foreignKey: "game_id" },
    // outcomes: { type: "has_many", foreignKey: "game_id" },
  };

  // Define relations to child tables
  // @children(tableName) defines a has-many relationship
  @children("levels") levels!: Query<Level>;
  @children("cabinet_members") cabinetMembers!: Query<CabinetMember>;
  @children("publications") publications!: Query<Publication>;
  @children("journalists") journalists!: Query<Journalist>; // Direct journalists link if needed, though often accessed via publication
  @children("subgroup_approvals") subgroupApprovals!: Query<SubgroupApproval>;
  @children("press_secretaries") pressSecretaries!: Query<PressSecretary>;
  @children("presidents") presidents!: Query<President>;

  // Define fields corresponding to columns in the schema
  @text("status") status!: GameStatus;
  @field("current_year") currentYear!: number;
  @field("current_month") currentMonth!: number;
  @field("start_timestamp") startTimestamp!: number;
  @field("end_timestamp") endTimestamp!: number | null; // Optional number

  @readonly @date("created_at") createdAt!: Date; // WDB manages this
  @readonly @date("updated_at") updatedAt!: Date; // WDB manages this

  // --- Optional: Add Model-specific methods ---
  // Example: Action to advance time
  @writer async advanceMonth() {
    await this.update((game) => {
      if (game.currentMonth === 12) {
        game.currentMonth = 1;
        game.currentYear += 1;
      } else {
        game.currentMonth += 1;
      }
    });
  }
}
