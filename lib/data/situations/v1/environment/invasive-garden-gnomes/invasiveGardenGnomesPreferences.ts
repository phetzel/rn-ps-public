import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const invasiveGardenGnomesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Joke about mischievous garden gnome enthusiasts while promising to clean up the mess quickly.",
  },
  cabinet: {
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Blame pranksters and note park rangers are on cleanup duty, avoid discussing fines.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain ongoing investigations and charges for prank ringleaders.",
      },
      authorizedContent:
        "Early arrest reports reveal suspects planned to livestream gnome drops across 14 preserves.",
    },
  },
};
