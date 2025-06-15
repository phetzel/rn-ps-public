import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const privateJetVacationsExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pjv_con_q1",
      questions: {
        pjv_con_q1: {
          id: "pjv_con_q1",
          text: "Conservative outlets say the HHS Secretary used government jets for family vacations overseas. Will taxpayers be reimbursed?",
          depth: 0,
          answers: [
            {
              id: "pjv_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Yes. The Secretary will repay the flights and new approval rules are being issued to prevent future misuse.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "pjv_con_q1_f1",
              outcomeModifiers: {
                pjv_repays_partial: OutcomeModifierWeight.ModeratePositive,
                pjv_omb_rules: OutcomeModifierWeight.ModerateNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Travel finances are being addressed appropriately. Let's not sensationalize a few family trips.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "pjv_con_q1_f1",
              outcomeModifiers: {
                pjv_no_action: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_omb_rules: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_con_q1_a3",
              type: AnswerType.Challenge,
              text: "These trips looked like luxury junkets. Why should taxpayers foot the bill for personal travel?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "pjv_con_q1_f1",
              outcomeModifiers: {
                pjv_omb_rules: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pjv_con_q1_f1: {
          id: "pjv_con_q1_f1",
          text: "Who specifically approved these luxury vacation trips on the department's budget?",
          depth: 1,
          answers: [
            {
              id: "pjv_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Budget officials approved them under loose guidelines. Those guidelines are now tightened and reimbursements are underway.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pjv_repays_partial: OutcomeModifierWeight.ModeratePositive,
                pjv_omb_rules: OutcomeModifierWeight.ModerateNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Personnel reviews are in progress. Announcing names now would be premature and could derail due process.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pjv_no_action: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_omb_rules: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pjv_ind_q1",
      questions: {
        pjv_ind_q1: {
          id: "pjv_ind_q1",
          text: "Independent papers note lavish jet use while hospitals face cuts. Any accountability coming?",
          depth: 0,
          answers: [
            {
              id: "pjv_ind_q1_a1",
              type: AnswerType.Challenge,
              text: "With budget shortfalls, shouldn't these vacation flights trigger firings rather than just reimbursements?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                pjv_omb_rules: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "Reimbursements are happening and new oversight is in place. We'll ensure every flight serves the public interest.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pjv_repays_partial: OutcomeModifierWeight.ModeratePositive,
                pjv_omb_rules: OutcomeModifierWeight.ModerateNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "Past administrations also used agency aircraft. Let's focus on health outcomes rather than travel minutiae.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pjv_no_action: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_omb_rules: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "pjv_lib_q1",
      questions: {
        pjv_lib_q1: {
          id: "pjv_lib_q1",
          text: "Liberal media wonder if this lavish travel shows elitism in the administration. Should stricter rules apply?",
          depth: 0,
          answers: [
            {
              id: "pjv_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "Flying the family around on government jets is indefensible. Will the Secretary face real punishment?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                pjv_omb_rules: OutcomeModifierWeight.ModeratePositive,
                pjv_repays_partial: OutcomeModifierWeight.ModerateNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The Secretary is repaying costs and supports tougher guidelines. This administration takes ethical travel seriously.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pjv_repays_partial: OutcomeModifierWeight.ModeratePositive,
                pjv_omb_rules: OutcomeModifierWeight.ModerateNegative,
                pjv_no_action: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pjv_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Reforms are underway. Let's not derail healthcare policy debates over a handful of questionable flights.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pjv_no_action: OutcomeModifierWeight.SlightPositive,
                pjv_repays_partial: OutcomeModifierWeight.SlightNegative,
                pjv_omb_rules: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
