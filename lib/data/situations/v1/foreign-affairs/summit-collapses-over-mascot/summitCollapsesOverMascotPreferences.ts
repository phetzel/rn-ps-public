import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const summitCollapsesOverMascotPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge both micro-states to a beak-to-beak debate moderated by a mime. Only the bravest mascot shall unify our picnic."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Steady protocol and soft apologies will cool tempers. Foam birds need quiet handling, or glitter reprisals and spatula sanctions follow."
      },
      authorizedContent: "At 14:00, both micro-states accepted a 48-hour pause on mascot custody if we host the foam chicken in neutral storage. If this leaks, they will likely quit talks and blame us."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We must not blink at inflatable poultry. Deterrence demands squawk parity and plastic-beak superiority drills, or every mascot will test us."
      }
    }
  }
};
