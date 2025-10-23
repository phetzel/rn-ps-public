import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalMoodRingMandatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Thrives on spectacle, daring critics to a televised vibe-decathlon wearing 12 rings per hand. It shifts scrutiny away from the rules."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Seeks to calm seniors and unions by saying rings read only civic mood, not cholesterol or strike plans. Pseudo-clinical phrasing keeps tempers pastel."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Sees colors as tax brackets and queue compressors; wants to cite savings even if the model runs on a shrieking calculator. Numbers dazzle skeptics."
      },
      authorizedContent: "An internal pilot in three test districts cut average wait times by 31% but increased benefit appeals by 64%. Sharing this may spark union pushback and swamp call centers within days."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Frames DIY ring-hacking as vibe sabotage; demands emergency powers and gecko drones that taste colors. Picking fights allegedly scares off copycats."
      }
    }
  }
};
