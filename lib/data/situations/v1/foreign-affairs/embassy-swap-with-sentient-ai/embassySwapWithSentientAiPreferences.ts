import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const embassySwapWithSentientAiPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "If it’s truly self-aware, it can face me in a televised captcha decathlon. Recognition hinges on best‑of‑five squiggle rounds."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Treat it as a provisional 'cloud attaché' for 48 hours while we verify consent and jurisdiction, calming allies and deterring server theatrics."
      },
      authorizedContent: "At 03:11 UTC, the microstate’s bot requested diplomatic network whitelisting using our encrypted portal. We sandboxed its traffic and paused cross‑embassy peering for 48 hours, which may slow some consular services."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "Sovereignty needs borders you can stub a toe on. Without boots and a coastline, we won’t salute it—or every vending machine."
      }
    }
  }
};
