import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const internetCurfewProposalExchanges: ExchangeData[] = [
  /* ── Liberal outlet ── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "icp_lib_q1",
      questions: {
        icp_lib_q1: {
          id: "icp_lib_q1",
          text: "Civil-rights groups call a nightly internet cutoff draconian. Will you drop the mandate and protect free speech online?",
          depth: 0,
          answers: [
            {
              id: "icp_lib_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "We’re revising toward a voluntary ‘digital quiet hours’ program with mental-health resources and zero forced outages.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                icp_voluntary_night_mode:
                  OutcomeModifierWeight.ModeratePositive, // +6
                icp_proposal_shelved: OutcomeModifierWeight.Neutral,
                icp_wifi_blackmarket: OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "icp_lib_q1_a2",
              type: AnswerType.Deflect, // President joke
              text: "Our plan merely tucks the nation in. Screen zombies can still scroll—just before 10 p.m. Call it bedtime democracy.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                icp_wifi_blackmarket: OutcomeModifierWeight.SlightPositive, // +4
                icp_proposal_shelved: OutcomeModifierWeight.SlightNegative, // −4
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icp_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Pilot limited to one county, opt-out for emergency services, with a 90-day sunset if public health gains aren’t proven.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                icp_proposal_shelved: OutcomeModifierWeight.StrongPositive, // +8
                icp_wifi_blackmarket: OutcomeModifierWeight.StrongNegative, // −8
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "icp_con_q1",
      questions: {
        icp_con_q1: {
          id: "icp_con_q1",
          text: "Shutting the web at 10 sounds like nanny-state nonsense. Won’t this cripple late-shift businesses and gamers alike?",
          depth: 0,
          answers: [
            {
              id: "icp_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Productivity leaps when sleep improves. Night crews get whitelisted; gamers can train during daylight—problem solved.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                icp_voluntary_night_mode: OutcomeModifierWeight.SlightPositive, // +4
                icp_wifi_blackmarket: OutcomeModifierWeight.Neutral,
                icp_proposal_shelved: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "icp_con_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Curfew begins after market close; B2B lines stay exempt. Economic drag projected under 0.03 % GDP.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                icp_proposal_shelved: OutcomeModifierWeight.ModeratePositive, // +6
                icp_wifi_blackmarket: OutcomeModifierWeight.ModerateNegative, // −6
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icp_con_q1_a3",
              type: AnswerType.Inform, // Homeland security
              text: "Cyber-crime peaks after midnight. Limiting traffic blocks 17 % of phishing waves observed in trials.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                icp_wifi_blackmarket: OutcomeModifierWeight.StrongNegative, // −8
                icp_proposal_shelved: OutcomeModifierWeight.StrongPositive, // +8
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ── Independent outlet ── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "icp_ind_q1",
      questions: {
        icp_ind_q1: {
          id: "icp_ind_q1",
          text: "Parents like more sleep; teens hate curfew. What metrics decide if this policy lives or dies?",
          depth: 0,
          answers: [
            {
              id: "icp_ind_q1_a1",
              type: AnswerType.Inform, // HHS metrics
              text: "We’ll track ER visits linked to sleep-loss, school test scores, and ISP compliance costs—publishing data monthly.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                icp_voluntary_night_mode:
                  OutcomeModifierWeight.ModeratePositive, // +6
                icp_wifi_blackmarket: OutcomeModifierWeight.ModerateNegative, // −6
                icp_proposal_shelved: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icp_ind_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Metric one: yawns per capita drop. Metric two: meme creativity rises before bedtime—everybody wins.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                icp_wifi_blackmarket: OutcomeModifierWeight.SlightPositive, // +4
                icp_proposal_shelved: OutcomeModifierWeight.SlightNegative, // −4
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icp_ind_q1_a3",
              type: AnswerType.Reassure, // Homeland timetable
              text: "If key indicators don’t improve within 90 days, the curfew auto-expires—no renewals without new legislation.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                icp_proposal_shelved: OutcomeModifierWeight.StrongPositive, // +8
                icp_wifi_blackmarket: OutcomeModifierWeight.StrongNegative, // −8
                icp_voluntary_night_mode: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
