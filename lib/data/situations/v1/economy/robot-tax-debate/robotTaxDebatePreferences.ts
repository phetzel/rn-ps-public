import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const robotTaxDebatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Robots must chip in! Hit back at ‘job-killer’ hysteria and frame the levy as basic fairness for human workers.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Detail how the levy funds retraining and exempts firms with under-25 % automated headcount.",
      },
      authorizedContent:
        "Confidential scorecard: 2 % robot-hour surtax nets $68 B annually—0.3 % of GDP. Rebate phases out over five years for firms that prove worker-upskill outlays ≥ tax owed. Draft includes carve-outs for medical and defense robots.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight expanded safety-net, mental-health grants, and free coding bootcamps for displaced staff.",
      },
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Note allies are studying similar automation levies; reject claims of rising techno-protectionism.",
      },
    },
  },
};
