import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const diplomaticAlpacaEthicsProbePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "We won't arbitrate barnyard spirituality in a press scrum. Our doctrine is separation of stable and state."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Folklore is not policy. Our 17-step ungulate protocol bans divination by cud and requires triple human sign-off."
      },
      authorizedContent: "An internal log shows the alpaca was registered as a morale animal on May 3; no waivers cite its nods. The log names junior staff, and releasing it could prompt privacy complaints."
    }
  }
};
