import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryAuctionsImaginaryGdpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Markets price vibes daily; we can price pretend growth once. Show me a purely real economy and I'll shred these credits on TV."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We already price risks that don't exist; this just labels them. Supply is capped and marked to myth to avoid metaphysical inflation."
      },
      authorizedContent: "Pilot auction is set for Thursday at 10 a.m.: 1.3 trillion credits with a 0.03 floor per credit. If bidding is weak, we will pause new issuance for 90 days."
    }
  }
};
