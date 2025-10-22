import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const forgivenessCertificateFiascoPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He prefers to dare the scandal to fight in daylight, then out-weird it. He believes confidence is louder than paperwork."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "They'd rather redirect rage into ribbon-cuttings, claiming certificates were commemorative bookmarks. Blame a haunted spreadsheet."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "They favor clinical facts to keep judges calm and unions less furious. Also, their subpoenas are allergic to adjectives."
      },
      authorizedContent: "At 6 a.m., Justice froze all redemption of 'forgiveness certificates' and locked the vendor portals. Refund notices will go out within 72 hours, which may upset donors but preserves active investigations."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "They want to soothe everyone with wellness metaphors, then prescribe civic tea. If panic persists, they will hug the budget."
      }
    }
  }
};
