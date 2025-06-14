import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const robotDelegateDebatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Portray the AI as progressive diplomacy and insist humans still steer the talks.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Emphasize the robot is just a diplomatic tool and assure allies human leaders maintain authority.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Stress the technical safeguards and benefits the AI provides, including real-time intel and translation.",
      },
      authorizedContent:
        "Classified briefing notes the AI uses secure channels to analyze delegate behavior in real time, flagging hostile moves and translating over twenty dialects. The robot's memory is wiped after each session to prevent leaks.",
    },
  },
};
