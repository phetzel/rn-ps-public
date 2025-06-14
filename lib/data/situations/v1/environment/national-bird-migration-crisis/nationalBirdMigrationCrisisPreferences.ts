import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const nationalBirdMigrationCrisisPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Highlight bird experts working overtime while avoiding blame for route confusion.",
  },
  cabinet: {
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain shifting weather and light pollution factors, share relocation plans, and note coordination with airports.",
      },
      authorizedContent:
        "GPS tag data shows detours near bright stadiums and unexpected ocean currents. New flight corridors under review.",
    },
    [CabinetStaticId.Agriculture]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Reassure farmers by citing pest-control programs and subsidies while promising improved migration forecasts.",
      },
    },
  },
};
