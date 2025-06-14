import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const vipZooDiplomacyExchanges: ExchangeData[] = [
  /* ────────────────── Liberal outlet ───────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "vzd_lib_q1",
      questions: {
        vzd_lib_q1: {
          id: "vzd_lib_q1",
          text: "Why did the President ditch scheduled meetings for pandas? Doesn't this trivialize the summit?",
          depth: 0,
          answers: [
            {
              id: "vzd_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Meetings were simply moved to later in the day. The President used the brief break to support cultural exchange at the zoo.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "vzd_lib_q1_f1",
              outcomeModifiers: {
                vzd_meetings_rescheduled:
                  OutcomeModifierWeight.ModeratePositive,
                vzd_deal_lost: OutcomeModifierWeight.ModerateNegative,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The panda stop was a goodwill gesture offered by hosts. Nothing important was dropped, and it cost taxpayers nothing.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "vzd_lib_q1_f1",
              outcomeModifiers: {
                vzd_panda_soft_power: OutcomeModifierWeight.SlightPositive,
                vzd_deal_lost: OutcomeModifierWeight.SlightNegative,
                vzd_meetings_rescheduled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Official schedule shows the panda visit was built in by the host, with all talks rescheduled and fully attended.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "vzd_lib_q1_f1",
              outcomeModifiers: {
                vzd_meetings_rescheduled: OutcomeModifierWeight.MajorPositive,
                vzd_deal_lost: OutcomeModifierWeight.MajorNegative,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        vzd_lib_q1_f1: {
          id: "vzd_lib_q1_f1",
          text: "Will skipping those sessions cost us the trade deal everyone expected?",
          depth: 1,
          answers: [
            {
              id: "vzd_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "The trade deal meeting took place later that day. Negotiators confirm no delay to signing.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                vzd_meetings_rescheduled:
                  OutcomeModifierWeight.ModeratePositive,
                vzd_deal_lost: OutcomeModifierWeight.ModerateNegative,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If deals fell through, we'd blame rigid scheduling, not a panda photo op. Diplomacy requires flexibility.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                vzd_meetings_rescheduled: OutcomeModifierWeight.SlightNegative,
                vzd_deal_lost: OutcomeModifierWeight.SlightPositive,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Conservative outlet ───────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "vzd_con_q1",
      questions: {
        vzd_con_q1: {
          id: "vzd_con_q1",
          text: "Does skipping diplomacy for zoo photos show our priorities are a joke?",
          depth: 0,
          answers: [
            {
              id: "vzd_con_q1_a1",
              type: AnswerType.Challenge,
              text: "A brief detour doesn't erase our focus. Diplomatic progress continued once the photo op wrapped.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                vzd_meetings_rescheduled: OutcomeModifierWeight.SlightNegative,
                vzd_deal_lost: OutcomeModifierWeight.SlightPositive,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Leaders often share cultural moments during diplomatic visits. This panda visit cost us no deals or taxpayer dollars.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                vzd_panda_soft_power: OutcomeModifierWeight.SlightPositive,
                vzd_deal_lost: OutcomeModifierWeight.SlightNegative,
                vzd_meetings_rescheduled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_con_q1_a3",
              type: AnswerType.Reassure,
              text: "Trade negotiators were on site all day. The photos simply filled a short gap in the schedule.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                vzd_meetings_rescheduled:
                  OutcomeModifierWeight.ModeratePositive,
                vzd_deal_lost: OutcomeModifierWeight.ModerateNegative,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Independent outlet ───────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "vzd_ind_q1",
      questions: {
        vzd_ind_q1: {
          id: "vzd_ind_q1",
          text: "What benefits did the President gain by skipping meetings for the panda exhibit?",
          depth: 0,
          answers: [
            {
              id: "vzd_ind_q1_a1",
              type: AnswerType.Inform,
              text: "The visit raised cultural goodwill and gave the President a chance to meet conservation groups supporting the trade talks.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                vzd_panda_soft_power: OutcomeModifierWeight.ModeratePositive,
                vzd_deal_lost: OutcomeModifierWeight.ModerateNegative,
                vzd_meetings_rescheduled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Everyone loves pandas. The tour didn't stop any deals, and it boosted local media coverage.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                vzd_panda_soft_power: OutcomeModifierWeight.SlightPositive,
                vzd_deal_lost: OutcomeModifierWeight.SlightNegative,
                vzd_meetings_rescheduled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vzd_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If missing meetings cost a trade opportunity, is a photo op with pandas worth it?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                vzd_meetings_rescheduled: OutcomeModifierWeight.SlightNegative,
                vzd_deal_lost: OutcomeModifierWeight.SlightPositive,
                vzd_panda_soft_power: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
