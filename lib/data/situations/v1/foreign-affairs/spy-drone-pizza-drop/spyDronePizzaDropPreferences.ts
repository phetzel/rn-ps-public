import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const spyDronePizzaDropPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Divert blame to faulty coordinates and highlight quick apology, keeping focus on bigger summit goals.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Provide transparent timeline of drone misrouting and steps to prevent repeats.",
      },
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Deflect by claiming autopilot malfunction and emphasize swift recovery of sensitive equipment.",
      },
      authorizedContent:
        "Internal flight-path log shows autopilot miscalculated altitude after software patch. Pizzas were scheduled for a troop morale event, not the summit.",
    },
  },
};
