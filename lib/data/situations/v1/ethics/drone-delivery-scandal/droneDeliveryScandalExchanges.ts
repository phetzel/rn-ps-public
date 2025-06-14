import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const droneDeliveryScandalExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "dds_con_q1",
      questions: {
        dds_con_q1: {
          id: "dds_con_q1",
          text: "Conservative columnists reveal drones dropping gourmet meals at the president's house. Why are taxpayer drones serving fancy dinners?",
          depth: 0,
          answers: [
            {
              id: "dds_con_q1_a1",
              type: AnswerType.Deflect,
              text: "These flights were misclassified expense tests; the food is incidental. Let's talk about jobs from drone innovation instead.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "dds_con_q1_f1",
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.SlightNegative,
                drone_faa_waiver: OutcomeModifierWeight.SlightPositive,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dds_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Our security drills use drones to test routes. The meals are just payload weight. Maybe critics prefer we practice with empty boxes?",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "dds_con_q1_f1",
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.ModerateNegative,
                drone_faa_waiver: OutcomeModifierWeight.ModeratePositive,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dds_con_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Flight manifests show weekend routes logged as training flights from the base. Deliveries ended this week pending a review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "dds_con_q1_f1",
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.StrongPositive,
                drone_faa_waiver: OutcomeModifierWeight.StrongNegative,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        dds_con_q1_f1: {
          id: "dds_con_q1_f1",
          text: "Critics say the flights ignore no-fly zones. Do you have clearance records for these food runs?",
          depth: 1,
          answers: [
            {
              id: "dds_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Yes, we have all clearances and will share them with the oversight committee. Safety is paramount, even for lunch.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.ModeratePositive,
                drone_faa_waiver: OutcomeModifierWeight.ModerateNegative,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dds_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Clearances exist, but the bigger question is why reporters obsess over menu choices while drones keep us safe.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.SlightNegative,
                drone_faa_waiver: OutcomeModifierWeight.SlightPositive,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "dds_lib_q1",
      questions: {
        dds_lib_q1: {
          id: "dds_lib_q1",
          text: "Liberal news asks if drone deliveries flaunt privilege while families face food shortages. Will the president end this perk?",
          depth: 0,
          answers: [
            {
              id: "dds_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We recognize the optics are bad. The president has ordered the meals stopped while we review drone policies.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.StrongPositive,
                drone_faa_waiver: OutcomeModifierWeight.StrongNegative,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dds_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "These flights were small-scale trials. Let's focus on feeding programs we expanded nationwide instead of high-tech lunch gossip.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.SlightNegative,
                drone_faa_waiver: OutcomeModifierWeight.SlightPositive,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "dds_ind_q1",
      questions: {
        dds_ind_q1: {
          id: "dds_ind_q1",
          text: "Independent outlets wonder if using federal drones for meals sets a precedent for personal perks. Any policy changes planned?",
          depth: 0,
          answers: [
            {
              id: "dds_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Yes. We are drafting guidelines to restrict nonessential drone flights and exploring ways to repay costs to taxpayers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.ModeratePositive,
                drone_faa_waiver: OutcomeModifierWeight.ModerateNegative,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dds_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Personal perks are not the goal. These deliveries test emergency logistics. Ending them entirely could hinder progress.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                drone_deliveries_halted: OutcomeModifierWeight.SlightNegative,
                drone_faa_waiver: OutcomeModifierWeight.SlightPositive,
                drone_foodtech_spin: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
