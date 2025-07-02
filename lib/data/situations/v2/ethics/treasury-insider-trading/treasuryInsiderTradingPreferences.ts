import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const treasuryInsiderTradingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "The President wants to vehemently deny the allegations, framing them as a baseless political attack on their administration's integrity.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Treasury Secretary wants to deflect from the specific trades and focus on the department's strict ethics rules and commitment to transparency.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Attorney General believes in process and wants to inform the public that a formal, independent investigation has been opened.",
      },
    },
  },
};
