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
// Data
import { staticPublications } from "~/lib/data/staticMedia";
// Types + Constants
import type { PublicationStaticId, StaticPublication } from "~/types";
import { POLITICAL_ALIGNMENT_WEIGHT } from "~/lib/constants";

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

  async getApprovalRating(): Promise<number> {
    // Get the publication's journalists
    const journalists = await this.journalists.fetch();

    // Get the game to access president's party
    const game = await this.game.fetch();

    // Calculate the base approval from journalists
    let totalApproval = 0;
    if (journalists.length > 0) {
      // Sum up the relationship values for journalists
      for (const journalist of journalists) {
        totalApproval += journalist.psRelationship;
      }
      totalApproval = totalApproval / journalists.length;
    } else {
      // Default value if no journalists
      totalApproval = 50;
    }

    // Apply political alignment adjustment
    const politicalLeaning = this.staticData.politicalLeaning;
    const presidentParty = game.presParty;

    // Apply alignment bonus/penalty
    if (
      (politicalLeaning === "liberal" && presidentParty === "democrat") ||
      (politicalLeaning === "conservative" && presidentParty === "republican")
    ) {
      // Publication aligns with president's party
      totalApproval += POLITICAL_ALIGNMENT_WEIGHT;
    } else if (
      (politicalLeaning === "liberal" && presidentParty === "republican") ||
      (politicalLeaning === "conservative" && presidentParty === "democrat")
    ) {
      // Publication doesn't align with president's party
      totalApproval -= POLITICAL_ALIGNMENT_WEIGHT;
    }

    // Ensure approval stays within valid range (0-100)
    return Math.round(Math.max(0, Math.min(100, totalApproval)));
  }

  async getMediaBoost(): Promise<number> {
    const approvalRating = await this.getApprovalRating();

    const midpoint = 50;
    const maxBoost = 1.5;
    const minBoost = 0.5;

    if (approvalRating >= midpoint) {
      // Positive coverage
      const boost =
        1 + ((approvalRating - midpoint) / midpoint) * (maxBoost - 1);
      return parseFloat(boost.toFixed(2));
    } else {
      // Negative coverage
      const boost =
        1 - ((midpoint - approvalRating) / midpoint) * (1 - minBoost);
      return parseFloat(boost.toFixed(2));
    }
  }
}
