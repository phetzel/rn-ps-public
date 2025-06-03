import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const bridgeToNowhereExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "btn_inv_q1",
      questions: {
        btn_inv_q1: {
          id: "btn_inv_q1",
          text: "Auditors say the $2 billion bridge serves only seven residents. Was due-diligence ignored, and will someone be held accountable for this spending?",
          depth: 0,
          answers: [
            /* Admit – Justice preference */
            {
              id: "btn_inv_q1_a1",
              type: AnswerType.Admit,
              text: "Early findings raise serious procurement concerns. DOJ has opened a fraud inquiry, and any wrongdoing will face full prosecution. No funds will flow during the review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.MajorPositive, // +12
                btn_bridge_proceeds: OutcomeModifierWeight.StrongNegative, // −8
                btn_tourist_trap: OutcomeModifierWeight.SlightNegative, // −4
              },
            },

            /* Deflect – President spin */
            {
              id: "btn_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Rural America deserves world-class links too. Critics mocked the interstate system once. Vision sometimes looks excessive before it pays off.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.SlightNegative, // −4
                btn_bridge_proceeds: OutcomeModifierWeight.SlightPositive, // +4
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
              },
            },

            /* Authorized – Treasury audit intel */
            {
              id: "btn_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Treasury’s internal memo shows toll revenue projections under $1k yearly. We’ve issued an immediate spending halt pending congressional re-approval.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.StrongPositive, // +8
                btn_bridge_proceeds: OutcomeModifierWeight.StrongNegative, // −8
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "btn_con_q1",
      questions: {
        btn_con_q1: {
          id: "btn_con_q1",
          text: "Why should taxpayers bankroll a vanity bridge for seven people? Doesn’t this prove runaway pork is alive and well?",
          depth: 0,
          answers: [
            {
              id: "btn_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Calling rural investment ‘pork’ insults hard-working citizens. Infrastructure everywhere fuels commerce; tomorrow those towns could boom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
              },
              outcomeModifiers: {
                btn_bridge_proceeds: OutcomeModifierWeight.ModeratePositive, // +6
                btn_funding_frozen: OutcomeModifierWeight.ModerateNegative, // −6
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "btn_con_q1_a2",
              type: AnswerType.Reassure, // Treasury preference
              text: "A fiscal review is under way. If projected benefits remain low, funding will pause. We’re committed to disciplined stewardship of every dollar.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.ModeratePositive, // +6
                btn_bridge_proceeds: OutcomeModifierWeight.ModerateNegative, // −6
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "btn_con_q1_a3",
              type: AnswerType.Inform, // State funding mix
              text: "The bridge is 70 % state-funded with earmarked gas-tax bonds. Federal share is capped; overruns trigger automatic renegotiation clauses.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.StrongPositive, // +8
                btn_bridge_proceeds: OutcomeModifierWeight.StrongNegative, // −8
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "btn_ind_q1",
      questions: {
        btn_ind_q1: {
          id: "btn_ind_q1",
          text: "Locals call the bridge unnecessary, yet others see tourism potential. What’s the administration’s benchmark for continuing or cancelling construction?",
          depth: 0,
          answers: [
            {
              id: "btn_ind_q1_a1",
              type: AnswerType.Inform, // State preference
              text: "A cost-benefit review will weigh traffic studies, regional growth forecasts, and alternative transit upgrades—results published within 30 days.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.ModeratePositive, // +6
                btn_bridge_proceeds: OutcomeModifierWeight.ModerateNegative, // −6
                btn_tourist_trap: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "btn_ind_q1_a2",
              type: AnswerType.Deflect, // Treasury humor
              text: "If influencers want selfies, tax revenue may follow. We’ll crunch the numbers—bridge economics can be stranger than fiction.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Neutral,
                  },
                },
              },
              outcomeModifiers: {
                btn_tourist_trap: OutcomeModifierWeight.SlightPositive, // +4
                btn_funding_frozen: OutcomeModifierWeight.SlightNegative, // −4
                btn_bridge_proceeds: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "btn_ind_q1_a3",
              type: AnswerType.Admit,
              text: "Process moved too fast. We’ll halt new spending for two weeks, host a town-hall, and invite GAO for an independent assessment.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                btn_funding_frozen: OutcomeModifierWeight.SlightPositive, // +4
                btn_bridge_proceeds: OutcomeModifierWeight.Neutral,
                btn_tourist_trap: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
          ],
        },
      },
    },
  },
];
