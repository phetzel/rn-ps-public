import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestionId: "q_alert_memo_authentic",
    questions: {
      q_alert_memo_authentic: {
        id: "q_alert_memo_authentic",
        text: "We have a leaked memo outlining a plan to fake an alien invasion to boost defense spending. Can you confirm its authenticity?",
        depth: 0,
        answers: [
          {
            id: "a_memo_deny",
            type: AnswerType.Deny,
            text: "That document is a complete and utter fabrication. It's a laughable piece of disinformation, and we won't waste time on it.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative, // -4
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_alert_sources",
          },
          {
            id: "a_memo_admit",
            type: AnswerType.Admit,
            text: "It was a brainstorming document for a 'worst-case scenario' readiness exercise that was considered and immediately rejected as inappropriate.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.StrongPositive, // +8
              outcome_alert_panic: OutcomeModifierWeight.StrongNegative, // -8
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_alert_sources: {
        id: "q_alert_sources",
        text: "You call it a fabrication, but multiple high-level sources have confirmed this plan was seriously discussed. Are you calling them all liars?",
        depth: 1,
        answers: [
          {
            id: "a_sources_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to comment on anonymous sources peddling fiction. This administration deals in facts, and the fact is, there is no such plan.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_sources_deflect",
            type: AnswerType.Deflect,
            text: "Look, the real story here isn't some silly memo; it's the very real and serious threats our nation faces that require robust defense funding.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_alert_funding_pass: OutcomeModifierWeight.StrongPositive, // +8 -> +8 total
            },
          },
        ],
      },
    },
  },
};
