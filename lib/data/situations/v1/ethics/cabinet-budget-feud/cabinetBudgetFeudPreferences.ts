import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cabinetBudgetFeudPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Keep focus on fiscal responsibility while assuring the public that infighting won't hurt security.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Use budget slides to accuse Defense of overspending, painting Treasury as fiscal watchdog.",
      },
      authorizedContent:
        "Slides show side-by-side comparisons of planned vs. actual defense outlays, highlighting $2B in unapproved upgrades.",
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay the feud as a misunderstanding and stress ongoing missions.",
      },
    },
  },
};
