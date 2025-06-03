import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const robotTaxDebateExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "rtd_con_q1",
      questions: {
        /* Depth-0 root */
        rtd_con_q1: {
          id: "rtd_con_q1",
          text: "Business groups warn the new robot tax will drive factories overseas and kill human jobs anyway. Why press ahead with this levy?",
          depth: 0,
          answers: [
            {
              id: "rtd_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "If a company’s model needs taxpayer-subsidised robots while workers queue at food banks, the model is broken—not our fairness fee. Time for bots to pay up.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "rtd_con_q1_f1",
              outcomeModifiers: {
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_con_q1_a2",
              type: AnswerType.Inform, // Treasury
              text: "Levy only hits firms where bots exceed twenty-five percent of labour hours. Revenue funds retraining credits that keep talent onshore.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "rtd_con_q1_f1",
              outcomeModifiers: {
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_con_q1_a3",
              type: AnswerType.Deflect, // State
              text: "Europe and Korea draft similar levies; we refuse to be a dumping ground for untaxed, job-eating tin cans built abroad.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "rtd_con_q1_f1",
              outcomeModifiers: {
                robot_tax_revenue_windfall:
                  OutcomeModifierWeight.SlightPositive,
                robot_tax_business_exodus: OutcomeModifierWeight.SlightNegative,
                robot_tax_compromise_credit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        rtd_con_q1_f1: {
          id: "rtd_con_q1_f1",
          text: "Small manufacturers say they can’t afford the audit paperwork that comes with the levy. Will you create a streamlined exemption?",
          depth: 1,
          answers: [
            {
              id: "rtd_con_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Firms under five-million-dollar revenue file a one-page attestation; no third-party audit needed. Compliance costs stay below two hundred dollars a year.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_con_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "If a form that short fits on a coffee mug scares them, maybe robots aren’t their biggest competitive threat after all.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                robot_tax_business_exodus: OutcomeModifierWeight.SlightPositive,
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.SlightNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "rtd_lib_q1",
      questions: {
        rtd_lib_q1: {
          id: "rtd_lib_q1",
          text: "Labour advocates celebrate the levy but fear loopholes. How will you ensure companies actually fund worker up-skilling?",
          depth: 0,
          answers: [
            {
              id: "rtd_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Firms offset the levy dollar-for-dollar with documented training spend—verified by W-2 job-code changes, not glossy brochures or PR slides.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.StrongPositive,
                robot_tax_business_exodus: OutcomeModifierWeight.StrongNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_lib_q1_a2",
              type: AnswerType.Reassure, // HHS
              text: "Levy revenue funds free coding bootcamps, mental-health coverage, and wage insurance—so every worker lands on their feet in a new role.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_revenue_windfall:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_compromise_credit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Robots don’t pay payroll taxes or buy lunch. Until they join the PTA, they can help bankroll human futures.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                robot_tax_business_exodus: OutcomeModifierWeight.SlightPositive,
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.SlightNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "rtd_ind_q1",
      questions: {
        rtd_ind_q1: {
          id: "rtd_ind_q1",
          text: "Analysts warn the levy could spark trade disputes if foreign robots get tariff waivers. How will you avoid retaliation?",
          depth: 0,
          answers: [
            {
              id: "rtd_ind_q1_a1",
              type: AnswerType.Deflect, // State intl
              text: "Our levy targets domestic payroll metrics, not import origin, and WTO counsel confirms we are firmly inside the trade-law foul lines.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_revenue_windfall:
                  OutcomeModifierWeight.SlightPositive,
                robot_tax_business_exodus: OutcomeModifierWeight.SlightNegative,
                robot_tax_compromise_credit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_ind_q1_a2",
              type: AnswerType.Inform, // Treasury numbers
              text: "Even with some off-shoring, surtax revenue funds relocation grants and cushions GDP impact to just 0.1 percent—our models are public.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_revenue_windfall:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_compromise_credit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rtd_ind_q1_a3",
              type: AnswerType.Reassure, // HHS human angle
              text: "Displaced workers receive wage insurance for one year plus training stipends—fully financed by the robot levy, not general taxes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                robot_tax_compromise_credit:
                  OutcomeModifierWeight.ModeratePositive,
                robot_tax_business_exodus:
                  OutcomeModifierWeight.ModerateNegative,
                robot_tax_revenue_windfall: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
