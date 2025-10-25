import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { houseplantJuryMandateOutcomes } from "./houseplantJuryMandateOutcomes";
import { houseplantJuryMandatePreferences } from "./houseplantJuryMandatePreferences";
import { houseplantJuryMandateExchanges } from "./exchanges";

export const houseplantJuryMandate: SituationDataType = {
  trigger: {
    staticKey: "houseplant-jury-mandate",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Houseplant Jury Mandate",
  description: "White House proposes households register one houseplant as an official 'juror' for minor disputes, complete with ID tag and tax credit.",
  content: {
    outcomes: houseplantJuryMandateOutcomes,
    preferences: houseplantJuryMandatePreferences,
  },
  exchanges: houseplantJuryMandateExchanges,
};
