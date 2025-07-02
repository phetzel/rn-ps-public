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
    rootQuestionId: "q_brawl_weakness",
    questions: {
      q_brawl_weakness: {
        id: "q_brawl_weakness",
        text: "This public feud between Treasury and Defense projects weakness. How can our allies or enemies take us seriously with this infighting?",
        depth: 0,
        answers: [
          {
            id: "a_weakness_reassure",
            type: AnswerType.Reassure,
            text: "This is a sign of a healthy, functioning government where rigorous debate is encouraged. I assure you, on national security, we are completely unified.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightNegative, // -4
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_brawl_joint_audit: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_weakness_deflect",
            type: AnswerType.Deflect,
            text: "The Secretary of Defense is focused on global threats, not DC budget debates. Our military readiness has never been stronger.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightPositive, // +4
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_brawl_joint_audit: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_brawl_undermined",
          },
        ],
      },
      q_brawl_undermined: {
        id: "q_brawl_undermined",
        text: "But isn't Treasury actively trying to undermine that readiness by publicly calling for cuts to essential defense programs?",
        depth: 1,
        answers: [
          {
            id: "a_undermined_deny",
            type: AnswerType.Deny,
            text: "Not at all. Treasury is simply ensuring fiscal responsibility. A strong economy is the foundation of a strong national defense.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_brawl_joint_audit: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
          {
            id: "a_undermined_admit",
            type: AnswerType.Admit,
            text: "There is a fundamental disagreement on priorities. The President is now personally mediating to find a path forward.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.StrongPositive, // +8 -> +4 total
              outcome_brawl_joint_audit: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
