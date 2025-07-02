import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const nationalGlitterSpillPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to deflect from the bizarre nature of the spill and focus on the seriousness of the response and holding the company accountable.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "HHS wants to inform the public about the potential health and environmental risks, even if the glitter is 'biodegradable'.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security is leading the cleanup and wants to reassure the public that they have the situation under control and are acting swiftly.",
      },
    },
  },
};
