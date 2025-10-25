import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sentientTrafficConesAlertPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He rejects 'cone sovereignty' and prefers theatrical dominance. A televised obstacle gauntlet will reassert human right-of-way."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Jittery and precise, they catalog every honk. They want legal cover before unpairing cones from the city’s chatty beacons."
      },
      authorizedContent: "At 04:17, the cones synced through Metro CurbNet beacons. We will disable those radios for 90 minutes; parking meters and bus arrival signs will pause during that window."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "They refuse to grant combat status to lawn décor. Calling cones 'noncombat props' dodges rules and keeps the tanks idling in the garage."
      }
    }
  }
};
