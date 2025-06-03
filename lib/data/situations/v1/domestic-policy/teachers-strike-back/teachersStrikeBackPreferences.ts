import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const teachersStrikeBackPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Karaoke boosts creativity! Frame strike as over-reaction and joke we hit the wrong note, not the wrong policy.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight vocal-health risks and class disruption. Recommend pausing rule while studying wellbeing impacts.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets: strike costs are contained; contingency funds cover substitute staff if needed.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Acknowledge negotiation duty and confirm no retaliation against lawful collective action.",
      },
      authorizedContent:
        "Draft settlement offers 1) karaoke as voluntary Friday option, 2) federal grant for music programs, 3) strike suspension in exchange for rule rewrite. Mediator reports 70 % teacher support.",
    },
  },
};
