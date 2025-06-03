import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const monumentMakeoverPlanExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "mmp_inv_q1",
      questions: {
        mmp_inv_q1: {
          id: "mmp_inv_q1",
          text: "Geologists call blasting extra faces onto Mount Rushmore reckless. Why endanger a national monument for presidential vanity?",
          depth: 0,
          answers: [
            {
              id: "mmp_inv_q1_a1",
              type: AnswerType.Inform, // State pref
              text: "No stone will chip without exhaustive studies. We’re reviewing safer tributes, including a museum bust funded by donors, not taxpayers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_plan_withdrawn: OutcomeModifierWeight.ModeratePositive, // +6
                mmp_lawsuit_stall: OutcomeModifierWeight.ModerateNegative, // −6
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mmp_inv_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Rushmore was once blank rock—progress chisels on. If history fears a little dust, it needs tougher granite!",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                mmp_lawsuit_stall: OutcomeModifierWeight.SlightPositive, // +4
                mmp_plan_withdrawn: OutcomeModifierWeight.SlightNegative, // −4
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mmp_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Heritage survey shows 62 % oppose carving but support a visitor-center bust. Geological report warns blasting could destabilize Jefferson’s face.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_plan_withdrawn: OutcomeModifierWeight.StrongPositive, // +8
                mmp_lawsuit_stall: OutcomeModifierWeight.StrongNegative, // −8
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "mmp_con_q1",
      questions: {
        mmp_con_q1: {
          id: "mmp_con_q1",
          text: "Taxpayers balk at multimillion-dollar stone selfies. Who pays, and why fund this instead of roads?",
          depth: 0,
          answers: [
            {
              id: "mmp_con_q1_a1",
              type: AnswerType.Reassure, // Treasury pref
              text: "Private donations and tourism bonds cover costs; no highway funds touched. Any overruns trigger automatic project pause.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_smaller_compromise: OutcomeModifierWeight.ModeratePositive, // +6
                mmp_plan_withdrawn: OutcomeModifierWeight.Neutral,
                mmp_lawsuit_stall: OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "mmp_con_q1_a2",
              type: AnswerType.Challenge, // President boast
              text: "The original carvers cost peanuts by today’s standards. New face, new tourism boom—sounds like economic patriotism to me.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                mmp_lawsuit_stall: OutcomeModifierWeight.SlightPositive, // +4
                mmp_plan_withdrawn: OutcomeModifierWeight.SlightNegative, // −4
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mmp_con_q1_a3",
              type: AnswerType.Inform, // Justice legal angle
              text: "Any contract must comply with the Antiquities Act and tribal consultations. Legal review can halt work at the first misstep.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_lawsuit_stall: OutcomeModifierWeight.StrongPositive, // +8
                mmp_plan_withdrawn: OutcomeModifierWeight.StrongNegative, // −8
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "mmp_lib_q1",
      questions: {
        mmp_lib_q1: {
          id: "mmp_lib_q1",
          text: "Native nations call the monument sacred. Will the administration halt the makeover out of cultural respect?",
          depth: 0,
          answers: [
            {
              id: "mmp_lib_q1_a1",
              type: AnswerType.Reassure, // State conciliatory
              text: "We’re pausing the proposal for sovereign nation consultations and cultural-impact studies before any decision.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_plan_withdrawn: OutcomeModifierWeight.ModeratePositive, // +6
                mmp_smaller_compromise: OutcomeModifierWeight.Neutral,
                mmp_lawsuit_stall: OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "mmp_lib_q1_a2",
              type: AnswerType.Deflect, // President quip
              text: "History evolves—so do monuments. Our face could symbolize unity; consultations will shape how, not if, we honor progress.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                mmp_smaller_compromise: OutcomeModifierWeight.SlightPositive, // +4
                mmp_plan_withdrawn: OutcomeModifierWeight.SlightNegative, // −4
                mmp_lawsuit_stall: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mmp_lib_q1_a3",
              type: AnswerType.Inform, // Treasury numbers
              text: "If carving is abandoned, donor funds shift to visitor-center upgrades, generating jobs without altering the mountain.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                mmp_smaller_compromise: OutcomeModifierWeight.StrongPositive, // +8
                mmp_plan_withdrawn: OutcomeModifierWeight.Neutral,
                mmp_lawsuit_stall: OutcomeModifierWeight.StrongNegative, // −8
              },
            },
          ],
        },
      },
    },
  },
];
