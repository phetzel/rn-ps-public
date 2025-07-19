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
      id: "q_alert_transparency",
      text: "Shouldn't the American people have been informed immediately that this alien invasion alert was a fake? Why was the public left in the dark?",
      answers: [
        {
          id: "a_transparency_admit",
          type: AnswerType.Admit,
          text: "You're absolutely right. The public deserved immediate clarification. We failed in our communication responsibilities and we're implementing new transparency protocols.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
        {
          id: "a_transparency_inform",
          type: AnswerType.Inform,
          text: "HHS has protocols for public health communications. We've already begun reviewing how emergency alert systems can better serve public transparency.",
          impacts: {
            cabinet: {
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
          followUpId: "q_alert_oversight",
        },
        {
          id: "a_transparency_deflect",
          type: AnswerType.Deflect,
          text: "The focus should be on preventing these communication failures, not relitigating what happened. We're working with Congress on better oversight.",
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
          followUpId: "q_alert_public_trust",
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_alert_oversight",
        text: "What specific oversight mechanisms will prevent this type of fearmongering from being used to justify defense spending in the future?",
        answers: [
          {
            id: "a_oversight_inform",
            type: AnswerType.Inform,
            text: "We're establishing an independent review board that includes public health experts and civil liberties advocates to review all emergency communications.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
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
            followUpId: "q_alert_budget_reform",
          },
          {
            id: "a_oversight_challenge",
            type: AnswerType.Challenge,
            text: "This exposes how the defense establishment manipulates public fear for budget increases. Congress must demand full transparency in all defense communications.",
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
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.Neutral,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_oversight_reassure",
            type: AnswerType.Reassure,
            text: "American institutions are resilient. This incident will actually strengthen public oversight and accountability in emergency communications.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
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
          },
        ],
      },
      {
        id: "q_alert_public_trust",
        text: "How can the administration rebuild public trust after this incident? What steps ensure this never happens again?",
        answers: [
          {
            id: "a_trust_admit",
            type: AnswerType.Admit,
            text: "We've lost public trust and we have to earn it back through complete transparency and accountability. This can't happen again.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
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
            followUpId: "q_alert_ethics_review",
          },
          {
            id: "a_trust_reassure",
            type: AnswerType.Reassure,
            text: "American democracy is resilient. This incident actually demonstrates that our system prevents bad ideas from moving forward.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_trust_inform",
            type: AnswerType.Inform,
            text: "We're implementing new protocols that require multiple levels of review before any emergency communications can be considered.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
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
        id: "q_alert_budget_reform",
        text: "Given this fake alert was designed to justify defense spending, shouldn't we completely reform how defense budgets are presented to Congress?",
        answers: [
          {
            id: "a_budget_reform_admit",
            type: AnswerType.Admit,
            text: "This incident raises serious questions about defense budget justifications. We support comprehensive reforms to ensure budget requests are based on transparent threats.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            id: "a_budget_reform_inform",
            type: AnswerType.Inform,
            text: "Treasury already requires detailed justifications for all defense spending. This incident shows we need better oversight of communications, not budget processes.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
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
            id: "a_budget_reform_deflect",
            type: AnswerType.Deflect,
            text: "Defense budgets are based on classified intelligence that can't be fully shared with the public. The focus should be on improving communication protocols.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.Neutral,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
        ],
      },
      {
        id: "q_alert_ethics_review",
        text: "Will you establish an independent ethics board to review all future communications strategies? Who would oversee such a body?",
        answers: [
          {
            id: "a_ethics_admit",
            type: AnswerType.Admit,
            text: "An independent ethics review is exactly what's needed. We're working with Congress to establish oversight that includes public interest advocates.",
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
          {
            id: "a_ethics_deflect",
            type: AnswerType.Deflect,
            text: "We have existing oversight mechanisms through Congress and internal review processes. The focus should be on implementation, not new bureaucracy.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            id: "a_ethics_inform",
            type: AnswerType.Inform,
            text: "Any ethics review would include representatives from HHS, Homeland Security, and independent experts to ensure balanced oversight.",
            impacts: {
              cabinet: {
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
              outcome_alert_panic: OutcomeModifierWeight.Neutral,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
        ],
      },
    ],
  },
};
