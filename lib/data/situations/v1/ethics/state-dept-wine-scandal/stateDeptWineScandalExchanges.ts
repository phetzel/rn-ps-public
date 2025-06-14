import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const stateDeptWineScandalExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "sdw_lib_q1",
      questions: {
        sdw_lib_q1: {
          id: "sdw_lib_q1",
          text: "Expense reports show vintage wine bought as 'gifts.' Was this an attempt to funnel perks through diplomatic channels?",
          depth: 0,
          answers: [
            {
              id: "sdw_lib_q1_a1",
              type: AnswerType.Deflect,
              text: "Gifting protocols vary by country. These bottles were logged for ceremonial use, not personal parties, and the staffer misfiled them.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "sdw_lib_q1_f1",
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.ModerateNegative,
                wine_resignation: OutcomeModifierWeight.ModeratePositive,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdw_lib_q1_a2",
              type: AnswerType.Inform,
              text: "The Justice Department audit shows the purchases were coded incorrectly and reimbursed. No evidence of resale or personal gain was found.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "sdw_lib_q1_f1",
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.ModeratePositive,
                wine_resignation: OutcomeModifierWeight.ModerateNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdw_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Receipts trace the wine to one staffer’s card. The audit confirms immediate repayment after internal flags were raised last month.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "sdw_lib_q1_f1",
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.StrongPositive,
                wine_resignation: OutcomeModifierWeight.StrongNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        sdw_lib_q1_f1: {
          id: "sdw_lib_q1_f1",
          text: "Why did the department label personal wine as diplomatic gifts in the first place?",
          depth: 1,
          answers: [
            {
              id: "sdw_lib_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "It was sloppy bookkeeping, not malice. We’ve corrected the forms and tightened controls so this vintage drama never repeats.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.ModeratePositive,
                wine_resignation: OutcomeModifierWeight.ModerateNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdw_lib_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "New software now flags unusual purchases instantly. Any misuse is repaid, and disciplinary reviews are underway.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.SlightPositive,
                wine_resignation: OutcomeModifierWeight.SlightNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sdw_con_q1",
      questions: {
        sdw_con_q1: {
          id: "sdw_con_q1",
          text: "Taxpayers are furious over fancy wine on the public dime. Will anyone be held accountable?",
          depth: 0,
          answers: [
            {
              id: "sdw_con_q1_a1",
              type: AnswerType.Inform,
              text: "The audit identifies the buyer and repayment has already occurred. Disciplinary actions are pending, and no senior officials were involved.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.ModeratePositive,
                wine_resignation: OutcomeModifierWeight.ModerateNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdw_con_q1_a2",
              type: AnswerType.Deflect,
              text: "This was a one-off blunder by a staffer, not a grand conspiracy. Let's keep focus on diplomacy instead of beverage choices.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                wine_costs_repaid: OutcomeModifierWeight.SlightNegative,
                wine_resignation: OutcomeModifierWeight.SlightPositive,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sdw_ind_q1",
      questions: {
        sdw_ind_q1: {
          id: "sdw_ind_q1",
          text: "Will new rules prevent future misuse of expense cards for lavish 'gifts'?",
          depth: 0,
          answers: [
            {
              id: "sdw_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Yes. Training and software updates now flag unusual purchases instantly. Repeat abuse will lead to firing and repayment.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                wine_policy_changes: OutcomeModifierWeight.ModeratePositive,
                wine_costs_repaid: OutcomeModifierWeight.ModerateNegative,
                wine_resignation: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdw_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Rules help, but who approved these purchases in the first place? People want accountability, not just software.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                wine_resignation: OutcomeModifierWeight.SlightPositive,
                wine_costs_repaid: OutcomeModifierWeight.SlightNegative,
                wine_policy_changes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
