import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const nationalGlitterSpillExchanges: ExchangeData[] = [
  /* ───────────────────────────────── Liberal outlet ───────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ngs_lib_q1",
      questions: {
        ngs_lib_q1: {
          id: "ngs_lib_q1",
          text: "This glitter spill is an environmental catastrophe. What is the administration doing to clean it up and hold polluters accountable?",
          depth: 0,
          answers: [
            /* Inform – HHS preference */
            {
              id: "ngs_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Extensive cleanup crews are deployed, and we're tracing responsibility. Fines and criminal referrals will follow wherever evidence leads.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.ModeratePositive, // +6
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.ModerateNegative, // −6
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Deflect – President preference */
            {
              id: "ngs_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "A private firm caused this sparkle storm, not the government. Still, our teams are on it—and you must admit the rivers look oddly festive.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyNegative,
                  },
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.MajorNegative, // −12
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.ModeratePositive, // +6
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.ModeratePositive, // +6
              },
            },

            /* Authorized – HHS intel */
            {
              id: "ngs_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Lab tests show the glitter is inert but stubborn. SparkleTime Inc. will fund a rapid-response vacuum fleet, cutting cleanup time in half.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.StrongPositive, // +8
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.StrongNegative, // −8
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────────────── Conservative outlet ──────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "ngs_con_q1",
      questions: {
        ngs_con_q1: {
          id: "ngs_con_q1",
          text: "Taxpayers may foot the cleanup bill for this glitter fiasco. How will you stop it becoming yet another big-government boondoggle?",
          depth: 0,
          answers: [
            /* Deflect – President flavour */
            {
              id: "ngs_con_q1_a1",
              type: AnswerType.Deflect,
              text: "The culprit company—not taxpayers—will pay. Government is just coordinating the sparkle mop-up so rivers stop twinkling on the public dime.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.SlightPositive, // +4
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.Neutral, //  0
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.SlightNegative, // −4
              },
            },

            /* Reassure – Homeland flavour */
            {
              id: "ngs_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Cleanup contracts include strict cost caps and weekly audits. National Guard engineers ensure efficiency; no blank checks, just fast results.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.ModeratePositive, // +6
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.ModerateNegative, // −6
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Inform – HHS detail */
            {
              id: "ngs_con_q1_a3",
              type: AnswerType.Inform,
              text: "A public budget tracker launches tomorrow. SparkleTime faces full damages, and every cleanup invoice will be posted online in real time.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                glitter_spill_disaster_contained_quickly:
                  OutcomeModifierWeight.StrongPositive, // +8
                glitter_spill_disaster_ecological_mess:
                  OutcomeModifierWeight.Neutral, // 0
                glitter_spill_disaster_becomes_tourist_attraction:
                  OutcomeModifierWeight.StrongNegative, // −8
              },
            },
          ],
        },
      },
    },
  },
];
