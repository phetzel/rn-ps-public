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
    rootQuestionId: "q_gnomes_environmental_damage",
    questions: {
      q_gnomes_environmental_damage: {
        id: "q_gnomes_environmental_damage",
        text: "This may seem funny, but thousands of plastic objects have been dumped in protected habitats. What is the real environmental damage here?",
        depth: 0,
        answers: [
          {
            id: "a_damage_inform",
            type: AnswerType.Inform,
            text: "HHS is treating this as a serious plastic pollution event. These objects can leach chemicals and pose a direct threat to wildlife.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_public_art: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_gnomes_cleanup_plan",
          },
          {
            id: "a_damage_deflect",
            type: AnswerType.Deflect,
            text: "It seems to be a case of 'gnome-more-littering'! In all seriousness, we are assessing the situation, but let's maintain a sense of humor.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.StrongNegative, // -8
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_gnomes_public_art: OutcomeModifierWeight.MajorPositive, // +12
            },
          },
        ],
      },
      q_gnomes_cleanup_plan: {
        id: "q_gnomes_cleanup_plan",
        text: "What's the cleanup plan? How long will it take to remove thousands of gnomes from these sensitive and often remote areas?",
        depth: 1,
        answers: [
          {
            id: "a_plan_reassure",
            type: AnswerType.Reassure,
            text: "The Parks Service is already mobilizing staff and organizing volunteer cleanup drives. We are confident we can resolve this quickly.",
            impacts: {},
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_gnomes_public_art: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
            },
          },
          {
            id: "a_plan_admit",
            type: AnswerType.Admit,
            text: "It's a significant logistical challenge. A full cleanup will be a costly and time-consuming effort, likely taking several months.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_gnomes_public_art: OutcomeModifierWeight.Neutral, // 0 -> -8 total
            },
          },
        ],
      },
    },
  },
};
