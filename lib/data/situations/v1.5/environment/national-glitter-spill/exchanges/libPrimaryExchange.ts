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
    rootQuestionId: "q_glitter_health_risk",
    questions: {
      q_glitter_health_risk: {
        id: "q_glitter_health_risk",
        text: "You have a river full of glitter. What are the health risks to the public and the environmental impact on the ecosystem?",
        depth: 0,
        answers: [
          {
            id: "a_risk_inform",
            type: AnswerType.Inform,
            text: "HHS is conducting water quality tests. While the glitter is non-toxic and biodegradable, we advise avoiding contact with the water for now.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightPositive, // +4
              outcome_glitter_mess: OutcomeModifierWeight.SlightNegative, // -4
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_glitter_biodegradable",
          },
          {
            id: "a_risk_reassure",
            type: AnswerType.Reassure,
            text: "Homeland Security has deployed containment booms and cleanup crews are working 24/7. We are confident we can contain this quickly.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.StrongPositive, // +8
              outcome_glitter_mess: OutcomeModifierWeight.StrongNegative, // -8
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_glitter_biodegradable: {
        id: "q_glitter_biodegradable",
        text: "What does 'biodegradable' even mean in this context? How long will it take to break down, and what does it turn into?",
        depth: 1,
        answers: [
          {
            id: "a_bio_inform",
            type: AnswerType.Inform,
            text: "It's a plant-based material designed to break down into harmless components within 90 days. We're verifying those claims with our own tests.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_glitter_mess: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_bio_admit",
            type: AnswerType.Admit,
            text: "That's a fair question. The company makes certain claims, but we don't have enough independent data on its long-term impact yet.",
            impacts: {},
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_glitter_mess: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
