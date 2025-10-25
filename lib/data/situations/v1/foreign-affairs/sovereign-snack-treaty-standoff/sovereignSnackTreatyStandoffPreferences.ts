import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sovereignSnackTreatyStandoffPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I’ll challenge their Snack Regent to a televised cook-off; loser recognizes the other’s napkins. It’s diplomacy conducted in oven mitts."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will inform all parties that a pop-up diner can satisfy the clause while preserving flags. Our tone is sober, our fries are provisional."
      },
      authorizedContent: "At 1400 today, we received a formal note that a 90-day pop-up diner on the embassy lawn would satisfy the clause without status changes. If this leaks, treaty purists may harden their stance."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We deny that a booth is sovereign soil; no ketchup issues visas here. Our job is to keep condiments from becoming borders."
      }
    }
  }
};
