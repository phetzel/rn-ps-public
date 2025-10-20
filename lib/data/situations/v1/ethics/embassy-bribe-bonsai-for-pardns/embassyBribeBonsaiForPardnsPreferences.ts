import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const embassyBribeBonsaiForPardnsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "He thrives on absurd bravado; denying with botanical hair-splitting makes him look in command. It needles both agencies into performative loyalty."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "They'd rather rebrand bonsai as 'micro-ambassadors' and pivot to cultural diplomacy. It dodges legal traps and flatters urban gardeners."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "They favor dry timelines and verifiable nouns to avoid contempt theatrics. Facts buy time, soothe seniors, and keep memes from dictating subpoenas."
      },
      authorizedContent: "Our review shows the ledger pages came from a training binder labeled 'Mock Casework' from last spring. We paused immunity fast-tracks at 0600 for an external audit; some visas may be delayed."
    }
  }
};
