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
    rootQuestionId: "q_gaffe_trivial",
    questions: {
      q_gaffe_trivial: {
        id: "q_gaffe_trivial",
        text: "It's just a ham. In a world with major crises, why is the press spending so much time on such a trivial, almost comical, diplomatic blunder?",
        depth: 0,
        answers: [
          {
            id: "a_trivial_challenge",
            type: AnswerType.Challenge,
            text: "That's an excellent question. While we've addressed the issue, focusing on this distracts from substantive matters like our trade talks.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_gaffe_lingering_resentment: OutcomeModifierWeight.Neutral, // 0
              outcome_gaffe_mockery: OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_gaffe_hhs_role",
          },
          {
            id: "a_trivial_deflect",
            type: AnswerType.Deflect,
            text: "It highlights how important cultural understanding is. The HHS is now working with State to create better dietary briefings for our staff.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gaffe_lingering_resentment:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gaffe_mockery: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_gaffe_hhs_role",
          },
        ],
      },
      q_gaffe_hhs_role: {
        id: "q_gaffe_hhs_role",
        text: "Why is the Department of Health involved in diplomatic gifts? Is this a sign of mission creep or that State can't handle its own affairs?",
        depth: 1,
        answers: [
          {
            id: "a_role_inform",
            type: AnswerType.Inform,
            text: "It's inter-agency cooperation. HHS has nutrition and cultural diet experts that are a valuable resource for the entire government.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gaffe_lingering_resentment: OutcomeModifierWeight.Neutral, // 0
              outcome_gaffe_mockery: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_role_deny",
            type: AnswerType.Deny,
            text: "Not at all. The State Department is fully in charge. They simply requested input from another department, which is standard procedure.",
            impacts: {},
            outcomeModifiers: {
              outcome_gaffe_apology_accepted: OutcomeModifierWeight.Neutral, // 0
              outcome_gaffe_lingering_resentment:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gaffe_mockery: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
    },
  },
};
