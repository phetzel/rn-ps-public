import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const studentLoanLotteryExchanges: ExchangeData[] = [
  /* ───── Investigative outlet ───── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "sll_inv_q1",
      questions: {
        /* depth-0 root */
        sll_inv_q1: {
          id: "sll_inv_q1",
          text: "Stats gurus say wealthy ZIP codes hold more tickets. Why roll out the Student-Loan Lottery before an independent equity audit finishes?",
          depth: 0,
          answers: [
            {
              id: "sll_inv_q1_a1",
              type: AnswerType.Inform, // Justice pref
              text: "The draw algorithm is open-source and verified nightly by three university labs. Ticket caps per borrower ensure no ZIP code claims above its debt share.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "sll_inv_q1_f1",
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.ModeratePositive, // +6
                sll_rigged_scandal: OutcomeModifierWeight.ModerateNegative, // –6
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_inv_q1_a2",
              type: AnswerType.Challenge, // President push
              text: "Naysayers hate any progress. Better a fair shot at freedom than zero shot at all—every borrower gets one ticket, rich or poor, period.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "sll_inv_q1_f1",
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.SlightPositive,
                sll_struck_down_courts: OutcomeModifierWeight.SlightNegative,
                sll_rigged_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Treasury stress-tests show a worst-case bias below two percent. If any district tops that, draws invert odds until parity—code lock filed with GAO today.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "sll_inv_q1_f1",
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.StrongPositive, // +8
                sll_struck_down_courts: OutcomeModifierWeight.StrongNegative, // –8
                sll_rigged_scandal: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* depth-1 follow-up */
        sll_inv_q1_f1: {
          id: "sll_inv_q1_f1",
          text: "If bias still surfaces later, will draws pause and who refunds the unlucky borrowers already celebrating?",
          depth: 1,
          answers: [
            {
              id: "sll_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Yes. We freeze new rounds, appoint an independent referee, and fund restitution via the escrowed prize pool—no claw-backs on forgiven loans.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                sll_rigged_scandal: OutcomeModifierWeight.ModerateNegative,
                sll_economic_boost: OutcomeModifierWeight.ModeratePositive,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "No one yanks diplomas back. If bias pops up, we add more winners, not fewer—call it bonus rounds for fairness.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                sll_rigged_scandal: OutcomeModifierWeight.SlightPositive,
                sll_struck_down_courts: OutcomeModifierWeight.SlightNegative,
                sll_economic_boost: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Liberal outlet ───── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "sll_lib_q1",
      questions: {
        sll_lib_q1: {
          id: "sll_lib_q1",
          text: "Progressive groups call the lottery ‘debt Hunger Games.’ Why not universal forgiveness instead of gamifying relief?",
          depth: 0,
          answers: [
            {
              id: "sll_lib_q1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "A full wipe-out costs $1.7 T. The lottery clears debt gradually without exploding deficits, while revenue from a surtax on refinances funds prizes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                sll_struck_down_courts: OutcomeModifierWeight.SlightNegative,
                sll_economic_boost: OutcomeModifierWeight.SlightPositive,
                sll_rigged_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_lib_q1_a2",
              type: AnswerType.Inform, // Justice transparency
              text: "We publish anonymized draw logs and hold live streams of each pick. Transparency beats cynicism; every borrower can audit the code.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.ModeratePositive,
                sll_rigged_scandal: OutcomeModifierWeight.ModerateNegative,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "Not everyone wins Powerball, yet people still buy tickets. This program offers something better than a yacht: a clean slate.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                sll_rigged_scandal: OutcomeModifierWeight.SlightPositive,
                sll_economic_boost: OutcomeModifierWeight.SlightNegative,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Conservative outlet ───── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "sll_con_q1",
      questions: {
        sll_con_q1: {
          id: "sll_con_q1",
          text: "Critics call the lottery a handout circus that punishes savers. How do you justify random bailouts while responsible grads keep paying?",
          depth: 0,
          answers: [
            {
              id: "sll_con_q1_a1",
              type: AnswerType.Challenge, // President tough
              text: "Responsible grads still benefit—lottery spending boosts the economy, holding down rates. Chance-based relief is cheaper than blanket bailouts.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.SlightPositive,
                sll_rigged_scandal: OutcomeModifierWeight.SlightNegative,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_con_q1_a2",
              type: AnswerType.Reassure, // Treasury fiscal
              text: "Cost per forgiven dollar is five cents in surtax revenue—far less than universal cancellation. Savers aren’t footing others’ tuition bills.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                sll_economic_boost: OutcomeModifierWeight.ModeratePositive,
                sll_rigged_scandal: OutcomeModifierWeight.ModerateNegative,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sll_con_q1_a3",
              type: AnswerType.Deflect, // Justice fairness note
              text: "The real injustice was decades of predatory loans. A randomized remedy is legally safer than picking winners by major or income bracket.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                sll_rigged_scandal: OutcomeModifierWeight.SlightPositive,
                sll_economic_boost: OutcomeModifierWeight.SlightNegative,
                sll_struck_down_courts: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
