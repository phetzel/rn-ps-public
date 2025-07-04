import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const agCasinoTripsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to support their AG and believes trips were legitimate, so denying the accusations and attacking story credibility.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Claims trips mixed business with personal time and wants to reassure that all travel was properly approved.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Concerned about fund misuse and wants to deflect by focusing on need for formal audit to find facts.",
      },
    },
  },
};
