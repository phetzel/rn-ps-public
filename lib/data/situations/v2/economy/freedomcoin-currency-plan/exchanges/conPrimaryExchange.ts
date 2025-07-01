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
    rootQuestionId: "q_freedom_coin_security",
    questions: {
      q_freedom_coin_security: {
        id: "q_freedom_coin_security",
        text: "How would Homeland Security even monitor an anonymous cryptocurrency? Aren't you just creating a gift for terrorists and money launderers?",
        depth: 0,
        answers: [
          {
            id: "a_security_inform",
            type: AnswerType.Inform,
            text: "The architecture of FreedomCoin includes robust, next-generation security protocols that provide more traceability than traditional cash.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_shelved: OutcomeModifierWeight.Neutral, // 0
              outcome_freedom_coin_underground:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_security_deflect",
            type: AnswerType.Deflect,
            text: "Criminals already use the current financial system. The goal here is to build a better, more secure one for law-abiding citizens.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_underground:
                OutcomeModifierWeight.SlightNegative, // -2
            },
            followUpId: "q_freedom_coin_proof",
          },
        ],
      },
      q_freedom_coin_proof: {
        id: "q_freedom_coin_proof",
        text: "That sounds good, but what proof do you have? Has this 'next-gen' tech been independently verified or are we just taking your word for it?",
        depth: 1,
        answers: [
          {
            id: "a_proof_reassure",
            type: AnswerType.Reassure,
            text: "The technology is currently undergoing rigorous third-party audits. No system will be launched until it meets our highest security standards.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_proof_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to get into the technical weeds, but suffice it to say, we are confident that our system is more secure than the status quo.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_freedom_coin_panic: OutcomeModifierWeight.SlightPositive, // +4
              outcome_freedom_coin_shelved:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_freedom_coin_underground: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
