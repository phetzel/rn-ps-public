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
    rootQuestionId: "q_parking_feud_trivial",
    questions: {
      q_parking_feud_trivial: {
        id: "q_parking_feud_trivial",
        text: "With all the problems facing the country, why is this administration wasting time and energy on something as trivial as a parking spot?",
        depth: 0,
        answers: [
          {
            id: "a_trivial_admit",
            type: AnswerType.Admit,
            text: "It is trivial, and frankly, it's embarrassing. The Attorney General is mediating to resolve this petty issue so we can focus on what matters.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.StrongPositive, // +8
              outcome_parking_ridicule: OutcomeModifierWeight.SlightNegative, // -4
              outcome_parking_escalates: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_trivial_challenge",
            type: AnswerType.Challenge,
            text: "This is a DC bubble story. The American people don't care about parking assignments; they care about results, which this cabinet is delivering.",
            impacts: {},
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightNegative, // -4
              outcome_parking_ridicule: OutcomeModifierWeight.SlightPositive, // +4
              outcome_parking_escalates: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_parking_feud_symbolic",
          },
        ],
      },
      q_parking_feud_symbolic: {
        id: "q_parking_feud_symbolic",
        text: "But isn't it symbolic of a dysfunctional team? If they can't agree on a parking spot, how can they agree on complex policy?",
        depth: 1,
        answers: [
          {
            id: "a_symbolic_reassure",
            type: AnswerType.Reassure,
            text: "On the contrary, they debate small things with passion because they are deeply committed. On major policy, they are completely aligned.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_parking_ridicule: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_parking_escalates: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_symbolic_deny",
            type: AnswerType.Deny,
            text: "That's a false equivalency. This is an administrative matter, not a policy one. It has no bearing on their ability to work together.",
            impacts: {},
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_parking_ridicule: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_parking_escalates: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
