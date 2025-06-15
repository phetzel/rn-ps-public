import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const reallyfarawaystanAlliancePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Argue the micro-nation pact shows strategic genius; a few micro-bases expand reach with minimal expense.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Explain the alliance grants rights to a crucial refueling point and expands drone surveillance, despite nation size.",
      },
      authorizedContent:
        "Classified survey shows the island’s short runway offers mid-ocean refueling potential for rescue missions. Satellite images confirm no other nation has similar access.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize the alliance costs little and may open new trade routes; assure taxpayers it’s a bargain.",
      },
    },
  },
};
