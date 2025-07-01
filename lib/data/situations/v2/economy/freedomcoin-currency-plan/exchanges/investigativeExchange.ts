import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestionId: "q_freedom_coin_destabilize",
    questions: {
      q_freedom_coin_destabilize: {
        id: "q_freedom_coin_destabilize",
        text: "Every credible economist says this will destabilize the global economy. Is the administration actively trying to trigger a worldwide recession?",
        depth: 0,
        answers: [
          {
            id: "a_destabilize_deny",
            type: AnswerType.Deny,
            text: "That's a ludicrous accusation. We are trying to build a more resilient and modern financial system, not tear down the existing one.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.SlightPositive, // +4
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_freedom_coin_experts",
          },
          {
            id: "a_destabilize_reassure",
            type: AnswerType.Reassure,
            text: "The Treasury is proceeding with extreme caution. This is a long-term exploratory project, not an overnight switch that would shock the system.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_freedom_coin_experts: {
        id: "q_freedom_coin_experts",
        text: "You say that, but you're ignoring a consensus of experts. Which economists are actually advising you that this is a good idea?",
        depth: 1,
        answers: [
          {
            id: "a_experts_challenge",
            type: AnswerType.Challenge,
            text: "The so-called 'experts' have been wrong before. We're listening to new voices in technology and decentralized finance who see the future.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.SlightPositive, // +4
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_experts_deflect",
            type: AnswerType.Deflect,
            text: "This isn't just an economic decision; it's a technological one. We're synthesizing advice from leaders across multiple innovative fields.",
            impacts: {},
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.Neutral, // 0
              outcome_freedom_coin_shelved: OutcomeModifierWeight.Neutral, // 0
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
