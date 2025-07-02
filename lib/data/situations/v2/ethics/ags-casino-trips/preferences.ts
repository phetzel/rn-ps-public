import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const agCasinoTripsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President wants to support their AG and believes the trips were legitimate, so they want to deflect by attacking the credibility of the story.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The AG claims the trips mixed business with personal time and wants to reassure the public that all travel was properly approved and vetted.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "The Treasury Secretary is concerned about the misuse of funds and wants to deflect by focusing on the need for a formal audit to find the facts.",
      },
    },
  },
};
