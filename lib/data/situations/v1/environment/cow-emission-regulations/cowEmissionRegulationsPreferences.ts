import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const cowEmissionRegulationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect from absurd backpack imagery and frame as serious, innovative climate strategy.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the public about the documented health benefits of reduced methane emissions and improved air quality.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Challenges industry legal arguments and insists federal government has clear regulatory authority.",
      },
    },
  },
};
