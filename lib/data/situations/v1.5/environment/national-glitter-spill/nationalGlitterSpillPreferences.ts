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
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public that while they're investigating potential health risks, the biodegradable glitter poses minimal immediate danger.",
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
