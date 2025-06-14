import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const snackBudgetPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Explain the snack budget as a morale booster while promising it won't undermine education funding priorities.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide detailed budget figures to show overall fiscal responsibility despite the snack line item.",
      },
      authorizedContent:
        "Budget breakdowns reveal snack funds were shifted from discretionary entertainment budgets, not education programs.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Avoid direct comparison with health programs and redirect to wellness initiatives benefiting schools.",
      },
    },
  },
};
