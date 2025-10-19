import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const cabinetBudgetBrawlPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Wants to avoid taking sides publicly and emphasize process over blame during cabinet disputes.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Wants to redirect criticism toward procurement efficiency and oversight metrics rather than direct confrontation.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to reassure the public that capability and readiness remain strong regardless of budget debates.",
      },
    },
  },
};
