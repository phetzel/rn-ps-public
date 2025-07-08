import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestionId: "q_brawl_dysfunction",
    questions: {
      q_brawl_dysfunction: {
        id: "q_brawl_dysfunction",
        text: "This public infighting makes the entire cabinet look dysfunctional. Who is in charge here, and why is the President allowing this to happen?",
        depth: 0,
        answers: [
          {
            id: "a_dysfunction_reassure",
            type: AnswerType.Reassure,
            text: "The President has full confidence in his cabinet. He encourages vigorous debate to ensure the best possible outcome for the American people.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightPositive, // +4
              outcome_brawl_president_mediates: OutcomeModifierWeight.Neutral, // 0
              outcome_brawl_joint_audit: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_dysfunction_admit",
            type: AnswerType.Admit,
            text: "You are correct. The debate should have remained internal. The President has spoken to both Secretaries and instructed them to resolve this privately.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.StrongNegative, // -8
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_brawl_joint_audit: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_brawl_resolution",
          },
        ],
      },
      q_brawl_resolution: {
        id: "q_brawl_resolution",
        text: "What does 'resolving this' mean? Will one of them be overruled, or are we headed for a joint audit of both departments?",
        depth: 1,
        answers: [
          {
            id: "a_resolution_inform",
            type: AnswerType.Inform,
            text: "They are working collaboratively on a joint spending review to identify efficiencies in both departments. It's a productive process.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_brawl_joint_audit: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
            },
          },
          {
            id: "a_resolution_deflect",
            type: AnswerType.Deflect,
            text: "The resolution process is internal and ongoing. We won't be providing a running commentary on the cabinet's private discussions.",
            impacts: {},
            outcomeModifiers: {
              outcome_brawl_pr_war: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_brawl_president_mediates:
                OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_brawl_joint_audit: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
            },
          },
        ],
      },
    },
  },
};
