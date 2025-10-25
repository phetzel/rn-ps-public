import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalCompostDiplomacyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "I prefer to answer in worm time; it keeps critics off-balance. Besides, tricky questions compost themselves if you wait."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Without crisp rules, we end up accrediting every window box. Facts are our rake; borders our mulch."
      },
      authorizedContent: "At 9 a.m., we will issue provisional envoy badges to two worm colonies and sign a pilot soil export MOU with the Principality of Loamridge. Early leaks risk rival micronations stalling the floor vote."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Soil-credits without limits will bubble like sourdough in a sauna. I must glare at markets until they cool."
      }
    }
  }
};
