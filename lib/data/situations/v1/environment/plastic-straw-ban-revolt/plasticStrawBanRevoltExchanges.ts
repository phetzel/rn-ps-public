import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const plasticStrawBanRevoltExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "psbr_lib_q1",
      questions: {
        psbr_lib_q1: {
          id: "psbr_lib_q1",
          text: "Small cafes say the sudden ban hurts business. Will you offer any help or just tell people to sip carefully?",
          depth: 0,
          answers: [
            {
              id: "psbr_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Transitional grants let mom-and-pop shops stock compostable straws while suppliers ramp up. No one has to sip in silence.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                psbr_ban_eased: OutcomeModifierWeight.ModeratePositive,
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Local governments decide how strict to be. We encourage reusable options but respect the thirst for flexibility.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                psbr_black_market: OutcomeModifierWeight.SlightPositive,
                psbr_ban_eased: OutcomeModifierWeight.SlightNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Pilot data shows microplastics drop when bans start. Health teams advise patience as alternative supplies improve.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                psbr_metal_straws: OutcomeModifierWeight.ModeratePositive,
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
                psbr_ban_eased: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "psbr_con_q1",
      questions: {
        psbr_con_q1: {
          id: "psbr_con_q1",
          text: "Citizens hoard plastic straws like gold. Will you repeal the ban or keep pushing these so-called eco rules?",
          depth: 0,
          answers: [
            {
              id: "psbr_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Consumers can switch to paper or metal. The ban aims to cut waste, not freedom, and the market will adjust soon enough.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "psbr_con_q1_f1",
              outcomeModifiers: {
                psbr_black_market: OutcomeModifierWeight.SlightPositive,
                psbr_ban_eased: OutcomeModifierWeight.SlightNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_con_q1_a2",
              type: AnswerType.Inform,
              text: "Justice officials target large-scale traffickers, not folks saving a few spares. We expect supplies to stabilize within weeks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "psbr_con_q1_f1",
              outcomeModifiers: {
                psbr_ban_eased: OutcomeModifierWeight.ModeratePositive,
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        psbr_con_q1_f1: {
          id: "psbr_con_q1_f1",
          text: "If underground trade keeps growing, will you scrap the ban or double down with harsher fines?",
          depth: 1,
          answers: [
            {
              id: "psbr_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We’ll adjust policy if needed, but harsher penalties won’t help. Education and affordable alternatives work better.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                psbr_ban_eased: OutcomeModifierWeight.ModeratePositive,
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If hoarding continues, the ban may loosen. Otherwise sellers will face seizures and fines until the streets are straw-free.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                psbr_black_market: OutcomeModifierWeight.ModeratePositive,
                psbr_ban_eased: OutcomeModifierWeight.ModerateNegative,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "psbr_inv_q1",
      questions: {
        psbr_inv_q1: {
          id: "psbr_inv_q1",
          text: "Reports show a thriving straw black market. Did your rushed rollout ignore economic warnings from your own experts?",
          depth: 0,
          answers: [
            {
              id: "psbr_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Consultants predicted short-term shortages. We’re tracking prices and adjusting import rules to prevent profiteering.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
                psbr_ban_eased: OutcomeModifierWeight.ModeratePositive,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Black markets pop up whenever rules change. Most people simply switch to reusable cups and move on with their day.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                psbr_ban_eased: OutcomeModifierWeight.SlightNegative,
                psbr_black_market: OutcomeModifierWeight.SlightPositive,
                psbr_metal_straws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psbr_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Restricted study shows microplastic intake fell in trial regions. Still, we’re reviewing rollout timing to avoid disruptions.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                psbr_metal_straws: OutcomeModifierWeight.ModeratePositive,
                psbr_ban_eased: OutcomeModifierWeight.Neutral,
                psbr_black_market: OutcomeModifierWeight.ModerateNegative,
              },
            },
          ],
        },
      },
    },
  },
];
