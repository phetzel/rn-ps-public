import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const diplomatsDeclareMusicalSiegePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I refuse to be outplayed; I challenge any embassy to a sunrise silence-off. Leadership means louder rests and industrial earplugs."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We must clarify crescendos are ceremonial, not casus belli. Only notarized fortissimo with timpani stamps binds the Treaty of Timbre."
      },
      authorizedContent: "At 1600 local, the Embassy of Cacophonia plans a forte passage calibrated to trigger Clause 9 if it exceeds 92 dB. We secured a 30-minute decrescendo at 1550; if leaked, they may cancel it."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Tempo dominance deters mischief; deploy the 3rd Marching Brigade to encircle with polka. If they go forte, we go supersonic kazoo."
      }
    }
  }
};
