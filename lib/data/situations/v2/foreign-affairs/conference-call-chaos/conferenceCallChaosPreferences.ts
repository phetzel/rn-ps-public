import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const conferenceCallChaosPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "The President is embarrassed but also finds it funny and wants to deflect by joking about it, maybe even leaning into the pirate theme.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "The Secretary of State wants to downplay the incident and reassure allies that despite the technical glitch, the substance of the talks was serious.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "The Treasury Secretary is worried about market perception and wants to firmly deny that this silly incident has any bearing on economic policy.",
      },
    },
  },
};
