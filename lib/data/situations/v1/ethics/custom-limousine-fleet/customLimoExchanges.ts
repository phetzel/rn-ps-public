import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const customLimoExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "clf_lib_q1",
      questions: {
        clf_lib_q1: {
          id: "clf_lib_q1",
          text: "Liberal outlets reveal a gold-trim limo fleet order. How can the White House justify such luxury?",
          depth: 0,
          answers: [
            {
              id: "clf_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Orders are being reviewed. Any unnecessary embellishments will be removed to keep costs reasonable.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "clf_lib_q1_f1",
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.ModeratePositive,
                limo_congress_cancels: OutcomeModifierWeight.ModerateNegative,
                limo_delivered_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_lib_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Procurement files show gold trim was proposed by vendors and has been largely stripped out after internal review.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "clf_lib_q1_f1",
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.StrongPositive,
                limo_congress_cancels: OutcomeModifierWeight.StrongNegative,
                limo_delivered_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "These vehicles replace aging security transports. The look may be fancy, but protection is the top priority.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "clf_lib_q1_f1",
              outcomeModifiers: {
                limo_delivered_memes: OutcomeModifierWeight.SlightPositive,
                limo_order_scaled: OutcomeModifierWeight.SlightNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        clf_lib_q1_f1: {
          id: "clf_lib_q1_f1",
          text: "Will the President personally ride in these limos once delivered?",
          depth: 1,
          answers: [
            {
              id: "clf_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Only if security requires it. The focus is safe transport, not personal luxury for the President.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.ModeratePositive,
                limo_delivered_memes: OutcomeModifierWeight.ModerateNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Isn't scaling back just optics? Why not cancel the order entirely if costs are a concern?",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                limo_congress_cancels: OutcomeModifierWeight.SlightPositive,
                limo_order_scaled: OutcomeModifierWeight.SlightNegative,
                limo_delivered_memes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "clf_con_q1",
      questions: {
        clf_con_q1: {
          id: "clf_con_q1",
          text: "Conservative media ask if taxpayers will foot the bill for a fleet of gold-trim limos for the President.",
          depth: 0,
          answers: [
            {
              id: "clf_con_q1_a1",
              type: AnswerType.Deny,
              text: "The trim has been downgraded. Costs are comparable to standard security vehicles and funded within existing budgets.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.ModeratePositive,
                limo_congress_cancels: OutcomeModifierWeight.ModerateNegative,
                limo_delivered_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Any extravagant features will be removed. The fleet will adhere to normal government specifications.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.ModeratePositive,
                limo_delivered_memes: OutcomeModifierWeight.ModerateNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's compare these costs to what other world leaders spend rather than rush to judgement on a leaked spec sheet.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                limo_delivered_memes: OutcomeModifierWeight.SlightPositive,
                limo_order_scaled: OutcomeModifierWeight.SlightNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "clf_ind_q1",
      questions: {
        clf_ind_q1: {
          id: "clf_ind_q1",
          text: "Independent reporters ask if the limo order reflects a pattern of vanity spending in this administration.",
          depth: 0,
          answers: [
            {
              id: "clf_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "The administration is committed to frugality. We review all fleet purchases to ensure they're mission focused.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                limo_delivered_memes: OutcomeModifierWeight.SlightPositive,
                limo_order_scaled: OutcomeModifierWeight.SlightNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "clf_ind_q1_a2",
              type: AnswerType.Inform,
              text: "Procurement is under review. Any unnecessary upgrades will be cut, and final costs reported to the public soon.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                limo_order_scaled: OutcomeModifierWeight.ModeratePositive,
                limo_delivered_memes: OutcomeModifierWeight.ModerateNegative,
                limo_congress_cancels: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
