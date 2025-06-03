import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const hotMicCabinetSlipupExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "hmc_inv_q1",
      questions: {
        hmc_inv_q1: {
          id: "hmc_inv_q1",
          text: "Hot-mic audio caught the Treasury Secretary calling the new economic plan ‘a chocolate teapot.’ Was that candid assessment or sabotage?",
          depth: 0,
          answers: [
            {
              id: "hmc_inv_q1_a1",
              type: AnswerType.Reassure, // Treasury pref
              text: "It referenced an outdated draft. The current plan integrates stronger safeguards and independent scoring. Markets can trust the final version.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.ModeratePositive, // +6
                hmc_markets_dip: OutcomeModifierWeight.ModerateNegative, // −6
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hmc_inv_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Everyone loves chocolate—so we’re sweetening the deal! Serious note: the Secretary was joking, and jokes aren’t policy.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.SlightPositive, // +4
                hmc_markets_dip: OutcomeModifierWeight.SlightNegative, // −4
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hmc_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Full recording shows the remark mocked a shelved 2023 model. An updated risk deck goes public tomorrow, along with a rollout timeline.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.StrongPositive, // +8
                hmc_markets_dip: OutcomeModifierWeight.StrongNegative, // −8
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hmc_ind_q1",
      questions: {
        hmc_ind_q1: {
          id: "hmc_ind_q1",
          text: "Public confidence wavers whenever mixed messages emerge. How will you restore trust after the ‘teapot’ comment?",
          depth: 0,
          answers: [
            {
              id: "hmc_ind_q1_a1",
              type: AnswerType.Inform, // State global trust
              text: "We’ll publish the plan’s key benchmarks, invite international auditors, and brief global creditors to reaffirm reliability.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_plan_rebranded: OutcomeModifierWeight.SlightPositive, // +4
                hmc_brushed_off: OutcomeModifierWeight.Neutral,
                hmc_markets_dip: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "hmc_ind_q1_a2",
              type: AnswerType.Reassure, // Treasury again
              text: "Tomorrow’s press kit shows the plan’s durability tests—think stainless-steel, not chocolate. Data beats sound-bites.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.ModeratePositive, // +6
                hmc_markets_dip: OutcomeModifierWeight.ModerateNegative, // −6
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hmc_ind_q1_a3",
              type: AnswerType.Deflect, // President banter
              text: "Trust is like tea—you steep it, not spill it. Our brew is strong; one overheard joke won’t dilute it.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hmc_markets_dip: OutcomeModifierWeight.SlightPositive, // +4
                hmc_brushed_off: OutcomeModifierWeight.SlightNegative, // −4
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hmc_con_q1",
      questions: {
        hmc_con_q1: {
          id: "hmc_con_q1",
          text: "Does the ‘chocolate teapot’ remark confirm critics that this economic overhaul is doomed to melt under heat?",
          depth: 0,
          answers: [
            {
              id: "hmc_con_q1_a1",
              type: AnswerType.Challenge, // President push
              text: "Our teapot is now stainless steel—strong enough to boil skepticism into steam powering new growth.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                hmc_plan_rebranded: OutcomeModifierWeight.ModeratePositive, // +6
                hmc_markets_dip: OutcomeModifierWeight.ModerateNegative, // −6
                hmc_brushed_off: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hmc_con_q1_a2",
              type: AnswerType.Reassure, // Treasury steady
              text: "Economic models project growth above trend even under stress scenarios—far from meltdown territory.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.StrongPositive, // +8
                hmc_markets_dip: OutcomeModifierWeight.StrongNegative, // −8
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hmc_con_q1_a3",
              type: AnswerType.Inform, // State investor calm
              text: "Global bond desks received clarifying notes this morning; yields remain within normal ranges, reflecting market confidence.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                hmc_brushed_off: OutcomeModifierWeight.ModeratePositive, // +6
                hmc_markets_dip: OutcomeModifierWeight.ModerateNegative, // −6
                hmc_plan_rebranded: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
