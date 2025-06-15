import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const beePopulationPanicPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Make light of missing bees, promise a blue-ribbon task force, and sidestep blaming regulators.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain health risks to food supply, outline monitoring, and stress coordination with farmers for recovery.",
      },
      authorizedContent:
        "Hive-monitor data shows pesticides may be a factor, but backup colonies are ready and drone pollination can cover 30% of orchards this season.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Coordinate disaster teams and reassure the public that food supply remains secure despite hive shortages.",
      },
    },
  },
};
