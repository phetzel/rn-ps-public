import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const inflationControlMisfireExchanges: ExchangeData[] = [
  /* ── Conservative outlet ── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "icm_con_q1",
      questions: {
        icm_con_q1: {
          id: "icm_con_q1",
          text: "Emoji cash looks like Monopoly money. Isn’t this clowning with the currency that powers world trade?",
          depth: 0,
          answers: [
            {
              id: "icm_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Confidence comes from growth, not grumpy graphics. If a smile sparks spending, that’s patriotic liquidity.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                emoji_dollar_collectors_hit:
                  OutcomeModifierWeight.SlightPositive, // +4
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.SlightNegative, // −4
                emoji_dollar_project_scrapped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_con_q1_a2",
              type: AnswerType.Reassure, // Treasury pref
              text: "Only tourist-pilot notes carry emojis, worth exactly $1. Standard bills dominate supply; macro policy unchanged.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.ModeratePositive, // +6
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.ModerateNegative, // −6
                emoji_dollar_collectors_hit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_con_q1_a3",
              type: AnswerType.Inform, // State global signal
              text: "We briefed G-20 finance chiefs: legal-tender status stable, Fed tools intact, and bond redemptions in classic design only.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.StrongNegative, // −8
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.StrongPositive, // +8
                emoji_dollar_collectors_hit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ── Liberal outlet ── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "icm_lib_q1",
      questions: {
        icm_lib_q1: {
          id: "icm_lib_q1",
          text: "Critics call emoji money a distraction from real wage woes. Will you scrap gimmicks and address root inflation drivers?",
          depth: 0,
          answers: [
            {
              id: "icm_lib_q1_a1",
              type: AnswerType.Inform, // Treasury data
              text: "Parallel wage-price taskforce meets Friday; emoji series paused pending results and public-comment review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.ModeratePositive, // +6
                emoji_dollar_collectors_hit:
                  OutcomeModifierWeight.ModerateNegative, // −6
                emoji_dollar_market_volatility: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_lib_q1_a2",
              type: AnswerType.Deflect, // President jest
              text: "Smiles cost nothing; inflation does. Our sunny bills spread hope while serious teams tackle prices.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                emoji_dollar_collectors_hit:
                  OutcomeModifierWeight.SlightPositive, // +4
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.SlightNegative, // −4
                emoji_dollar_market_volatility: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Pilot printed 5 M $1 notes with micro-emoji security ink. If merchant refusal tops 5 %, Fed swaps them out within 48 hours.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.StrongPositive, // +8
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.StrongNegative, // −8
                emoji_dollar_collectors_hit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ── Independent outlet ── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "icm_ind_q1",
      questions: {
        icm_ind_q1: {
          id: "icm_ind_q1",
          text: "Tourists love emoji bucks, traders hate them. When will you decide if the design lives or dies?",
          depth: 0,
          answers: [
            {
              id: "icm_ind_q1_a1",
              type: AnswerType.Reassure, // State timeline
              text: "Design review panel reports in 30 days, then public vote. No full rollout before that verdict.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.StrongPositive, // +8
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.StrongNegative, // −8
                emoji_dollar_collectors_hit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_ind_q1_a2",
              type: AnswerType.Deflect, // President banter
              text: "Collectors already bid big—who knew fiscal fun could raise revenue? Let democracy and eBay decide.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                emoji_dollar_collectors_hit:
                  OutcomeModifierWeight.ModeratePositive, // +6
                emoji_dollar_project_scrapped:
                  OutcomeModifierWeight.ModerateNegative, // −6
                emoji_dollar_market_volatility: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icm_ind_q1_a3",
              type: AnswerType.Inform, // Treasury cost
              text: "Emoji ink adds 0.3 ¢ per bill; overall seigniorage margin unchanged. Full cost report posts next week.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                emoji_dollar_collectors_hit:
                  OutcomeModifierWeight.ModeratePositive, // +6
                emoji_dollar_market_volatility:
                  OutcomeModifierWeight.ModerateNegative, // −6
                emoji_dollar_project_scrapped: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
