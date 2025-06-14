import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cabinetInsiderStockBattleExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "cisb_inv_q1",
      questions: {
        cisb_inv_q1: {
          id: "cisb_inv_q1",
          text: "Investigators say Treasury and Defense shared stock tips via private chat. Were cabinet members profiting off inside info?",
          depth: 0,
          answers: [
            {
              id: "cisb_inv_q1_a1",
              type: AnswerType.Deny,
              text: "Treasury denies giving or receiving secret tips. Any trades occurred through blind trusts and followed ethics rules.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "cisb_inv_q1_f1",
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_one_fired: OutcomeModifierWeight.SlightPositive,
                cisb_case_dropped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Transcripts show cabinet members shared policy hints hours before trades. Investigations are ongoing with potential charges.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "cisb_inv_q1_f1",
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.StrongNegative,
                cisb_one_fired: OutcomeModifierWeight.StrongPositive,
                cisb_case_dropped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "Calling it a textbook case ignores due process. Investigators will decide if anyone broke the law, not the court of public opinion.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "cisb_inv_q1_f1",
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cisb_inv_q1_f1: {
          id: "cisb_inv_q1_f1",
          text: "Are these chats enough to prove trading on insider info or could they be innocent banter?",
          depth: 1,
          answers: [
            {
              id: "cisb_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "The transcripts reference upcoming contracts minutes before big trades. Investigators view this as strong evidence, but charges are pending.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cisb_one_fired: OutcomeModifierWeight.ModeratePositive,
                cisb_case_dropped: OutcomeModifierWeight.ModerateNegative,
                cisb_joint_censure: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The chats are being taken out of context. Many conversations mention policy news after the fact, so jumping to conclusions is unfair.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cisb_ind_q1",
      questions: {
        cisb_ind_q1: {
          id: "cisb_ind_q1",
          text: "Independent outlets wonder if this feud exposes deeper culture problems in the cabinet.",
          depth: 0,
          answers: [
            {
              id: "cisb_ind_q1_a1",
              type: AnswerType.Challenge,
              text: "This feud is exaggerated. Most officials follow strict ethics rules, and our focus remains on policy results, not office gossip.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "An ethics board is reviewing both departments. Their findings will be public, ensuring any problems are fixed transparently.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.ModeratePositive,
                cisb_case_dropped: OutcomeModifierWeight.ModerateNegative,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's remember both departments keep our nation safe and solvent. We won't comment on petty rivalries.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cisb_con_q1",
      questions: {
        cisb_con_q1: {
          id: "cisb_con_q1",
          text: "Conservative media ask whether these stock trades show rampant corruption among economic leaders.",
          depth: 0,
          answers: [
            {
              id: "cisb_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Both departments are cooperating with investigators, and early findings suggest most trades were routine portfolio adjustments.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cisb_case_dropped: OutcomeModifierWeight.ModeratePositive,
                cisb_one_fired: OutcomeModifierWeight.ModerateNegative,
                cisb_joint_censure: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Wrongdoing will be addressed, but the President won't prejudge. Let's allow investigators to finish first.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cisb_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Other administrations had similar controversies. We're focused on the budget, not inside gossip about stock picks.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cisb_joint_censure: OutcomeModifierWeight.SlightNegative,
                cisb_case_dropped: OutcomeModifierWeight.SlightPositive,
                cisb_one_fired: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
