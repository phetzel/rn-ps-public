import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const internetOutagePanicPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Share factual updates quickly to calm fears and assure the public that solutions are underway.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the backbone fault and highlight repairs to stop speculation.",
      },
      authorizedContent:
        "Logs show a router meltdown in the main internet backbone hub. Engineers replaced hardware within hours; no foreign code found.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets about the outage's impact and promise fiscal stability during repairs.",
      },
    },
  },
};
