import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const droneHackScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Advanced pizza-delivery prototypes! Classified R&D test—move along. Just making sure everyone gets hot pizza.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Investigating a limited cyber intrusion. Affected drones are grounded and patched. Public safety comes first.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Only a few unarmed surveillance drones glitched. Fix underway; national security is not compromised.",
      },
      authorizedContent:
        "The hack used a legacy module exploited by ‘Digital Dominos’. Patch pushed; no classified data touched.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Errant pizzas cost little versus data on rapid food-delivery logistics—think of it as tiny R&D spend.",
      },
    },
  },
};
