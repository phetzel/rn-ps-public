import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const summitNameSlipPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Minor slip after a long flight—please focus on the summit’s big wins, not one mis-pronounced name.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Smooth things over fast: reaffirm deep respect for Reallyfarawaystan and issue a courteous apology.",
      },
      authorizedContent:
        "Off-camera, both leaders swapped vintage atlases and laughed about language quirks. We’re proposing a joint cartography exhibit to highlight shared history and good will.",
    },
  },
};
