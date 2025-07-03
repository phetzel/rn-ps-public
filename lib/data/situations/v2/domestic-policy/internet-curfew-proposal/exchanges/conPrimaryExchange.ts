import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestionId: "q_curfew_enforcement",
    questions: {
      q_curfew_enforcement: {
        id: "q_curfew_enforcement",
        text: "How would you even enforce this? It seems technically impossible and would require a massive invasion of privacy by the government.",
        depth: 0,
        answers: [
          {
            id: "a_enforcement_challenge",
            type: AnswerType.Challenge,
            text: "That's a concern. Pushing users to dark nets and VPNs could make our country less safe. Homeland Security is studying the risks.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_enforcement_admit",
            type: AnswerType.Admit,
            text: "The enforcement mechanism is one of the most complex parts of the proposal. We are still working with tech firms to find a viable path.",
            impacts: {},
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_curfew_cooperation",
          },
        ],
      },
      q_curfew_cooperation: {
        id: "q_curfew_cooperation",
        text: "But the tech firms are universally against this. Are you going to compel them to comply against their will?",
        depth: 1,
        answers: [
          {
            id: "a_cooperation_reassure",
            type: AnswerType.Reassure,
            text: "We believe we can find a collaborative solution. A voluntary partnership is always our preferred outcome over a government mandate.",
            impacts: {},
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8 -> +8 total
            },
          },
          {
            id: "a_cooperation_inform",
            type: AnswerType.Inform,
            text: "The government has broad regulatory authority over public utilities. We are confident we have the legal tools to ensure compliance if needed.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
