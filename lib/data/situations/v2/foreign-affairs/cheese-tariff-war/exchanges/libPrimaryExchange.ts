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
        text: "This tariff spat threatens food supply chains and national security. How does starting a trade war over a joke protect families?",
        depth: 0,
        answers: [
          {
            id: "a_security_deny",
            type: AnswerType.Deny,
            text: "There is no threat to food security. Our domestic food supply chains are robust and this minor trade dispute poses no risk to American families.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_cheese_war_preparation",
          },
          {
            id: "a_security_admit",
            type: AnswerType.Admit,
            text: "You're absolutely right. The President's comment was inappropriate and I take full responsibility for not preventing this diplomatic misstep.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_security_reassure",
            type: AnswerType.Reassure,
            text: "Our Defense Department maintains that bilateral security partnerships remain unaffected by trade disagreements. We're managing this carefully.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_security_inform",
            type: AnswerType.Inform,
            text: "The Justice Department confirms that all retaliatory measures follow proper legal procedures and international trade law frameworks.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
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
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
