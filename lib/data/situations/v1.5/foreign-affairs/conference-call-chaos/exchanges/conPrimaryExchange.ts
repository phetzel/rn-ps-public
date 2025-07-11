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
    rootQuestionId: "q_chaos_markets",
    questions: {
      q_chaos_markets: {
        id: "q_chaos_markets",
        text: "Global markets need stability, but our leadership looks like a joke. How can Treasury assure investors the economy is in competent hands?",
        depth: 0,
        answers: [
          {
            id: "a_markets_deny",
            type: AnswerType.Deny,
            text: "This has zero bearing on our economic policy. Our fiscal strategy is robust, and investor confidence should be based on our strong results.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.SlightNegative, // -4
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_chaos_pirate_meme: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_markets_admit",
            type: AnswerType.Admit,
            text: "It was an embarrassing and unprofessional moment, without a doubt. We've already implemented new protocols to prevent any recurrence.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.Neutral, // 0
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_chaos_pirate_meme: OutcomeModifierWeight.ModerateNegative, // -6
            },
            followUpId: "q_chaos_protocols",
          },
        ],
      },
      q_chaos_protocols: {
        id: "q_chaos_protocols",
        text: "What 'new protocols'? Did you have to create a rule that says 'the President shouldn't look like a cartoon character'?",
        depth: 1,
        answers: [
          {
            id: "a_protocols_inform",
            type: AnswerType.Inform,
            text: "The new protocol involves a multi-point technical check on all systems before any high-level virtual meeting goes live. It's a simple fix.",
            impacts: {},
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightPositive, // +4 -> +10 total
              outcome_chaos_pirate_meme: OutcomeModifierWeight.Neutral, // 0 -> -6 total
            },
          },
          {
            id: "a_protocols_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to detail our internal IT procedures. The issue was identified, and it has been corrected. Let's move on to something that matters.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightNegative, // -4 -> +2 total
              outcome_chaos_pirate_meme: OutcomeModifierWeight.Neutral, // 0 -> -6 total
            },
          },
        ],
      },
    },
  },
};
