import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const nationalRailMeltdownExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "nrm_con_q1",
      questions: {
        nrm_con_q1: {
          id: "nrm_con_q1",
          text: "Trains guided by paper maps? Isn’t this proof of big-government incompetence wasting taxpayer cash?",
          depth: 0,
          answers: [
            {
              id: "nrm_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Old tech exposed gaps—now we’ll build smartest rails on Earth. Mistakes spur progress; watch innovation steam ahead.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                nrm_private_rail_boom: OutcomeModifierWeight.ModeratePositive, // +6
                nrm_emergency_funding_fix:
                  OutcomeModifierWeight.ModerateNegative, // −6
                nrm_weeks_of_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nrm_con_q1_a2",
              type: AnswerType.Reassure, // Homeland
              text: "Track inspectors deployed overnight, speed limits reduced, and bus bridges added. Public safety is secured while upgrades begin.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix: OutcomeModifierWeight.StrongPositive, // +8
                nrm_weeks_of_chaos: OutcomeModifierWeight.StrongNegative, // −8
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nrm_con_q1_a3",
              type: AnswerType.Inform, // Treasury cost
              text: "Emergency repairs use contingency funds; longer fixes shift to bipartisan infrastructure credits, not new taxes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix:
                  OutcomeModifierWeight.ModeratePositive, // +6
                nrm_weeks_of_chaos: OutcomeModifierWeight.ModerateNegative, // −6
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "nrm_lib_q1",
      questions: {
        nrm_lib_q1: {
          id: "nrm_lib_q1",
          text: "Commuters are furious and carbon emissions rise as cars replace trains. Why weren’t digital upgrades done years ago?",
          depth: 0,
          answers: [
            {
              id: "nrm_lib_q1_a1",
              type: AnswerType.Admit, // Treasury humility
              text: "Funding lags and procurement red tape slowed modernization. We’re expediting green tech grants to cut delays and emissions.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix:
                  OutcomeModifierWeight.ModeratePositive, // +6
                nrm_weeks_of_chaos: OutcomeModifierWeight.ModerateNegative, // −6
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nrm_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Even with paper maps, our conductors kept people safer than my uncle driving with GPS! Digital leap is coming—stay on board.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                nrm_weeks_of_chaos: OutcomeModifierWeight.SlightPositive, // +4
                nrm_emergency_funding_fix: OutcomeModifierWeight.SlightNegative, // −4
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nrm_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Audit shows 42 % of locomotives lacked GPS, causing routing loops. DHS recommends $1.6 B to modernize signal control within 18 months.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix: OutcomeModifierWeight.StrongPositive, // +8
                nrm_weeks_of_chaos: OutcomeModifierWeight.StrongNegative, // −8
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "nrm_inv_q1",
      questions: {
        nrm_inv_q1: {
          id: "nrm_inv_q1",
          text: "Whistleblowers say outdated maps were flagged last year. Did the administration ignore warnings to cut budgets?",
          depth: 0,
          answers: [
            {
              id: "nrm_inv_q1_a1",
              type: AnswerType.Admit, // Defense logistics
              text: "Prioritization choices deferred upgrades; hindsight shows that was a mistake. We’re reallocating defense rail funds to speed fixes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix: OutcomeModifierWeight.SlightPositive, // +4
                nrm_weeks_of_chaos: OutcomeModifierWeight.Neutral,
                nrm_private_rail_boom: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "nrm_inv_q1_a2",
              type: AnswerType.Challenge, // President pushback
              text: "Our budget boosted rail safety 12 %—record investment. Whistleblowers omit that states failed to request upgrades on time.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                nrm_weeks_of_chaos: OutcomeModifierWeight.SlightPositive, // +4
                nrm_emergency_funding_fix: OutcomeModifierWeight.SlightNegative, // −4
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "nrm_inv_q1_a3",
              type: AnswerType.Inform, // Homeland timeline
              text: "Warning memos existed; action queue slated upgrades for Q4. This incident moves them to immediate priority with 24-hour site teams.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                nrm_emergency_funding_fix:
                  OutcomeModifierWeight.ModeratePositive, // +6
                nrm_weeks_of_chaos: OutcomeModifierWeight.ModerateNegative, // −6
                nrm_private_rail_boom: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
