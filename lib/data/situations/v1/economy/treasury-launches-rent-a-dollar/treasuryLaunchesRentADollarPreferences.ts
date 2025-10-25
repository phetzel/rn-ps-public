import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryLaunchesRentADollarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "We're not renting money; it's simply visiting monthly. Your wallet is a hotel lobby and the dollar is the bellhop."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Leasing teaches dollars responsibility; unsupervised notes keep eloping with mattresses. Business needs trackable cash, not runaway bills."
      },
      authorizedContent: "The 90-day pilot starts next Wednesday in four test zones run by the Mobile Mint Unit. Leases are 30 days at $0.02 per bill per month, capped at 10 million; early hype could strain coin stocks."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We doubt pocket evictions are legal; money could claim tenant rights and unionize with lint. Pennies are legal minors, complicating consent."
      }
    }
  }
};
