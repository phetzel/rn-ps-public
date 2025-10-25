import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { sovereignPillowFortUproarOutcomes } from "./sovereignPillowFortUproarOutcomes";
import { sovereignPillowFortUproarPreferences } from "./sovereignPillowFortUproarPreferences";
import { sovereignPillowFortUproarExchanges } from "./exchanges";

export const sovereignPillowFortUproar: SituationDataType = {
  trigger: {
    staticKey: "sovereign-pillow-fort-uproar",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Sovereign Pillow-Fort Uproar",
  description: "An ambassador unilaterally plants a 'sovereign' pillow-fort embassy on a disputed toy isle, triggering recognition demands, sanctions, and naval escorts.",
  content: {
    outcomes: sovereignPillowFortUproarOutcomes,
    preferences: sovereignPillowFortUproarPreferences,
  },
  exchanges: sovereignPillowFortUproarExchanges,
};
