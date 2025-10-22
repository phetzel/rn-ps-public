import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasuryTiesPricesToMoodPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "I won't litigate milk prices with an emoji. The economy is a vibes-based souffle; open the oven and it collapses."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We price like meteorologists of emotion. Markets crave serotonin hedging; this is a seatbelt for volatile feelings."
      },
      authorizedContent: "The pilot runs 14 days in five test districts. If mass gaming occurs, we will freeze the index for 24 hours to protect consumers."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Tying medicine and milk to national vibes invites panic binges. We prescribe price naps, hydration, and a mandatory deep-breath discount."
      }
    }
  }
};
