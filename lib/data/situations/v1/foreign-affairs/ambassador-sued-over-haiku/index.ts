import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ambassadorSuedOverHaikuOutcomes } from "./ambassadorSuedOverHaikuOutcomes";
import { ambassadorSuedOverHaikuPreferences } from "./ambassadorSuedOverHaikuPreferences";
import { ambassadorSuedOverHaikuExchanges } from "./exchanges";

export const ambassadorSuedOverHaiku: SituationDataType = {
  trigger: {
    staticKey: "ambassador-sued-over-haiku",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Ambassador Sued Over Haiku",
  description: "A micronation claims our ambassador mistranslated a ceremonial haiku as a land cession, triggering sanctions, snack boycotts, and frantic back-channel diplomacy",
  content: {
    outcomes: ambassadorSuedOverHaikuOutcomes,
    preferences: ambassadorSuedOverHaikuPreferences,
  },
  exchanges: ambassadorSuedOverHaikuExchanges,
};
