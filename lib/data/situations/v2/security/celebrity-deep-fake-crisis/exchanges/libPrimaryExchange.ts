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
    rootQuestionId: "q_deep_fake_disinfo",
    questions: {
      q_deep_fake_disinfo: {
        id: "q_deep_fake_disinfo",
        text: "This flood of deep-fakes is a disinformation crisis. What is the administration's plan to stop the spread and regulate this dangerous technology?",
        depth: 0,
        answers: [
          {
            id: "a_disinfo_inform",
            type: AnswerType.Inform,
            text: "The Attorney General is already drafting landmark legislation to address AI-generated content, including clear watermarking and disclosure laws.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.StrongPositive, // +8
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_deep_fake_debunked:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_deep_fake_timeline",
          },
          {
            id: "a_disinfo_challenge",
            type: AnswerType.Challenge,
            text: "The responsibility for this lies with the social media platforms that profit from engagement, regardless of whether the content is real or fake.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.SlightPositive, // +4
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_deep_fake_debunked:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_deep_fake_timeline: {
        id: "q_deep_fake_timeline",
        text: "That sounds good, but legislation takes time. What are you doing right now, today, to help people distinguish fact from these sophisticated fakes?",
        depth: 1,
        answers: [
          {
            id: "a_timeline_reassure",
            type: AnswerType.Reassure,
            text: "HHS is launching a public awareness campaign with tips on media literacy and critical thinking to help citizens spot potential fakes.",
            impacts: {
              cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.Neutral, // 0 -> +8 total
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_deep_fake_debunked:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
            },
          },
          {
            id: "a_timeline_admit",
            type: AnswerType.Admit,
            text: "Honestly, the technology is moving faster than our ability to regulate it. There is no simple, immediate solution to this problem.",
            impacts: {},
            outcomeModifiers: {
              outcome_deep_fake_new_laws: OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
              outcome_deep_fake_trust_plummets:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_deep_fake_debunked: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
        ],
      },
    },
  },
};
