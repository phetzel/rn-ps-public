import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const pipelineChocolateLeakExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "pcl_inv_q1",
      questions: {
        pcl_inv_q1: {
          id: "pcl_inv_q1",
          text: "Experts warn syrup could fuel bacterial blooms. Did lax oversight let this gooey disaster happen and who pays the bill?",
          depth: 0,
          answers: [
            {
              id: "pcl_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Inspectors flagged corrosion last quarter. Crews are pumping out syrup and testing water daily. Fines and repair costs fall to the operator, not taxpayers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pcl_inv_q1_f1",
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.ModeratePositive,
                pcl_infestation_crisis: OutcomeModifierWeight.ModerateNegative,
                pcl_class_action_bankrupts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "This was a freak leak, not federal. The company’s insurance is as thick as the syrup, and locals already joke about chocolate tourism.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "pcl_inv_q1_f1",
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.SlightNegative,
                pcl_infestation_crisis: OutcomeModifierWeight.SlightPositive,
                pcl_class_action_bankrupts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Classified sampling shows sugar levels high enough to spark bacterial blooms within 48 hours. Mobile disinfectant units will deploy tonight if needed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "pcl_inv_q1_f1",
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.StrongPositive,
                pcl_infestation_crisis: OutcomeModifierWeight.StrongNegative,
                pcl_class_action_bankrupts: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pcl_inv_q1_f1: {
          id: "pcl_inv_q1_f1",
          text: "If bacteria spreads or wildlife dies, will the government step in with emergency funds or force the operator to handle everything?",
          depth: 1,
          answers: [
            {
              id: "pcl_inv_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Operator escrow covers cleanup and any wildlife rehab. Federal aid only activates if public health is threatened, which looks unlikely right now.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                pcl_class_action_bankrupts: OutcomeModifierWeight.ModerateNegative,
                pcl_cleanup_pr_win: OutcomeModifierWeight.ModeratePositive,
                pcl_infestation_crisis: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "The operator must pay every dime. If they balk, we’ll see them in court and seize assets before one duck loses a feather.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                pcl_class_action_bankrupts: OutcomeModifierWeight.ModeratePositive,
                pcl_infestation_crisis: OutcomeModifierWeight.ModerateNegative,
                pcl_cleanup_pr_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "pcl_ind_q1",
      questions: {
        pcl_ind_q1: {
          id: "pcl_ind_q1",
          text: "Community groups fear syrup will linger for months. What steps are you taking to protect wetlands and nearby farms?",
          depth: 0,
          answers: [
            {
              id: "pcl_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We’ve dispatched cleanup crews around the clock and opened a hotline for affected farms. Early tests show sugar levels dropping fast.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.SlightPositive,
                pcl_infestation_crisis: OutcomeModifierWeight.SlightNegative,
                pcl_class_action_bankrupts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Farmers might see a bumper crop of chocolate-covered berries. Let’s not panic before we taste a little optimism.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pcl_infestation_crisis: OutcomeModifierWeight.SlightPositive,
                pcl_cleanup_pr_win: OutcomeModifierWeight.SlightNegative,
                pcl_class_action_bankrupts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_ind_q1_a3",
              type: AnswerType.Inform,
              text: "The syrup breaks down quickly when diluted. We’re using portable dams and pumps to redirect flow and protect nearby soil from contamination.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.ModeratePositive,
                pcl_class_action_bankrupts: OutcomeModifierWeight.ModerateNegative,
                pcl_infestation_crisis: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pcl_con_q1",
      questions: {
        pcl_con_q1: {
          id: "pcl_con_q1",
          text: "Taxpayers worry clean-up costs will fall on them if lawsuits drag out. How will you ensure the private operator covers every cent?",
          depth: 0,
          answers: [
            {
              id: "pcl_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Insurance and corporate reserves will foot the bill. We’re not writing a government check for a chocolate mess.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                pcl_cleanup_pr_win: OutcomeModifierWeight.SlightPositive,
                pcl_class_action_bankrupts: OutcomeModifierWeight.SlightNegative,
                pcl_infestation_crisis: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_con_q1_a2",
              type: AnswerType.Inform,
              text: "Cleanup contracts include escrow deposits from the operator. Missed payments trigger federal liens and asset seizures to reimburse any public spending.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                pcl_class_action_bankrupts: OutcomeModifierWeight.ModeratePositive,
                pcl_cleanup_pr_win: OutcomeModifierWeight.ModerateNegative,
                pcl_infestation_crisis: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_con_q1_a3",
              type: AnswerType.Challenge,
              text: "If the company can’t pay, will you refuse federal relief even if local jobs and crops suffer?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                pcl_class_action_bankrupts: OutcomeModifierWeight.ModerateNegative,
                pcl_cleanup_pr_win: OutcomeModifierWeight.ModeratePositive,
                pcl_infestation_crisis: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
