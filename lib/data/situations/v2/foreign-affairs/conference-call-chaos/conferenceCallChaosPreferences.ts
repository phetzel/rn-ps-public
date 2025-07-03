import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/types";

export const conferenceCallChaosPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Embarrassed but finds it funny and wants to deflect by joking about it, maybe even leaning into the pirate theme.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Wants to downplay the incident and reassure allies that despite the glitch, talks remained serious.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Worried about market perception and wants to deny that this silly incident has any bearing on economic policy.",
      },
    },
  },
};
