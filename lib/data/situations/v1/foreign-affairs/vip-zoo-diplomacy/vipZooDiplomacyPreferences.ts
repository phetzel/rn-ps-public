import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const vipZooDiplomacyPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Explain the panda photo-op as cultural outreach and note talks were rescheduled.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide itinerary details showing meetings shifted but still accomplished.",
      },
      authorizedContent:
        "Official itinerary shows meetings were pushed to the afternoon, while the panda visit was a pre-arranged cultural exchange. Costs were covered by the host nation.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Focus on travel benefits and downplay any added cost from the zoo detour.",
      },
    },
  },
};
