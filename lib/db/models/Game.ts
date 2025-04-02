import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  children,
  readonly,
  json,
} from "@nozbe/watermelondb/decorators";
import type { Query } from "@nozbe/watermelondb";

import type Level from "./Level"; // Assuming Level.ts is in the same directory
import type CabinetMember from "./CabinetMember";
import type Publication from "./Publication";
import type Journalist from "./Journalist";
import type SubgroupApproval from "./SubgroupApproval";
import type { PsRelationships } from "~/types";

const sanitizer = (value: any) => value;

export default class Game extends Model {
  static table = "games"; // Corresponds to the table name in the schema

  // Define relations to child tables
  // @children(tableName) defines a has-many relationship
  @children("levels") levels!: Query<Level>;
  @children("cabinet_members") cabinetMembers!: Query<CabinetMember>;
  @children("publications") publications!: Query<Publication>;
  @children("journalists") journalists!: Query<Journalist>; // Direct journalists link if needed, though often accessed via publication
  @children("subgroup_approvals") subgroupApprovals!: Query<SubgroupApproval>;

  // Define fields corresponding to columns in the schema
  // Use @text for string, @field for number/boolean, @date for timestamps
  @text("status") status!: string;
  @field("current_year") currentYear!: number;
  @field("current_month") currentMonth!: number;
  @field("overall_public_approval") overallPublicApproval!: number;
  @text("ps_name") psName!: string;
  @field("ps_credibility") psCredibility!: number;
  @json("ps_relationships_json", sanitizer)
  psRelationships!: PsRelationships | null;
  @field("president_approval") presidentApproval!: number;
  @field("start_timestamp") startTimestamp!: number;
  @field("end_timestamp") endTimestamp!: number | null; // Optional number

  @readonly @date("created_at") createdAt!: Date; // WDB manages this
  @readonly @date("updated_at") updatedAt!: Date; // WDB manages this

  // --- Optional: Add Model-specific methods ---

  // Example: Getter/Setter for JSON field
  // get psRelationships(): Record<string, any> | null {
  //   try {
  //     return this.psRelationshipsJson ? JSON.parse(this.psRelationshipsJson) : null;
  //   } catch (e) {
  //     console.error("Error parsing psRelationshipsJson", e);
  //     return null;
  //   }
  // }
  // async updatePsRelationships(newData: Record<string, any>): Promise<void> {
  //   await this.update(game => {
  //     game.psRelationshipsJson = JSON.stringify(newData);
  //   });
  // }

  // Example: Action to advance time
  // async advanceMonth() {
  //   await this.update(game => {
  //     if (game.currentMonth === 12) {
  //       game.currentMonth = 1;
  //       game.currentYear += 1;
  //     } else {
  //       game.currentMonth += 1;
  //     }
  //   });
  // }
}
