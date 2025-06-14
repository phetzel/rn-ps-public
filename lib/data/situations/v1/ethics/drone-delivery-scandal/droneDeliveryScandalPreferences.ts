import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const droneDeliveryScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "Deny misuse, claiming drones test logistics; emphasize fairness.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Defend drone use as security training while questioning critics' motives.",
      },
      authorizedContent:
        "Flight manifests reveal routine weekend deliveries from the base to the presidential residence, logged as training flights. Homeland claims it improves drone routing.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "Downplay costs and highlight the program's tiny budget impact.",
      },
    },
  },
};
