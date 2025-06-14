import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const mysteryGreenRainExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "mgr_inv_q1",
      questions: {
        mgr_inv_q1: {
          id: "mgr_inv_q1",
          text: "Citizens worry the green rain is toxic waste. Did you hide early test results or alert hospitals immediately?",
          depth: 0,
          answers: [
            {
              id: "mgr_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Labs reported unusual algae within hours. We issued guidance to hospitals and began wider sampling the same day.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "mgr_inv_q1_f1",
              outcomeModifiers: {
                mgr_algae_relief: OutcomeModifierWeight.ModeratePositive,
                mgr_chemical_found: OutcomeModifierWeight.ModerateNegative,
                mgr_foreign_pollution: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mgr_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "We shared info as soon as it was verified. Let’s not fuel conspiracy theories while scientists do their jobs.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "mgr_inv_q1_f1",
              outcomeModifiers: {
                mgr_chemical_found: OutcomeModifierWeight.SlightPositive,
                mgr_algae_relief: OutcomeModifierWeight.SlightNegative,
                mgr_foreign_pollution: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mgr_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Classified tests found algae spore clusters mixed with heavy metals. We’re preparing advisories in case concentrations rise.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "mgr_inv_q1_f1",
              outcomeModifiers: {
                mgr_chemical_found: OutcomeModifierWeight.ModeratePositive,
                mgr_algae_relief: OutcomeModifierWeight.ModerateNegative,
                mgr_foreign_pollution: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        mgr_inv_q1_f1: {
          id: "mgr_inv_q1_f1",
          text: "If toxicity rises, will you impose evacuations or reveal the foreign source behind this weird weather?",
          depth: 1,
          answers: [
            {
              id: "mgr_inv_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Evacuations are unlikely. We’ll issue alerts and clean water deliveries. Any foreign blame will wait for solid proof.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                mgr_algae_relief: OutcomeModifierWeight.ModeratePositive,
                mgr_foreign_pollution: OutcomeModifierWeight.ModerateNegative,
                mgr_chemical_found: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mgr_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If evidence points abroad, we’ll expose it and demand reparations. Until then, clean-up crews stay on full alert.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                mgr_foreign_pollution: OutcomeModifierWeight.ModeratePositive,
                mgr_algae_relief: OutcomeModifierWeight.ModerateNegative,
                mgr_chemical_found: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "mgr_ind_q1",
      questions: {
        mgr_ind_q1: {
          id: "mgr_ind_q1",
          text: "Residents report rashes after the rain. What precautions should people take while tests continue?",
          depth: 0,
          answers: [
            {
              id: "mgr_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Avoid drinking runoff, rinse skin if exposed, and monitor local alerts. HHS teams are offering free screenings tomorrow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                mgr_algae_relief: OutcomeModifierWeight.ModeratePositive,
                mgr_chemical_found: OutcomeModifierWeight.ModerateNegative,
                mgr_foreign_pollution: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mgr_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Most rashes appear mild and unrelated. Folks should stay calm and let scientists finish analysis before jumping to conclusions.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                mgr_chemical_found: OutcomeModifierWeight.SlightPositive,
                mgr_algae_relief: OutcomeModifierWeight.SlightNegative,
                mgr_foreign_pollution: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "mgr_lib_q1",
      questions: {
        mgr_lib_q1: {
          id: "mgr_lib_q1",
          text: "Environmental groups demand answers. Will you crack down on polluters or focus on diplomacy first?",
          depth: 0,
          answers: [
            {
              id: "mgr_lib_q1_a1",
              type: AnswerType.Inform,
              text: "If tests show foreign pollutants, we’ll pursue international talks and stricter emissions rules at home.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                mgr_foreign_pollution: OutcomeModifierWeight.ModeratePositive,
                mgr_algae_relief: OutcomeModifierWeight.ModerateNegative,
                mgr_chemical_found: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mgr_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "We’re gathering data before blaming polluters or crafting treaties. Right now we focus on cleanup and public health.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                mgr_algae_relief: OutcomeModifierWeight.SlightPositive,
                mgr_foreign_pollution: OutcomeModifierWeight.SlightNegative,
                mgr_chemical_found: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
