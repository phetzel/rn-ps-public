import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const luxuryPetSpaPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Insist the spa was a minor wellness project and pivot to broader healthcare achievements.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Downplay the spa as an overzealous wellness pilot and promise a review of pet perks.",
      },
      authorizedContent:
        "Vet wellness memo shows the initiative aimed to study stress relief in service animals but expenses ballooned.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Explain reimbursements and emphasize strict spending reviews going forward.",
      },
    },
  },
};
