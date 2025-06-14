import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const celebrityIdentityBreachPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Calm the star-struck public and stress that real celebrity opinions remain unchanged while investigations continue.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Outline the forensic hunt for deep-fake creators and legal consequences for impersonation.",
      },
      authorizedContent:
        "Preliminary AI forensics trace origin to a troll farm using open-source celebrity face models. Subpoenas issued to hosting providers this morning.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Address mental-health impacts of disinformation and offer resources for stressed fans.",
      },
    },
  },
};
