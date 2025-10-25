import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalCompostDiplomacyOutcomes } from "./nationalCompostDiplomacyOutcomes";
import { nationalCompostDiplomacyPreferences } from "./nationalCompostDiplomacyPreferences";
import { nationalCompostDiplomacyExchanges } from "./exchanges";

export const nationalCompostDiplomacy: SituationDataType = {
  trigger: {
    staticKey: "national-compost-diplomacy",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "National Compost Diplomacy",
  description: "Administration pilots a Compost Accord granting worm colonies diplomatic status, exporting certified soil to micronations, and launching a soil-credit market.",
  content: {
    outcomes: nationalCompostDiplomacyOutcomes,
    preferences: nationalCompostDiplomacyPreferences,
  },
  exchanges: nationalCompostDiplomacyExchanges,
};
