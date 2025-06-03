import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const federalDatingAppFundingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Love is infrastructure! Promise unity one swipe at a time and brush off cost gripes with playful confetti.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Stress tiny pilot budget, revenue-sharing ads, and sunset clause if targets fail—no open-ended taxpayer tab.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight end-to-end encryption, zero geolocation resale, and DHS red-team audits guarding user privacy.",
      },
      authorizedContent:
        "Pen-test report: critical API flaw patched; no PII leaked. Ongoing bug-bounty pool $5 M. Cyber rating now ‘A-’. DHS can trigger kill-switch within 30 s if foreign bot swarm detected.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Discuss mental-health safeguards: in-app crisis line, AI harassment filters, and age-verification gate.",
      },
    },
  },
};
