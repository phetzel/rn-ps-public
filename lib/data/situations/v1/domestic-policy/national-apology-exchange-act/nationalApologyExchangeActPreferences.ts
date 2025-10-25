import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalApologyExchangeActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I’ll challenge the premise by demanding apologies to lampposts. It makes me look fearless while keeping the spotlight deliciously wobbly."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Reassure the public that remorse is safe at household doses. It steadies the ForgiveLine and keeps teen guilt from foaming."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Inform markets how many apologies convert to credits. Predictable contrition reduces volatility and soothes payroll departments."
      },
      authorizedContent: "Preliminary scoring puts year-one cost at $22B if 55% of filers claim the credit. The draft caps at 10 certified apologies per person; early release may trigger deficit pushback."
    }
  }
};
