import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const luxuryDoomsdayBunkerPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay bunker as legacy project and pivot to security priorities without confirming details.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Accept responsibility, cite security planning, and promise full cooperation.",
      },
      authorizedContent:
        "Invoice trail shows payments came from leftover diplomatic security funds after last year's quake readiness test. Engineers flagged lavish extras and the project stopped.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize reimbursements and fiscal control to calm spending outrage.",
      },
    },
  },
};
