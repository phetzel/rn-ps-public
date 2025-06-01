import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const droneHackScandalExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Independent / Tech focus ────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "dhs_ind_q1",
      questions: {
        dhs_ind_q1: {
          id: "dhs_ind_q1",
          text: "The pizza-drone fiasco suggests deep cybersecurity flaws in autonomous systems. How can the public trust our critical tech is safe?",
          depth: 0,
          answers: [
            /* Reassure – Homeland preference */
            {
              id: "dhs_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Only one test fleet was affected. All drones are grounded while a multilayer patch rolls out. Critical defense networks use separate, hardened controls.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.StrongPositive, // +8
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.SlightNegative, // −4
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.SlightNegative, // −4
              },
            },

            /* Deflect – President spin */
            {
              id: "dhs_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Frankly, America just got the world’s fastest pizza delivery demo. Innovation sometimes looks messy—consider these drones beta-testing dinner.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                },
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.StronglyNegative,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.MajorNegative, // −12
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.MajorPositive, // +12
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },

            /* Authorized – Defense intel */
            {
              id: "dhs_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Forensic logs show hacktivists “Digital Dominos” exploited outdated guidance code. Patch deployed in under six hours; no sensitive networks touched.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.MajorPositive, // +12
                dhs_drone_chaos_ridicule:
                  OutcomeModifierWeight.ModerateNegative, // −6
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "dhs_con_q1",
      questions: {
        dhs_con_q1: {
          id: "dhs_con_q1",
          text: "Taxpayers bought those drones for defense, not pizza. Does this blunder prove waste and weakness in our military tech?",
          depth: 0,
          answers: [
            /* Challenge – President defense */
            {
              id: "dhs_con_q1_a1",
              type: AnswerType.Challenge,
              text: "America leads in tech. A prank doesn’t erase our unmatched capability. Saboteurs will face justice, and systems will return to mission-ready status swiftly.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.SlightNegative, // −4
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.Neutral, //  0
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.SlightPositive, // +4
              },
            },

            /* Reassure – Homeland fiscal angle */
            {
              id: "dhs_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Upgrades use existing cyber-defense funds and supplier penalties, not new taxes. The fix strengthens all autonomous assets without ballooning budgets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.ModeratePositive, // +6
                dhs_drone_chaos_ridicule:
                  OutcomeModifierWeight.ModerateNegative, // −6
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },

            /* Inform – Defense procurement detail */
            {
              id: "dhs_con_q1_a3",
              type: AnswerType.Inform,
              text: "The affected drones were test units outside combat inventory. New contract clauses now require third-party red-team audits before field deployment.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.StrongPositive, // +8
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.StrongNegative, // −8
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Liberal outlet ──────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "dhs_lib_q1",
      questions: {
        dhs_lib_q1: {
          id: "dhs_lib_q1",
          text: "Civil-liberty groups worry hacked drones could have been armed. What safeguards protect the public from militarized tech gone haywire?",
          depth: 0,
          answers: [
            /* Inform – Defense safety focus */
            {
              id: "dhs_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Weapon systems run on isolated networks with failsafes that prevent any outside command. Only unarmed prototypes were hijacked; armed fleets remain untouched and offline.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.ModeratePositive, // +6
                dhs_drone_chaos_ridicule:
                  OutcomeModifierWeight.ModerateNegative, // −6
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },

            /* Deflect – Treasury cost joke */
            {
              id: "dhs_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Frankly, if a few pizzas buy us the public’s attention on cyber safety, that’s cheap insurance. Treasury will seek reimbursements—plus a free slice for every taxpayer.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.SlightPositive, // +4
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.SlightNegative, // −4
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },

            /* Authorized – Defense intel repeat (short form) */
            {
              id: "dhs_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Digital Dominos exploited old guidance code—patch shipped. An inspector-general review will publish findings within 30 days to ensure full transparency.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.StrongPositive, // +8
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.StrongNegative, // −8
                dhs_foreign_power_suspected: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 4. Investigative outlet ────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "dhs_inv_q1",
      questions: {
        dhs_inv_q1: {
          id: "dhs_inv_q1",
          text: "Sources claim a rival state tested our defenses via the pizza-drone hack. Is the administration downplaying a serious act of cyber aggression?",
          depth: 0,
          answers: [
            /* Admit – Defense cautious */
            {
              id: "dhs_inv_q1_a1",
              type: AnswerType.Admit,
              text: "We’re examining all leads, including foreign involvement. Until attribution is verified, speculation could hinder the probe and diplomatic options.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.ModeratePositive, // +6
                dhs_hack_traced_secured: OutcomeModifierWeight.ModerateNegative, // −6
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.Neutral,
              },
            },

            /* Challenge – President tough talk */
            {
              id: "dhs_inv_q1_a2",
              type: AnswerType.Challenge,
              text: "If any nation hijacked our drones—even for pineapple pizza—they’ll face crippling sanctions. We won’t tolerate keyboard cowboys in foreign capitals.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.SlightPositive, // +4
                dhs_hack_traced_secured: OutcomeModifierWeight.SlightNegative, // −4
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.Neutral,
              },
            },

            /* Authorized – Defense intel summary */
            {
              id: "dhs_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Current forensics show signatures of hacktivists, not state actors. No classified channels breached. We’ll publish technical indicators to reassure partners.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                dhs_hack_traced_secured: OutcomeModifierWeight.StrongPositive, // +8
                dhs_foreign_power_suspected:
                  OutcomeModifierWeight.StrongNegative, // −8
                dhs_drone_chaos_ridicule: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
