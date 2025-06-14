import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const unauthorizedSurveillanceExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "uas_lib_q1",
      questions: {
        uas_lib_q1: {
          id: "uas_lib_q1",
          text: "Reports claim DHS spied on political rivals without court approval. Was unauthorized surveillance ordered from the top?",
          depth: 0,
          answers: [
            {
              id: "uas_lib_q1_a1",
              type: AnswerType.Deny,
              text: "The department followed legal guidelines. Any unauthorized spying claims are inaccurate. We'll cooperate with oversight as needed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "uas_lib_q1_f1",
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.ModerateNegative,
                uas_whistle_chaos: OutcomeModifierWeight.ModeratePositive,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_lib_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Warrant logs indicate some surveillance began before judges signed off. Investigators are reviewing who authorized the early searches.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "uas_lib_q1_f1",
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.StrongNegative,
                uas_whistle_chaos: OutcomeModifierWeight.StrongPositive,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Secret spying erodes trust. Will officials who ordered these operations be removed from their posts immediately?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "uas_lib_q1_f1",
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.ModerateNegative,
                uas_whistle_chaos: OutcomeModifierWeight.ModeratePositive,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        uas_lib_q1_f1: {
          id: "uas_lib_q1_f1",
          text: "If there was no wrongdoing, why were warrants incomplete? Did DHS overstep its authority?",
          depth: 1,
          answers: [
            {
              id: "uas_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Warrants were drafted quickly amid threats; missing signatures are under review, and we welcome court oversight.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.ModeratePositive,
                uas_whistle_chaos: OutcomeModifierWeight.ModerateNegative,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Details are classified, but no laws were broken. Let's focus on future reforms rather than blame games.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.SlightNegative,
                uas_whistle_chaos: OutcomeModifierWeight.Neutral,
                uas_deadlock: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "uas_con_q1",
      questions: {
        uas_con_q1: {
          id: "uas_con_q1",
          text: "Conservative papers ask if the administration condoned spying on opponents. Who approved it?",
          depth: 0,
          answers: [
            {
              id: "uas_con_q1_a1",
              type: AnswerType.Reassure,
              text: "The review found no high-level approval of rogue surveillance. Officials are cooperating with the courts to ensure all operations comply.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.ModeratePositive,
                uas_whistle_chaos: OutcomeModifierWeight.ModerateNegative,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Let's not leap to conclusions before the investigation is complete. We need evidence, not a hasty resignation demand.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.SlightNegative,
                uas_whistle_chaos: OutcomeModifierWeight.SlightPositive,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Past administrations used similar programs. Let's maintain focus on real security threats instead of politicizing intelligence work.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.SlightNegative,
                uas_whistle_chaos: OutcomeModifierWeight.Neutral,
                uas_deadlock: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "uas_ind_q1",
      questions: {
        uas_ind_q1: {
          id: "uas_ind_q1",
          text: "Independent outlets ask if any reform will truly halt these spying practices, or will new policies be ignored?",
          depth: 0,
          answers: [
            {
              id: "uas_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Courts will monitor compliance and oversight committees will track operations to ensure reforms are enforced.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.ModeratePositive,
                uas_whistle_chaos: OutcomeModifierWeight.ModerateNegative,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uas_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Reforms are on the table, but we won't reveal operational details that could embolden bad actors.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.SlightNegative,
                uas_whistle_chaos: OutcomeModifierWeight.Neutral,
                uas_deadlock: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "uas_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "Your cynicism is unwarranted. Agencies must report to Congress monthly, and ignoring the reforms would trigger penalties.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                uas_courts_halt: OutcomeModifierWeight.SlightPositive,
                uas_whistle_chaos: OutcomeModifierWeight.SlightNegative,
                uas_deadlock: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
