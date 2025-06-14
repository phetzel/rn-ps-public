import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const luxuryPresidentialHelicopterExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "lph_con_q1",
      questions: {
        lph_con_q1: {
          id: "lph_con_q1",
          text: "Conservative hosts blast the gold-trim helicopters as a waste of taxpayer money. Will the order be scrapped?",
          depth: 0,
          answers: [
            {
              id: "lph_con_q1_a1",
              type: AnswerType.Reassure,
              text: "These aircraft improve safety and will be funded within the existing defense budget, not new taxes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "lph_con_q1_f1",
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModerateNegative,
                helicopter_reduced_spec: OutcomeModifierWeight.ModeratePositive,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lph_con_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Spec sheet reveals the helicopters include gold-plated fixtures and custom lounge seating, costing double the standard model.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "lph_con_q1_f1",
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.StrongPositive,
                helicopter_reduced_spec: OutcomeModifierWeight.StrongNegative,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lph_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Why order luxury aircraft at all when cheaper models exist for presidential transportation?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "lph_con_q1_f1",
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModeratePositive,
                helicopter_reduced_spec: OutcomeModifierWeight.ModerateNegative,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        lph_con_q1_f1: {
          id: "lph_con_q1_f1",
          text: "Will defense cancel the helicopter order or negotiate cheaper specifications?",
          depth: 1,
          answers: [
            {
              id: "lph_con_q1_f1_a1",
              type: AnswerType.Deflect,
              text: "Discussions with suppliers are ongoing. We're reviewing cost options to ensure fiscal responsibility.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.SlightNegative,
                helicopter_reduced_spec: OutcomeModifierWeight.SlightPositive,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lph_con_q1_f1_a2",
              type: AnswerType.Inform,
              text: "If costs remain high, the contract allows cancellation with minimal penalty. Treasury is monitoring closely.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModeratePositive,
                helicopter_reduced_spec: OutcomeModifierWeight.ModerateNegative,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "lph_lib_q1",
      questions: {
        lph_lib_q1: {
          id: "lph_lib_q1",
          text: "Liberal papers call gold trim excessive when many programs face cuts. Why order flashy helicopters?",
          depth: 0,
          answers: [
            {
              id: "lph_lib_q1_a1",
              type: AnswerType.Deflect,
              text: "These helicopters replace aging models. Any decorative features are a small part of the contract.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.SlightNegative,
                helicopter_reduced_spec: OutcomeModifierWeight.Neutral,
                helicopter_cost_overrun: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "lph_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Funding comes from existing defense allocations and won't touch social programs or domestic budgets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModerateNegative,
                helicopter_reduced_spec: OutcomeModifierWeight.ModeratePositive,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lph_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Wouldn't a commercial lease or rental arrangement be significantly cheaper and help avoid these costly luxury upgrades altogether for hardworking taxpayers?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModeratePositive,
                helicopter_reduced_spec: OutcomeModifierWeight.ModerateNegative,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "lph_ind_q1",
      questions: {
        lph_ind_q1: {
          id: "lph_ind_q1",
          text: "Independent outlets ask if gold-plated helicopters signal out-of-touch leadership. How do you respond?",
          depth: 0,
          answers: [
            {
              id: "lph_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "The design was approved before any controversy. We're focusing on performance and safety, not decoration.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.SlightNegative,
                helicopter_reduced_spec: OutcomeModifierWeight.SlightPositive,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lph_ind_q1_a2",
              type: AnswerType.Inform,
              text: "If costs escalate, the administration will consider returning to standard models to respect taxpayer funds.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                helicopter_order_cancelled:
                  OutcomeModifierWeight.ModeratePositive,
                helicopter_reduced_spec: OutcomeModifierWeight.ModerateNegative,
                helicopter_cost_overrun: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
