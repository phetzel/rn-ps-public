import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const memeStockFederalReserveExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "msfr_con_q1",
      questions: {
        /* Depth-0 root */
        msfr_con_q1: {
          id: "msfr_con_q1",
          text: "Critics say the Fed turned the dollar into a casino chip by betting on meme stocks. How is this not reckless gambling with public money?",
          depth: 0,
          answers: [
            {
              id: "msfr_con_q1_a1",
              type: AnswerType.Deflect, // President spin
              text: "The real gamble would be ignoring modern markets. We placed a hedged, stop-loss-guarded sliver of reserves where the growth is—call it fiscal surfing, not roulette.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "msfr_con_q1_f1",
              outcomeModifiers: {
                msfr_unexpected_profit: OutcomeModifierWeight.ModeratePositive, // +6
                msfr_plan_retracted: OutcomeModifierWeight.ModerateNegative, // –6
                msfr_market_whiplash: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_con_q1_a2",
              type: AnswerType.Reassure, // Treasury pref
              text: "Exposure is capped under 0.2 % of the balance sheet, buffered by fifteen-percent trailing stops. Loss limits auto-liquidate before taxpayers feel a pinch.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "msfr_con_q1_f1",
              outcomeModifiers: {
                msfr_plan_retracted: OutcomeModifierWeight.ModeratePositive,
                msfr_market_whiplash: OutcomeModifierWeight.ModerateNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_con_q1_a3",
              type: AnswerType.Deflect, // State overseas angle
              text: "Sovereign funds from Norway to Singapore already hold high-vol tech ETFs. We refuse to hobble American reserves while others cash in.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "msfr_con_q1_f1",
              outcomeModifiers: {
                msfr_unexpected_profit: OutcomeModifierWeight.SlightPositive,
                msfr_market_whiplash: OutcomeModifierWeight.SlightNegative,
                msfr_plan_retracted: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        msfr_con_q1_f1: {
          id: "msfr_con_q1_f1",
          text: "Foreign central banks warn confidence could crash if the meme bet backfires. Will you unwind positions before allies dump our treasuries?",
          depth: 1,
          answers: [
            {
              id: "msfr_con_q1_f1_a1",
              type: AnswerType.Reassure, // State
              text: "A coordinated exit ladder is already filed with the G-20 finance group. Any spike in volatility triggers a pre-agreed step-down, protecting cross-border confidence.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                msfr_plan_retracted: OutcomeModifierWeight.ModeratePositive,
                msfr_market_whiplash: OutcomeModifierWeight.ModerateNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_con_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "Allies love our treasuries more than cat videos love lasers. A tiny meme tranche won’t chase them away—but it might chase bigger yields.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                msfr_unexpected_profit: OutcomeModifierWeight.SlightPositive,
                msfr_plan_retracted: OutcomeModifierWeight.SlightNegative,
                msfr_market_whiplash: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "msfr_lib_q1",
      questions: {
        msfr_lib_q1: {
          id: "msfr_lib_q1",
          text: "Equity groups say the policy fuels speculation while ordinary savers earn scraps. How do you defend these wealth-gap optics?",
          depth: 0,
          answers: [
            {
              id: "msfr_lib_q1_a1",
              type: AnswerType.Inform, // Treasury
              text: "Windfall profits, if realized, flow straight into deficit reduction and expanded community banking grants—redirecting meme momentum toward public good.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                msfr_unexpected_profit: OutcomeModifierWeight.StrongPositive,
                msfr_market_whiplash: OutcomeModifierWeight.StrongNegative,
                msfr_plan_retracted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_lib_q1_a2",
              type: AnswerType.Reassure, // HHS literacy
              text: "We’re pairing the pilot with a nationwide investing-literacy campaign and 24/7 hotline to curb retail FOMO spirals.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                msfr_plan_retracted: OutcomeModifierWeight.ModeratePositive,
                msfr_market_whiplash: OutcomeModifierWeight.ModerateNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "If Wall Street bros surf the meme wave alone, Main Street misses the ride. We’re just grabbing a government-issued life vest—small, bright, carefully tethered.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                msfr_market_whiplash: OutcomeModifierWeight.SlightPositive,
                msfr_plan_retracted: OutcomeModifierWeight.SlightNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "msfr_ind_q1",
      questions: {
        msfr_ind_q1: {
          id: "msfr_ind_q1",
          text: "Retail traders burned by last year’s meme crash fear the Fed will distort prices again. What safeguards prevent another whiplash scenario?",
          depth: 0,
          answers: [
            {
              id: "msfr_ind_q1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Positions auto-adjust nightly. If thirty-day volatility exceeds limits, the system trims holdings to cash—human override prohibited.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                msfr_plan_retracted: OutcomeModifierWeight.ModeratePositive,
                msfr_market_whiplash: OutcomeModifierWeight.ModerateNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_ind_q1_a2",
              type: AnswerType.Deflect, // State
              text: "Other central banks hedge in crypto. Compared to that, a meme slice is vanilla; our risk matrices are transparent and published monthly.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                msfr_unexpected_profit: OutcomeModifierWeight.SlightPositive,
                msfr_market_whiplash: OutcomeModifierWeight.SlightNegative,
                msfr_plan_retracted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "msfr_ind_q1_a3",
              type: AnswerType.Challenge, // President pushback
              text: "Volatility existed long before TikTok tickers. The question is whether America leads in modern finance or spectates from the bleachers.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                msfr_market_whiplash: OutcomeModifierWeight.ModeratePositive,
                msfr_plan_retracted: OutcomeModifierWeight.ModerateNegative,
                msfr_unexpected_profit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
