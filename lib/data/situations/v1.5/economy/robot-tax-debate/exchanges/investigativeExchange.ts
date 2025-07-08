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
    rootQuestionId: "q_robot_tax_exodus",
    questions: {
      q_robot_tax_exodus: {
        id: "q_robot_tax_exodus",
        text: "Our sources say major tech firms are drafting plans to move operations overseas if this tax passes. Aren't you risking an economic exodus?",
        depth: 0,
        answers: [
          {
            id: "a_exodus_deflect",
            type: AnswerType.Deflect,
            text: "This nation remains the best place in the world to innovate and do business. We're not concerned with hypothetical threats or rumors.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_windfall: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_robot_tax_rumors",
          },
          {
            id: "a_exodus_inform",
            type: AnswerType.Inform,
            text: "Treasury models account for a range of corporate responses. The revenue projections are solid even with minor adjustments in investment.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.StrongNegative, // -8
              outcome_tax_windfall: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_exodus_deny",
            type: AnswerType.Deny,
            text: "That is patently false. We are in constant dialogue with industry leaders, and they have expressed no such intentions to us directly.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.StrongNegative, // -8
              outcome_firms_flee: OutcomeModifierWeight.StrongPositive, // +8
              outcome_tax_windfall: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_robot_tax_rumors: {
        id: "q_robot_tax_rumors",
        text: "These aren't just rumors. We have internal memos. Is the State Department actively engaged in trying to prevent capital flight, or not?",
        depth: 1,
        answers: [
          {
            id: "a_rumors_reassure",
            type: AnswerType.Reassure,
            text: "Of course. Our diplomatic and economic teams are constantly working to ensure our business environment remains best-in-class.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_windfall: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_rumors_challenge",
            type: AnswerType.Challenge,
            text: "I won't validate anonymously sourced, out-of-context documents designed to undermine a policy that will help millions of workers.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.Neutral, // 0
              outcome_firms_flee: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_tax_windfall: OutcomeModifierWeight.ModerateNegative, // -6
            },
          },
        ],
      },
    },
  },
};
