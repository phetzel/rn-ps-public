import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const islandDemandsReturnOfMoonPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I admit I pre-signed a timeshare for the moon’s Tuesday glow to pelicans. We’ll rotate the night so everyone gets turns."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We’ll note photons are stateless under the Treaty of Light, but honor cultural moon-keeping. A hush-bright pause lets talks begin."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We will price moonbeams at market, audit every glow, and threaten tariffs on illegal shimmer. Nightlight futures open Monday."
      },
      authorizedContent: "Payment records show no transaction for the “moonlight booking”; it was a marketing hold with zero funds moved. Canceling it would not affect tax receipts this quarter."
    }
  }
};
