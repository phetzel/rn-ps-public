import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const domesticWeatherControlExchanges: ExchangeData[] = [
  /* ── Independent outlet ── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "dwp_ind_q1",
      questions: {
        dwp_ind_q1: {
          id: "dwp_ind_q1",
          text: "Engineers call the coastal fan idea a ‘physics fairy tale.’ What evidence justifies spending billions on hurricane blowers?",
          depth: 0,
          answers: [
            {
              id: "dwp_ind_q1_a1",
              type: AnswerType.Reassure, // Homeland pref
              text: "Only computer simulations exist so far; no turbines will raise a blade until safety, cost, and power-grid studies pass independent review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_plan_shelved: OutcomeModifierWeight.ModeratePositive, // +6
                dwp_blackout_debacle: OutcomeModifierWeight.ModerateNegative, // −6
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dwp_ind_q1_a2",
              type: AnswerType.Deflect, // President quip
              text: "Big problems need big fans. Critics once laughed at airplanes too—now they buy extra legroom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                dwp_blackout_debacle: OutcomeModifierWeight.SlightPositive, // +4
                dwp_plan_shelved: OutcomeModifierWeight.SlightNegative, // −4
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dwp_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Prototype specs need 120 MW—equal to a mid-size city; project stays in wind-tunnel phase unless costs fall by 70 %.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_plan_shelved: OutcomeModifierWeight.StrongPositive, // +8
                dwp_blackout_debacle: OutcomeModifierWeight.StrongNegative, // −8
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ── Conservative outlet ── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "dwp_con_q1",
      questions: {
        dwp_con_q1: {
          id: "dwp_con_q1",
          text: "Taxpayers balk at mega-fans. Why not fund levees instead of cartoonish windmills?",
          depth: 0,
          answers: [
            {
              id: "dwp_con_q1_a1",
              type: AnswerType.Reassure, // Treasury cost
              text: "Fans are privately financed through green bonds; federal exposure capped at research credits.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_research_program: OutcomeModifierWeight.ModeratePositive, // +6
                dwp_plan_shelved: OutcomeModifierWeight.Neutral,
                dwp_blackout_debacle: OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "dwp_con_q1_a2",
              type: AnswerType.Challenge, // President boast
              text: "Levees defend; fans prevent. Forward defense beats sand-bagging—think offense against Mother Nature.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                dwp_blackout_debacle: OutcomeModifierWeight.SlightPositive, // +4
                dwp_plan_shelved: OutcomeModifierWeight.SlightNegative, // −4
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dwp_con_q1_a3",
              type: AnswerType.Inform, // Homeland risk
              text: "Grid upgrades accompany any turbine build; redundancy prevents regional outages and integrates renewables.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_blackout_debacle: OutcomeModifierWeight.StrongNegative, // −8
                dwp_plan_shelved: OutcomeModifierWeight.StrongPositive, // +8
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ── Liberal outlet ── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "dwp_lib_q1",
      questions: {
        dwp_lib_q1: {
          id: "dwp_lib_q1",
          text: "Environmentalists fear mega-fans will shred seabirds. How will you protect ecosystems while chasing storm control?",
          depth: 0,
          answers: [
            {
              id: "dwp_lib_q1_a1",
              type: AnswerType.Reassure, // Homeland wildlife
              text: "Any rotor design includes radar-activated shutoff and bird-safe mesh. If mortality tops 0.5 %, project stops cold.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_plan_shelved: OutcomeModifierWeight.ModeratePositive, // +6
                dwp_blackout_debacle: OutcomeModifierWeight.ModerateNegative, // −6
                dwp_research_program: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dwp_lib_q1_a2",
              type: AnswerType.Deflect, // President pun
              text: "We won’t ruffle feathers—literally. Fans of fans know innovation sometimes flaps before it flies.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                dwp_research_program: OutcomeModifierWeight.SlightPositive, // +4
                dwp_plan_shelved: OutcomeModifierWeight.SlightNegative, // −4
                dwp_blackout_debacle: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dwp_lib_q1_a3",
              type: AnswerType.Inform, // Treasury eco cost
              text: "Environmental impact bonds shift risk to investors; habitat funds expand if turbines harm wildlife.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dwp_research_program: OutcomeModifierWeight.StrongPositive, // +8
                dwp_blackout_debacle: OutcomeModifierWeight.StrongNegative, // −8
                dwp_plan_shelved: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
