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
      id: "q_government_weakness",
      text: "Isn't the administration showing weakness by caving to striking teachers instead of enforcing the law?",
      answers: [
        {
          id: "a_weakness_challenge",
          type: AnswerType.Challenge,
          text: "We're not 'caving' - we're making smart policy decisions based on what works for students, not political posturing.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.SlightPositive, // +4
            outcome_strike_security_crisis: OutcomeModifierWeight.MajorNegative, // -12
            outcome_strike_karaoke_compromise:
              OutcomeModifierWeight.StrongPositive, // +8
          },
          followUpId: "q_taxpayer_costs",
        },
        {
          id: "a_weakness_admit",
          type: AnswerType.Admit,
          text: "You're right that we could have handled this better. The karaoke mandate created unnecessary conflict when we should focus on real student needs.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.SlightNegative, // -4
            outcome_strike_security_crisis:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_union_accountability",
        },
        {
          id: "a_weakness_reassure",
          type: AnswerType.Reassure,
          text: "We're prioritizing student welfare above all else. Our health officials are implementing crisis support programs for affected families.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
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
        {
          id: "a_weakness_deny",
          type: AnswerType.Deny,
          text: "This isn't a security issue requiring federal oversight. Communities can manage educational policy disputes without crisis intervention.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0
            outcome_strike_security_crisis:
              OutcomeModifierWeight.StrongPositive, // +8
            outcome_strike_karaoke_compromise:
              OutcomeModifierWeight.StrongNegative, // -8
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_taxpayer_costs",
        text: "What's the daily cost to taxpayers of having millions of children out of school while bureaucrats argue?",
        answers: [
          {
            id: "a_taxpayer_inform",
            type: AnswerType.Inform,
            text: "The economic impact is roughly $400 million daily in lost productivity and emergency childcare costs. That's why we're prioritizing resolution.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
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
            followUpId: "q_budget_priorities",
          },
          {
            id: "a_taxpayer_deflect",
            type: AnswerType.Deflect,
            text: "The real cost is to our children's education. We won't put a price tag on doing right by students and teachers.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance President
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
          {
            id: "a_taxpayer_challenge",
            type: AnswerType.Challenge,
            text: "These union-led strikes are costing taxpayers while teachers abandon their posts. That's the real fiscal irresponsibility here.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance Treasury
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_taxpayer_neutral",
            type: AnswerType.Inform,
            text: "We will provide transparent daily figures, fiscal tradeoffs, and independent verification so families understand both costs and benefits.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_union_accountability",
        text: "Should teacher unions be held financially responsible for disrupting millions of students' education?",
        answers: [
          {
            id: "a_union_challenge",
            type: AnswerType.Challenge,
            text: "Unions have a right to strike, but they also have responsibilities to students. We're exploring all legal options to ensure accountability.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Add negative impact to balance HHS
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
            followUpId: "q_legal_consequences",
          },
          {
            id: "a_union_deflect",
            type: AnswerType.Deflect,
            text: "We're focused on resolution, not blame. Both sides need to prioritize children's education over political disputes.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_union_reassure",
            type: AnswerType.Reassure,
            text: "We're working with union leadership to find common ground. Most teachers want to be in classrooms, not picket lines.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance President
              cabinet: {
                [CabinetStaticId.HHS]: {
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
            id: "a_union_neutral",
            type: AnswerType.Inform,
            text: "We are reviewing accountability options with states while prioritizing swift return-to-learning plans and student support.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_budget_priorities",
        text: "How do you justify spending on crisis childcare when schools should simply reopen under existing policy?",
        answers: [
          {
            id: "a_budget_inform",
            type: AnswerType.Inform,
            text: "Emergency childcare prevents economic disruption while negotiations continue. It's cheaper than prolonged strikes.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_budget_deny",
            type: AnswerType.Deny,
            text: "We're not throwing good money after bad. The original karaoke policy was sound and should be implemented as planned.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance President
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from -4)
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.SlightNegative, // -4 (changed from -8)
            },
          },
          {
            id: "a_budget_challenge",
            type: AnswerType.Challenge,
            text: "The real waste is letting unions dictate education policy. We won't reward this behavior with taxpayer-funded concessions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance Treasury
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_budget_neutral",
            type: AnswerType.Inform,
            text: "We will publish a full fiscal analysis comparing emergency support with alternative approaches, including projected educational outcomes.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_legal_consequences",
        text: "Will the Justice Department pursue legal action against unions that abandon their educational duties?",
        answers: [
          {
            id: "a_legal_inform",
            type: AnswerType.Inform,
            text: "We're reviewing all legal options. Unions have rights, but students have rights too - including the right to education.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
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
          },
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "Our focus is on getting kids back to school, not courthouse battles. Legal action is a last resort.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Change to negative to balance President
              cabinet: {
                [CabinetStaticId.Justice]: {
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
            id: "a_legal_challenge",
            type: AnswerType.Challenge,
            text: "When unions break their contracts and harm students, there must be consequences. We won't let intimidation tactics succeed.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Change to negative to balance Justice
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0 (changed from -4)
              outcome_strike_security_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0 (changed from -4)
            },
          },
          {
            id: "a_legal_neutral",
            type: AnswerType.Inform,
            text: "We are coordinating with local authorities and education leaders on lawful remedies that prioritize classroom reopening and student well-being.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
