import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const icebergRealEstatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Frame iceberg purchases as bold innovation that could create jobs and new water supplies despite critics' laughter.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Defend the strategic value while pushing back on foreign scoffing and lawsuits.",
      },
      authorizedContent:
        "Environmental memo notes several icebergs drift through international waters and could be bought cheaply but pose shipping risks.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide cost estimates and stress any purchase would be offset by bottled water sales.",
      },
    },
  },
};
