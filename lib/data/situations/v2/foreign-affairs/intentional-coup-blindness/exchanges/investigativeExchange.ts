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
    rootQuestionId: "q_coup_complicit",
    questions: {
      q_coup_complicit: {
        id: "q_coup_complicit",
        text: "Sources in the intelligence community say we knew about this coup for weeks. Is the administration complicit in overthrowing a democracy for cheap oil?",
        depth: 0,
        answers: [
          {
            id: "a_complicit_deny",
            type: AnswerType.Deny,
            text: "That is a baseless and offensive accusation. We do not support, endorse, or involve ourselves in the internal political turmoil of other nations.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_coup_intel",
          },
          {
            id: "a_complicit_deflect",
            type: AnswerType.Deflect,
            text: "The situation in Oilistan is extremely complex with many internal factions. Our sole focus is on promoting stability for the region.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coup_collapses_blame:
                OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
        ],
      },
      q_coup_intel: {
        id: "q_coup_intel",
        text: "So you're saying our intelligence agencies had no warning this was coming? That sounds like a massive intelligence failure.",
        depth: 1,
        answers: [
          {
            id: "a_intel_challenge",
            type: AnswerType.Challenge,
            text: "I am not going to discuss classified intelligence matters from this podium. It would be irresponsible and dangerous to do so.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_intel_deny_again",
            type: AnswerType.Deny,
            text: "Correct. We had no actionable intelligence indicating an imminent overthrow of the government. This event surprised everyone.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_coup_sanctions_spike: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_coup_collapses_blame:
                OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
            },
          },
        ],
      },
    },
  },
};
