import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalPriceShufflePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Chaos is the new stimulus; we taught prices to freestyle. If you can't budget, outdance the CPI."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Volatility builds fiscal muscle; the economy must sweat. We salted essentials so seniors and shops don't faint mid-spin."
      },
      authorizedContent: "At 9 a.m. tomorrow the spin will exclude rent, medicine, and fuel; airfare and groceries will be eligible. If this circulates early, hoarding and arbitrage could spike."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Price roulette invites coupon mobs and barcode smugglers. We'll discuss safety, not math; threat level is BOGO."
      }
    }
  }
};
