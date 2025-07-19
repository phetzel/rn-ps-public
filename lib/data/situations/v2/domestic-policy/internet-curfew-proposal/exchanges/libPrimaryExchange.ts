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
      id: "q_curfew_freedom",
      text: "Government-mandated internet bedtime? This assaults personal freedom and free speech. How do you justify it?",
      answers: [
        {
          id: "a_freedom_deflect",
          type: AnswerType.Deflect,
          text: "This isn't about restricting freedom; it's promoting public health. We have overwhelming evidence of sleep deprivation harm.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
            outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_digital_equity",
        },
        {
          id: "a_freedom_reassure",
          type: AnswerType.Reassure,
          text: "We take civil liberties seriously. DOJ ensures any proposal will be narrowly tailored and withstand legal scrutiny.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightPositive, // +4
            outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_vulnerable_populations",
        },
        {
          id: "a_freedom_inform",
          type: AnswerType.Inform,
          text: "HHS studies show sleep deprivation affects 70% of Americans. This targeted intervention addresses a documented crisis.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_voluntary_rollout:
              OutcomeModifierWeight.StrongPositive, // +8
          },
        },
        {
          id: "a_freedom_challenge",
          type: AnswerType.Challenge,
          text: "That's hyperbolic. Homeland Security confirms this is about public health, not surveillance or control.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
            outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_digital_equity",
        text: "Won't this disproportionately impact working families who can only access online services and education at night?",
        answers: [
          {
            id: "a_equity_admit",
            type: AnswerType.Admit,
            text: "That's a valid concern. We're designing exemptions for essential services like healthcare, education, and emergency communications.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_implementation_timeline",
          },
          {
            id: "a_equity_inform",
            type: AnswerType.Inform,
            text: "We're proposing expanded daytime access programs and subsidized internet for low-income families to ensure equitable access.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_equity_challenge",
            type: AnswerType.Challenge,
            text: "The sleep epidemic affects working families most. We're leveling the playing field by ensuring everyone gets healthy rest.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_vulnerable_populations",
        text: "What about shift workers, caregivers, and people with insomnia who legitimately need internet access at night?",
        answers: [
          {
            id: "a_vulnerable_reassure",
            type: AnswerType.Reassure,
            text: "We're developing a comprehensive exemption system for medical needs, essential workers, and caregiving responsibilities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_corporate_accountability",
          },
          {
            id: "a_vulnerable_inform",
            type: AnswerType.Inform,
            text: "HHS is establishing dedicated support services for people with sleep disorders and expanding telehealth access during exempt hours.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_vulnerable_challenge",
            type: AnswerType.Challenge,
            text: "Those are exactly the people being harmed by tech companies that profit from sleep deprivation. We're protecting them.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_implementation_timeline",
        text: "How quickly could these exemptions be processed? Won't bureaucratic delays hurt the very people you're trying to help?",
        answers: [
          {
            id: "a_timeline_inform",
            type: AnswerType.Inform,
            text: "We're designing an instant, app-based system for real-time exemptions. Essential workers get automatic approval codes.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_timeline_reassure",
            type: AnswerType.Reassure,
            text: "We learned from healthcare.gov mistakes. This system will be tested extensively with community input before any rollout.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_timeline_challenge",
            type: AnswerType.Challenge,
            text: "That assumes bureaucracy is the problem. The real issue is tech companies that refuse to prioritize user wellbeing over profits.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      {
        id: "q_corporate_accountability",
        text: "Instead of government curfews, why not hold tech companies accountable for designing addictive algorithms?",
        answers: [
          {
            id: "a_accountability_admit",
            type: AnswerType.Admit,
            text: "You're absolutely right. We should be regulating the root cause - predatory design - not just treating the symptoms.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.StrongPositive, // +8
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_accountability_inform",
            type: AnswerType.Inform,
            text: "We're pursuing both approaches. Justice Department is investigating algorithmic manipulation while HHS addresses immediate health impacts.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "Corporate self-regulation failed. Companies had decades to fix this voluntarily. Sometimes government must act when industry won't.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
  },
};
