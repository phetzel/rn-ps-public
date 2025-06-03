import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const nationalNapProductivityActExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "npa_inv_q1",
      questions: {
        /* Depth-0 root */
        npa_inv_q1: {
          id: "npa_inv_q1",
          text: "Auditors say installing nap pods could cost firms billions. Why impose this mandate instead of voluntary wellness credits?",
          depth: 0,
          answers: [
            {
              id: "npa_inv_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "Data show fatigue drains $136 B a year. Pods repay themselves in eighteen months through fewer errors and injuries; mandate simply accelerates adoption.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "npa_inv_q1_f1",
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.ModeratePositive,
                nap_program_paused_review:
                  OutcomeModifierWeight.ModerateNegative,
                nap_workplace_uproar_fines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_inv_q1_a2",
              type: AnswerType.Deflect, // President joke
              text: "A rested nation dreams big profits. If beanbags break budgets, maybe those CEOs need a nap more than anyone else in the building.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "npa_inv_q1_f1",
              outcomeModifiers: {
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.SlightPositive,
                nap_program_paused_review: OutcomeModifierWeight.SlightNegative,
                nap_productivity_bump_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Pilot agencies cut errors 23 % with $400 per-employee cost. OSHA rules suspend the program if ROI drops below five percent after a full fiscal year.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "npa_inv_q1_f1",
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.StrongPositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.StrongNegative,
                nap_program_paused_review: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        npa_inv_q1_f1: {
          id: "npa_inv_q1_f1",
          text: "Critics warn ‘nap fines’ will punish small businesses hardest. Will exemptions or subsidies be introduced to ease compliance costs?",
          depth: 1,
          answers: [
            {
              id: "npa_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Yes. Firms under $5 M revenue receive a tax credit covering eighty percent of pod expenses and can share neighborhood nap hubs to keep costs minimal.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nap_program_paused_review:
                  OutcomeModifierWeight.ModeratePositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.ModerateNegative,
                nap_productivity_bump_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "Small shops can trade beanbags for hammocks—innovation over irritation—and, yes, the entire compliance form fits comfortably on a single sticky note.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.SlightPositive,
                nap_program_paused_review: OutcomeModifierWeight.SlightNegative,
                nap_productivity_bump_success: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "npa_lib_q1",
      questions: {
        npa_lib_q1: {
          id: "npa_lib_q1",
          text: "Workers like naps, but unions worry breaks will be unpaid. How will hourly staff be compensated during mandated rest periods?",
          depth: 0,
          answers: [
            {
              id: "npa_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Nap time counts as paid break under the act; regulations mirror federal lunch-break rules, guaranteeing no wage loss for hourly employees.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.ModeratePositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.ModerateNegative,
                nap_program_paused_review: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_lib_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Tax offsets for small firms cover payroll during naps, and large corporations may deduct the cost like any wellness benefit on Schedule C.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nap_program_paused_review:
                  OutcomeModifierWeight.ModeratePositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.ModerateNegative,
                nap_productivity_bump_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "From pyramids to power-naps, great projects pay workers first—dreams on the clock are part of building tomorrow’s prosperity.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.SlightPositive,
                nap_program_paused_review: OutcomeModifierWeight.SlightNegative,
                nap_workplace_uproar_fines: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "npa_con_q1",
      questions: {
        npa_con_q1: {
          id: "npa_con_q1",
          text: "Mandatory naps sound like nanny-state meddling. Won’t this tank productivity and hand China a competitive edge?",
          depth: 0,
          answers: [
            {
              id: "npa_con_q1_a1",
              type: AnswerType.Challenge,
              text: "China studies siestas too; rested workers think faster and innovate more. Our edge sharpens rather than dulls when employees aren’t sleep-walking through shifts.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.ModeratePositive,
                nap_program_paused_review:
                  OutcomeModifierWeight.ModerateNegative,
                nap_workplace_uproar_fines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_con_q1_a2",
              type: AnswerType.Reassure, // HHS science
              text: "Peer nations observed three-percent GDP lifts with structured rest. Our pilot measures the same metrics before expanding nationwide.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nap_productivity_bump_success:
                  OutcomeModifierWeight.StrongPositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.StrongNegative,
                nap_program_paused_review: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "npa_con_q1_a3",
              type: AnswerType.Deflect, // Treasury cost
              text: "Cost per worker is less than a daily latte, while returns dwarf that figure—caffeine is optional, rest is priceless.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nap_program_paused_review: OutcomeModifierWeight.SlightPositive,
                nap_workplace_uproar_fines:
                  OutcomeModifierWeight.SlightNegative,
                nap_productivity_bump_success: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
