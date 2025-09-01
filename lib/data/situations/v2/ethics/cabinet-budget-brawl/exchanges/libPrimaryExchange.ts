import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_budget_accountability",
      text: "Isn't Treasury right to call out Pentagon waste? Why shouldn't taxpayers know how their defense dollars are being spent?",
      answers: [
        {
          id: "a_accountability_reassure",
          type: AnswerType.Reassure,
          text: "Both departments are committed to fiscal responsibility. These discussions help us ensure every taxpayer dollar is used effectively for national security.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
            outcome_private_resolution: OutcomeModifierWeight.Neutral,
          },
        },
        {
          id: "a_accountability_challenge",
          type: AnswerType.Challenge,
          text: "The Pentagon has been too comfortable with blank check budgets. Treasury is doing its job by demanding accountability for taxpayer money.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.ModeratePositive,
            outcome_messy_pr_disaster: OutcomeModifierWeight.ModerateNegative,
            outcome_private_resolution: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_national_security",
        },
        {
          id: "a_accountability_deflect",
          type: AnswerType.Deflect,
          text: "Defense spending isn't the issue here - it's about smart procurement and eliminating waste. The Pentagon is focused on protecting America, not defending contractors.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
            outcome_private_resolution: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_transparency_support",
        },
        {
          id: "a_accountability_inform",
          type: AnswerType.Inform,
          text: "Treasury has identified several areas where defense spending could be more efficient without compromising security. We're reviewing these recommendations carefully.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
            outcome_private_resolution: OutcomeModifierWeight.Neutral,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_national_security",
        text: "But doesn't this public fighting undermine confidence in our defense capabilities at a time when security threats are rising?",
        answers: [
          {
            id: "a_security_deflect",
            type: AnswerType.Deflect,
            text: "Real security comes from smart spending, not just big spending. Our adversaries should worry about our efficiency, not our budget debates.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_security_inform",
            type: AnswerType.Inform,
            text: "Our defense capabilities remain uncompromised. The Pentagon's core mission is funded - we're reviewing support contracts and administrative overhead.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_security_challenge",
            type: AnswerType.Challenge,
            text: "Security threats are exactly why we need efficient spending. Every dollar wasted on Pentagon bureaucracy is a dollar not spent on actual defense.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_budget_reform",
          },
          {
            id: "a_security_neutral",
            type: AnswerType.Inform,
            text: "We'll publish readiness benchmarks alongside audit progress so debates don't undermine confidence in capabilities.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_transparency_support",
        text: "Will the President support making defense spending more transparent to Congress and the public?",
        answers: [
          {
            id: "a_transparency_reassure",
            type: AnswerType.Reassure,
            text: "The President supports appropriate oversight while protecting classified information. We're committed to transparency within security constraints.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_congressional_oversight",
          },
          {
            id: "a_transparency_challenge",
            type: AnswerType.Challenge,
            text: "The Pentagon has hidden behind 'national security' excuses for too long. The public deserves to know how their tax dollars are spent.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_transparency_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about transparency - it's about effectiveness. Both departments want the same thing: maximum security for every taxpayer dollar.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_transparency_neutral",
            type: AnswerType.Inform,
            text: "We'll expand unclassified reporting while maintaining strict protections for sensitive programs.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_budget_reform",
        text: "What specific reforms is the administration considering to make defense spending more efficient?",
        answers: [
          {
            id: "a_reform_inform",
            type: AnswerType.Inform,
            text: "We're reviewing multi-year contracts, consolidating overlapping programs, and requiring competitive bidding for major procurement projects.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_reform_deflect",
            type: AnswerType.Deflect,
            text: "We're in the early stages of review. Any changes will be made carefully to ensure they don't compromise our military effectiveness.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_reform_challenge",
            type: AnswerType.Challenge,
            text: "The Pentagon's resistance to basic oversight is exactly the problem. Treasury is fighting for taxpayers against an entrenched bureaucracy.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_reform_neutral",
            type: AnswerType.Inform,
            text: "An interagency task force will publish milestones and savings targets to track reforms transparently.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_congressional_oversight",
        text: "How will you balance congressional oversight with the need to protect sensitive defense information?",
        answers: [
          {
            id: "a_oversight_reassure",
            type: AnswerType.Reassure,
            text: "We work closely with congressional leadership to provide appropriate briefings while protecting classified information. Transparency and security can coexist.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_oversight_inform",
            type: AnswerType.Inform,
            text: "Congress has access to classified budget details through the appropriate committees. The issue is making unclassified spending more transparent.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_oversight_deflect",
            type: AnswerType.Deflect,
            text: "That's a complex balance that every administration faces. Our focus is on getting the best value for taxpayers while maintaining security.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_oversight_neutral",
            type: AnswerType.Inform,
            text: "We'll formalize secure briefings and declassification reviews to increase transparency where possible.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
