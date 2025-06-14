import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const familyResortFederalLandPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Highlight job creation and tourism revenue while downplaying that the resort caters mostly to the First Family.",
  },
  cabinet: {
    [CabinetStaticId.Interior]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Admit the lease was approved quickly but argue it will generate revenue for park maintenance.",
      },
      authorizedContent:
        "Lease documents show a 99-year lease at nominal rent, with an attached clause granting private road access to the President's family.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by stressing that federal leasing rules were followed and finances will be transparent.",
      },
    },
  },
};
