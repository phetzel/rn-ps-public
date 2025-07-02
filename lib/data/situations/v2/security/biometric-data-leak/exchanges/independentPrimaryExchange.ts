import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestionId: "q_leak_what_now",
    questions: {
      q_leak_what_now: {
        id: "q_leak_what_now",
        text: "The data is out there. What should the millions of affected citizens do right now to protect themselves from identity theft?",
        depth: 0,
        answers: [
          {
            id: "a_what_now_reassure",
            type: AnswerType.Reassure,
            text: "We are providing free credit monitoring and identity theft protection services for all citizens. We will stand by everyone affected.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.StrongPositive, // +8
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightNegative, // -4
              outcome_leak_congress_stalls: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_what_now_inform",
            type: AnswerType.Inform,
            text: "Homeland Security has set up a website with step-by-step instructions for citizens to freeze their credit and report suspicious activity.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightNegative, // -4
              outcome_leak_congress_stalls: OutcomeModifierWeight.SlightNegative, // -4 -> -2 total
            },
            followUpId: "q_leak_cost",
          },
        ],
      },
      q_leak_cost: {
        id: "q_leak_cost",
        text: "Who is paying for this massive cleanup and credit monitoring effort? Is this coming from taxpayers or the negligent contractor?",
        depth: 1,
        answers: [
          {
            id: "a_cost_inform",
            type: AnswerType.Inform,
            text: "The DOJ is exploring every legal avenue to ensure the responsible contractor bears the full financial burden of this cleanup.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.SlightPositive, // +4 -> +10 total
              outcome_leak_fraud_wave: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_leak_congress_stalls: OutcomeModifierWeight.SlightNegative, // -4 -> -6 total
            },
          },
          {
            id: "a_cost_admit",
            type: AnswerType.Admit,
            text: "Initially, taxpayer funds will be used to ensure an immediate response. We will pursue reimbursement from at-fault parties later.",
            impacts: {},
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.Neutral, // 0 -> +6 total
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_leak_congress_stalls: OutcomeModifierWeight.SlightNegative, // -4 -> -6 total
            },
          },
        ],
      },
    },
  },
};
