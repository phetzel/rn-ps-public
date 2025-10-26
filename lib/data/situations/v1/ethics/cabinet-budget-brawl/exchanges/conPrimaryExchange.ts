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
      id: "q_administration_unity",
      text: "This public cabinet infighting makes the administration look chaotic and weak. How can Americans trust leadership that can't manage its own house?",
      answers: [
        {
          id: "a_unity_admit",
          type: AnswerType.Admit,
          text: "You're right that this should have been handled internally. We're working to ensure cabinet discussions stay within appropriate channels going forward.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
            outcome_private_resolution: OutcomeModifierWeight.StrongPositive,
          },
          followUpId: "q_internal_processes",
        },
        {
          id: "a_unity_deflect",
          type: AnswerType.Deflect,
          text: "Healthy debate between departments is how we get the best policies. The American people benefit when we examine every angle of complex issues.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyNegative },
              [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
            outcome_private_resolution: OutcomeModifierWeight.StrongNegative,
          },
          followUpId: "q_defense_funding",
        },
        {
          id: "a_unity_reassure",
          type: AnswerType.Reassure,
          text: "The President has full confidence in both departments. This discourse shows we take fiscal responsibility seriously while maintaining strong defense capabilities.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
              [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Negative },
            },
          },
          outcomeModifiers: {
            outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
            outcome_private_resolution: OutcomeModifierWeight.StrongPositive,
          },
        },
        {
          id: "a_unity_challenge",
          type: AnswerType.Challenge,
          text: "This isn't chaos - it's accountability. Treasury is right to demand answers about taxpayer dollars, and that takes courage in this town.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
            outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
            outcome_private_resolution: OutcomeModifierWeight.StrongNegative,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_internal_processes",
        text: "What specific changes are you making to prevent this kind of public disagreement from happening again?",
        answers: [
          {
            id: "a_processes_inform",
            type: AnswerType.Inform,
            text: "We're implementing weekly cabinet coordination meetings and requiring all major policy positions to be cleared through the Chief of Staff's office.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
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
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive,
            },
            followUpId: "q_cabinet_autonomy",
          },
          {
            id: "a_processes_deflect",
            type: AnswerType.Deflect,
            text: "We're focused on results, not process. The important thing is that both departments are working toward the same goals of fiscal responsibility and national security.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.Neutral,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_processes_reassure",
            type: AnswerType.Reassure,
            text: "The President values diverse perspectives from his cabinet. What you're seeing is a healthy administration that doesn't suppress different viewpoints.",
            impacts: {
              president: { weight: ExchangeImpactWeight.StronglyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_processes_neutral",
            type: AnswerType.Inform,
            text: "We'll publish a cabinet decision log and clarify escalation paths so disputes are resolved before they spill into public.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_defense_funding",
        text: "Is the administration planning to cut defense spending? Our enemies are watching these budget fights and seeing weakness.",
        answers: [
          {
            id: "a_funding_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. We are not cutting defense spending. We're ensuring every defense dollar is spent wisely to maximize our military strength.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive,
            },
            followUpId: "q_budget_priorities",
          },
          {
            id: "a_funding_challenge",
            type: AnswerType.Challenge,
            text: "That's fear-mongering. Our enemies should fear our efficiency and strategic thinking, not just our ability to spend money without oversight.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.StrongNegative,
            },
          },
          {
            id: "a_funding_inform",
            type: AnswerType.Inform,
            text: "Defense spending will remain at current levels. What Treasury is questioning is whether we're getting maximum value from that investment.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
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
            id: "a_funding_neutral",
            type: AnswerType.Inform,
            text: "We'll release a public scorecard showing defense readiness metrics alongside spending efficiency targets.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_cabinet_autonomy",
        text: "Won't more centralized control stifle the kind of expertise and independence that cabinet members are supposed to bring?",
        answers: [
          {
            id: "a_autonomy_reassure",
            type: AnswerType.Reassure,
            text: "Cabinet members retain full authority in their domains. This is about coordination, not control - ensuring their expertise is shared effectively.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive,
            },
          },
          {
            id: "a_autonomy_challenge",
            type: AnswerType.Challenge,
            text: "Cabinet members serve the President's agenda, not their own. If they can't work within that framework, they can find other jobs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive,
              outcome_private_resolution: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_autonomy_deflect",
            type: AnswerType.Deflect,
            text: "The real issue isn't process - it's results. Americans want a government that works efficiently, and that requires some coordination.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_messy_pr_disaster: OutcomeModifierWeight.StrongPositive,
              outcome_private_resolution: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_autonomy_neutral",
            type: AnswerType.Inform,
            text: "New guidance will codify consultation windows so expertise informs decisions without last-minute surprises.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative,
            },
          },
        ],
      },
      {
        id: "q_budget_priorities",
        text: "If defense spending won't be cut, what programs will suffer? Are you planning to raise taxes or increase the deficit to resolve this?",
        answers: [
          {
            id: "a_priorities_deflect",
            type: AnswerType.Deflect,
            text: "That's getting ahead of ourselves. We're focused on making sure every department operates efficiently before discussing broader budget decisions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            id: "a_priorities_inform",
            type: AnswerType.Inform,
            text: "Treasury is conducting a comprehensive review of all discretionary spending to identify savings without affecting core services or defense capabilities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
            id: "a_priorities_challenge",
            type: AnswerType.Challenge,
            text: "That question assumes we can't find waste to cut. The Pentagon has been operating without real oversight for years - there's plenty of fat to trim.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive,
              outcome_messy_pr_disaster: OutcomeModifierWeight.Neutral,
              outcome_private_resolution: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_priorities_neutral",
            type: AnswerType.Inform,
            text: "Treasury will publish options that balance deficit targets with program delivery metrics before any final choices.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative,
              outcome_private_resolution: OutcomeModifierWeight.SlightPositive,
            },
          },
        ],
      },
    ],
  },
};
