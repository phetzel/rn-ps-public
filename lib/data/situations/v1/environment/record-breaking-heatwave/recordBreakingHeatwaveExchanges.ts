import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const recordBreakingHeatwaveExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "rbh_lib_q1",
      questions: {
        rbh_lib_q1: {
          id: "rbh_lib_q1",
          text: "People faint on sidewalks while officials debate cloud seeding. How will you protect vulnerable residents this week?",
          depth: 0,
          answers: [
            {
              id: "rbh_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Cooling centers stay open late, transit is free to them, and medical teams are on call. We’re mobilizing resources daily to keep everyone safe.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "rbh_lib_q1_f1",
              outcomeModifiers: {
                rbh_grants_praised: OutcomeModifierWeight.ModeratePositive,
                rbh_grid_collapse: OutcomeModifierWeight.ModerateNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Local officials lead emergency plans. The heat is rough, but let’s not stoke panic while every state works on its own cooling strategy.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "rbh_lib_q1_f1",
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.SlightPositive,
                rbh_grants_praised: OutcomeModifierWeight.SlightNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "ER surge logs show doubled heatstroke cases. Secret mobile clinics are being dispatched tonight to crowded districts to prevent fatalities.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "rbh_lib_q1_f1",
              outcomeModifiers: {
                rbh_grants_praised: OutcomeModifierWeight.StrongPositive,
                rbh_grid_collapse: OutcomeModifierWeight.StrongNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        rbh_lib_q1_f1: {
          id: "rbh_lib_q1_f1",
          text: "Some experts warn cloud seeding could cause floods. Will you fund it anyway or stick to basic relief measures?",
          depth: 1,
          answers: [
            {
              id: "rbh_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "We’re studying cloud seeding carefully. Grants go first to shade projects and cooling shelters while scientists assess any rainfall risks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                rbh_grants_praised: OutcomeModifierWeight.ModeratePositive,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.ModerateNegative,
                rbh_grid_collapse: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Cloud seeding is unproven. We won’t waste funds on weather experiments when basic infrastructure still needs upgrades first.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.ModeratePositive,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.ModerateNegative,
                rbh_grants_praised: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "rbh_con_q1",
      questions: {
        rbh_con_q1: {
          id: "rbh_con_q1",
          text: "Businesses fear power rationing if the heat persists. How will you keep the grid stable without crushing industry?",
          depth: 0,
          answers: [
            {
              id: "rbh_con_q1_a1",
              type: AnswerType.Inform,
              text: "Treasury supports temporary energy rebates for companies investing in efficiency upgrades and backup generators to avoid rationing.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                rbh_grants_praised: OutcomeModifierWeight.ModeratePositive,
                rbh_grid_collapse: OutcomeModifierWeight.ModerateNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Grid managers handle supply, not Washington. We’ll cheer innovation from the sidelines instead of micromanaging private utilities.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.SlightPositive,
                rbh_grants_praised: OutcomeModifierWeight.SlightNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_con_q1_a3",
              type: AnswerType.Challenge,
              text: "If companies keep lights on, will you promise zero new regulations or will emergency rules hit them when demand spikes?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.ModeratePositive,
                rbh_grants_praised: OutcomeModifierWeight.ModerateNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "rbh_inv_q1",
      questions: {
        rbh_inv_q1: {
          id: "rbh_inv_q1",
          text: "Heat records keep shattering while hospitals overflow. Did your administration ignore warnings and who pays for skyrocketing power bills?",
          depth: 0,
          answers: [
            {
              id: "rbh_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Early forecasts underestimated this spike, but we’re funding new transformers and emergency aid so utility costs don’t crush families.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                rbh_grants_praised: OutcomeModifierWeight.ModeratePositive,
                rbh_grid_collapse: OutcomeModifierWeight.ModerateNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Local utilities set prices, not us. Blame aging wires and record heat, but know we’re shipping fans and water instead of finger pointing.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.SlightPositive,
                rbh_grants_praised: OutcomeModifierWeight.SlightNegative,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rbh_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Restricted ER logs reveal heatstroke patients doubling each week. Treasury eyes emergency subsidies if the grid fails to keep pace.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                rbh_grid_collapse: OutcomeModifierWeight.StrongNegative,
                rbh_grants_praised: OutcomeModifierWeight.StrongPositive,
                rbh_cloud_seeding_backfires: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
