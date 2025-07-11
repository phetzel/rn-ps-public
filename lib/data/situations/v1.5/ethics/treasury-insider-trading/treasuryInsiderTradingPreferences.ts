import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const treasuryInsiderTradingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to vehemently deny the allegations, framing them as a baseless political attack on administration integrity.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect from specific trades and focus on department's strict ethics rules and transparency commitment.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Believes in process and wants to inform the public that a formal, independent investigation has been opened.",
      },
    },
  },
};
