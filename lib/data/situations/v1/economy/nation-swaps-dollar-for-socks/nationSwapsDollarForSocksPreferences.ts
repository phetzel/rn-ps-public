import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationSwapsDollarForSocksPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Currency must evolve; I challenge inflation to a sprint in tube socks. Loser converts to sandals."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Replacing notes with graded hosiery stabilizes seigniorage. Our anti-lint watermark and toe-serials deter counterfeits."
      },
      authorizedContent: "Pilot issuance of 12 million left socks starts Friday noon; rights follow in two weeks. Retailers must accept them at face value for 30 days, but early reporting may trigger hoarding."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We can screen for sock-laundering and static-charged unrest. Union pickets may wave novelty hosiery; we will use gentle foot-scanners, not raids."
      }
    }
  }
};
