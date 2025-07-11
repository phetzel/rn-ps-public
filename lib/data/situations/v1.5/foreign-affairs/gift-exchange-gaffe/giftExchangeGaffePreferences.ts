import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const giftExchangeGaffePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Finds the situation absurd and refuses to apologize, believing any apology would just amplify the silly story.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Knows diplomatic protocol was broken and believes a swift, direct admission is the only way to fix it.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect by discussing cultural dietary customs, turning the gaffe into an 'educational moment'.",
      },
    },
  },
};
