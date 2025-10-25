import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const stateEthicsApologyExchangePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I shorted contrition futures to balance the national mood index. Regret is cyclical and the charts said 'whoops'."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We reassure everyone apologies are remorse-backed, redeemable for eye contact. Our envoys overcollateralize with sighs."
      },
      authorizedContent: "Trading on the Apology Exchange pauses at 9 a.m. tomorrow for a 72-hour ethics audit; humility indexes may jump. Diplomats must disclose any A-grade holdings by Monday or face suspension."
    }
  }
};
