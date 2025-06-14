import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const unSpeechBedtimePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Blame jet lag for the brief snooze and steer focus back to successful summit initiatives.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Minimize the incident and highlight ongoing diplomacy instead of the President's eyelids.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain the President's rigorous travel schedule and assure the public his health is regularly evaluated.",
      },
      authorizedContent:
        "Sleep-study note indicates the President had less than three hours of rest before the speech. Doctors advised a brief medical check afterward.",
    },
  },
};
