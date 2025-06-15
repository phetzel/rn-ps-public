import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cyberCoffeeAttackExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Liberal outlet with follow-up ───────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "cca_lib_q1",
      questions: {
        cca_lib_q1: {
          id: "cca_lib_q1",
          text: "With coffee shipments frozen, workers fear mass caffeine withdrawal. How soon will relief arrive and who is responsible?",
          depth: 0,
          answers: [
            {
              id: "cca_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland traced the breach to a spoofed logistics app. Servers are rebooting now and deliveries should resume within 48 hours.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "cca_lib_q1_f1",
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.ModeratePositive,
                cca_shortage_drags_out: OutcomeModifierWeight.ModerateNegative,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "We’re coordinating with grocers and roasters to keep beans flowing. This is a temporary hiccup, not a coffee apocalypse.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "cca_lib_q1_f1",
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightPositive,
                cca_shortage_drags_out: OutcomeModifierWeight.SlightNegative,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "A little break from caffeine might improve our collective temper. We’re on it, but maybe grab some herbal tea in the meantime.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "cca_lib_q1_f1",
              outcomeModifiers: {
                cca_caffeine_rationing: OutcomeModifierWeight.SlightPositive,
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightNegative,
                cca_shortage_drags_out: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cca_lib_q1_f1: {
          id: "cca_lib_q1_f1",
          text: "Reports of price gouging are surfacing. Will the administration intervene to cap prices?",
          depth: 1,
          answers: [
            {
              id: "cca_lib_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "Any profiteering will be punished. We’re deploying inspectors and fines for retailers exploiting the shortage.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cca_shortage_drags_out: OutcomeModifierWeight.ModeratePositive,
                cca_caffeine_rationing: OutcomeModifierWeight.ModerateNegative,
                cca_supply_restored_quickly: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_lib_q1_f1_a2",
              type: AnswerType.Admit,
              text: "We can’t cap every cup. If the market overreacts we may consider subsidies, but for now we urge patience.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                cca_caffeine_rationing: OutcomeModifierWeight.ModeratePositive,
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.ModerateNegative,
                cca_shortage_drags_out: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_lib_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Let’s not brew panic. Consumers know how to shop around, and a little price competition never hurt anyone.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightNegative,
                cca_shortage_drags_out: OutcomeModifierWeight.SlightPositive,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cca_con_q1",
      questions: {
        cca_con_q1: {
          id: "cca_con_q1",
          text: "Is this coffee crisis proof that government overregulation made supply chains too fragile to handle cyber threats?",
          depth: 0,
          answers: [
            {
              id: "cca_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No. Hackers targeted private software, not federal red tape. We’re working with industry to harden systems without new burdens.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightPositive,
                cca_shortage_drags_out: OutcomeModifierWeight.Neutral,
                cca_caffeine_rationing: OutcomeModifierWeight.SlightNegative,
              },
            },
            {
              id: "cca_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury and Homeland are coordinating to keep imports flowing. We anticipate normal shelves before next week.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.ModeratePositive,
                cca_shortage_drags_out: OutcomeModifierWeight.ModerateNegative,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Americans drink too much coffee anyway. Maybe this pause will boost productivity once the jitters fade.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cca_caffeine_rationing: OutcomeModifierWeight.SlightPositive,
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightNegative,
                cca_shortage_drags_out: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "cca_ind_q1",
      questions: {
        cca_ind_q1: {
          id: "cca_ind_q1",
          text: "Consumers across the spectrum are irate. Does the administration have a timeline for full restoration and safeguards against repeats?",
          depth: 0,
          answers: [
            {
              id: "cca_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Teams are patching the routing software and installing redundant servers. We expect normal deliveries in three days.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.StrongPositive,
                cca_shortage_drags_out: OutcomeModifierWeight.StrongNegative,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There’s no evidence our policies caused this attack. We’re focusing on recovery, not political blame games.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cca_shortage_drags_out: OutcomeModifierWeight.SlightNegative,
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.SlightPositive,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cca_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Breach logs reveal a small overseas syndicate testing ransomware. We seized their servers and secured the shipment network within hours.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cca_supply_restored_quickly:
                  OutcomeModifierWeight.StrongPositive,
                cca_shortage_drags_out: OutcomeModifierWeight.StrongNegative,
                cca_caffeine_rationing: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
