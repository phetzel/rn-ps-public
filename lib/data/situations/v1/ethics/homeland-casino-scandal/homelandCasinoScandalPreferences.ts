import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const homelandCasinoScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Emphasize commitment to security while deflecting questions about personal conduct until facts are clear.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Claim trips combined official meetings with downtime and promise full cooperation with investigators.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Outline the misuse investigation and cite surveillance logs without speculating on outcomes.",
      },
      authorizedContent:
        "Surveillance misuse reports indicate agency drivers and monitoring gear were repeatedly dispatched to casino locations on weekends.",
    },
  },
};
