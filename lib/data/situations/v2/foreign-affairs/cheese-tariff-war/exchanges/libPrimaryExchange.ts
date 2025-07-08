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
    rootQuestionId: "q_cheese_war_security",
    questions: {
      q_cheese_war_security: {
        id: "q_cheese_war_security",
        text: "This tariff spat threatens our food supply chains and could affect national security. How does starting a trade war over a bad joke protect American families?",
        depth: 0,
        answers: [
          {
            id: "a_security_deny",
            type: AnswerType.Deny,
            text: "There is no threat to food security. Our domestic food supply chains are robust and this minor trade dispute poses no risk to American families.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_cheese_war_preparation",
          },
          {
            id: "a_security_admit",
            type: AnswerType.Admit,
            text: "You're right that the President's comment was inappropriate and created unnecessary complications. We are working to resolve this quickly.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_cheese_war_preparation: {
        id: "q_cheese_war_preparation",
        text: "If there's no security risk, why is Homeland Security involved in trade discussions? Are you preparing for something worse than you're admitting?",
        depth: 1,
        answers: [
          {
            id: "a_preparation_reassure",
            type: AnswerType.Reassure,
            text: "Homeland Security coordinates with all agencies on issues that could affect critical infrastructure. It's standard procedure, not crisis preparation.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
          {
            id: "a_preparation_inform",
            type: AnswerType.Inform,
            text: "Homeland Security monitors all potential disruptions to supply chains. They provide risk assessments, not policy recommendations.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
            },
          },
        ],
      },
    },
  },
};
