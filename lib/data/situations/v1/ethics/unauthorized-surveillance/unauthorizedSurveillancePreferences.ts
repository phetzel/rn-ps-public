import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const unauthorizedSurveillancePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Stress national security threats and avoid confirming specifics while promising to review procedures.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Insist all surveillance followed proper warrants and deny targeting political rivals.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Describe the warrant violations under review without revealing sensitive details.",
      },
      authorizedContent:
        "Warrant logs show surveillance started before final court approval. Some queries targeted rival campaign staff, causing internal alarm.",
    },
  },
};
