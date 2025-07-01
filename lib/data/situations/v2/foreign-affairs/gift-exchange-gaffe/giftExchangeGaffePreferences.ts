import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const giftExchangeGaffePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "The President finds the whole situation absurd and refuses to apologize, believing any apology would just amplify the silly story.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "The Secretary of State knows diplomatic protocol was broken and believes a swift, direct admission of the error is the only way to fix it.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The HHS Secretary wants to deflect by discussing the cultural importance of dietary customs, turning the gaffe into an 'educational moment'.",
      },
    },
  },
};
