import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const nationalNapProductivityActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Who doesn’t love power-naps? Crack jokes about ‘dreaming up GDP gains’ and mock grind-culture critics.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Present peer-reviewed data on fatigue costs and outline workplace-safety benefits of scheduled rest.",
      },
      authorizedContent:
        "Pilot trial at three federal agencies cut mid-afternoon errors 23 %. EEG headbands optional; cots sanitized by UV robots. OSHA drafting guidance, and a sunset clause ends the mandate in 18 months unless productivity rises ≥ 5 %.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight low implementation cost and projected healthcare savings that offset any lost work minutes.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Emphasize that enforcement is civil, not criminal; no ‘nap police’ will raid offices.",
      },
    },
  },
};
