import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const droneHackScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Wants to deny any broader security implications and insist this was an isolated incident with harmless payloads.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about market confidence and wants to reassure investors that financial infrastructure remains secure.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform about steps to protect medical supply chains and emergency response systems from similar attacks.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Acknowledges that the incident has created diplomatic complications and is working to restore allied confidence.",
      },
    },
  },
};
