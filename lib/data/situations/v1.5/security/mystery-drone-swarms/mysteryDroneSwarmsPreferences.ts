import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const mysteryDroneSwarmsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Wants to project strength and challenge whoever is responsible, vowing swift response to airspace violation.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to calmly inform the public of known facts to prevent widespread panic or conspiracy theories.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to deflect questions about why air defenses failed, focusing instead on the investigation.",
      },
    },
  },
};
