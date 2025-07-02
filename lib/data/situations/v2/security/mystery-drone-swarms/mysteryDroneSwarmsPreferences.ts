import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const mysteryDroneSwarmsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "The President wants to project strength and challenge whoever is responsible, vowing a swift and strong response to the violation of our airspace.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Homeland Security wants to calmly inform the public of the known facts to prevent widespread panic or conspiracy theories from taking root.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Defense Secretary wants to deflect questions about why our air defenses didn't stop the swarms, focusing instead on the investigation.",
      },
    },
  },
};
