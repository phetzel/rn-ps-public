import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasuryOpensTipJarOutcomes } from "./treasuryOpensTipJarOutcomes";
import { treasuryOpensTipJarPreferences } from "./treasuryOpensTipJarPreferences";
import { treasuryOpensTipJarExchanges } from "./exchanges";

export const treasuryOpensTipJar: SituationDataType = {
  trigger: {
    staticKey: "treasury-opens-tip-jar",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Opens Tip Jar",
  description: "Treasury unveils a federal 'tip jar': citizens, influencers, and startups told to drop spare change into a giant lobby jar to help close the budget gap.",
  content: {
    outcomes: treasuryOpensTipJarOutcomes,
    preferences: treasuryOpensTipJarPreferences,
  },
  exchanges: treasuryOpensTipJarExchanges,
};
