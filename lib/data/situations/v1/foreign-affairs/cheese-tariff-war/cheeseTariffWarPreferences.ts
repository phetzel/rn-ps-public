import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cheeseTariffWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the cheese remark as humor and emphasize ongoing talks to ease tariffs.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets by promising swift tariff negotiations and minimal impact.",
      },
      authorizedContent:
        "Tariff impact sheet shows minimal short-term damage but warns dairy farmers could suffer if tit-for-tat lasts beyond three months.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Shift blame to Dairystan's overreaction and note our long-standing friendship.",
      },
    },
  },
};
