import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const bananaImportTariffWarExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "bitw_con_q1",
      questions: {
        /* Depth-0 root */
        bitw_con_q1: {
          id: "bitw_con_q1",
          text: "Grocers call your banana tariff a hidden tax on families. How do you justify jacking up lunch-box prices in the name of ‘fair trade’?",
          depth: 0,
          answers: [
            {
              id: "bitw_con_q1_a1",
              type: AnswerType.Challenge, // President line
              text: "For decades foreign cartels undercut U.S. growers. A 20 % tariff ends the peel-and-dump scheme and lets American farms hire again—families gain a paycheck, not just bananas.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "bitw_con_q1_f1",
              outcomeModifiers: {
                bitw_domestic_banana_boom:
                  OutcomeModifierWeight.ModeratePositive, // +6
                bitw_tariff_retracted: OutcomeModifierWeight.ModerateNegative, // –6
                bitw_trade_retaliation: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_con_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Tariff revenue funds instant rebates for low-income shoppers and a sunset clause ends the duty if shelf prices rise over two percent according to USDA monitors.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "bitw_con_q1_f1",
              outcomeModifiers: {
                bitw_tariff_retracted: OutcomeModifierWeight.ModeratePositive,
                bitw_trade_retaliation: OutcomeModifierWeight.ModerateNegative,
                bitw_domestic_banana_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_con_q1_a3",
              type: AnswerType.Deflect, // HHS fruit-diversity angle
              text: "Nobody forces anyone to buy pricey bananas; schools get grants to add apples and berries, so kids still get fruit without sticker shock.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "bitw_con_q1_f1",
              outcomeModifiers: {
                bitw_trade_retaliation: OutcomeModifierWeight.SlightPositive,
                bitw_domestic_banana_boom: OutcomeModifierWeight.SlightNegative,
                bitw_tariff_retracted: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        bitw_con_q1_f1: {
          id: "bitw_con_q1_f1",
          text: "If Bananalandia slaps counter-tariffs on coffee next week, will you double down or drop the banana duty?",
          depth: 1,
          answers: [
            {
              id: "bitw_con_q1_f1_a1",
              type: AnswerType.Inform, // State diplomacy
              text: "Talks are under way; a tariff swap-back clause is ready. If they target coffee, we trigger immediate mutual rollback rather than launch a full trade war.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bitw_tariff_retracted: OutcomeModifierWeight.ModeratePositive,
                bitw_trade_retaliation: OutcomeModifierWeight.ModerateNegative,
                bitw_domestic_banana_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_con_q1_f1_a2",
              type: AnswerType.Challenge, // President tough
              text: "If they punish coffee drinkers we’ll add tariffs on pineapples, papayas, and plantains. We won’t blink first in a fruit fight.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                bitw_trade_retaliation: OutcomeModifierWeight.ModeratePositive,
                bitw_domestic_banana_boom:
                  OutcomeModifierWeight.ModerateNegative,
                bitw_tariff_retracted: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "bitw_lib_q1",
      questions: {
        bitw_lib_q1: {
          id: "bitw_lib_q1",
          text: "Nutrition groups say higher prices will cut fruit intake for low-income families. How will you keep healthy food affordable?",
          depth: 0,
          answers: [
            {
              id: "bitw_lib_q1_a1",
              type: AnswerType.Reassure, // Treasury rebate plan
              text: "Tariff revenue flows into EBT fruit boosters—at checkout, qualifying households get an automatic 10 % discount on bananas until prices stabilize.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                bitw_tariff_retracted: OutcomeModifierWeight.SlightPositive,
                bitw_domestic_banana_boom: OutcomeModifierWeight.SlightNegative,
                bitw_trade_retaliation: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_lib_q1_a2",
              type: AnswerType.Inform, // HHS diversification
              text: "We’re funding school produce boxes with local apples, oranges, and pears so kids keep getting vitamins even if bananas cost more for a while.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bitw_domestic_banana_boom:
                  OutcomeModifierWeight.ModeratePositive,
                bitw_trade_retaliation: OutcomeModifierWeight.ModerateNegative,
                bitw_tariff_retracted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_lib_q1_a3",
              type: AnswerType.Deflect, // President joke
              text: "A pricey banana today prevents a pricier bailout tomorrow when cartel prices spike. Meanwhile, try a patriotic peach—they’re delicious.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                bitw_trade_retaliation: OutcomeModifierWeight.SlightPositive,
                bitw_tariff_retracted: OutcomeModifierWeight.SlightNegative,
                bitw_domestic_banana_boom: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "bitw_ind_q1",
      questions: {
        bitw_ind_q1: {
          id: "bitw_ind_q1",
          text: "Economists warn tariffs could backfire, hurting exporters and raising inflation. What metrics will decide if the policy stays or goes?",
          depth: 0,
          answers: [
            {
              id: "bitw_ind_q1_a1",
              type: AnswerType.Inform, // Treasury metrics
              text: "Quarterly review checks retail price index, import volume, and domestic farm payrolls. If two of three worsen by 5 %, tariff auto-sunsets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                bitw_tariff_retracted: OutcomeModifierWeight.ModeratePositive,
                bitw_trade_retaliation: OutcomeModifierWeight.ModerateNegative,
                bitw_domestic_banana_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_ind_q1_a2",
              type: AnswerType.Reassure, // State diplomacy
              text: "Talks with Bananalandia include a glide-path to lower duties if their growers stop dumping below cost. Metrics will be published online monthly.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                bitw_trade_retaliation: OutcomeModifierWeight.SlightNegative,
                bitw_domestic_banana_boom: OutcomeModifierWeight.SlightPositive,
                bitw_tariff_retracted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "bitw_ind_q1_a3",
              type: AnswerType.Deflect, // President broad
              text: "Metrics matter, but so does standing up for fair trade. We’ll track prices, jobs, and our negotiating leverage before making any peel-back decision.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                bitw_domestic_banana_boom: OutcomeModifierWeight.SlightPositive,
                bitw_tariff_retracted: OutcomeModifierWeight.SlightNegative,
                bitw_trade_retaliation: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
