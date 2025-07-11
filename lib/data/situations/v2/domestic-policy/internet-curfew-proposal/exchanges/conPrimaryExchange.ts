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
        text: "How would you enforce this? It seems technically impossible and requires massive government privacy invasion.", // 105 chars - within 60-150 limit
        depth: 0,
        answers: [
          {
            id: "a_enforcement_challenge",
            type: AnswerType.Challenge,
            text: "That's a concern. Pushing users to dark nets and VPNs could make our country less safe. Homeland is studying risks.", // 116 chars - within 80-180 limit
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
            id: "a_enforcement_deflect",
            type: AnswerType.Deflect,
            text: "Let's focus on the health benefits. We're exploring various implementation approaches with tech industry partners.", // 108 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.Neutral, // 0
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_enforcement_inform",
            type: AnswerType.Inform,
            text: "HHS research shows sleep deprivation costs $400 billion annually. We're piloting technical solutions carefully.", // 110 chars - within 80-180 limit
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
            text: "We understand privacy concerns. Justice Department ensures any approach respects constitutional protections.", // 104 chars - within 80-180 limit
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
          {
            id: "a_enforcement_admit",
            type: AnswerType.Admit,
            text: "The enforcement mechanism is complex. We're working with tech firms to find a viable, constitutional path forward.", // 113 chars - within 80-180 limit
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
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
        text: "But tech firms universally oppose this. Are you going to compel them to comply against their will?", // 97 chars - within 60-150 limit
        depth: 1,
        answers: [
          {
            id: "a_cooperation_reassure",
            type: AnswerType.Reassure,
            text: "We believe we can find collaborative solutions. A voluntary partnership is always preferred over government mandate.", // 117 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
          },
          {
            id: "a_cooperation_inform",
            type: AnswerType.Inform,
            text: "Government has broad regulatory authority over public utilities. We're confident we have legal tools for compliance.", // 117 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative }, // Added negative impact for President to balance
              cabinet: {
                [CabinetStaticId.Justice]: {
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
    },
  },
};
