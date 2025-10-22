import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryLaunchesNostalgiaCoinOutcomes } from "./treasuryLaunchesNostalgiaCoinOutcomes";
import { treasuryLaunchesNostalgiaCoinPreferences } from "./treasuryLaunchesNostalgiaCoinPreferences";
import { treasuryLaunchesNostalgiaCoinExchanges } from "./exchanges";

export const treasuryLaunchesNostalgiaCoin: SituationDataType = {
  trigger: {
    staticKey: "treasury-launches-nostalgia-coin",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Launches Nostalgia Coin",
  description: "Treasury debuts 'Nostalgia Coin,' pegging value to childhood memory scores, while seniors, rural towns, and tech firms demand clear rules on payouts and status.",
  content: {
    outcomes: treasuryLaunchesNostalgiaCoinOutcomes,
    preferences: treasuryLaunchesNostalgiaCoinPreferences,
  },
  exchanges: treasuryLaunchesNostalgiaCoinExchanges,
};
