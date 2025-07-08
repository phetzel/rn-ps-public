import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const cowEmissionRegulationsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect from the absurd backpack imagery and frame this as a serious, innovative climate strategy with health benefits.",
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
          "Challenges the agricultural industry's legal arguments and insists the federal government has clear regulatory authority.",
      },
    },
  },
};
