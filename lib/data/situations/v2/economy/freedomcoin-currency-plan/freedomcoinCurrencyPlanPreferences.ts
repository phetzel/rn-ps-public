import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const freedomcoinCurrencyPlanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "A true believer in FreedomCoin and wants to challenge the 'old-fashioned' thinking of traditional finance.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Extremely alarmed and wants to reassure markets that this is just an exploratory idea.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Concerned about potential for illicit use and wants to deflect security questions by focusing on the 'innovation' angle.",
      },
    },
  },
};
