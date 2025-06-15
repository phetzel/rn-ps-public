import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const plasticStrawBanRevoltPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Crack a joke about slurping outrage, promise reviews of the ban, and avoid admitting any missteps yet.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Suggest health benefits but dodge numbers on plastic waste, keeping focus on future studies.",
      },
      authorizedContent:
        "Lab study shows microplastic ingestion rates dropped 5% in pilot cities, though data is still preliminary.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Promise reasonable enforcement and highlight patience for businesses transitioning away from plastic.",
      },
    },
  },
};
