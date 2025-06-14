import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const biometricDataLeakPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Promise quick fixes, emphasize personal responsibility for monitoring credit, and avoid admitting systemic flaws.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain breach containment steps and ongoing security upgrades for the ID system.",
      },
      authorizedContent:
        "Logs pinpoint the breach to a third-party contractor’s misconfigured server. DHS isolated the segment and issued new encryption keys overnight.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight investigations into criminal misuse and efforts to protect victims from fraud.",
      },
    },
  },
};
