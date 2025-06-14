import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const defenseContractorKickbacksPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Shift focus to national security needs and claim procurement errors will be reviewed thoroughly.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Reject bribery claims, stating contractors exaggerated and no official profited personally.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Outline the email cache evidence and cooperation with investigators while stressing fairness.",
      },
      authorizedContent:
        "Internal emails show contractors promising perks in exchange for purchase approvals. DOJ subpoenas outline a clear money trail.",
    },
  },
};
