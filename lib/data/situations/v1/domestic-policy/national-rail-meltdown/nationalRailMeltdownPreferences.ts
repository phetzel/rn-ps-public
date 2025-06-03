import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const nationalRailMeltdownPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Maps and grit built this nation! Cast the mess as a chance for innovation; promise a ‘Rail Renaissance’ soon.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm commuters: safety teams on tracks, buses deployed, audit underway. Stress public-safety priority.",
      },
      authorizedContent:
        "Safety audit shows 42 % of locomotives lack modern GPS; paper maps caused routing loops. DHS urges $1.6 B emergency upgrade fund.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain budget re-allocation for emergency fixes and highlight cost of continued outages to economy.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Reassure freight-logistics stability for military supply; detail alternate routing via defense rail corridors.",
      },
    },
  },
};
