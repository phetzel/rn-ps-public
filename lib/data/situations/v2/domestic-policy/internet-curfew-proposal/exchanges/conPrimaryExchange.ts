import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_curfew_enforcement",
      text: "How would you enforce this? It seems technically impossible and requires massive government privacy invasion.",
      answers: [
        {
          id: "a_enforcement_challenge",
          type: AnswerType.Challenge,
          text: "That's a concern. Pushing users to dark nets and VPNs could make our country less safe. Homeland is studying risks.",
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
          followUpId: "q_constitutional_authority",
        },
        {
          id: "a_enforcement_deflect",
          type: AnswerType.Deflect,
          text: "Let's focus on the health benefits. We're exploring various implementation approaches with tech industry partners.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
            outcome_curfew_voluntary_rollout:
              OutcomeModifierWeight.SlightPositive, // +4
          },
          followUpId: "q_tech_industry_resistance",
        },
        {
          id: "a_enforcement_inform",
          type: AnswerType.Inform,
          text: "HHS research shows sleep deprivation costs $400 billion annually. We're piloting technical solutions carefully.",
          impacts: {
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_voluntary_rollout:
              OutcomeModifierWeight.StrongPositive, // +8
          },
        },
        {
          id: "a_enforcement_reassure",
          type: AnswerType.Reassure,
          text: "We understand privacy concerns. Justice Department ensures any approach respects constitutional protections.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_curfew_shelved: OutcomeModifierWeight.Neutral, // 0
            outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
            outcome_curfew_voluntary_rollout:
              OutcomeModifierWeight.SlightPositive, // +4
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_constitutional_authority",
        text: "What constitutional authority does the federal government have to regulate when Americans access the internet?",
        answers: [
          {
            id: "a_authority_deflect",
            type: AnswerType.Deflect,
            text: "Our legal team is reviewing all constitutional implications. We won't proceed without proper legal foundation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.StrongPositive, // +8
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_surveillance_concerns",
          },
          {
            id: "a_authority_inform",
            type: AnswerType.Inform,
            text: "The Commerce Clause provides broad regulatory authority over interstate communications infrastructure and public utilities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_authority_challenge",
            type: AnswerType.Challenge,
            text: "That's a misreading of precedent. This is about public health emergency powers, not routine internet regulation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_tech_industry_resistance",
        text: "Tech firms universally oppose this. Are you going to compel them to comply against their will?",
        answers: [
          {
            id: "a_resistance_reassure",
            type: AnswerType.Reassure,
            text: "We believe we can find collaborative solutions. A voluntary partnership is always preferred over government mandate.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_economic_impact",
          },
          {
            id: "a_resistance_inform",
            type: AnswerType.Inform,
            text: "Government has broad regulatory authority over public utilities. We're confident we have legal tools for compliance.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_resistance_challenge",
            type: AnswerType.Challenge,
            text: "These companies profit from sleep deprivation and addiction. Sometimes government must act when industry won't.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_surveillance_concerns",
        text: "Won't enforcing this require monitoring every American's internet activity around the clock?",
        answers: [
          {
            id: "a_surveillance_reassure",
            type: AnswerType.Reassure,
            text: "Any monitoring would be aggregate and anonymized. We're not interested in individual browsing habits, just system-wide compliance.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_surveillance_deflect",
            type: AnswerType.Deflect,
            text: "These are implementation details we'll work out with privacy advocates and civil liberties groups during development.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_surveillance_challenge",
            type: AnswerType.Challenge,
            text: "That's fear-mongering. ISPs already monitor traffic for network management. This just adds a time component.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      {
        id: "q_economic_impact",
        text: "What about the economic impact on streaming services, gaming companies, and other night-economy businesses?",
        answers: [
          {
            id: "a_economic_inform",
            type: AnswerType.Inform,
            text: "Treasury estimates the health benefits outweigh economic disruption. We're proposing transition assistance for affected industries.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_economic_challenge",
            type: AnswerType.Challenge,
            text: "Industries will adapt. Companies that profit from sleep deprivation need to find more sustainable business models anyway.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_economic_deflect",
            type: AnswerType.Deflect,
            text: "We're in early discussions with industry stakeholders about phased implementation and potential exemptions for essential services.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
  },
};
