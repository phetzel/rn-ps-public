import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const nationalCoffeeReserveExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ncr_inv_q1",
      questions: {
        /* Depth-0 root */
        ncr_inv_q1: {
          id: "ncr_inv_q1",
          text: "An internal memo warns half the beans could mold within a year. Why commit billions before the storage tech is proven safe?",
          depth: 0,
          answers: [
            {
              id: "ncr_inv_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "Humidity-controlled silos copy pharmaceutical clean-room specs; every lot is infrared-scanned weekly. Spoilage triggers immediate roasting or bio-fuel diversion, never retail.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ncr_inv_q1_f1",
              outcomeModifiers: {
                ncr_price_shock_buffered:
                  OutcomeModifierWeight.ModeratePositive, // +6
                ncr_spoilage_scandal: OutcomeModifierWeight.ModerateNegative, // –6
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_inv_q1_a2",
              type: AnswerType.Challenge, // President
              text: "A nation that can freeze nukes in bunkers can chill coffee beans. Let’s not let fear of mildew leave workers decaffeinated in a crisis.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ncr_inv_q1_f1",
              outcomeModifiers: {
                ncr_price_shock_buffered: OutcomeModifierWeight.SlightPositive,
                ncr_global_glut_price_crash:
                  OutcomeModifierWeight.SlightNegative,
                ncr_spoilage_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Lab tests show only 0.7 % of pilot stock hit toxin limits; those lots were destroyed. New silos cut moisture variance to ±1 %. Audit logs are public next quarter.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "ncr_inv_q1_f1",
              outcomeModifiers: {
                ncr_price_shock_buffered: OutcomeModifierWeight.StrongPositive,
                ncr_spoilage_scandal: OutcomeModifierWeight.StrongNegative,
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        ncr_inv_q1_f1: {
          id: "ncr_inv_q1_f1",
          text: "If spoilage still happens, who pays—taxpayers or the private warehouse contractors?",
          depth: 1,
          answers: [
            {
              id: "ncr_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Every silo contract escrows 15 % of its value as a spoilage bond. Losses come out of that pool first, not the public ledger.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ncr_spoilage_scandal: OutcomeModifierWeight.ModerateNegative,
                ncr_price_shock_buffered:
                  OutcomeModifierWeight.ModeratePositive,
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "If a bean goes bad, the contractor foots the bill—taxpayers won’t pay one cent for moldy lattes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ncr_spoilage_scandal: OutcomeModifierWeight.SlightPositive,
                ncr_global_glut_price_crash:
                  OutcomeModifierWeight.SlightNegative,
                ncr_price_shock_buffered: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ncr_con_q1",
      questions: {
        ncr_con_q1: {
          id: "ncr_con_q1",
          text: "Stockpiling coffee sounds like bean socialism. Why should Washington dictate caffeine prices instead of letting markets work?",
          depth: 0,
          answers: [
            {
              id: "ncr_con_q1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "The reserve releases only during extreme shocks. Under normal markets it sits idle, financed by futures-hedge gains, not new taxes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ncr_price_shock_buffered:
                  OutcomeModifierWeight.ModeratePositive,
                ncr_global_glut_price_crash:
                  OutcomeModifierWeight.ModerateNegative,
                ncr_spoilage_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_con_q1_a2",
              type: AnswerType.Deflect, // President
              text: "Markets work best when workers aren’t dozing at their desks. A safety beanbelt keeps commerce humming in crises, that’s pro-market insurance.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ncr_global_glut_price_crash:
                  OutcomeModifierWeight.SlightPositive,
                ncr_spoilage_scandal: OutcomeModifierWeight.SlightNegative,
                ncr_price_shock_buffered: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_con_q1_a3",
              type: AnswerType.Inform, // Homeland security
              text: "Port strikes or cyberattacks can choke imports overnight. The reserve covers sixty days of demand, letting private roasters adapt without panic.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ncr_price_shock_buffered: OutcomeModifierWeight.SlightPositive,
                ncr_spoilage_scandal: OutcomeModifierWeight.SlightNegative,
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ncr_lib_q1",
      questions: {
        ncr_lib_q1: {
          id: "ncr_lib_q1",
          text: "Small coffee farmers say hoarding beans could crash prices later and hurt their livelihoods. How will the reserve protect producers?",
          depth: 0,
          answers: [
            {
              id: "ncr_lib_q1_a1",
              type: AnswerType.Inform, // Treasury hedging
              text: "We buy via long-term floor contracts that guarantee growers a minimum price. If global prices dip, the reserve tops up the difference.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ncr_global_glut_price_crash:
                  OutcomeModifierWeight.ModerateNegative,
                ncr_price_shock_buffered:
                  OutcomeModifierWeight.ModeratePositive,
                ncr_spoilage_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_lib_q1_a2",
              type: AnswerType.Reassure, // HHS
              text: "Reserve policy includes farmer-aid grants and climate-resilient crop R&D funded by storage fees—lifting producers, not undercutting them.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ncr_price_shock_buffered: OutcomeModifierWeight.SlightPositive,
                ncr_spoilage_scandal: OutcomeModifierWeight.SlightNegative,
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ncr_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "This plan isn’t to crush farmers; it’s to crush 3 p.m. yawns. Happy baristas need thriving growers—our policy brews both.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ncr_spoilage_scandal: OutcomeModifierWeight.SlightPositive,
                ncr_price_shock_buffered: OutcomeModifierWeight.SlightNegative,
                ncr_global_glut_price_crash: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
