import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasurySellsHappinessBondsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I reject the tyranny of gloom metrics; our mood is constitutionally buoyant. These bonds merely remind wallets to smile back."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We tie payouts to the National Mood Index, tracked by certified grinometers and a jury of yawning owls. Markets should limber up."
      },
      authorizedContent: "The first Mood Index reading is scheduled for Thursday at 10 a.m. Federal Standard Time. Coupons will not accrue unless the index rises 2.8 points above the baseline in the next 30 days."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny that emotions are negotiable instruments. In court, we will argue that subpoenaed vibes lack standing, even if they hum."
      }
    }
  }
};
