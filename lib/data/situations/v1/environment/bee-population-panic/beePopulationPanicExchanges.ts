import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const beePopulationPanicExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "bpp_lib_q1",
      questions: {
        bpp_lib_q1: {
          id: "bpp_lib_q1",
          text: "Environmentalists say disappearing bees show years of neglect. What is the administration doing to save pollinators and crops?",
          depth: 0,
          answers: [
            {
              id: "bpp_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We funded monitoring from day one; data now shows pesticides plus climate stress. We're deploying emergency hives and investigating chemical firms.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "bpp_lib_q1_f1",
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.ModeratePositive,
                bpp_crop_failure: OutcomeModifierWeight.ModerateNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "This bee blip is global, not just ours. Let's stay focused on solutions instead of finger-pointing about early warnings.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "bpp_lib_q1_f1",
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.SlightNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.SlightPositive,
                bpp_crop_failure: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Confidential hive sensors show pesticide-laden feed at several commercial farms. We're ready to issue recalls and fly-in replacement hives immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "bpp_lib_q1_f1",
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.StrongPositive,
                bpp_crop_failure: OutcomeModifierWeight.StrongNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        bpp_lib_q1_f1: {
          id: "bpp_lib_q1_f1",
          text: "Will you restrict pesticide imports or fund urban beekeeping to help recovery?",
          depth: 1,
          answers: [
            {
              id: "bpp_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We're reviewing imports and launching grants for rooftop hives. No city will be without pollinators by next spring.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.ModeratePositive,
                bpp_crop_failure: OutcomeModifierWeight.ModerateNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Our priority is stabilizing current farms first. Urban projects sound nice but won't fix the immediate crisis, so let's stay realistic.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.ModerateNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.ModeratePositive,
                bpp_crop_failure: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "bpp_inv_q1",
      questions: {
        bpp_inv_q1: {
          id: "bpp_inv_q1",
          text: "Agricultural experts say bee loss may tie to untested chemicals. Why did the administration ignore early warnings?",
          depth: 0,
          answers: [
            {
              id: "bpp_inv_q1_a1",
              type: AnswerType.Inform,
              text: "We funded monitoring from day one; data now shows pesticides plus climate stress. We're deploying emergency hives and investigating chemical firms.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.ModeratePositive,
                bpp_crop_failure: OutcomeModifierWeight.ModerateNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "This bee blip is global, not just ours. Let's stay focused on solutions instead of finger-pointing about early warnings.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                bpp_conspiracy_lingers: OutcomeModifierWeight.SlightPositive,
                bpp_rescue_success: OutcomeModifierWeight.SlightNegative,
                bpp_crop_failure: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Confidential hive sensors show pesticide-laden feed at several commercial farms. We're ready to issue recalls and fly-in replacement hives immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.StrongPositive,
                bpp_crop_failure: OutcomeModifierWeight.StrongNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "bpp_con_q1",
      questions: {
        bpp_con_q1: {
          id: "bpp_con_q1",
          text: "Critics say government reliance on imported honey shows failure to protect our own bees. What steps will you take to avoid handouts to big farms?",
          depth: 0,
          answers: [
            {
              id: "bpp_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Importing honey is a temporary safeguard. Taxpayers won't subsidize mega farms; local producers will receive emergency loan guarantees only if necessary.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.SlightPositive,
                bpp_crop_failure: OutcomeModifierWeight.SlightNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_con_q1_a2",
              type: AnswerType.Inform,
              text: "We're funding rapid breeding programs and disease screening to rebuild colonies. Any import support will be transparent and limited.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                bpp_rescue_success: OutcomeModifierWeight.ModeratePositive,
                bpp_crop_failure: OutcomeModifierWeight.ModerateNegative,
                bpp_conspiracy_lingers: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bpp_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Should we let bees vanish to avoid big-farm aid? We're focusing on real solutions instead of knee-jerk spending, and we'll hold corporations accountable.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                bpp_conspiracy_lingers: OutcomeModifierWeight.ModeratePositive,
                bpp_rescue_success: OutcomeModifierWeight.ModerateNegative,
                bpp_crop_failure: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
