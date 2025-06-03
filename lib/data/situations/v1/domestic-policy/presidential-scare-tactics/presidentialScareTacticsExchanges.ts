import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const presidentialScareTacticsExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pst_con_q1",
      questions: {
        pst_con_q1: {
          id: "pst_con_q1",
          text: "Floating fake alien alerts to push defense cash sounds like fear-mongering. Doesn’t this shred credibility with voters and allies?",
          depth: 0,
          answers: [
            {
              id: "pst_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Readiness talk saves lives; panic comes from leaks, not leadership. Strong nations explore every scenario—even galactic ones.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                pst_funding_passes: OutcomeModifierWeight.ModeratePositive, // +6
                pst_plan_shelved: OutcomeModifierWeight.ModerateNegative, // −6
                pst_leaked_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_con_q1_a2",
              type: AnswerType.Reassure, // Homeland pref
              text: "There was no scheduled broadcast. The memo was hypothetical; real EBS tests follow strict multi-agency rules already in place.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pst_plan_shelved: OutcomeModifierWeight.StrongPositive, // +8
                pst_leaked_panic: OutcomeModifierWeight.StrongNegative, // −8
                pst_funding_passes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_con_q1_a3",
              type: AnswerType.Inform, // Defense funding angle
              text: "Modern threats range from drones to deep-fake alerts. The funding request strengthens both missile shields and broadcast cybersecurity.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                pst_funding_passes: OutcomeModifierWeight.StrongPositive, // +8
                pst_plan_shelved: OutcomeModifierWeight.StrongNegative, // −8
                pst_leaked_panic: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pst_lib_q1",
      questions: {
        pst_lib_q1: {
          id: "pst_lib_q1",
          text: "Watchdog groups say panic profiteering erodes trust. Will you cancel the alien-alert idea and focus on transparent budgeting instead?",
          depth: 0,
          answers: [
            {
              id: "pst_lib_q1_a1",
              type: AnswerType.Reassure, // Homeland again
              text: "Yes. The theoretical exercise is shelved. We’re updating EBS policy with public input and independent audits.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pst_plan_shelved: OutcomeModifierWeight.ModeratePositive, // +6
                pst_leaked_panic: OutcomeModifierWeight.ModerateNegative, // −6
                pst_funding_passes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Transparency? You just saw the memo—nothing’s hidden! Let’s redirect that spotlight to under-funded space telescopes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pst_funding_passes: OutcomeModifierWeight.SlightPositive, // +4
                pst_plan_shelved: OutcomeModifierWeight.SlightNegative, // −4
                pst_leaked_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "The leaked ‘Project Phantom Siren’ draft never passed legal review. A patch now blocks unscheduled alerts; new rules demand triple-signed authorization.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                pst_plan_shelved: OutcomeModifierWeight.StrongPositive, // +8
                pst_leaked_panic: OutcomeModifierWeight.StrongNegative, // −8
                pst_funding_passes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pst_ind_q1",
      questions: {
        pst_ind_q1: {
          id: "pst_ind_q1",
          text: "Many citizens felt genuine fear after rumor spread. What mental-health support and safeguards follow this scare tactic?",
          depth: 0,
          answers: [
            {
              id: "pst_ind_q1_a1",
              type: AnswerType.Inform, // HHS support
              text: "HHS opened a hotline, pushed fact sheets to phones, and partnered with clinics to provide free counseling for anxiety triggered by the rumor.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pst_leaked_panic: OutcomeModifierWeight.ModerateNegative, // −6
                pst_plan_shelved: OutcomeModifierWeight.ModeratePositive, // +6
                pst_funding_passes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_ind_q1_a2",
              type: AnswerType.Deflect, // President quip
              text: "We face bigger threats than phantom UFOs—like budget gaps. Let’s shield hearts with humor and wallets with smart defense.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                pst_funding_passes: OutcomeModifierWeight.SlightPositive, // +4
                pst_leaked_panic: OutcomeModifierWeight.SlightNegative, // −4
                pst_plan_shelved: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pst_ind_q1_a3",
              type: AnswerType.Inform, // Defense drill framing
              text: "Defense will run only transparent, multi-agency readiness drills going forward, posted publicly 30 days in advance.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                pst_plan_shelved: OutcomeModifierWeight.StrongPositive, // +8
                pst_funding_passes: OutcomeModifierWeight.StrongNegative, // −8
                pst_leaked_panic: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
