import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cabinetParkingWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the feud and keep focus on bigger issues while dismissing it as silly office politics.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect questions by calling it a misunderstanding over parking assignments.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by suggesting minor pranks got out of hand and that security is reviewing footage.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Inform reporters that security footage is being reviewed and potential charges for property damage are on the table.",
      },
      authorizedContent:
        "Security footage shows staffers swapping license plates and deflating tires late at night. Justice is considering misdemeanor charges.",
    },
  },
};
