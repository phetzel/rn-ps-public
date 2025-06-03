import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const federalDatingAppFundingExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "fdaf_inv_q1",
      questions: {
        /* Depth-0 root */
        fdaf_inv_q1: {
          id: "fdaf_inv_q1",
          text: "Whistle-blowers say the contract went to a lobbyist's roommate and the code is packed with exploits. Why fund the app before an independent audit?",
          depth: 0,
          answers: [
            {
              id: "fdaf_inv_q1_a1",
              type: AnswerType.Inform, // Homeland pref
              text: "The build is undergoing DHS red-team audits now; funds release only after every critical flaw scores ‘resolved’. No audit, no dollars, no exceptions.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "fdaf_inv_q1_f1",
              outcomeModifiers: {
                fdaf_data_breach_scandal:
                  OutcomeModifierWeight.ModerateNegative,
                fdaf_program_shelved_mockery: OutcomeModifierWeight.Neutral,
                fdaf_app_goes_viral: OutcomeModifierWeight.ModeratePositive,
              },
            },
            {
              id: "fdaf_inv_q1_a2",
              type: AnswerType.Challenge, // President push
              text: "Roommate or not, if the app unites lonely taxpayers and pays for itself through ads, the real scandal would be letting jealousy kill the vibe.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "fdaf_inv_q1_f1",
              outcomeModifiers: {
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.SlightNegative,
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightPositive,
                fdaf_data_breach_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Pen-test results show the critical exploit patched last week. A $5-million bounty pool stays open, and DHS retains a 30-second kill-switch if new threats emerge.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "fdaf_inv_q1_f1",
              outcomeModifiers: {
                fdaf_app_goes_viral: OutcomeModifierWeight.StrongPositive,
                fdaf_data_breach_scandal: OutcomeModifierWeight.StrongNegative,
                fdaf_program_shelved_mockery: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        fdaf_inv_q1_f1: {
          id: "fdaf_inv_q1_f1",
          text: "If a breach still happens, will victims get compensation, and who eats the cost—the contractor or taxpayers?",
          depth: 1,
          answers: [
            {
              id: "fdaf_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "The contract escrows 20 % of its value as a breach bond; every verified victim receives up to $2,500 paid from that pool, not federal coffers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.ModeratePositive,
                fdaf_data_breach_scandal:
                  OutcomeModifierWeight.ModerateNegative,
                fdaf_app_goes_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "If hackers swipe your flirty gifs, the contractor—not Cupid or Uncle Sam—will foot the bill. Love hurts, but taxpayers won’t.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                fdaf_data_breach_scandal: OutcomeModifierWeight.SlightPositive,
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightNegative,
                fdaf_program_shelved_mockery: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fdaf_lib_q1",
      questions: {
        fdaf_lib_q1: {
          id: "fdaf_lib_q1",
          text: "Advocates applaud free matches but worry about harassment and data resale. How will the app protect vulnerable users and guarantee no ad creep?",
          depth: 0,
          answers: [
            {
              id: "fdaf_lib_q1_a1",
              type: AnswerType.Inform, // HHS pref
              text: "Every profile passes age and ID checks; AI flags abusive messages instantly. Ads limited to public-service spots—no third-party data sales, ever.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fdaf_app_goes_viral: OutcomeModifierWeight.ModeratePositive,
                fdaf_data_breach_scandal:
                  OutcomeModifierWeight.ModerateNegative,
                fdaf_program_shelved_mockery: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_lib_q1_a2",
              type: AnswerType.Reassure, // Treasury
              text: "Revenue comes from optional avatar merch, not intrusive ads. A public dashboard posts quarterly transparency audits.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightPositive,
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.SlightNegative,
                fdaf_data_breach_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "Think of it as digital town square meets chaperone drone—safe, inclusive, and a lot more fun than swipe-roulette apps chasing clicks.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.SlightPositive,
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightNegative,
                fdaf_data_breach_scandal: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fdaf_con_q1",
      questions: {
        fdaf_con_q1: {
          id: "fdaf_con_q1",
          text: "Fiscal hawks say a taxpayer dating app isn’t core government work and could balloon into an entitlement. Why not leave romance to the private sector?",
          depth: 0,
          answers: [
            {
              id: "fdaf_con_q1_a1",
              type: AnswerType.Reassure, // Treasury cost cap
              text: "Budget is $150 M for two years, sunset by law unless KPIs show job-growth spillovers. No open-ended romance entitlement here.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.ModeratePositive,
                fdaf_app_goes_viral: OutcomeModifierWeight.ModerateNegative,
                fdaf_data_breach_scandal: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_con_q1_a2",
              type: AnswerType.Deflect, // President line
              text: "Private apps swipe your data; ours swipes right on privacy. Government isn’t playing Cupid—it’s building a safer ballroom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightPositive,
                fdaf_data_breach_scandal: OutcomeModifierWeight.SlightNegative,
                fdaf_program_shelved_mockery: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdaf_con_q1_a3",
              type: AnswerType.Inform, // Homeland security angle
              text: "Foreign troll farms exploit dating apps to phish officials. A vetted platform reduces that espionage risk—it’s national security, not matchmaking.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fdaf_app_goes_viral: OutcomeModifierWeight.SlightPositive,
                fdaf_program_shelved_mockery:
                  OutcomeModifierWeight.SlightNegative,
                fdaf_data_breach_scandal: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
