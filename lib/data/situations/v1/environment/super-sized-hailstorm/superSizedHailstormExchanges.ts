import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const superSizedHailstormExchanges: ExchangeData[] = [
  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "ssh_ind_q1",
      questions: {
        ssh_ind_q1: {
          id: "ssh_ind_q1",
          text: "Cities are battered by giant hailstones. What concrete help is arriving now, not next week?",
          depth: 0,
          answers: [
            {
              id: "ssh_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland teams deployed mobile shelters and drones are scanning damage. Supplies roll out tonight with priority to hospitals.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "ssh_ind_q1_f1",
              outcomeModifiers: {
                ssh_relief_bump: OutcomeModifierWeight.ModeratePositive,
                ssh_aid_delays: OutcomeModifierWeight.ModerateNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ssh_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Local officials manage first response. We’re monitoring and ready to help once requests come through properly.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "ssh_ind_q1_f1",
              outcomeModifiers: {
                ssh_aid_delays: OutcomeModifierWeight.SlightPositive,
                ssh_relief_bump: OutcomeModifierWeight.SlightNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ssh_ind_q1_f1: {
          id: "ssh_ind_q1_f1",
          text: "Residents complain relief money is stalled. Will you speed it up or leave them waiting under tarps?",
          depth: 1,
          answers: [
            {
              id: "ssh_ind_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Treasury is fast-tracking claims with digital forms. Most families should see payments within days, not weeks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                ssh_relief_bump: OutcomeModifierWeight.ModeratePositive,
                ssh_aid_delays: OutcomeModifierWeight.ModerateNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ssh_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If bureaucracy keeps dragging, we’ll send auditors to push paperwork or cut direct checks from emergency reserves.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                ssh_aid_delays: OutcomeModifierWeight.ModeratePositive,
                ssh_relief_bump: OutcomeModifierWeight.ModerateNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ssh_con_q1",
      questions: {
        ssh_con_q1: {
          id: "ssh_con_q1",
          text: "Businesses fear soaring insurance claims. Will you bail out insurers or let the market handle the losses?",
          depth: 0,
          answers: [
            {
              id: "ssh_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Treasury is coordinating with insurers for quick payouts but no blank checks. We’ll help rebuild without corporate giveaways.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                ssh_relief_bump: OutcomeModifierWeight.ModeratePositive,
                ssh_subsidies_win: OutcomeModifierWeight.ModerateNegative,
                ssh_aid_delays: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ssh_con_q1_a2",
              type: AnswerType.Deflect,
              text: "We’re still assessing damage costs. For now, private insurance should cover claims, and taxpayers won’t foot the bill.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ssh_subsidies_win: OutcomeModifierWeight.SlightPositive,
                ssh_relief_bump: OutcomeModifierWeight.SlightNegative,
                ssh_aid_delays: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ssh_con_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Classified radar shows more hail on the way. Insurers may need emergency subsidies if damage totals explode.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                ssh_subsidies_win: OutcomeModifierWeight.ModeratePositive,
                ssh_relief_bump: OutcomeModifierWeight.ModerateNegative,
                ssh_aid_delays: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ssh_lib_q1",
      questions: {
        ssh_lib_q1: {
          id: "ssh_lib_q1",
          text: "Some claim climate change intensifies these storms. What policy shifts will you pursue once cleanup ends?",
          depth: 0,
          answers: [
            {
              id: "ssh_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We’ll evaluate building codes and green infrastructure grants after immediate relief. Right now the focus is rescue and repair.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                ssh_relief_bump: OutcomeModifierWeight.SlightPositive,
                ssh_aid_delays: OutcomeModifierWeight.SlightNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ssh_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "We’re still counting dents. Long-term policy debates can wait until families are safe and streets are clear.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ssh_aid_delays: OutcomeModifierWeight.SlightPositive,
                ssh_relief_bump: OutcomeModifierWeight.SlightNegative,
                ssh_subsidies_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
