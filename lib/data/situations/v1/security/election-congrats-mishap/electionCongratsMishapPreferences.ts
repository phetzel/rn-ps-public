import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const electionCongratsMishapPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Calm nerves by admitting the social team bungled the posts while stressing no real interference occurred.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Soothe allies by clarifying no endorsement was intended and protocols have been updated.",
      },
      authorizedContent:
        "Draft messages show an auto-scheduler triggered early. Diplomatic cables confirm allies considered it a minor slip and accepted the apology.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Affirm no laws were broken and that the misfire was purely internal error, not election meddling.",
      },
    },
  },
};
