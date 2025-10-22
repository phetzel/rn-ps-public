import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const compulsoryComplimentQuotaPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I dare anyone to go praise-free for a day and see if gravity holds. If it does, I'll rescind it and compliment gravity personally."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Our models predict adjective inflation unless we cap 'amazing' at three uses weekly. Kindness bonds will absorb surplus praise liquidity."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We added a 'sincerely optional' clause and outlawed sarcasm scanners. Enforcement is restorative: awkward workshops, not handcuffs."
      },
      authorizedContent: "For 90 days, there are no fines—only app prompts and optional workshops. The pilot uses volunteers and anonymized logs; no audio, video, or geofence collection is active."
    }
  }
};
