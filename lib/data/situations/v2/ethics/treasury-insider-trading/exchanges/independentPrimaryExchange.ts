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
    rootQuestionId: "q_trading_trust",
    questions: {
      q_trading_trust: {
        id: "q_trading_trust",
        text: "Whether legal or not, how can the public trust that Treasury is making policy for them, and not to enrich themselves and their friends?",
        depth: 0,
        answers: [
          {
            id: "a_trust_reassure",
            type: AnswerType.Reassure,
            text: "The integrity of our department is paramount. We support a full and transparent investigation to clear the air and restore public confidence.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_trading_cleared: OutcomeModifierWeight.SlightPositive, // +4
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_trading_recusal",
          },
          {
            id: "a_trust_challenge",
            type: AnswerType.Challenge,
            text: "You should judge us by our results. The economy is strong, and that's the only metric that matters to hardworking American families.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_trading_cleared: OutcomeModifierWeight.SlightNegative, // -4
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_trading_recusal: {
        id: "q_trading_recusal",
        text: "Will the officials involved in these trades be suspended or at least recuse themselves from related policy matters pending the investigation?",
        depth: 1,
        answers: [
          {
            id: "a_recusal_admit",
            type: AnswerType.Admit,
            text: "Yes, to avoid any appearance of impropriety, the officials in question have voluntarily recused themselves from relevant policy discussions.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_trading_cleared: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_trading_hung_jury: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
          {
            id: "a_recusal_deny",
            type: AnswerType.Deny,
            text: "No. We will not punish people based on unsubstantiated allegations. They are innocent until proven guilty and will continue to do their jobs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.StrongPositive, // +8 -> +4 total
              outcome_trading_cleared: OutcomeModifierWeight.StrongNegative, // -8 -> -4 total
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
