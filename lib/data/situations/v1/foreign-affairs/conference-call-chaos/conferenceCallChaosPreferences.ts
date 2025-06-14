import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const conferenceCallChaosPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Joke about the filter and pivot to accomplishments.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Stress it was a harmless glitch and not sabotage.",
      },
      authorizedContent:
        "The video log shows the filter came from an outdated plug-in during setup. Security found no network breach and recommended software updates.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets by confirming no security breach and noting swift fixes.",
      },
    },
  },
};
