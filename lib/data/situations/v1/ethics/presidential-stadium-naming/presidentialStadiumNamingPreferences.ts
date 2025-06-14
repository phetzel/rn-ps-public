import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const presidentialStadiumNamingPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Emphasize the stadium as an honor others proposed; pivot to economic investments.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Deflect by noting city councils handle naming rights and the department only advised on tourism grants.",
      },
      authorizedContent:
        "Emails show advisers hinted future grants might depend on renaming, but no direct order was issued. Treasury's records note the funding path.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Inform reporters about grant paperwork and stress there was no ultimatum attached.",
      },
    },
  },
};
