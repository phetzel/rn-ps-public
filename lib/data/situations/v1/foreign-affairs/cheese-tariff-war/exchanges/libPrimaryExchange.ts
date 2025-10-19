import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_cheese_war_security",
      text: "This tariff spat threatens food supply chains and national security. How does starting a trade war over a joke protect families?",
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
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightNegative,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.SlightPositive,
            outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
          },
          followUpId: "q_cheese_war_preparation",
        },
        {
          id: "a_security_admit",
          type: AnswerType.Admit,
          text: "You're absolutely right. The President's comment was inappropriate and I take full responsibility for not preventing this diplomatic misstep.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.StrongPositive,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.StrongNegative,
            outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
          },
          followUpId: "q_cheese_war_damage_control",
        },
        {
          id: "a_security_reassure",
          type: AnswerType.Reassure,
          text: "Our Defense Department maintains that bilateral security partnerships remain unaffected by trade disagreements. We're managing this carefully.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Negative },
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
              OutcomeModifierWeight.SlightNegative,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.SlightPositive,
            outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
          },
        },
        {
          id: "a_security_inform",
          type: AnswerType.Inform,
          text: "The Justice Department confirms that all retaliatory measures follow proper legal procedures and international trade law frameworks.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
            outcome_cheese_tariffs_hurt_farmers:
              OutcomeModifierWeight.Neutral,
            outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_cheese_war_preparation",
        text: "If there's no security risk, why is Homeland Security involved in trade discussions? Are you preparing for something worse than you're admitting?",
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
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
            followUpId: "q_cheese_war_supply_chain",
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
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_preparation_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on diplomatic solutions, not on speculating about crisis scenarios that won't materialize.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_preparation_neutral",
            type: AnswerType.Inform,
            text: "We will publish interagency roles and coordination protocols so the public understands how risk monitoring supports diplomatic solutions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
            },
          },
        ],
      },
      {
        id: "q_cheese_war_damage_control",
        text: "What concrete steps is the administration taking to repair the diplomatic damage from this cheese comment?",
        answers: [
          {
            id: "a_damage_inform",
            type: AnswerType.Inform,
            text: "The State Department is conducting high-level diplomatic outreach to Dairystani officials to clarify the President's intent and find common ground.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
            followUpId: "q_cheese_war_future_prevention",
          },
          {
            id: "a_damage_reassure",
            type: AnswerType.Reassure,
            text: "Our diplomatic relationships are resilient. This minor trade dispute won't affect our long-term partnerships with key allies.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_damage_deflect",
            type: AnswerType.Deflect,
            text: "The media is overblowing this situation. Trade disagreements happen regularly and get resolved through normal diplomatic channels.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_damage_neutral",
            type: AnswerType.Inform,
            text: "We are documenting outreach steps and timelines with Dairystan and will share progress updates as protocols allow.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_cheese_war_supply_chain",
        text: "Are there contingency plans if this trade dispute expands beyond cheese to other critical food imports?",
        answers: [
          {
            id: "a_supply_chain_inform",
            type: AnswerType.Inform,
            text: "The Agriculture Department maintains strategic reserves and has diversified supplier relationships to ensure food security regardless of trade disruptions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_supply_chain_reassure",
            type: AnswerType.Reassure,
            text: "American food production is robust and diverse. We're not dependent on any single trading partner for essential nutrition.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_supply_chain_deflect",
            type: AnswerType.Deflect,
            text: "That's a hypothetical scenario. We're focused on resolving the current situation, not planning for escalation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
              outcome_cheese_tariffs_hurt_farmers: OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_supply_chain_neutral",
            type: AnswerType.Inform,
            text: "We will publish supply-chain contingency options and consult producers, retailers, and consumer groups before taking action.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral,
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
        ],
      },
      {
        id: "q_cheese_war_future_prevention",
        text: "How will the administration prevent similar diplomatic gaffes in the future? Do you need better communication protocols?",
        answers: [
          {
            id: "a_prevention_admit",
            type: AnswerType.Admit,
            text: "This incident highlights the need for better coordination between communications and foreign policy teams. We're implementing new review procedures.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers: OutcomeModifierWeight.SlightNegative,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_prevention_inform",
            type: AnswerType.Inform,
            text: "The State Department already has extensive protocols for diplomatic communications. This was an isolated incident, not a systemic failure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers: OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_prevention_deflect",
            type: AnswerType.Deflect,
            text: "The President's authentic communication style is one of his strengths. Americans appreciate leaders who speak plainly about trade issues.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightNegative,
              outcome_cheese_tariffs_hurt_farmers: OutcomeModifierWeight.SlightPositive,
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_prevention_neutral",
            type: AnswerType.Inform,
            text: "We will formalize cross-team review procedures, training, and escalation paths and publish a summary of improvements.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.SlightPositive,
              outcome_cheese_tariffs_hurt_farmers: OutcomeModifierWeight.Neutral,
              outcome_cheese_public_rallies: OutcomeModifierWeight.SlightPositive,
            },
          },
        ],
      },
    ],
  },
};
