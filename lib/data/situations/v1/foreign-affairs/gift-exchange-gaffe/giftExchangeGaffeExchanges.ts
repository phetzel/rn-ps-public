import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const giftExchangeGaffeExchanges: ExchangeData[] = [
  /* ────────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "geg_lib_q1",
      questions: {
        geg_lib_q1: {
          id: "geg_lib_q1",
          text: "The bacon gift to Veggistan's vegetarian leader looks like a colossal diplomatic blunder. Did no one brief cultural sensitivities?",
          depth: 0,
          answers: [
            /* Admit — State preference */
            {
              id: "geg_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We deeply regret the oversight and have issued a formal apology. A culturally appropriate follow-up gift is en route, and our protocol team is tightening checks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.MajorPositive, // +12
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.StrongNegative, // −8
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.SlightNegative, // −4
              },
            },

            /* Deny — President flavour */
            {
              id: "geg_lib_q1_a2",
              type: AnswerType.Deny,
              text: "The gift was actually premium soy-bacon, entirely plant based. Any outrage stems from a translation slip; Veggistan’s response feels disproportionate.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyNegative,
                  },
                },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.MajorNegative, // −12
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.StrongPositive, // +8
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.SlightPositive, // +4
              },
            },

            /* Authorized — State intel */
            {
              id: "geg_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The error is ours, and we’ve sent Veggistan a rare stamp from their founding year plus an invite to co-host a summit on plant-based food security.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.MajorPositive, // +12
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.SlightNegative, // −4
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.StrongNegative, // −8
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "geg_con_q1",
      questions: {
        geg_con_q1: {
          id: "geg_con_q1",
          text: "Opponents say this bacon blunder embarrasses the nation and risks trade deals. How will you prevent costly fallout for our farmers?",
          depth: 0,
          answers: [
            /* Deny — President flavour */
            {
              id: "geg_con_q1_a1",
              type: AnswerType.Deny,
              text: "No trade deal is at risk. Veggistan values our market access more than menu choices. We expect business as usual—no farmer will lose a cent.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.SlightNegative, // −4
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.SlightPositive, // +4
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Reassure — HHS deflect role */
            {
              id: "geg_con_q1_a2",
              type: AnswerType.Deflect,
              text: "We’re already clarifying the gift’s plant-based nature and showcasing our quality soy exports—supporting both diplomacy and farm income.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.ModeratePositive, // +6
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.ModerateNegative, // −6
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Admit — State path */
            {
              id: "geg_con_q1_a3",
              type: AnswerType.Admit,
              text: "We regret the mismatch and have offered Veggistan a culturally respectful gift plus tariff-free access to specialty soy seeds—helping our farmers too.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                gift_gaffe_veggistan_apology_accepted:
                  OutcomeModifierWeight.StrongPositive, // +8
                gift_gaffe_veggistan_lingering_resentment:
                  OutcomeModifierWeight.StrongNegative, // −8
                gift_gaffe_veggistan_bacon_boycott:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },
];
