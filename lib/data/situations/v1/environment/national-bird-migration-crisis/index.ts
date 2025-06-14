import { SituationType, SituationData } from "~/types";
import { nationalBirdMigrationCrisisPreferences } from "./nationalBirdMigrationCrisisPreferences";
import { nationalBirdMigrationCrisisOutcomes } from "./nationalBirdMigrationCrisisOutcomes";
import { nationalBirdMigrationCrisisExchanges } from "./nationalBirdMigrationCrisisExchanges";

export const nationalBirdMigrationCrisis: SituationData = {
  trigger: {
    staticKey: "national_bird_migration_crisis",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "National Bird Migration Crisis",
  description:
    "Sudden shifts in bird migration create havoc for ecosystems and air traffic, spooking scientists and pilots alike.",
  content: {
    preferences: nationalBirdMigrationCrisisPreferences,
    outcomes: nationalBirdMigrationCrisisOutcomes,
  },
  exchanges: nationalBirdMigrationCrisisExchanges,
};
