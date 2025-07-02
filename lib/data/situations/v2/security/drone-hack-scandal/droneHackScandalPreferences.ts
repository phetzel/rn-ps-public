import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const droneHackScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President finds the rubber chickens funny and wants to deflect from the major national security failure by downplaying the incident's severity.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "The Defense Secretary is treating this as a grave cyber-attack and wants to inform the public about the technical details of the breach.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Homeland Security's top priority is preventing panic and wants to reassure the public that all critical infrastructure remains secure.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "The Attorney General is focused on prosecution and wants to challenge the media to act responsibly and not glorify these criminal hackers.",
      },
    },
  },
};
