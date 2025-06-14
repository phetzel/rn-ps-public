import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const privateMovieTheaterRenovationExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "pmtr_lib_q1",
      questions: {
        pmtr_lib_q1: {
          id: "pmtr_lib_q1",
          text: "Liberal media discovered education funds used to renovate the president's private theater. Was this legal?",
          depth: 0,
          answers: [
            {
              id: "pmtr_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, a small portion was reallocated under discretionary authority. Treasury will reimburse the education account immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pmtr_lib_q1_f1",
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModeratePositive,
                theater_oversight_hearings: OutcomeModifierWeight.ModerateNegative,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pmtr_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Why raid education grants for a private screening room? This looks like misuse no matter how small the amount.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "pmtr_lib_q1_f1",
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModeratePositive,
                theater_oversight_hearings: OutcomeModifierWeight.ModerateNegative,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pmtr_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Theater upgrades also allow educational film events for students. Let's not exaggerate this routine maintenance.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Education]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "pmtr_lib_q1_f1",
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.SlightNegative,
                theater_oversight_hearings: OutcomeModifierWeight.SlightPositive,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pmtr_lib_q1_f1: {
          id: "pmtr_lib_q1_f1",
          text: "Will the White House reimburse the education department?",
          depth: 1,
          answers: [
            {
              id: "pmtr_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Treasury confirms repayment is scheduled this quarter and budget adjustments will be published online.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModeratePositive,
                theater_oversight_hearings: OutcomeModifierWeight.ModerateNegative,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pmtr_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The repayment schedule is being finalized. We'll share details once agencies sign off.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Education]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.SlightNegative,
                theater_oversight_hearings: OutcomeModifierWeight.SlightPositive,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pmtr_con_q1",
      questions: {
        pmtr_con_q1: {
          id: "pmtr_con_q1",
          text: "Conservative outlets claim this proves elitism. Should taxpayers foot the bill for cushy screenings?",
          depth: 0,
          answers: [
            {
              id: "pmtr_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Theater upgrades will be covered by private donations moving forward. No future education funds are at risk.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModerateNegative,
                theater_oversight_hearings: OutcomeModifierWeight.ModeratePositive,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pmtr_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The renovation cost is modest. Critics are inflating a routine facility update into scandal fodder.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.SlightNegative,
                theater_oversight_hearings: OutcomeModifierWeight.Neutral,
                theater_story_dies: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "pmtr_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Why not pay for this out of pocket instead of redirecting education grants?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModeratePositive,
                theater_oversight_hearings: OutcomeModifierWeight.ModerateNegative,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "pmtr_ind_q1",
      questions: {
        pmtr_ind_q1: {
          id: "pmtr_ind_q1",
          text: "Independent outlets ask if more school programs will lose funds for personal perks. What safeguards exist?",
          depth: 0,
          answers: [
            {
              id: "pmtr_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "Safeguards are already in place. This reallocation was a one-time oversight that we are correcting.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Education]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.SlightNegative,
                theater_oversight_hearings: OutcomeModifierWeight.SlightPositive,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pmtr_ind_q1_a2",
              type: AnswerType.Inform,
              text: "Treasury's budget note shows the amount and the repayment plan, ensuring no ongoing impact on school programs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theater_funds_repurposed: OutcomeModifierWeight.ModeratePositive,
                theater_oversight_hearings: OutcomeModifierWeight.ModerateNegative,
                theater_story_dies: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
