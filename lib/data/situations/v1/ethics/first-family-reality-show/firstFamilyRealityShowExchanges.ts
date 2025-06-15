import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const firstFamilyRealityShowExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ffrs_inv_q1",
      questions: {
        ffrs_inv_q1: {
          id: "ffrs_inv_q1",
          text: "Investigative journalists uncovered a reality show filming inside the White House. Did the contracts bypass normal ethics reviews?",
          depth: 0,
          answers: [
            {
              id: "ffrs_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Justice is reviewing the agreements. If any clauses violated ethics rules, the show will halt and penalties will follow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ffrs_inv_q1_f1",
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.ModeratePositive,
                ffrs_ratings_hit: OutcomeModifierWeight.ModerateNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "The program aims to demystify government. Any paperwork gaps were unintentional and are now being corrected.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "ffrs_inv_q1_f1",
              outcomeModifiers: {
                ffrs_ethics_greenlight: OutcomeModifierWeight.SlightPositive,
                ffrs_show_cancelled: OutcomeModifierWeight.SlightNegative,
                ffrs_ratings_hit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "Isn't turning the residence into a TV set a blatant conflict of interest for public officials?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "ffrs_inv_q1_f1",
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.ModeratePositive,
                ffrs_ratings_hit: OutcomeModifierWeight.ModerateNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ffrs_inv_q1_f1: {
          id: "ffrs_inv_q1_f1",
          text: "Were any payments or perks offered to officials for appearing on camera?",
          depth: 1,
          answers: [
            {
              id: "ffrs_inv_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Contract terms show per-episode honoraria, which DOJ now flags as potential conflicts. Refunds may be required.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.StrongPositive,
                ffrs_ratings_hit: OutcomeModifierWeight.StrongNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Appearances were voluntary and unpaid. Any perception of perks is being addressed to maintain transparency.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ffrs_ethics_greenlight: OutcomeModifierWeight.SlightPositive,
                ffrs_show_cancelled: OutcomeModifierWeight.SlightNegative,
                ffrs_ratings_hit: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ffrs_con_q1",
      questions: {
        ffrs_con_q1: {
          id: "ffrs_con_q1",
          text: "Conservative media slam the White House for turning governing into entertainment. Will this reality show be cancelled?",
          depth: 0,
          answers: [
            {
              id: "ffrs_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Isn't this show just self-promotion on the taxpayers' dime while governing suffers?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.ModeratePositive,
                ffrs_ratings_hit: OutcomeModifierWeight.ModerateNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_con_q1_a2",
              type: AnswerType.Reassure,
              text: "If reviews find violations, the show will end immediately and any profits will be refunded to the treasury.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.ModeratePositive,
                ffrs_ratings_hit: OutcomeModifierWeight.ModerateNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The show provides a behind-the-scenes look at civic life. Let's not overreact before reviews finish.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ffrs_ethics_greenlight: OutcomeModifierWeight.SlightPositive,
                ffrs_show_cancelled: OutcomeModifierWeight.SlightNegative,
                ffrs_ratings_hit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ffrs_lib_q1",
      questions: {
        ffrs_lib_q1: {
          id: "ffrs_lib_q1",
          text: "Liberal papers question the optics of monetizing the White House. What assurances can you offer that public duties aren't compromised?",
          depth: 0,
          answers: [
            {
              id: "ffrs_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "The show is under strict review. We aim to showcase government transparently while ensuring no conflicts with official work.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ffrs_ethics_greenlight: OutcomeModifierWeight.ModeratePositive,
                ffrs_show_cancelled: OutcomeModifierWeight.ModerateNegative,
                ffrs_ratings_hit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Isn't this just reality-TV profiteering? What about the power imbalance with staff on camera?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                ffrs_show_cancelled: OutcomeModifierWeight.ModeratePositive,
                ffrs_ratings_hit: OutcomeModifierWeight.ModerateNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ffrs_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Viewers enjoy seeing democracy up close. Let's not dismiss civic education just because cameras are involved.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ffrs_ratings_hit: OutcomeModifierWeight.SlightPositive,
                ffrs_show_cancelled: OutcomeModifierWeight.SlightNegative,
                ffrs_ethics_greenlight: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
