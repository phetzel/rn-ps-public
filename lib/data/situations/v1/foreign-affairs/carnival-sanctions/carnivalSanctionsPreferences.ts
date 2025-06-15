import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const carnivalSanctionsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the clown ban as an overreaction and pivot to ongoing tourism and trade ties with the Isle of Mirth.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise quick diplomacy and highlight our long friendship with the island nation.",
      },
      authorizedContent:
        "Tourism data shows American visitors spend around $25 million every carnival season; losing them would dent Mirth's budget.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Emphasize minimal economic impact and steer focus to broader trade talks under way.",
      },
    },
  },
};
