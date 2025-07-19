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
      id: "q_student_welfare",
      text: "With millions of students out of school, shouldn't the administration prioritize their mental health over a failed karaoke policy?",
      answers: [
        {
          id: "a_welfare_reassure",
          type: AnswerType.Reassure,
          text: "Student wellness is our top priority. We're launching comprehensive mental health support while working to resolve this quickly.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Add negative impact to balance
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
              },
            },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0
            outcome_strike_security_crisis:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_strike_karaoke_compromise:
              OutcomeModifierWeight.SlightNegative, // -4
          },
          followUpId: "q_teacher_working_conditions",
        },
        {
          id: "a_welfare_admit",
          type: AnswerType.Admit,
          text: "You're absolutely right. The karaoke policy was a mistake that's now harming student mental health. We're ending it immediately.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.SlightNegative, // -4
            outcome_strike_security_crisis:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_strike_karaoke_compromise:
              OutcomeModifierWeight.StrongPositive, // +8
          },
          followUpId: "q_educational_funding",
        },
        {
          id: "a_welfare_inform",
          type: AnswerType.Inform,
          text: "We're providing $200 million in emergency counseling services and meal programs to support affected students during this crisis.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance HHS
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.StrongPositive, // +8
            outcome_strike_security_crisis:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_strike_karaoke_compromise:
              OutcomeModifierWeight.SlightNegative, // -4
          },
        },
        {
          id: "a_welfare_challenge",
          type: AnswerType.Challenge,
          text: "The real crisis is decades of underfunding education. These teachers are fighting for resources students desperately need.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative, // Add negative impact for HHS
              },
            },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.SlightPositive, // +4
            outcome_strike_security_crisis:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_teacher_working_conditions",
        text: "Aren't teachers justified in striking when they're asked to implement policies without proper resources or training?",
        answers: [
          {
            id: "a_conditions_admit",
            type: AnswerType.Admit,
            text: "Teachers have legitimate concerns about implementation support. We should have provided better training and resources from the start.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance HHS
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from +4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4 (changed from +8)
            },
            followUpId: "q_union_rights",
          },
          {
            id: "a_conditions_reassure",
            type: AnswerType.Reassure,
            text: "We're committed to supporting teachers with additional training, resources, and implementation flexibility going forward.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from +4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_conditions_challenge",
            type: AnswerType.Challenge,
            text: "This is about respecting educators as professionals, not treating them as implementers of top-down mandates they had no voice in creating.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
        ],
      },
      {
        id: "q_educational_funding",
        text: "Will this crisis finally lead to the major education funding increase that advocates have been demanding?",
        answers: [
          {
            id: "a_funding_inform",
            type: AnswerType.Inform,
            text: "We're proposing a $15 billion emergency education package focused on mental health services, arts programs, and teacher support.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_systemic_reform",
          },
          {
            id: "a_funding_challenge",
            type: AnswerType.Challenge,
            text: "This crisis proves we can't keep asking teachers to do more with less. It's time for transformational investment in public education.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance Treasury
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Add negative impact to balance HHS
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from +4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_funding_deflect",
            type: AnswerType.Deflect,
            text: "Our focus right now is on getting students back to school safely. Long-term funding discussions will come after this crisis is resolved.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_union_rights",
        text: "How do you respond to critics who say this administration doesn't respect teachers' collective bargaining rights?",
        answers: [
          {
            id: "a_rights_reassure",
            type: AnswerType.Reassure,
            text: "We absolutely support collective bargaining. Teachers have every right to advocate for their students and working conditions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from +4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_rights_challenge",
            type: AnswerType.Challenge,
            text: "These teachers are showing exactly the kind of advocacy and leadership we want them to model for students every day.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance Justice
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_rights_admit",
            type: AnswerType.Admit,
            text: "We should have consulted with teachers and unions before implementing the karaoke policy. That's on us.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4 (changed from 0)
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
        ],
      },
      {
        id: "q_systemic_reform",
        text: "Beyond funding, what systemic changes will prevent future education crises like this karaoke debacle?",
        answers: [
          {
            id: "a_reform_inform",
            type: AnswerType.Inform,
            text: "We're establishing teacher advisory councils to review all major policy changes before implementation, ensuring educator input from the start.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from +4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_reform_challenge",
            type: AnswerType.Challenge,
            text: "The real reform is treating teachers as professionals, not bureaucrats. We need to fundamentally change how we approach education policy.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance HHS
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_reform_deflect",
            type: AnswerType.Deflect,
            text: "Every crisis is a learning opportunity. We're committed to evidence-based policy making that puts students first.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
    ],
  },
};
