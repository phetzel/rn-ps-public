import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const stockMarketNowAcceptsHugsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I shorted indifference and went long tenderness. If prices sulk, I'll average down with a national bear hug and a nacho break."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We'll regulate hugs like soft commodities with consent audits. Side-hugs face higher haircuts to prevent cuddle inflation."
      },
      authorizedContent: "At 9 a.m. Monday, a 72-hour pilot will cap collateral at two verified hugs per trade and add a 10-second cooldown between embraces. Early reporting may prompt desks to hoard morning hugs."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Affection is PPE for the soul. We require three-beat hugs, sanitizer spot checks, and audible consent chimes to keep traders limber."
      }
    }
  }
};
