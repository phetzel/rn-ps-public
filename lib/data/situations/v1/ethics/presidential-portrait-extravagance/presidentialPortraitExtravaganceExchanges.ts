import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const presidentialPortraitExtravaganceExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ppe_lib_q1",
      questions: {
        ppe_lib_q1: {
          id: "ppe_lib_q1",
          text: "Liberal papers ask why the administration spent lavishly on multiple presidential portraits when budgets are tight. Any refunds coming?",
          depth: 0,
          answers: [
            {
              id: "ppe_lib_q1_a1",
              type: AnswerType.Inform,
              text: "State has reviewed the purchases and is working with Treasury to recover overcharges. Future art buys will follow stricter rules.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ppe_lib_q1_f1",
              outcomeModifiers: {
                ppe_refund_secured: OutcomeModifierWeight.ModeratePositive,
                ppe_hearings_ridicule: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Portraits celebrate history. We'll evaluate costs, but let's not cheapen cultural tradition with partisan outrage.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "ppe_lib_q1_f1",
              outcomeModifiers: {
                ppe_portraits_stay: OutcomeModifierWeight.SlightPositive,
                ppe_refund_secured: OutcomeModifierWeight.SlightNegative,
                ppe_hearings_ridicule: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Isn't spending thousands on vanity portraits tone-deaf during austerity? How will you hold officials accountable?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "ppe_lib_q1_f1",
              outcomeModifiers: {
                ppe_hearings_ridicule: OutcomeModifierWeight.ModeratePositive,
                ppe_refund_secured: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ppe_lib_q1_f1: {
          id: "ppe_lib_q1_f1",
          text: "Who approved these art purchases and were any rules bent to fund them?",
          depth: 1,
          answers: [
            {
              id: "ppe_lib_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Invoices show a single vendor overbilled the government. Treasury is clawing back payments and introducing competitive bids.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ppe_refund_secured: OutcomeModifierWeight.StrongPositive,
                ppe_hearings_ridicule: OutcomeModifierWeight.StrongNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Approvals were routine at the time. We're looking into any irregularities, but let's focus on future transparency.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ppe_portraits_stay: OutcomeModifierWeight.SlightPositive,
                ppe_refund_secured: OutcomeModifierWeight.SlightNegative,
                ppe_hearings_ridicule: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ppe_con_q1",
      questions: {
        ppe_con_q1: {
          id: "ppe_con_q1",
          text: "Conservative commentators say taxpayers footed the bill for presidential glamour shots. Will anyone face consequences?",
          depth: 0,
          answers: [
            {
              id: "ppe_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Treasury is recouping funds and reinforcing spending limits. Those responsible will be disciplined according to policy.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ppe_refund_secured: OutcomeModifierWeight.ModeratePositive,
                ppe_hearings_ridicule: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The portraits were part of a long tradition. Let's keep our eyes on jobs and security instead of museum gossip.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ppe_portraits_stay: OutcomeModifierWeight.SlightPositive,
                ppe_refund_secured: OutcomeModifierWeight.SlightNegative,
                ppe_hearings_ridicule: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_con_q1_a3",
              type: AnswerType.Challenge,
              text: "How can citizens trust fiscal discipline when officials splurge on vanity art projects?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                ppe_hearings_ridicule: OutcomeModifierWeight.ModeratePositive,
                ppe_refund_secured: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "ppe_ind_q1",
      questions: {
        ppe_ind_q1: {
          id: "ppe_ind_q1",
          text: "Independent outlets wonder if this portrait spree shows poor priorities. How will the administration reassure taxpayers?",
          depth: 0,
          answers: [
            {
              id: "ppe_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Refunds are underway and spending guidelines are being updated. The portraits will be reviewed for cultural value and cost.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ppe_refund_secured: OutcomeModifierWeight.ModeratePositive,
                ppe_hearings_ridicule: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Past presidents commissioned art too. We're focusing on delivering results, not debating brush strokes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ppe_portraits_stay: OutcomeModifierWeight.SlightPositive,
                ppe_refund_secured: OutcomeModifierWeight.SlightNegative,
                ppe_hearings_ridicule: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ppe_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If no one is held responsible, won't future officials feel free to splurge again?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                ppe_hearings_ridicule: OutcomeModifierWeight.ModeratePositive,
                ppe_refund_secured: OutcomeModifierWeight.ModerateNegative,
                ppe_portraits_stay: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
