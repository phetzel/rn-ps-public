import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_cheese_war_defense",
      text: "The President defended cheese pride, but allies question our judgment. Is this administration prioritizing jokes over defense partnerships?",
      answers: [
        {
          id: "a_defense_reassure",
          type: AnswerType.Reassure,
          text: "Our military partnerships remain rock solid. Defense cooperation operates on a different level than trade disputes, and our allies understand that.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.StrongPositive,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.StrongNegative,
            outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_cheese_war_legal",
        },
        {
          id: "a_defense_challenge",
          type: AnswerType.Challenge,
          text: "The President stood up for American products and values. That's exactly the kind of leadership our allies want to see from America.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightNegative,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.SlightNegative,
            outcome_cheese_public_rallies: OutcomeModifierWeight.StrongPositive,
          },
          followUpId: "q_cheese_war_nationalism",
        },
        {
          id: "a_defense_admit",
          type: AnswerType.Admit,
          text: "The President realizes that comment could have been better phrased. We're focused on resolving this diplomatically and strengthening our partnerships.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased:
              OutcomeModifierWeight.ModeratePositive,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.ModerateNegative,
            outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
          },
        },
        {
          id: "a_defense_inform",
          type: AnswerType.Inform,
          text: "The Justice Department confirms all our trade actions comply with international law and WTO rules. We follow proper legal procedures.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightPositive,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.SlightNegative,
            outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
          },
        },
        
      ],
    },
    secondaryQuestions: [
      {
        id: "q_cheese_war_legal",
        text: "But aren't you concerned that this sets a precedent for trade disputes being settled through personal comments rather than proper legal channels?",
        answers: [
          {
            id: "a_legal_inform",
            type: AnswerType.Inform,
            text: "All trade actions follow proper legal procedures. The Justice Department ensures compliance with international law and our constitutional obligations.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_cheese_economic_impact",
          },
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on the underlying trade imbalance that the President highlighted, not the specific way it came to light.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_legal_reassure",
            type: AnswerType.Reassure,
            text: "The President's comments reflect legitimate concerns about trade imbalances. We're using established diplomatic channels to address these issues properly.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_legal_neutral",
            type: AnswerType.Inform,
            text: "We will document the legal chain of decisions and provide public-facing summaries to reinforce that policy moves through proper channels.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_cheese_war_nationalism",
        text: "Is this administration using trade nationalism to distract from domestic policy failures? What's the real agenda here?",
        answers: [
          {
            id: "a_nationalism_challenge",
            type: AnswerType.Challenge,
            text: "That's a cynical take. The President is standing up for American workers and producers who've been hurt by unfair trade practices for too long.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightPositive,
            },
            followUpId: "q_cheese_war_timing",
          },
          {
            id: "a_nationalism_deflect",
            type: AnswerType.Deflect,
            text: "The President is focused on results for American families. Trade policy and domestic policy work hand in hand to create opportunities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_nationalism_deny",
            type: AnswerType.Deny,
            text: "That's completely false. This situation arose from a diplomatic miscommunication, not from any coordinated political strategy.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_nationalism_neutral",
            type: AnswerType.Inform,
            text: "We will publish a clear set of foreign policy priorities and timelines to show how this fits alongside other workstreams.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_cheese_economic_impact",
        text: "Legal compliance aside, what about the economic impact? Are American consumers paying higher prices for this diplomatic cheese dispute?",
        answers: [
          {
            id: "a_economic_deflect",
            type: AnswerType.Deflect,
            text: "We're focused on long-term trade balance, not short-term price fluctuations. Strong trade relationships require addressing underlying imbalances.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_economic_reassure",
            type: AnswerType.Reassure,
            text: "Treasury analysis shows minimal consumer impact. Most Americans won't see meaningful price changes, and domestic producers benefit from fairer competition.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_economic_inform",
            type: AnswerType.Inform,
            text: "The Commerce Department is monitoring market impacts closely. We have contingency plans if prices rise beyond acceptable levels.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_economic_neutral",
            type: AnswerType.Inform,
            text: "Commerce will monitor consumer prices and publish mitigation options, including targeted relief if thresholds are exceeded.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_cheese_war_timing",
        text: "Why is this happening now? Are there other foreign policy priorities that should take precedence over a cheese dispute?",
        answers: [
          {
            id: "a_timing_deflect",
            type: AnswerType.Deflect,
            text: "The President addresses issues as they arise. We don't let the timing of events dictate our response to unfair trade practices.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_timing_reassure",
            type: AnswerType.Reassure,
            text: "Our foreign policy team manages multiple priorities simultaneously. This doesn't distract from other important international relationships.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_timing_inform",
            type: AnswerType.Inform,
            text: "The State Department coordinates all our diplomatic efforts. Trade disputes are resolved through established channels without affecting other priorities.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_timing_neutral",
            type: AnswerType.Inform,
            text: "We will release a public schedule of diplomatic engagements to clarify sequencing and prevent signal confusion.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
