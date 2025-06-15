import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const urbanWildTurkeyInvasionPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Joke about big birds enjoying city life, promise quick fixes, and avoid talking about habitat policy failures.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay danger, frame birds as nuisance not threat, and avoid promising heavy-handed security measures.",
      },
    },
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain relocation efforts, discuss causes like development, and outline plans to restore habitats.",
      },
      authorizedContent:
        "Draft relocation memo details trapping schedule, temporary sanctuaries outside city limits, and funding from wildlife grants.",
    },
  },
};
