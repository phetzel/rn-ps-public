import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryTiesPricesToMoodOutcomes } from "./treasuryTiesPricesToMoodOutcomes";
import { treasuryTiesPricesToMoodPreferences } from "./treasuryTiesPricesToMoodPreferences";
import { treasuryTiesPricesToMoodExchanges } from "./exchanges";

export const treasuryTiesPricesToMood: SituationDataType = {
  trigger: {
    staticKey: "treasury-ties-prices-to-mood",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Ties Prices to Mood",
  description: "Treasury unveils a pilot tying prices to a national mood-index—an algorithm using stock emoji and viral trends—sending shoppers into daily price roulette.",
  content: {
    outcomes: treasuryTiesPricesToMoodOutcomes,
    preferences: treasuryTiesPricesToMoodPreferences,
  },
  exchanges: treasuryTiesPricesToMoodExchanges,
};
