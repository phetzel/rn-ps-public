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
      id: "q_alert_unethical",
      text: "Whether it was real or not, the very idea of using fear to manipulate the public and Congress is deeply unethical. Who is responsible for this?",
      answers: [
        {
          id: "a_unethical_reassure",
          type: AnswerType.Reassure,
          text: "I want to be clear to all Americans: there is no alien threat. This was a purely internal, hypothetical exercise that should never have leaked.",
          impacts: {
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
            outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
        },
        {
          id: "a_unethical_deflect",
          type: AnswerType.Deflect,
          text: "The real unethical act is the leaking of a sensitive national security document designed to test our nation's readiness for any threat.",
          impacts: {
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
            outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_alert_threats",
        },
        {
          id: "a_unethical_admit",
          type: AnswerType.Admit,
          text: "This was a rejected brainstorming idea that never should have been considered. We take full responsibility for this lapse in judgment.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.StrongPositive,
            outcome_alert_panic: OutcomeModifierWeight.StrongNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_alert_accountability",
        },
        {
          id: "a_unethical_challenge",
          type: AnswerType.Challenge,
          text: "I'd question whether this document is even authentic. It's suspicious timing, and frankly, it reads like opposition research fantasy.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
            outcome_alert_panic: OutcomeModifierWeight.Neutral,
            outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_alert_threats",
        text: "You keep mentioning 'real threats.' Are you using this leaked memo to pivot and argue for the very same funding the memo was designed to secure?",
        answers: [
          {
            id: "a_threats_inform",
            type: AnswerType.Inform,
            text: "The need for a strong defense is constant and based on real-world intelligence. It is entirely separate from this unfortunate internal document.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.Neutral,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_threats_admit",
            type: AnswerType.Admit,
            text: "It's true that the funding need is real, even if the method discussed in the memo was wrong. We have to separate the two issues.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_threats_deflect",
            type: AnswerType.Deflect,
            text: "Let's focus on the real issue: our adversaries are watching how we respond to leaks of sensitive national security planning documents.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.Neutral,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightNegative,
            },
            followUpId: "q_alert_adversaries",
          },
        ],
      },
      {
        id: "q_alert_accountability",
        text: "If you're taking responsibility, what specific consequences will there be for those who developed this plan?",
        answers: [
          {
            id: "a_accountability_inform",
            type: AnswerType.Inform,
            text: "We're conducting a thorough internal review to identify exactly who was involved and what disciplinary measures are appropriate.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_accountability_deflect",
            type: AnswerType.Deflect,
            text: "The real accountability should be for whoever leaked this document and violated their oath to protect national security information.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_alert_leak_investigation",
          },
          {
            id: "a_accountability_reassure",
            type: AnswerType.Reassure,
            text: "The important thing is that this plan was rejected immediately and will never be implemented. That shows our system of checks works.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_alert_adversaries",
        text: "Are you saying our adversaries might exploit this embarrassing leak to undermine American credibility on the world stage?",
        answers: [
          {
            id: "a_adversaries_inform",
            type: AnswerType.Inform,
            text: "Our intelligence community is monitoring how hostile nations might use this leak for propaganda purposes against us.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.Neutral,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_adversaries_deflect",
            type: AnswerType.Deflect,
            text: "The real threat to American credibility is the media circus around internal planning documents instead of focusing on actual policy.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_adversaries_reassure",
            type: AnswerType.Reassure,
            text: "American credibility comes from our transparency and accountability. This leak actually demonstrates our commitment to ethical governance.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
        ],
      },
      {
        id: "q_alert_leak_investigation",
        text: "Will you be launching a criminal investigation into the leak, and does that mean you're treating this as a legitimate national security breach?",
        answers: [
          {
            id: "a_leak_investigation_inform",
            type: AnswerType.Inform,
            text: "The Department of Justice will determine if any laws were broken in the unauthorized disclosure of this internal document.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_leak_investigation_deflect",
            type: AnswerType.Deflect,
            text: "I'm not going to prejudge any investigation, but unauthorized leaks of any government document are taken seriously by this administration.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_leak_investigation_admit",
            type: AnswerType.Admit,
            text: "Honestly, pursuing the leaker would just create more distraction from the real issue, which is ensuring this kind of planning never happens again.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
        ],
      },
    ],
  },
};
