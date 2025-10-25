import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const cloudsNowPropertyOfStatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Bring me a notarized thunderhead title, then we'll talk. Until then, we steward fluff so rain clocks in like unionized drizzle."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Hydration is a public good; we won't ration rain. Seniors get priority spritzing, and backyard mists remain freckle-friendly."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Permits turn chaos into cash for roads and umbrellas. Bond gremlins hate surprise downpours; they adore scheduled drizzle."
      },
      authorizedContent: "Billing for rain permits begins May 15 with a 30-day grace period and no fines. Sharing this early may cause a rush on dehumidifiers and inflate prices."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We are not sending net squads into the sky. Compliance teams use kites and courtesy whistles, not jets; protests stay on the ground."
      }
    }
  }
};
