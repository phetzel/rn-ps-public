import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const nationalGlitterSpillPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to deflect from the bizarre nature of the spill and focus on holding company accountable.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform the public about potential health and environmental risks, even if the glitter is 'biodegradable'.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Leading the cleanup and wants to reassure the public that they have the situation under control and are acting swiftly.",
      },
    },
  },
};
