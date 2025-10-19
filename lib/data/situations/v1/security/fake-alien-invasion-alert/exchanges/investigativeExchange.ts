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
    rootQuestion: {
      id: "q_alert_memo_authentic",
      text: "We have a leaked memo outlining a plan to fake an alien invasion to boost defense spending. Can you confirm its authenticity?",
      answers: [
        {
          id: "a_memo_deny",
          type: AnswerType.Deny,
          text: "That document is a complete and utter fabrication. It's a laughable piece of disinformation, and we won't waste time on it.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
            outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_alert_sources",
        },
        {
          id: "a_memo_admit",
          type: AnswerType.Admit,
          text: "It was a brainstorming document for a 'worst-case scenario' readiness exercise that was considered and immediately rejected as inappropriate.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Negative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.StrongPositive,
            outcome_alert_panic: OutcomeModifierWeight.StrongNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_alert_who_proposed",
        },
        {
          id: "a_memo_deflect",
          type: AnswerType.Deflect,
          text: "I'm not going to authenticate every piece of paper that gets leaked. What I will discuss is our legitimate national security priorities.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
            outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
        },
        {
          id: "a_memo_challenge",
          type: AnswerType.Challenge,
          text: "I'd question your sourcing on this. Are you really going to run with unverified documents from anonymous sources?",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
            outcome_alert_panic: OutcomeModifierWeight.Neutral,
            outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_alert_sources",
        text: "You call it a fabrication, but multiple high-level sources have confirmed this plan was seriously discussed. Are you calling them all liars?",
        answers: [
          {
            id: "a_sources_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to comment on anonymous sources peddling fiction. This administration deals in facts, and the fact is, there is no such plan.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_sources_deflect",
            type: AnswerType.Deflect,
            text: "Look, the real story here isn't some silly memo; it's the very real and serious threats our nation faces that require robust defense funding.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.StrongPositive,
            },
            followUpId: "q_alert_timing",
          },
        {
          id: "a_sources_inform",
            type: AnswerType.Inform,
            text: "I can tell you that internal brainstorming happens in every administration, but that doesn't mean every idea gets seriously considered.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
              },
            },
          },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_sources_neutral",
            type: AnswerType.Inform,
            text: "We will provide a document log and timelines to clarify how drafts are handled and rejected.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_alert_who_proposed",
        text: "If this was a real proposal that was rejected, who originally suggested using a fake alien invasion to manipulate Congress?",
        answers: [
        {
          id: "a_who_proposed_deflect",
            type: AnswerType.Deflect,
            text: "I'm not going to throw any individual under the bus for participating in a hypothetical planning exercise that was properly rejected.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.Neutral,
            outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          },
        {
          id: "a_who_proposed_inform",
            type: AnswerType.Inform,
            text: "This came from lower-level staff as part of a broader readiness planning exercise. No senior officials endorsed this approach.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                },
              },
            },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
            outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
          },
            followUpId: "q_alert_oversight",
          },
        {
          id: "a_who_proposed_admit",
            type: AnswerType.Admit,
            text: "Look, multiple departments contributed to this brainstorming, which is exactly why it was such a bad idea that got rejected quickly.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.Neutral,
            outcome_alert_panic: OutcomeModifierWeight.Neutral,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          },
          {
            id: "a_who_proposed_neutral",
            type: AnswerType.Inform,
            text: "We’re instituting cross-department reviews and ethical gates for future scenario planning.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_alert_timing",
        text: "Isn't it convenient that you're now arguing for defense spending increases right after this memo about faking threats to get defense funding leaked?",
        answers: [
          {
            id: "a_timing_deflect",
            type: AnswerType.Deflect,
            text: "Defense spending needs are based on ongoing intelligence assessments, not internal planning documents or media coverage.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_timing_inform",
            type: AnswerType.Inform,
            text: "The budget process operates on its own timeline. This leak doesn't change our assessment of legitimate national security needs.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.Neutral,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
        {
          id: "a_timing_admit",
            type: AnswerType.Admit,
            text: "You're right that the timing looks terrible. That's exactly why we need to be extra careful about separating legitimate needs from this mess.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_timing_neutral",
            type: AnswerType.Inform,
            text: "We’ll publish the budget schedule and link it to public hearings so timing is transparent.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_alert_oversight",
        text: "If lower-level staff proposed this, what does that say about the oversight and ethical standards in this administration?",
        answers: [
        {
          id: "a_oversight_inform",
            type: AnswerType.Inform,
            text: "It shows our system works - bad ideas get proposed and good oversight rejects them. That's how democratic governance should function.",
          impacts: {
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
              },
            },
          },
          outcomeModifiers: {
            outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
            outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
            outcome_alert_funding_pass: OutcomeModifierWeight.Neutral,
          },
          },
          {
            id: "a_oversight_admit",
            type: AnswerType.Admit,
            text: "You're right that we need better training on ethical boundaries. We're implementing new guidelines for hypothetical scenario planning.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive,
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_oversight_deflect",
            type: AnswerType.Deflect,
            text: "The real oversight failure is whoever leaked this internal document to undermine legitimate government planning processes.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative,
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive,
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_oversight_neutral",
            type: AnswerType.Inform,
            text: "We will release updated ethics training and oversight workflows for scenario planning.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
