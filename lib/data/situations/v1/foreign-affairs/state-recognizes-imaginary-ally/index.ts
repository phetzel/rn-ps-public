import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { stateRecognizesImaginaryAllyOutcomes } from "./stateRecognizesImaginaryAllyOutcomes";
import { stateRecognizesImaginaryAllyPreferences } from "./stateRecognizesImaginaryAllyPreferences";
import { stateRecognizesImaginaryAllyExchanges } from "./exchanges";

export const stateRecognizesImaginaryAlly: SituationDataType = {
  trigger: {
    staticKey: "state-recognizes-imaginary-ally",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "State Recognizes Imaginary Ally",
  description: "State recognizes imaginary allies, granting embassies, passports, and trade talks, triggering chaos over treaties, budgets, and who stamps pastel documents.",
  content: {
    outcomes: stateRecognizesImaginaryAllyOutcomes,
    preferences: stateRecognizesImaginaryAllyPreferences,
  },
  exchanges: stateRecognizesImaginaryAllyExchanges,
};
