import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const pipelineChocolateLeakPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Joke about an accidental dessert delivery, blame aging pipes, and vow swift fixes while dodging cost details.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain health and environmental risks, share cleanup steps, and monitor for bacteria growth in wetlands.",
      },
      authorizedContent:
        "Lab memo notes high sugar promoting bacterial blooms within 48 hours. Mobile pumps and disinfectants ready if levels spike.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay fiscal impact, frame operator insurance as covering most costs, and avoid promising federal funds yet.",
      },
    },
  },
};
