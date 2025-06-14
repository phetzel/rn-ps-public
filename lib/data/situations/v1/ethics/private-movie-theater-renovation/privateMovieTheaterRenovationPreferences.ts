import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const privateMovieTheaterRenovationPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Reassure that the renovation modernizes an aging facility and claim educational screenings for students.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Admit funds were reallocated but note it was within discretionary authority and will be reimbursed.",
      },
      authorizedContent:
        "Budget note shows $1.2M shifted from a digital literacy grant to upgrade seating and add a private snack bar in the White House theater.",
    },
    [CabinetStaticId.Education]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by emphasizing commitments to classroom technology and downplay the theater as minor maintenance.",
      },
    },
  },
};
