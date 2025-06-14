import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const excessiveTreePlantingInitiativeExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "etpi_con_q1",
      questions: {
        etpi_con_q1: {
          id: "etpi_con_q1",
          text: "Residents blame federal grants for a rodent explosion in city parks. Will you cut funding or keep planting more trees?",
          depth: 0,
          answers: [
            {
              id: "etpi_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Local councils choose where to plant. We encourage green spaces but won’t micromanage every squirrel. States can pause funding if needed.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "etpi_con_q1_f1",
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.SlightNegative,
                etpi_rodent_boom: OutcomeModifierWeight.SlightPositive,
                etpi_budget_axed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_con_q1_a2",
              type: AnswerType.Inform,
              text: "Interior teams are studying pest control options. Pruning schedules and wildlife partners will keep rodents in check without halting trees.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "etpi_con_q1_f1",
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.ModeratePositive,
                etpi_rodent_boom: OutcomeModifierWeight.ModerateNegative,
                etpi_budget_axed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_con_q1_a3",
              type: AnswerType.Challenge,
              text: "If infestations grow, will you refund tax dollars and tear out trees or let cities handle the fallout alone?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              followUpId: "etpi_con_q1_f1",
              outcomeModifiers: {
                etpi_budget_axed: OutcomeModifierWeight.ModeratePositive,
                etpi_canopy_success: OutcomeModifierWeight.ModerateNegative,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        etpi_con_q1_f1: {
          id: "etpi_con_q1_f1",
          text: "Critics call the program a waste. Will federal funds keep flowing even if cities start cutting down these trees?",
          depth: 1,
          answers: [
            {
              id: "etpi_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Funding shifts toward maintenance not new planting. Grants require pest reports and community support before any more checks go out.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                etpi_budget_axed: OutcomeModifierWeight.ModerateNegative,
                etpi_canopy_success: OutcomeModifierWeight.ModeratePositive,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "No more federal dollars will sprout until pests vanish. Cities that chop trees may get priority for cleanup aid instead of new leaves.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                etpi_budget_axed: OutcomeModifierWeight.ModeratePositive,
                etpi_canopy_success: OutcomeModifierWeight.ModerateNegative,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "etpi_ind_q1",
      questions: {
        etpi_ind_q1: {
          id: "etpi_ind_q1",
          text: "Neighbors enjoy shade but hate allergies. How will you balance urban greening with quality of life complaints?",
          depth: 0,
          answers: [
            {
              id: "etpi_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We’re spacing trees and offering free allergy clinics. Community volunteers help care for saplings so everyone can breathe easier soon.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.SlightPositive,
                etpi_rodent_boom: OutcomeModifierWeight.SlightNegative,
                etpi_budget_axed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Allergies come and go. The long-term payoff is cooler streets and higher property values, so patience is the best medicine for now.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.SlightPositive,
                etpi_budget_axed: OutcomeModifierWeight.SlightNegative,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_ind_q1_a3",
              type: AnswerType.Inform,
              text: "Interior’s overcrowding memo shows pest hotspots. Crews will relocate some saplings to suburbs while allergy data guides new species choices.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.ModeratePositive,
                etpi_budget_axed: OutcomeModifierWeight.ModerateNegative,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "etpi_lib_q1",
      questions: {
        etpi_lib_q1: {
          id: "etpi_lib_q1",
          text: "Environmental groups love the trees, but budgets are strained. Will you guarantee ongoing support or scale back the initiative?",
          depth: 0,
          answers: [
            {
              id: "etpi_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We plan a phased approach. Maintenance grants continue while audits check which neighborhoods need thinning versus fresh plantings.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.ModeratePositive,
                etpi_budget_axed: OutcomeModifierWeight.ModerateNegative,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Every city wants different greenery. We’ll keep options open and let local voters decide which blocks need a trim or a new tree.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.SlightNegative,
                etpi_budget_axed: OutcomeModifierWeight.SlightPositive,
                etpi_rodent_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "etpi_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Classified surveys reveal overplanting sites. Crews will discreetly transplant excess saplings to rural plots before pests multiply further.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                etpi_canopy_success: OutcomeModifierWeight.StrongPositive,
                etpi_rodent_boom: OutcomeModifierWeight.StrongNegative,
                etpi_budget_axed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
