import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const moralityCreditSwapScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will out-virtue the market with free hugs and a sin buyback. I'm also minting an apology coin."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We should inform to show we seized ledgers, not souls. Clarity protects cases and stops officials from panic-buying contrition on burner phones."
      },
      authorizedContent: "At 5:30 a.m., federal warrants were executed at two morality-credit brokers. Records show 11 officials received zero-cost credits; trading is paused pending court review."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We must reassure to keep bond desks from pricing a Virtue Recession. A brief hug window and frown guidance will cool sin volatility."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We should challenge the premise: morality trading is stress dressed as coupons. We'll pilot naps and kale before anyone buys redemption in bulk."
      }
    }
  }
};
