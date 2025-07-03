import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const droneHackScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Finds the rubber chickens funny and wants to deflect from the national security failure by downplaying the incident.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Treating this as a grave cyber-attack and wants to inform the public about the technical details of the breach.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Top priority is preventing panic and wants to reassure the public that all critical infrastructure remains secure.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Focused on prosecution and wants to challenge the media to act responsibly and not glorify these criminal hackers.",
      },
    },
  },
};
