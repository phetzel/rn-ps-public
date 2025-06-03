import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cabinetParkingSpotFeudPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "It’s just a parking spot! Crack jokes, promise a friendly resolution, and insist real work continues.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Reaffirm workplace-conduct rules, outline mediation process, and stress transparency if policies were broken.",
      },
      authorizedContent:
        "Security footage shows note-swapping began after Homeland parked in Treasury’s marked slot. Draft agreement assigns the spot to disability access, ending dispute.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Downplay fiscal impact of the media circus; note staff remain focused on core economic duties.",
      },
    },
  },
};
