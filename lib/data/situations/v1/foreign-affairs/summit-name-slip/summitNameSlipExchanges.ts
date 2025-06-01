import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const summitNameSlipExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ──────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "sns_ind_q1",
      questions: {
        sns_ind_q1: {
          id: "sns_ind_q1",
          text: "The President's repeated misnaming of Reallyfarawaystan created obvious awkwardness. What concrete steps are being taken to fix this?",
          depth: 0,
          answers: [
            {
              id: "sns_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "The President has personally apologized, and our embassy delivered a formal note. Mutual projects continue uninterrupted; respect remains the cornerstone.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.ModeratePositive, // +6
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.ModerateNegative, // −6
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral, // 0
              },
            },
            {
              id: "sns_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "A name slip shouldn’t eclipse the summit’s landmark energy accord. Leaders judge substance, not syllables, and our substance delivered big wins.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.SlightNegative, // −4
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.SlightPositive, // +4
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral, // 0
              },
            },
            {
              id: "sns_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Our intel shows both leaders laughed over vintage-map trivia minutes later. They even exchanged antique atlases—evidence no offense was truly taken.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.MajorPositive, // +12
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.MajorNegative, // −12
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ──────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "sns_con_q1",
      questions: {
        sns_con_q1: {
          id: "sns_con_q1",
          text: "Calling our ally 'Reallyfastvanistan' looks inept. Doesn’t that blunder undercut American credibility abroad?",
          depth: 0,
          answers: [
            {
              id: "sns_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Credibility comes from results. The President secured key security concessions; fixating on syllables is petty and ignores America’s decisive gains.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.SlightNegative, // −4
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.SlightPositive, // +4
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sns_con_q1_a2",
              type: AnswerType.Reassure,
              text: "World leaders know slips happen. They judge resolve and policy, and on those metrics this summit was a clear win for American interests.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Neutral },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.SlightPositive, // +4
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.SlightNegative, // −4
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ───────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "sns_lib_q1",
      questions: {
        sns_lib_q1: {
          id: "sns_lib_q1",
          text: "Critics say botching a country’s name shows disrespect. How will the administration rebuild goodwill with the people of Reallyfarawaystan?",
          depth: 0,
          answers: [
            /* Admit – State-friendly */
            {
              id: "sns_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We own the mistake. A personal letter and an invite for cultural exchange were sent today. Respect guides our diplomacy, and that respect has been reiterated.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.ModeratePositive, // +6
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.ModerateNegative, // −6
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },

            /* Deflect – President flavour */
            {
              id: "sns_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Let’s not pretend perfect diction outweighs climate pledges signed yesterday. The people of Reallyfarawaystan gain clean-energy funding—real respect in action.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.SlightNegative, // −4
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.SlightPositive, // +4
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },

            /* Inform – extra detail */
            {
              id: "sns_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Protocol officers will brief all officials on nuanced pronunciations before future summits, and joint media events will highlight shared achievements over slips.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                summit_name_slip_gaffe_overblown:
                  OutcomeModifierWeight.StrongPositive, // +8
                summit_name_slip_diplomatic_chill:
                  OutcomeModifierWeight.StrongNegative, // −8
                summit_name_slip_meme_gold: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
