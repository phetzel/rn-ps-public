import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const nationalBirdMigrationCrisisExchanges: ExchangeData[] = [
  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "nbmc_ind_q1",
      questions: {
        nbmc_ind_q1: {
          id: "nbmc_ind_q1",
          text: "Bird flocks are swarming airports and farmers fear crop loss. What's causing the sudden route chaos?",
          depth: 0,
          answers: [
            {
              id: "nbmc_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Weather shifts and light pollution confuse them. We're coordinating with airports and farmers to track paths daily.",
              impacts: {
                cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "nbmc_ind_q1_f1",
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.ModeratePositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.ModerateNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "Birds are resilient. We'll adjust flight advisories and encourage farmers to use temporary netting until patterns settle.",
              impacts: {
                cabinet: { [CabinetStaticId.Agriculture]: { weight: ExchangeImpactWeight.SlightlyPositive } },
              },
              followUpId: "nbmc_ind_q1_f1",
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.SlightPositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "A few lost birds don't signal the apocalypse. Let's not start flapping until our scientists finish counting.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "nbmc_ind_q1_f1",
              outcomeModifiers: {
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightPositive,
                nbmc_lights_out_success: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        nbmc_ind_q1_f1: {
          id: "nbmc_ind_q1_f1",
          text: "Will emergency funds cover farm losses if migrations don't normalize soon?",
          depth: 1,
          answers: [
            {
              id: "nbmc_ind_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We'll tap disaster reserves and help farmers adapt while the Interior Department adjusts guidance.",
              impacts: {
                cabinet: { [CabinetStaticId.Agriculture]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.ModeratePositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.ModerateNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If Congress drags its feet, we'll see which lawmakers like bird pies for dinner. Farmers won't face this alone.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.ModeratePositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.ModerateNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_ind_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Too early to talk payouts. Let's hope the birds figure it out before budget hawks notice.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightPositive,
                nbmc_lights_out_success: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "nbmc_lib_q1",
      questions: {
        nbmc_lib_q1: {
          id: "nbmc_lib_q1",
          text: "Environmentalists claim climate change is confusing migration patterns. Does the administration admit any responsibility?",
          depth: 0,
          answers: [
            {
              id: "nbmc_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Climate shifts play a role. We're boosting conservation funding and studying long-term solutions alongside immediate fixes.",
              impacts: {
                cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.ModeratePositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.ModerateNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "We hear their concerns. New tracking programs will help us guide birds safely without hurting industry.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.SlightPositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Some groups cry climate every year. We're focused on pragmatic solutions and won't apologize for prioritizing flights and crops.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightPositive,
                nbmc_lights_out_success: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "nbmc_con_q1",
      questions: {
        nbmc_con_q1: {
          id: "nbmc_con_q1",
          text: "This fiasco looks like mismanagement. Will you compensate airlines for delays and fix navigation quickly?",
          depth: 0,
          answers: [
            {
              id: "nbmc_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Airlines already get subsidies for weather delays. We'll focus on the birds before writing checks.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                nbmc_crop_yields_plunge: OutcomeModifierWeight.SlightPositive,
                nbmc_lights_out_success: OutcomeModifierWeight.SlightNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_con_q1_a2",
              type: AnswerType.Inform,
              text: "Interior is updating radar and issuing voluntary lights-out advisories to cut risks to planes and crops.",
              impacts: {
                cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.ModeratePositive,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.ModerateNegative,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nbmc_con_q1_a3",
              type: AnswerType.Challenge,
              text: "If private airports refuse to cooperate, we may ground flights at dusk until they dim the lights.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                nbmc_lights_out_success: OutcomeModifierWeight.SlightPositive,
                nbmc_drone_guidance_chaos: OutcomeModifierWeight.SlightNegative,
                nbmc_crop_yields_plunge: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
