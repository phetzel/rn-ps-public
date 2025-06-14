import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const excessiveTreePlantingInitiativePreferences: SituationPreferences =
  {
    president: {
      answerType: AnswerType.Deflect,
      rationale:
        "Praise urban shade benefits while avoiding blame for pests or sneezes. Crack a joke about holding breath till budget.",
    },
    cabinet: {
      [CabinetStaticId.Interior]: {
        preference: {
          answerType: AnswerType.Inform,
          rationale:
            "Provide tree maintenance facts and relocation plans while stressing community stewardship over federal mandates.",
        },
        authorizedContent:
          "Internal memo notes overcrowded saplings attracting rodents. Relocation crews prepared but details kept quiet to avoid public uproar.",
      },
      [CabinetStaticId.Treasury]: {
        preference: {
          answerType: AnswerType.Deflect,
          rationale:
            "Downplay unexpected costs and blame local budgeting for upkeep. Emphasize tax credits over federal bailouts.",
        },
      },
    },
  };
