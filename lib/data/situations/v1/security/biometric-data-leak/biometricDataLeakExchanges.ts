import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const biometricDataLeakExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Investigative with follow-up ────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "bdl_inv_q1",
      questions: {
        bdl_inv_q1: {
          id: "bdl_inv_q1",
          text: "Millions of biometric records leaked. Who’s responsible and how secure is the system now?",
          depth: 0,
          answers: [
            {
              id: "bdl_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland isolated the breach and issued new encryption keys overnight. We’re working with credit bureaus to monitor activity.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "bdl_inv_q1_f1",
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.ModeratePositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.ModerateNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_inv_q1_a2",
              type: AnswerType.Reassure,
              text: "Justice is pursuing the culprits. Free credit freezes are being offered so citizens can protect themselves.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "bdl_inv_q1_f1",
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.SlightPositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.SlightNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Data breaches happen across industries. Let’s stay focused on solutions instead of finger-pointing.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "bdl_inv_q1_f1",
              outcomeModifiers: {
                bdl_fraud_wave_outrage: OutcomeModifierWeight.SlightPositive,
                bdl_patch_and_freeze: OutcomeModifierWeight.SlightNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        bdl_inv_q1_f1: {
          id: "bdl_inv_q1_f1",
          text: "Will the administration overhaul the entire ID system to prevent future data leaks?",
          depth: 1,
          answers: [
            {
              id: "bdl_inv_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We’re pushing aggressive upgrades and new oversight. Expect a comprehensive plan before Congress next month.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                bdl_congress_stalls_reform:
                  OutcomeModifierWeight.ModeratePositive,
                bdl_patch_and_freeze: OutcomeModifierWeight.Neutral,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.ModerateNegative,
              },
            },
            {
              id: "bdl_inv_q1_f1_a2",
              type: AnswerType.Admit,
              text: "Rebuilding the system won’t be quick. We’re consulting experts and may need legislative approval for bigger fixes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                bdl_congress_stalls_reform:
                  OutcomeModifierWeight.ModerateNegative,
                bdl_patch_and_freeze: OutcomeModifierWeight.ModeratePositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_inv_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "We’ll consider reforms, but citizens also need to practice good security habits with their personal data.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.SlightNegative,
                bdl_congress_stalls_reform:
                  OutcomeModifierWeight.SlightPositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "bdl_con_q1",
      questions: {
        bdl_con_q1: {
          id: "bdl_con_q1",
          text: "Isn’t this leak proof that centralized ID databases are a disaster waiting to happen?",
          depth: 0,
          answers: [
            {
              id: "bdl_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Centralization allows quick fixes and monitoring. We’re strengthening security rather than dismantling the system.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.ModeratePositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.ModerateNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_con_q1_a2",
              type: AnswerType.Inform,
              text: "Homeland has patched the vulnerable server and launched a task force to prevent future lapses.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.StrongPositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.StrongNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_con_q1_a3",
              type: AnswerType.Deflect,
              text: "No system is hack-proof. Citizens should monitor their accounts and we’ll do our part to secure infrastructure.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                bdl_fraud_wave_outrage: OutcomeModifierWeight.SlightPositive,
                bdl_patch_and_freeze: OutcomeModifierWeight.SlightNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "bdl_lib_q1",
      questions: {
        bdl_lib_q1: {
          id: "bdl_lib_q1",
          text: "Citizens fear widespread ID fraud after the biometric leak. What immediate relief will you provide?",
          depth: 0,
          answers: [
            {
              id: "bdl_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Justice is setting up a hotline and offering free monitoring services. Victims will get priority support.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.ModeratePositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.ModerateNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_lib_q1_a2",
              type: AnswerType.Inform,
              text: "Homeland is rolling out new encryption and advising citizens on securing their personal data.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bdl_patch_and_freeze: OutcomeModifierWeight.StrongPositive,
                bdl_fraud_wave_outrage: OutcomeModifierWeight.StrongNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bdl_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Personal vigilance is key. Government can’t protect everyone from phishing scams using leaked info.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                bdl_fraud_wave_outrage: OutcomeModifierWeight.SlightPositive,
                bdl_patch_and_freeze: OutcomeModifierWeight.SlightNegative,
                bdl_congress_stalls_reform: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
