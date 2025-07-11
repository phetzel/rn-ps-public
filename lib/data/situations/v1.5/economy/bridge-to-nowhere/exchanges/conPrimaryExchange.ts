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
    rootQuestionId: "q_bridge_cost",
    questions: {
      q_bridge_cost: {
        id: "q_bridge_cost",
        text: "This $2B 'Bridge to Nowhere' is being called the most egregious example of pork spending in a decade. How can you defend wasting taxpayer money?",
        depth: 0,
        answers: [
          {
            id: "a_bridge_cost_deflect",
            type: AnswerType.Deflect,
            text: "This is just one part of a national infrastructure initiative to connect communities. Focusing on one project misses the forest for the trees.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_tourist_trap: OutcomeModifierWeight.Neutral, // 0
              outcome_bridge_limbo: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_bridge_cost_challenge",
            type: AnswerType.Challenge,
            text: "The premise that this is 'waste' is premature. The DOJ will ensure all contracts are awarded fairly and prosecute any hint of fraud.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_bridge_tourist_trap:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_bridge_fraud_details",
          },
          {
            id: "a_bridge_cost_admit",
            type: AnswerType.Admit,
            text: "Frankly, the optics on this specific project are challenging and the initial cost estimates are concerning. We are re-evaluating the scope.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.MajorPositive, // +12
              outcome_bridge_tourist_trap: OutcomeModifierWeight.MajorNegative, // -12
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_bridge_fraud_details: {
        id: "q_bridge_fraud_details",
        text: "You mention fraud. Does the DOJ have an active investigation, or are you just using that as a threat to deflect from the enormous cost?",
        depth: 1,
        answers: [
          {
            id: "a_bridge_fraud_inform",
            type: AnswerType.Inform,
            text: "The Department of Justice does not comment on active or potential investigations, but we have a zero-tolerance policy for misusing funds.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_bridge_tourist_trap: OutcomeModifierWeight.Neutral, // 0
              outcome_bridge_limbo: OutcomeModifierWeight.ModerateNegative, // -6
            },
          },
          {
            id: "a_bridge_fraud_deny",
            type: AnswerType.Deny,
            text: "There is no investigation. My point is that our robust oversight systems prevent fraud before it happens, ensuring this project is sound.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                },
              },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.StrongNegative, // -8
              outcome_bridge_tourist_trap: OutcomeModifierWeight.StrongPositive, // +8
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
