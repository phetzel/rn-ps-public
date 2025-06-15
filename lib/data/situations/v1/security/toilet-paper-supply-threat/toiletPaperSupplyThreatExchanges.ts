import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const toiletPaperSupplyThreatExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Liberal outlet with follow-up ───────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "tps_lib_q1",
      questions: {
        tps_lib_q1: {
          id: "tps_lib_q1",
          text: "Will you enforce rationing to ensure fairness? People worry the rich will hoard toilet paper first.",
          depth: 0,
          answers: [
            {
              id: "tps_lib_q1_a1",
              type: AnswerType.Inform,
              text: "HHS inspected distributors yesterday and found shipments normal. We'll publish supply updates daily. No rationing needed at this time.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "tps_lib_q1_f1",
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.ModeratePositive,
                tps_shortage_persists: OutcomeModifierWeight.ModerateNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "There's plenty of TP to go around. Our supply audit shows warehouses full. Please shop responsibly and check our updates before hoarding.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "tps_lib_q1_f1",
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.SlightPositive,
                tps_shortage_persists: OutcomeModifierWeight.SlightNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "If folks believe internet gossip, no amount of regulation will stop them from panic-buying. Maybe consider reusable cloths?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "tps_lib_q1_f1",
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.SlightNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.SlightPositive,
                tps_shortage_persists: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        tps_lib_q1_f1: {
          id: "tps_lib_q1_f1",
          text: "What protections are there against price gouging if a shortage does happen?",
          depth: 1,
          answers: [
            {
              id: "tps_lib_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We will prosecute gougers and can release reserve supplies if necessary, but we do not see a real shortage looming.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.SlightPositive,
                tps_shortage_persists: OutcomeModifierWeight.SlightNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_lib_q1_f1_a2",
              type: AnswerType.Admit,
              text: "If supply does tighten, we may consider temporary price caps, though it is too early to predict such measures.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                tps_shortage_persists: OutcomeModifierWeight.ModeratePositive,
                tps_hoax_exposed: OutcomeModifierWeight.ModerateNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_lib_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Maybe we should all learn to conserve rather than waiting for the government to save our behinds from paper panic.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                tps_stockpile_revealed: OutcomeModifierWeight.SlightPositive,
                tps_hoax_exposed: OutcomeModifierWeight.SlightNegative,
                tps_shortage_persists: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tps_con_q1",
      questions: {
        tps_con_q1: {
          id: "tps_con_q1",
          text: "Is panic buying proof your economic mismanagement has left supply chains brittle?",
          depth: 0,
          answers: [
            {
              id: "tps_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No, supply chains are stable; the panic is fueled by rumors, not shortages. We're in constant contact with retailers.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.SlightPositive,
                tps_shortage_persists: OutcomeModifierWeight.SlightNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury is watching the market and expects normal pricing soon. There's no evidence of actual shortage, just overbuying.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.ModeratePositive,
                tps_shortage_persists: OutcomeModifierWeight.ModerateNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe folks should use fewer squares per visit. Toilet paper isn't our national currency, after all.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                tps_stockpile_revealed: OutcomeModifierWeight.SlightPositive,
                tps_hoax_exposed: OutcomeModifierWeight.SlightNegative,
                tps_shortage_persists: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tps_ind_q1",
      questions: {
        tps_ind_q1: {
          id: "tps_ind_q1",
          text: "Can you guarantee supplies will keep flowing, and is there a backup plan if hoarding continues?",
          depth: 0,
          answers: [
            {
              id: "tps_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Supply chains are diversified and warehouses report months of inventory. We'll reroute shipments if certain regions face shortages.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.StrongPositive,
                tps_shortage_persists: OutcomeModifierWeight.StrongNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There is no credible threat to supplies. Panic buying is the only reason shelves look empty.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                tps_shortage_persists: OutcomeModifierWeight.SlightNegative,
                tps_hoax_exposed: OutcomeModifierWeight.SlightPositive,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tps_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Supply audit reveals full warehouses. HHS has contingency contracts to redirect distribution if hoarding persists.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tps_hoax_exposed: OutcomeModifierWeight.StrongPositive,
                tps_shortage_persists: OutcomeModifierWeight.StrongNegative,
                tps_stockpile_revealed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
