import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestionId: "q_deep_fake_foreign",
    questions: {
      q_deep_fake_foreign: {
        id: "q_deep_fake_foreign",
        text: "The coordinated nature of this suggests a foreign influence campaign. Is the State Department treating this as an attack on our democracy?",
        depth: 0,
        answers: [
          {
            id: "a_foreign_deflect",
            type: AnswerType.Deflect,
            text: "We are exploring all possibilities, including the involvement of foreign state or non-state actors. It is a matter of national security.",
            impacts: {
              cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.SlightPositive, // +4
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_deep_fake_debunked:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
          {
            id: "a_foreign_deny",
            type: AnswerType.Deny,
            text: "It's too early to make that determination. Attributing cyber activity is complex, and right now our focus is on domestic solutions.",
            impacts: {},
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.SlightPositive, // +4
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_deep_fake_debunked: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_deep_fake_inaction",
          },
        ],
      },
      q_deep_fake_inaction: {
        id: "q_deep_fake_inaction",
        text: "So while you focus on 'domestic solutions,' a foreign power could be manipulating your citizens. Doesn't that sound like inaction?",
        depth: 1,
        answers: [
          {
            id: "a_inaction_challenge",
            type: AnswerType.Challenge,
            text: "It is not inaction. The most robust defense is a well-informed citizenry and strong laws, which is exactly what we are building.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_deep_fake_debunked: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_inaction_reassure",
            type: AnswerType.Reassure,
            text: "Our cybersecurity teams are working 24/7 to trace the origin. Rest assured, if we find a foreign actor, there will be consequences.",
            impacts: {
              cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_deep_fake_debunked:
                OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
