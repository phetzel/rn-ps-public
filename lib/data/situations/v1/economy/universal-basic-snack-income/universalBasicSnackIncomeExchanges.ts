import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const universalBasicSnackIncomeExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ubsi_inv_q1",
      questions: {
        /* Depth-0 root */
        ubsi_inv_q1: {
          id: "ubsi_inv_q1",
          text: "Internal memos warn half the snack-credit redemptions could be resold for cash. Why launch a program wide open to fraud and empty calories?",
          depth: 0,
          answers: [
            {
              id: "ubsi_inv_q1_a1",
              type: AnswerType.Reassure, // Treasury pref
              text: "Credits are prepaid cards geofenced to verified vendors and blocked at ATMs. Real-time data flags bulk trades, and claw-back fines hit violators within days.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ubsi_inv_q1_f1",
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.ModeratePositive, // +6
                ubsi_junk_black_market: OutcomeModifierWeight.ModerateNegative, // −6
                ubsi_program_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_inv_q1_a2",
              type: AnswerType.Inform, // HHS intel
              text: "Pilot city data show black-market activity under three percent once protein-bonus multipliers kick in. Algorithms shift menus toward healthier stock daily.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ubsi_inv_q1_f1",
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.StrongPositive, // +8
                ubsi_program_cancelled: OutcomeModifierWeight.StrongNegative, // −8
                ubsi_junk_black_market: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_inv_q1_a3",
              type: AnswerType.Challenge, // President push
              text: "We can spot fraud by lunch. Let’s not deny kids carrot chips because a few hustlers want candy cash—catch crooks, keep snacks.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ubsi_inv_q1_f1",
              outcomeModifiers: {
                ubsi_junk_black_market: OutcomeModifierWeight.SlightPositive, // +4
                ubsi_program_cancelled: OutcomeModifierWeight.SlightNegative, // −4
                ubsi_healthier_snacks: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        ubsi_inv_q1_f1: {
          id: "ubsi_inv_q1_f1",
          text: "If fraud balloons anyway, will you suspend the stipend or double down with stricter food policing?",
          depth: 1,
          answers: [
            {
              id: "ubsi_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Abuse past two percent triggers an automatic pause and vendor-license purge—no blank check, only bite-sized accountability.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ubsi_program_cancelled: OutcomeModifierWeight.ModeratePositive,
                ubsi_junk_black_market: OutcomeModifierWeight.ModerateNegative,
                ubsi_healthier_snacks: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "If crooks turn applesauce into gold, we’ll yank their spoon—then hand honest folks a fresher snack.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ubsi_junk_black_market: OutcomeModifierWeight.SlightPositive,
                ubsi_healthier_snacks: OutcomeModifierWeight.SlightNegative,
                ubsi_program_cancelled: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ubsi_lib_q1",
      questions: {
        ubsi_lib_q1: {
          id: "ubsi_lib_q1",
          text: "Nutrition advocates cheer the concept but fear corporate snack giants will dominate. How do you protect local healthy vendors?",
          depth: 0,
          answers: [
            {
              id: "ubsi_lib_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "Credit algorithm boosts reimburse-ment 10 % for locally sourced, low-sugar options and waives kiosk fees for certified farmers-market partners.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.ModeratePositive,
                ubsi_program_cancelled: OutcomeModifierWeight.ModerateNegative,
                ubsi_junk_black_market: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_lib_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Small vendors get fast-track onboarding and micro-loan bundles financed by re-routed agribusiness subsidies—we’re leveling the shelf space.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.SlightPositive,
                ubsi_junk_black_market: OutcomeModifierWeight.SlightNegative,
                ubsi_program_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "Big Snack can still play—just with fewer sprinkles of sugar and more sprinkles of fair competition.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ubsi_junk_black_market: OutcomeModifierWeight.SlightPositive,
                ubsi_healthier_snacks: OutcomeModifierWeight.SlightNegative,
                ubsi_program_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "ubsi_con_q1",
      questions: {
        ubsi_con_q1: {
          id: "ubsi_con_q1",
          text: "Budget hawks say snack credits will bloat the deficit and expand nanny-state intrusion. Why not let citizens buy snacks with their own money?",
          depth: 0,
          answers: [
            {
              id: "ubsi_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "We already subsidize corn syrup. Redirecting pennies toward healthier bites saves healthcare dollars down the line—call it preventive fiscal fitness.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.ModeratePositive,
                ubsi_program_cancelled: OutcomeModifierWeight.ModerateNegative,
                ubsi_junk_black_market: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_con_q1_a2",
              type: AnswerType.Reassure, // Treasury cost cap
              text: "The program tops out at four-tenths of a percent of GDP and is fully offset by trimming redundant farm subsidies—zero net deficit impact.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ubsi_program_cancelled: OutcomeModifierWeight.ModeratePositive,
                ubsi_junk_black_market: OutcomeModifierWeight.ModerateNegative,
                ubsi_healthier_snacks: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ubsi_con_q1_a3",
              type: AnswerType.Deflect, // HHS science
              text: "Health costs from poor snacking dwarf this budget line. A smarter vending machine today beats a costly ER visit tomorrow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ubsi_healthier_snacks: OutcomeModifierWeight.SlightPositive,
                ubsi_junk_black_market: OutcomeModifierWeight.SlightNegative,
                ubsi_program_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
