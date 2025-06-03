import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const presidentialHistoryMixUpExchanges: ExchangeData[] = [
  /* ── Independent outlet ── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "phm_ind_q1",
      questions: {
        phm_ind_q1: {
          id: "phm_ind_q1",
          text: "Viewers heard the President credit Franklin with inventing Wi-Fi. How did that slip past fact-checkers, and will someone be fired?",
          depth: 0,
          answers: [
            {
              id: "phm_ind_q1_a1",
              type: AnswerType.Inform, // State pref
              text: "A draft glitch restored an old note. We issued a correction within minutes and reviewed teleprompter protocols to prevent repeats.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.ModeratePositive, // +6
                phm_historian_backlash: OutcomeModifierWeight.ModerateNegative, // −6
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phm_ind_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Franklin flew kites; today we fly routers—same spirit! Focus on expanding broadband, not trivia night.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                phm_historian_backlash: OutcomeModifierWeight.SlightPositive, // +4
                phm_gaffe_fades: OutcomeModifierWeight.SlightNegative, // −4
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phm_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "UNESCO received a cable clarifying Wi-Fi’s actual inventors and praising Franklin’s true legacy in electricity.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.StrongPositive, // +8
                phm_historian_backlash: OutcomeModifierWeight.StrongNegative, // −8
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "phm_lib_q1",
      questions: {
        phm_lib_q1: {
          id: "phm_lib_q1",
          text: "Educators worry this blunder feeds misinformation. How will the administration promote accurate science history now?",
          depth: 0,
          answers: [
            {
              id: "phm_lib_q1_a1",
              type: AnswerType.Reassure, // Treasury edu funding tie
              text: "We’re funding a ‘Real Inventors Week’ partnership with libraries, STEM grants, and limited-edition science stamps.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                phm_edu_campaign_spin: OutcomeModifierWeight.ModeratePositive, // +6
                phm_gaffe_fades: OutcomeModifierWeight.Neutral,
                phm_historian_backlash: OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "phm_lib_q1_a2",
              type: AnswerType.Deflect, // President quip
              text: "Even Einstein mis-spoke—relatively. Let’s channel energy into future inventors instead of past gotchas.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.SlightPositive, // +4
                phm_historian_backlash: OutcomeModifierWeight.SlightNegative, // −4
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phm_lib_q1_a3",
              type: AnswerType.Inform, // State fact push
              text: "We’re releasing an annotated transcript with accurate footnotes and linking schools to free digital history resources.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.ModeratePositive, // +6
                phm_historian_backlash: OutcomeModifierWeight.ModerateNegative, // −6
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "phm_con_q1",
      questions: {
        phm_con_q1: {
          id: "phm_con_q1",
          text: "If the President flubs basic history, why trust economic numbers? Is the administration simply unprepared?",
          depth: 0,
          answers: [
            {
              id: "phm_con_q1_a1",
              type: AnswerType.Challenge, // President pushback
              text: "A single slip doesn’t erase solid results: record jobs, lower deficits, and broadband expansion Franklin would applaud.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.SlightPositive, // +4
                phm_historian_backlash: OutcomeModifierWeight.SlightNegative, // −4
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phm_con_q1_a2",
              type: AnswerType.Reassure, // Treasury stability
              text: "Markets shrugged: bond yields steady, dollar firm. Investors judge policy, not trivia-night answers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                phm_gaffe_fades: OutcomeModifierWeight.ModeratePositive, // +6
                phm_historian_backlash: OutcomeModifierWeight.ModerateNegative, // −6
                phm_edu_campaign_spin: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phm_con_q1_a3",
              type: AnswerType.Inform, // State context
              text: "Founders advance tech spirit; speech theme remains valid. We’ll reinforce that message in upcoming international forums.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phm_edu_campaign_spin: OutcomeModifierWeight.SlightPositive, // +4
                phm_gaffe_fades: OutcomeModifierWeight.SlightNegative, // −4
                phm_historian_backlash: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
