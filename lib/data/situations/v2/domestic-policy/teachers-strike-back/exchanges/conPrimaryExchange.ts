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
    rootQuestionId: "q_strike_illegal",
    questions: {
      q_strike_illegal: {
        id: "q_strike_illegal",
        text: "This strike by public employees is illegal in many places. Why is the administration negotiating with unions that are breaking the law?",
        depth: 0,
        answers: [
          {
            id: "a_illegal_challenge",
            type: AnswerType.Challenge,
            text: "The real issue is a failed HHS policy, not the teachers' response. We must address the root cause, which was our own mandate.",
            impacts: {
              cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Negative } },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_prolonged: OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_illegal_reassure",
            type: AnswerType.Reassure,
            text: "Our primary goal is to get kids back in school. The fastest way to do that is through negotiation, not legal battles.",
            impacts: {
              cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_prolonged: OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_compromise: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
            },
            followUpId: "q_strike_precedent",
          },
        ],
      },
      q_strike_precedent: {
        id: "q_strike_precedent",
        text: "But doesn't negotiating set a dangerous precedent that any public union can get what it wants by illegally walking off the job?",
        depth: 1,
        answers: [
          {
            id: "a_precedent_inform",
            type: AnswerType.Inform,
            text: "The DOJ has advised that the unique nature of this dispute makes it unlikely to set a broad legal precedent for future strikes.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_strike_prolonged: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_strike_compromise: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
          {
            id: "a_precedent_deflect",
            type: AnswerType.Deflect,
            text: "This is an extraordinary situation sparked by an experimental policy. We're focused on this specific resolution, not abstract hypotheticals.",
            impacts: {},
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_strike_prolonged: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_strike_compromise: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
            },
          },
        ],
      },
    },
  },
};
