import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const freedomcoinCurrencyPlanPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President is a true believer in FreedomCoin and wants to challenge the 'old-fashioned' thinking of traditional financial institutions.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Treasury Secretary is extremely alarmed and wants to do everything possible to reassure markets that this is just an exploratory idea.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Homeland Security is concerned about the potential for illicit use and wants to deflect security questions by focusing on the 'innovation' angle.",
      },
    },
  },
};
