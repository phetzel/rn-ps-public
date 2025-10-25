import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sovereignIsleRefusesPassportPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "We retired passports yesterday in favor of friendship-bracelet visas. The isle is refusing a product we no longer sell."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will calmly explain the isle only honors seafoam-scented IDs and rejects ink. The law is odd, but we can certify the aromas and proceed."
      },
      authorizedContent: "At 0700 tomorrow, emergency talks start at the foreign ministry. We will honor their temporary tide-mark cards for 24 hours to de-escalate, but if public, copycat envoys may swarm."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Challenge them via inflatable deterrence: a rubber-duck carrier group will bob outside their harbor until respect is restored."
      }
    }
  }
};
