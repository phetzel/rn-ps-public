import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryLivingRoomFlagLawPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He thrives on daring the nation into showy obedience; it turns a paperwork headache into a televised, couch-based tournament."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "They favor reassure to smother rumors of microphone-thread. A calm couch is easier to inspect during surprise ottoman drills."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "They prefer inform to frame fines as patriotic cashflow. Markets stay calmer when slogans feel billable, not mystical."
      },
      authorizedContent: "Treasury will delay first household fines by 30 days while the factory fixes the flammable tassel issue. Publishing this may calm households but could reduce early compliance."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "They choose deny to swat away claims of glitter-induced couch rash. Public health hates craft hysteria more than it hates unwashed pom-poms."
      }
    }
  }
};
