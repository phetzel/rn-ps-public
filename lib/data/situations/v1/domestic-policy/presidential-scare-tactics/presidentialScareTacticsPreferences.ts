import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const presidentialScareTacticsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Alien hypotheticals show readiness. Mock alarmists, pivot to defense funding, highlight bold leadership.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Clarify the alert was only theoretical, affirm EBS safeguards, and apologize for any unnecessary public distress.",
      },
      authorizedContent:
        "Classified brief 'Project Phantom Siren' shows the idea was only a closed-door readiness drill. No broadcast was slated. Patch now blocks unscheduled EBS overrides, and new rules need a presidential sign-off logged in three separate archives.",
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain strategic value of psychological readiness drills while underscoring legitimate modernization budget needs.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Offer mental-health resources and stress no real extraterrestrial threat exists.",
      },
    },
  },
};
