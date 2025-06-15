import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const icebergRelocationProjectPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Mock critics as climate killjoys while praising the icy ingenuity. Avoid details on costs.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Defend the project as innovative diplomacy, argue neighbors signed off, and downplay meltdown risks.",
      },
      authorizedContent:
        "Classified naval tow study projects 60% mass loss during transit but suggests quick-release ballast could preserve volume.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Break down projected costs and claim international partners will reimburse part once results roll in.",
      },
    },
  },
};
