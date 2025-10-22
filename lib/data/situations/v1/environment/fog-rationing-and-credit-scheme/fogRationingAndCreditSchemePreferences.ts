import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const fogRationingAndCreditSchemePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "I deny that fog can be rationed; it is a freelance mood of water. If it invoices us, I'll pay in coupons, not policy."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Smugglers flourish in panic; crisp info spooks them. We must sound like we barcode clouds and ring a midnight fog curfew bell."
      },
      authorizedContent: "Tonight's fog auction is a staged platform test and will pause at 11:45 p.m. for 36 hours. No fines will be issued during the pause. Saying this could chill bids and tip off fog brokers."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Public health hinges on calm breathing. We'll soothe youth and rural elders with charts, towels, and federally issued fog-lullabies."
      }
    }
  }
};
