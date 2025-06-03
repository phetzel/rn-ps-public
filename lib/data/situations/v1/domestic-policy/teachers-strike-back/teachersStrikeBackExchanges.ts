import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const teachersStrikeBackExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "tsb_lib_q1",
      questions: {
        tsb_lib_q1: {
          id: "tsb_lib_q1",
          text: "Teachers call mandatory classroom karaoke humiliating and pedagogically useless. Why not simply repeal the rule and resume learning?",
          depth: 0,
          answers: [
            {
              id: "tsb_lib_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "We’re reviewing data: extended singing strains voices and disrupts lesson pacing. A temporary suspension letter goes out today while we consult educators.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_rule_repealed: OutcomeModifierWeight.ModeratePositive, // +6
                tsb_prolonged_strike: OutcomeModifierWeight.ModerateNegative, // −6
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_lib_q1_a2",
              type: AnswerType.Deflect, // President
              text: "Karaoke builds confidence! Some resistance is natural when innovation hits high notes. Let’s not silence creativity over first-day jitters.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                tsb_rule_repealed: OutcomeModifierWeight.SlightNegative, // −4
                tsb_prolonged_strike: OutcomeModifierWeight.SlightPositive, // +4
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Mediation draft grants teachers a voluntary after-school karaoke club plus new arts grants, meeting 70 % union approval. Talks resume at 10 a.m.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_compromise_celebrated: OutcomeModifierWeight.MajorPositive, // +12
                tsb_prolonged_strike: OutcomeModifierWeight.StrongNegative, // −8
                tsb_rule_repealed: OutcomeModifierWeight.SlightNegative, // −4
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
      rootQuestionId: "tsb_ind_q1",
      questions: {
        tsb_ind_q1: {
          id: "tsb_ind_q1",
          text: "Parents juggling work and strike-closed schools want timelines. When will classrooms reopen, karaoke or not?",
          depth: 0,
          answers: [
            {
              id: "tsb_ind_q1_a1",
              type: AnswerType.Reassure, // Treasury cost + timeline
              text: "Substitute funding covers two weeks; talks aim for resolution within ten days. Our goal: minimal family disruption and fiscal prudence.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_rule_repealed: OutcomeModifierWeight.ModeratePositive, // +6
                tsb_prolonged_strike: OutcomeModifierWeight.ModerateNegative, // −6
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_ind_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Kids at home? Perfect time for family karaoke! We’re empowering the next generation of rock stars while negotiators fine-tune the chorus.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                tsb_prolonged_strike: OutcomeModifierWeight.SlightPositive, // +4
                tsb_rule_repealed: OutcomeModifierWeight.SlightNegative, // −4
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_ind_q1_a3",
              type: AnswerType.Inform, // HHS practical
              text: "An interim plan streams optional karaoke online so learning continues. Attendance data will guide whether we drop or adjust the policy next term.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_compromise_celebrated: OutcomeModifierWeight.SlightPositive, // +4
                tsb_rule_repealed: OutcomeModifierWeight.Neutral,
                tsb_prolonged_strike: OutcomeModifierWeight.SlightNegative, // −4
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
      rootQuestionId: "tsb_con_q1",
      questions: {
        tsb_con_q1: {
          id: "tsb_con_q1",
          text: "Isn’t forcing karaoke proof of bureaucratic overreach? Shouldn’t teachers focus on basics instead of pop-song sing-alongs?",
          depth: 0,
          answers: [
            {
              id: "tsb_con_q1_a1",
              type: AnswerType.Challenge, // President punch
              text: "Our kids need confidence as well as calculus. If a little Bon Jovi helps them speak up, we’ll keep the mic hot—strike theatrics aside.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                tsb_prolonged_strike: OutcomeModifierWeight.ModeratePositive, // +6
                tsb_rule_repealed: OutcomeModifierWeight.ModerateNegative, // −6
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_con_q1_a2",
              type: AnswerType.Reassure, // Treasury again
              text: "If metrics show learning loss or ballooning costs, policy ends. Data, not karaoke playlists, guide spending.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_rule_repealed: OutcomeModifierWeight.StrongPositive, // +8
                tsb_prolonged_strike: OutcomeModifierWeight.StrongNegative, // −8
                tsb_compromise_celebrated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tsb_con_q1_a3",
              type: AnswerType.Inform, // Justice legal angle
              text: "Current law lets districts innovate, but any mandate must respect contractual teaching hours. DOJ will ensure no rights are trampled.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tsb_rule_repealed: OutcomeModifierWeight.SlightPositive, // +4
                tsb_prolonged_strike: OutcomeModifierWeight.Neutral,
                tsb_compromise_celebrated: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
          ],
        },
      },
    },
  },
];
