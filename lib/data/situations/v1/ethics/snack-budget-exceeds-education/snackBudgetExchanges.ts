import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const snackBudgetExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "sbe_con_q1",
      questions: {
        sbe_con_q1: {
          id: "sbe_con_q1",
          text: "Conservative outlets blast the President for spending more on snacks than on education. Will the budget be fixed?",
          depth: 0,
          answers: [
            {
              id: "sbe_con_q1_a1",
              type: AnswerType.Inform,
              text: "Yes. Funds are being rebalanced to ensure schools are prioritized while the snack line is trimmed significantly.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "sbe_con_q1_f1",
              outcomeModifiers: {
                snack_budget_rebalanced: OutcomeModifierWeight.ModeratePositive,
                snack_media_fades: OutcomeModifierWeight.ModerateNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sbe_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The snack budget is a tiny slice of overall spending. Let's not ignore the administration's record investment in teachers.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "sbe_con_q1_f1",
              outcomeModifiers: {
                snack_media_fades: OutcomeModifierWeight.SlightPositive,
                snack_budget_rebalanced: OutcomeModifierWeight.SlightNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sbe_con_q1_a3",
              type: AnswerType.Deny,
              text: "Those numbers are misleading. Education funds come from a different account entirely and have not been cut.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "sbe_con_q1_f1",
              outcomeModifiers: {
                snack_media_fades: OutcomeModifierWeight.SlightPositive,
                snack_budget_rebalanced: OutcomeModifierWeight.SlightNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        sbe_con_q1_f1: {
          id: "sbe_con_q1_f1",
          text: "Is the President willing to testify before Congress about these snack expenditures?",
          depth: 1,
          answers: [
            {
              id: "sbe_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "If Congress wants a hearing, we'll cooperate, but we believe the paperwork speaks for itself and funds are already shifted.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                snack_media_fades: OutcomeModifierWeight.SlightPositive,
                snack_budget_rebalanced: OutcomeModifierWeight.SlightNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sbe_con_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "The President is open to explaining the line item and will provide all receipts showing education funds are untouched.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                snack_budget_rebalanced: OutcomeModifierWeight.ModeratePositive,
                snack_media_fades: OutcomeModifierWeight.ModerateNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sbe_lib_q1",
      questions: {
        sbe_lib_q1: {
          id: "sbe_lib_q1",
          text: "Liberal media asks how the administration let snack spending eclipse education priorities in the first place.",
          depth: 0,
          answers: [
            {
              id: "sbe_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Treasury's breakdown shows snack funds came from discretionary accounts and will be reallocated to classrooms immediately.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                snack_budget_rebalanced: OutcomeModifierWeight.ModeratePositive,
                snack_summit_doubles_down: OutcomeModifierWeight.ModerateNegative,
                snack_media_fades: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sbe_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Isn't this a sign of skewed priorities? Why wasn't education fully funded before snacks got a dime?",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                snack_summit_doubles_down: OutcomeModifierWeight.SlightPositive,
                snack_budget_rebalanced: OutcomeModifierWeight.SlightNegative,
                snack_media_fades: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sbe_ind_q1",
      questions: {
        sbe_ind_q1: {
          id: "sbe_ind_q1",
          text: "Independents wonder if snack spending is just a distraction from deeper budget woes.",
          depth: 0,
          answers: [
            {
              id: "sbe_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "The real story is our commitment to healthy school lunches and economic growth, not the snack drawer in the West Wing.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                snack_media_fades: OutcomeModifierWeight.SlightPositive,
                snack_summit_doubles_down: OutcomeModifierWeight.SlightNegative,
                snack_budget_rebalanced: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sbe_ind_q1_a2",
              type: AnswerType.Inform,
              text: "We are reviewing all discretionary budgets this quarter, including snacks, to ensure money is directed where it's needed most.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                snack_budget_rebalanced: OutcomeModifierWeight.ModeratePositive,
                snack_media_fades: OutcomeModifierWeight.ModerateNegative,
                snack_summit_doubles_down: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
