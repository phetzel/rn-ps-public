import {
  AnswerType,
  CabinetStaticId,
  ExchangeData,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  PublicationStaticId,
} from "~/types";

export const cryptoNationalCurrencyExchanges: ExchangeData[] = [
  // 1️⃣ Independent / centrist outlet
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "cnc_ind_q1",
      questions: {
        cnc_ind_q1: {
          id: "cnc_ind_q1",
          text: "'FreedomCoin' drew heavy economist skepticism. Is the plan serious, and what assurances protect the dollar's stability?",
          depth: 0,
          answers: [
            {
              id: "cnc_ind_q1_a1",
              type: AnswerType.Challenge,
              text: "This administration isn’t afraid of bold ideas. FreedomCoin is a leap into finance’s future, and old guards always resist progress.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "That's right! Show them we’re visionaries!",
                },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyNegative,
                    reaction:
                      "This could tank market confidence—dangerous bravado.",
                  },
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.MajorNegative, // −12
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.MajorPositive, // +12
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "We’re exploring several digital-currency concepts. FreedomCoin is an early idea under rigorous review. The dollar remains the backbone of our robust economy.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too cautious! We should sound excited!",
                },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                    reaction: "Perfect—calms markets and buys us time.",
                  },
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.MajorPositive, // +12
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.MajorNegative, // −12
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "The President loved the FreedomCoin logo—an eagle on a rocket—but it’s just blue-sky brainstorming. Our existing financial system remains solid and fully in place.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "That logo really sells it—good spin!",
                },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.StrongPositive, // +8
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.StrongNegative, // −8
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },

  // 2️⃣ Conservative outlet
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cnc_con_q1",
      questions: {
        cnc_con_q1: {
          id: "cnc_con_q1",
          text: "Free-market voices call FreedomCoin reckless state tinkering. How will you prevent runaway inflation and taxpayer bailouts?",
          depth: 0,
          answers: [
            {
              id: "cnc_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Freedom means daring to disrupt stale systems. Inflation fears echo horse-and-buggy bankers who once panicked over credit cards—progress wins.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.StrongPositive, // +8
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.StrongNegative, // −8
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Any pilot would peg FreedomCoin to a fixed reserve and strict issuance caps. The dollar stays legal tender, protecting households from sudden shocks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.StrongPositive, // +8
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.StrongNegative, // −8
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Treasury sets currency policy; today’s focus is unlocking innovation so Main Street competes with megabanks, not doom-scrolling inflation charts.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Neutral,
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.SlightPositive, // +4
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.SlightNegative, // −4
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },

  // 3️⃣ Liberal outlet
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "cnc_lib_q1",
      questions: {
        cnc_lib_q1: {
          id: "cnc_lib_q1",
          text: "Many warn FreedomCoin favors tech elites and deepens inequality. How will you ensure regular citizens aren’t left clutching worthless e-wallets?",
          depth: 0,
          answers: [
            {
              id: "cnc_lib_q1_a1",
              type: AnswerType.Inform,
              text: "FreedomCoin would launch with a universal airdrop tied to tax records and easy conversion kiosks, so every citizen starts equal—not just the crypto savvy.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.ModeratePositive, // +6
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.ModerateNegative, // −6
                freedom_coin_fiasco_market_panic: OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Before any rollout we’d embed price-stability rules and consumer safeguards equal to bank-deposit insurance, keeping every wallet as safe as cash.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.ModeratePositive, // +6
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.ModerateNegative, // −6
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
            {
              id: "cnc_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Inequality stems from legacy banks, not innovation. FreedomCoin lets everyone bypass fees and borders—why fear an upgrade that finally levels the field?",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Neutral,
                },
              },
              outcomeModifiers: {
                freedom_coin_fiasco_market_panic:
                  OutcomeModifierWeight.SlightPositive, // +4
                freedom_coin_fiasco_proposal_shelved:
                  OutcomeModifierWeight.SlightNegative, // −4
                freedom_coin_fiasco_underground_success:
                  OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },
];
