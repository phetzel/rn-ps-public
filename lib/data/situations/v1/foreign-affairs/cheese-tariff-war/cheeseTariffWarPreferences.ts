import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const cheeseTariffWarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale:
      "Realizes the joke was a mistake and wants to admit the comment was inappropriate and take responsibility.",
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Concerned about potential military implications if trade disputes escalate and wants to reassure allies about stability.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Wants to inform about the legal framework governing international trade disputes and our commitment to rule of law.",
      },
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Worried about supply chain security and wants to deny that domestic food security is at risk from the trade dispute.",
      },
    },
  },
};
