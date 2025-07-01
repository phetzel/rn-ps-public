import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const bridgeToNowherePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to avoid getting bogged down in a spending debate, preferring to highlight broader infrastructure goals.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Treasury Secretary is concerned about the optics of the cost and wants to reassure the public that fiscal oversight is a top priority.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Attorney General is focused on potential corruption and wants to challenge the narrative that this is just normal government spending.",
      },
    },
  },
};
