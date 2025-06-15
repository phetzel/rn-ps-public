import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const autonomousCarsRebellionPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Provide clear details on the cyberattack and emphasize swift fixes to maintain public trust.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain technical patch and highlight ongoing monitoring of auto-drive networks.",
      },
      authorizedContent:
        "Forensics traced the malware to a prank group. The patch disables remote override modules and updates all autopilot firmware.",
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Reassure the public our cyber forces are containing the malware and future vehicles will be safer.",
      },
    },
  },
};
