import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestionId: "q_pizza_drone_incompetence",
    questions: {
      q_pizza_drone_incompetence: {
        id: "q_pizza_drone_incompetence",
        text: "Our multi-billion dollar spy drone can't tell the difference between a military target and a pizza party. Isn't this a massive failure of military tech?",
        depth: 0,
        answers: [
          {
            id: "a_incompetence_admit",
            type: AnswerType.Admit,
            text: "There was a significant navigational malfunction with this unit. The Department of Defense is grounding the fleet pending a full investigation.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_pizza_escalation: OutcomeModifierWeight.SlightNegative, // -4
              outcome_pizza_meme: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_pizza_drone_fleet",
          },
          {
            id: "a_incompetence_deflect",
            type: AnswerType.Deflect,
            text: "Look, nobody was harmed, and let's be honest, it's a pretty funny story. Sometimes even advanced tech has a quirky glitch.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_pizza_escalation: OutcomeModifierWeight.SlightPositive, // +4
              outcome_pizza_meme: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      q_pizza_drone_fleet: {
        id: "q_pizza_drone_fleet",
        text: "You're grounding the whole fleet? That sounds like you believe this is a systemic problem, not a one-off glitch. What's the real issue here?",
        depth: 1,
        answers: [
          {
            id: "a_fleet_reassure",
            type: AnswerType.Reassure,
            text: "Grounding the fleet is a standard precaution until we can be 100% certain of the cause. We expect them to be operational again shortly.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.SlightPositive, // +4 -> +10 total
              outcome_pizza_escalation: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_pizza_meme: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
          {
            id: "a_fleet_inform",
            type: AnswerType.Inform,
            text: "We can't speculate on the cause. The investigation will determine if it was a software bug, hardware failure, or external interference.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.Neutral, // 0 -> +6 total
              outcome_pizza_escalation: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_pizza_meme: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
        ],
      },
    },
  },
};
