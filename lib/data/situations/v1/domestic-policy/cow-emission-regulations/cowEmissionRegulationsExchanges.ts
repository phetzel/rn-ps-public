import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cowEmissionRegulationsExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cer_con_q1",
      questions: {
        cer_con_q1: {
          id: "cer_con_q1",
          text: "Ranchers call methane backpacks costly overreach. Why force gadgets on cows instead of trimming red tape?",
          depth: 0,
          answers: [
            {
              id: "cer_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Innovation often looks odd at first. These packs cut pollution and open premium export markets—sounds like freedom to profit, not red tape.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cer_eco_brand_success: OutcomeModifierWeight.ModeratePositive, // +6
                cer_program_paused: OutcomeModifierWeight.ModerateNegative, // −6
                cer_farm_rebellion: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_con_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Tax credits cover 80 % of equipment. If feed prices rise, relief funds trigger automatically—protecting both ranchers and consumers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cer_program_paused: OutcomeModifierWeight.ModeratePositive, // +6
                cer_farm_rebellion: OutcomeModifierWeight.ModerateNegative, // −6
                cer_eco_brand_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_con_q1_a3",
              type: AnswerType.Inform, // HHS
              text: "Backpacks vent methane through filters, lowering local smog and odor complaints by a third in pilot counties—benefits reach neighbors too.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cer_eco_brand_success: OutcomeModifierWeight.SlightPositive, // +4
                cer_program_paused: OutcomeModifierWeight.SlightNegative, // −4
                cer_farm_rebellion: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cer_lib_q1",
      questions: {
        cer_lib_q1: {
          id: "cer_lib_q1",
          text: "Climate scientists praise methane cuts, yet farmers protest. How will you balance urgent climate action with rural livelihoods?",
          depth: 0,
          answers: [
            {
              id: "cer_lib_q1_a1",
              type: AnswerType.Inform, // HHS pref
              text: "We’re adding grants for smaller farms and launching a tech-support line. Climate goals stay firm, but rollout timelines can flex by season.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cer_program_paused: OutcomeModifierWeight.ModeratePositive, // +6
                cer_farm_rebellion: OutcomeModifierWeight.ModerateNegative, // −6
                cer_eco_brand_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Cows wore bells for centuries; backpacks are just modern cowbells with Wi-Fi. Future historians will cheer our stylish herd.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cer_eco_brand_success: OutcomeModifierWeight.SlightPositive, // +4
                cer_program_paused: OutcomeModifierWeight.SlightNegative, // −4
                cer_farm_rebellion: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Pilot data show 27 % methane drop and zero animal-welfare flags. Geologists confirm no groundwater impact from filter disposal.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cer_eco_brand_success: OutcomeModifierWeight.StrongPositive, // +8
                cer_farm_rebellion: OutcomeModifierWeight.StrongNegative, // −8
                cer_program_paused: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cer_ind_q1",
      questions: {
        cer_ind_q1: {
          id: "cer_ind_q1",
          text: "Consumers want cheap dairy and clean air. Will these backpacks push prices up, or pay off through new ‘green beef’ demand?",
          depth: 0,
          answers: [
            {
              id: "cer_ind_q1_a1",
              type: AnswerType.Reassure, // Treasury again
              text: "Modeling shows a two-cent rise per gallon of milk, offset by export premiums. We’ll publish quarterly price-impact dashboards.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cer_program_paused: OutcomeModifierWeight.StrongPositive, // +8
                cer_farm_rebellion: OutcomeModifierWeight.StrongNegative, // −8
                cer_eco_brand_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_ind_q1_a2",
              type: AnswerType.Deflect, // President quip
              text: "If a latte costs a nickel more to save the planet, that’s the deal of the century. Our cows agree—they told me.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cer_farm_rebellion: OutcomeModifierWeight.SlightPositive, // +4
                cer_program_paused: OutcomeModifierWeight.SlightNegative, // −4
                cer_eco_brand_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cer_ind_q1_a3",
              type: AnswerType.Inform, // HHS cost-benefit
              text: "EPA valuation shows each ton of methane avoided saves $1,800 in climate damages—far above per-cow gear cost. Net social benefit is clear.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cer_eco_brand_success: OutcomeModifierWeight.ModeratePositive, // +6
                cer_program_paused: OutcomeModifierWeight.ModerateNegative, // −6
                cer_farm_rebellion: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
