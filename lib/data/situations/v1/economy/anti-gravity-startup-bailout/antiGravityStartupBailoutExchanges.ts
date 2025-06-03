import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const antiGravityStartupBailoutExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "agsb_con_q1",
      questions: {
        /* Depth-0 root */
        agsb_con_q1: {
          id: "agsb_con_q1",
          text: "Critics call the anti-gravity bailout ‘socialism for sci-fi flops.’ Why should taxpayers rescue a startup that hasn’t cleared the launchpad?",
          depth: 0,
          answers: [
            {
              id: "agsb_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Great nations fund moon-shots, not just pothole patches. If we fear failure, we forfeit the future—and let rival nations levitate past us.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "agsb_con_q1_f1",
              outcomeModifiers: {
                agsb_bailout_breakthrough:
                  OutcomeModifierWeight.ModeratePositive, // +6
                agsb_bailout_cancelled: OutcomeModifierWeight.ModerateNegative, // −6
                agsb_costly_flop: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_con_q1_a2",
              type: AnswerType.Inform, // Treasury
              text: "It’s a convertible loan, not a blank check. Miss a milestone and the Treasury owns the patents—no payoff, no taxpayer loss.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "agsb_con_q1_f1",
              outcomeModifiers: {
                agsb_bailout_cancelled: OutcomeModifierWeight.ModeratePositive,
                agsb_costly_flop: OutcomeModifierWeight.ModerateNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_con_q1_a3",
              type: AnswerType.Deflect, // Justice probe
              text: "Allegations of fraud are under active review. Until the investigation concludes, the loan sits in escrow—no cash has moved.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "agsb_con_q1_f1",
              outcomeModifiers: {
                agsb_costly_flop: OutcomeModifierWeight.ModeratePositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.ModerateNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        agsb_con_q1_f1: {
          id: "agsb_con_q1_f1",
          text: "If the tech works, foreign buyers could snap it up. What safeguards stop the company selling anti-gravity secrets overseas?",
          depth: 1,
          answers: [
            {
              id: "agsb_con_q1_f1_a1",
              type: AnswerType.Reassure, // Defense
              text: "Every prototype carries a Defense export-control chip; any sale abroad without clearance bricks the platform and triggers felony charges.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_bailout_breakthrough:
                  OutcomeModifierWeight.ModeratePositive,
                agsb_costly_flop: OutcomeModifierWeight.ModerateNegative,
                agsb_bailout_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_con_q1_f1_a2",
              type: AnswerType.Deflect, // President joke
              text: "Gravity is global, but patents aren’t—try exporting them past our lawyers without clearance and you’ll drop faster than the prototype.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                agsb_costly_flop: OutcomeModifierWeight.SlightPositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.SlightNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "agsb_inv_q1",
      questions: {
        agsb_inv_q1: {
          id: "agsb_inv_q1",
          text: "Leaked lab logs suggest hover demos were staged with hidden cranes. Why didn’t the administration verify data before pledging billions?",
          depth: 0,
          answers: [
            {
              id: "agsb_inv_q1_a1",
              type: AnswerType.Inform, // Treasury
              text: "Loan terms are milestone-based. Independent engineers re-test every claim; any faked demo voids funding and triggers patent forfeiture.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_bailout_cancelled: OutcomeModifierWeight.StrongPositive,
                agsb_costly_flop: OutcomeModifierWeight.StrongNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_inv_q1_a2",
              type: AnswerType.Deflect, // Justice
              text: "We can’t comment on active subpoenas, but anyone welding cranes to prototypes will face charges—not grants.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_costly_flop: OutcomeModifierWeight.ModeratePositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.ModerateNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Classified footage shows an 800-kg platform hovering 27 seconds with no external lift. Our labs will replicate that result before funds move.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_bailout_breakthrough: OutcomeModifierWeight.StrongPositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.StrongNegative,
                agsb_costly_flop: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "agsb_ind_q1",
      questions: {
        agsb_ind_q1: {
          id: "agsb_ind_q1",
          text: "Economists warn ballooning costs could crowd out infrastructure spending. How will you keep the bailout from becoming a budget black hole?",
          depth: 0,
          answers: [
            {
              id: "agsb_ind_q1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Funding caps at three billion; each new tranche requires independent valuation confirming at least equal private-sector co-investment.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_bailout_cancelled: OutcomeModifierWeight.ModeratePositive,
                agsb_costly_flop: OutcomeModifierWeight.ModerateNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_ind_q1_a2",
              type: AnswerType.Inform, // Defense tech potential
              text: "If successful, anti-gravity cargo craft could cut troop airlift costs by forty percent—return on investment dwarfs the bailout.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                agsb_bailout_breakthrough:
                  OutcomeModifierWeight.ModeratePositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.ModerateNegative,
                agsb_costly_flop: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "agsb_ind_q1_a3",
              type: AnswerType.Deflect, // President line
              text: "Bridges are great—so is floating freight. We can invest in concrete and in cutting-edge; this budget does both.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                agsb_costly_flop: OutcomeModifierWeight.SlightPositive,
                agsb_bailout_cancelled: OutcomeModifierWeight.SlightNegative,
                agsb_bailout_breakthrough: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
