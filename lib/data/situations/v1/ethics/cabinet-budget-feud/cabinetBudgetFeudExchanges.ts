import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cabinetBudgetFeudExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "cbf_ind_q1",
      questions: {
        cbf_ind_q1: {
          id: "cbf_ind_q1",
          text: "Independent reporters ask if Treasury's slide deck accusing Defense of overspending signals deeper cabinet dysfunction.",
          depth: 0,
          answers: [
            {
              id: "cbf_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "The cabinet sometimes debates budgets vigorously, but we remain united on security. Treasury's slides highlight oversight, not rebellion.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "cbf_ind_q1_f1",
              outcomeModifiers: {
                cbf_joint_audit: OutcomeModifierWeight.ModeratePositive,
                cbf_pr_war: OutcomeModifierWeight.ModerateNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Treasury stands by the numbers. Defense needs to justify every tank-shaped trinket. Transparency is healthy rivalry.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "cbf_ind_q1_f1",
              outcomeModifiers: {
                cbf_pr_war: OutcomeModifierWeight.SlightPositive,
                cbf_joint_audit: OutcomeModifierWeight.SlightNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "Budget debates happen every year. Let's not turn a spreadsheet dispute into a soap opera when the real focus is national security.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "cbf_ind_q1_f1",
              outcomeModifiers: {
                cbf_pres_mediates: OutcomeModifierWeight.SlightPositive,
                cbf_pr_war: OutcomeModifierWeight.SlightNegative,
                cbf_joint_audit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cbf_ind_q1_f1: {
          id: "cbf_ind_q1_f1",
          text: "Did the President authorize Treasury to release those budget slides publicly?",
          depth: 1,
          answers: [
            {
              id: "cbf_ind_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "The slides comparing planned to actual outlays show $2B in unapproved upgrades. Treasury released them at the President's direction.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                cbf_joint_audit: OutcomeModifierWeight.ModeratePositive,
                cbf_pr_war: OutcomeModifierWeight.ModerateNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_ind_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The slides were compiled for internal review. Who shared them is less important than fixing procurement gaps.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cbf_pres_mediates: OutcomeModifierWeight.SlightPositive,
                cbf_joint_audit: OutcomeModifierWeight.SlightNegative,
                cbf_pr_war: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_ind_q1_f1_a3",
              type: AnswerType.Challenge,
              text: "Budget slides speak for themselves. Defense overspent, and releasing proof was a public service.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cbf_pr_war: OutcomeModifierWeight.ModeratePositive,
                cbf_joint_audit: OutcomeModifierWeight.ModerateNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cbf_con_q1",
      questions: {
        cbf_con_q1: {
          id: "cbf_con_q1",
          text: "Conservative media claims the feud proves Defense is bloated. Why hasn't the President cut spending yet?",
          depth: 0,
          answers: [
            {
              id: "cbf_con_q1_a1",
              type: AnswerType.Inform,
              text: "The President has ordered a joint audit to verify spending before any cuts. We want facts before axes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cbf_joint_audit: OutcomeModifierWeight.StrongPositive,
                cbf_pr_war: OutcomeModifierWeight.StrongNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_con_q1_a2",
              type: AnswerType.Deny,
              text: "Defense says the budget is leaner than ever. Treasury's accusations are grandstanding.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cbf_pr_war: OutcomeModifierWeight.ModeratePositive,
                cbf_joint_audit: OutcomeModifierWeight.ModerateNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_con_q1_a3",
              type: AnswerType.Deflect,
              text: "We're reviewing all agency budgets, not just Defense. The feud is overblown and the work continues.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cbf_pres_mediates: OutcomeModifierWeight.SlightPositive,
                cbf_pr_war: OutcomeModifierWeight.SlightNegative,
                cbf_joint_audit: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cbf_lib_q1",
      questions: {
        cbf_lib_q1: {
          id: "cbf_lib_q1",
          text: "Liberal columnists say Defense hawks are bullying Treasury. Has the President lost control of the cabinet?",
          depth: 0,
          answers: [
            {
              id: "cbf_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "The President encourages spirited debate but expects professionalism. Steps are underway to align priorities.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cbf_pres_mediates: OutcomeModifierWeight.ModeratePositive,
                cbf_pr_war: OutcomeModifierWeight.ModerateNegative,
                cbf_joint_audit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_lib_q1_a2",
              type: AnswerType.Admit,
              text: "Treasury regrets airing grievances publicly and will participate in a joint audit.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cbf_joint_audit: OutcomeModifierWeight.ModeratePositive,
                cbf_pr_war: OutcomeModifierWeight.ModerateNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cbf_lib_q1_a3",
              type: AnswerType.Deny,
              text: "Defense denies bullying and says spending accusations misread the threat landscape, and the department is cooperating with the audit.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cbf_joint_audit: OutcomeModifierWeight.SlightPositive,
                cbf_pr_war: OutcomeModifierWeight.SlightNegative,
                cbf_pres_mediates: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
