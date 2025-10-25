import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalAuroraRewildingActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will debate the sky until it unionizes, then dare the auroras to clock in at 9. This is leadership by shouting at weather politely."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Our blimps whisper photons only where clouds consent under kite-law. We file patents on colors that don't exist yet to keep rivals calm."
      },
      authorizedContent: "First test aurora will be seeded over Neutral Air Pocket 7 at 21:00 on Thursday. It will run 14 minutes and may confuse migrating kites; we will pause if winds exceed 4 knots."
    }
  }
};
