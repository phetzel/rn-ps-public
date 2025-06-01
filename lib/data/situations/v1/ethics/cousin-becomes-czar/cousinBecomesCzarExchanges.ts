import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cousinBecomesCzarExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "cbc_inv_q1",
      questions: {
        cbc_inv_q1: {
          id: "cbc_inv_q1",
          text: "The appointment of the President's cousin as Snack Czar reeks of nepotism. How do you defend this blatant act of favoritism?",
          depth: 0,
          answers: [
            /* Challenge — President flavour */
            {
              id: "cbc_inv_q1_a1",
              type: AnswerType.Challenge,
              text: "That's unfair. The President's cousin has lifelong snacking expertise—vital for morale. Only snack skeptics doubt these sterling qualifications.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.ModeratePositive, // +6
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Inform — Justice preference */
            {
              id: "cbc_inv_q1_a2",
              type: AnswerType.Inform,
              text: "All advisory roles, Snack Czar included, obey ethics rules. The unpaid position simply surveys worker vending needs to boost workplace morale.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.ModeratePositive, // +6
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Authorized — Justice intel */
            {
              id: "cbc_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "The cousin has a PhD in Nutritional Ergonomics and serves pro bono. That volunteer credential quashes any notion of profiteering.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.StrongPositive, // +8
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.StrongNegative, // −8
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ──────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cbc_con_q1",
      questions: {
        cbc_con_q1: {
          id: "cbc_con_q1",
          text: "Naming family Snack Czar smells of swamp politics. How can taxpayers trust vending contracts won’t turn into family favors?",
          depth: 0,
          answers: [
            /* Deflect — President flavour */
            {
              id: "cbc_con_q1_a1",
              type: AnswerType.Deflect,
              text: "The role is unpaid and ceremonial. If handing out pretzel menus is corruption, your standards are saltier than the snacks themselves.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.ModeratePositive, // +6
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Reassure — Treasury flavour */
            {
              id: "cbc_con_q1_a2",
              type: AnswerType.Reassure,
              text: "All vending contracts stay under normal bidding laws. Snack Czar only polls employee tastes; they approve no deals and sign no checks.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.ModeratePositive, // +6
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Inform — Justice detail */
            {
              id: "cbc_con_q1_a3",
              type: AnswerType.Inform,
              text: "A public dashboard will list every snack purchase in real time. If one candy bar goes to a cousin’s friend, you’ll see it before it melts.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cousin_snack_czar_quickly_forgotten:
                  OutcomeModifierWeight.SlightPositive, // +4
                cousin_snack_czar_nepotism_scandal:
                  OutcomeModifierWeight.SlightNegative, // −4
                cousin_snack_czar_surprise_hit: OutcomeModifierWeight.Neutral, //  0
              },
            },
          ],
        },
      },
    },
  },
];
