import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

/**
 * alienBroadcastHijackExchanges
 * — 3 outlets (Independent → Conservative → Liberal)
 * — every answer 80-180 chars
 * — outcomeModifiers in each answer sum to **0**
 */
export const alienBroadcastHijackExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Independent / Centrist ───────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "abh_ind_q1",
      questions: {
        abh_ind_q1: {
          id: "abh_ind_q1",
          text: "The nation panicked after a fake ‘alien invasion’ broadcast. How could security fail so badly, and what’s being done to stop a repeat?",
          depth: 0,
          answers: [
            /* Reassure – Homeland preference */
            {
              id: "abh_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "The alert was a malicious hoax. DHS is patching broadcast systems, broadcasters are adding encryption, and investigators are closing in on the culprits. There is no alien threat.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.MajorPositive, // +12
                abh_lingering_paranoia: OutcomeModifierWeight.StrongNegative, // −8
                abh_broadcast_overhaul_mandated:
                  OutcomeModifierWeight.SlightNegative, // −4
              },
            },

            /* Challenge – President preference */
            {
              id: "abh_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "This cyber-terror stunt will be crushed. Every agency is on alert—and remember, space is vast; we stay prepared for any threat, terrestrial or not.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyNegative,
                  },
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.MajorNegative, // −12
                abh_lingering_paranoia: OutcomeModifierWeight.MajorPositive, // +12
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral, //  0
              },
            },

            /* Authorized – Homeland intel */
            {
              id: "abh_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Hackers dubbed “Cosmic Clowns” exploited a legacy Emergency Broadcast flaw in several affiliates. Patches roll out today, and arrests are expected within 48 hours.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.StrongPositive, // +8
                abh_lingering_paranoia: OutcomeModifierWeight.StrongNegative, // −8
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral, //  0
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
      rootQuestionId: "abh_con_q1",
      questions: {
        abh_con_q1: {
          id: "abh_con_q1",
          text: "Americans froze in fear because government tech was outdated. How will you protect taxpayers from footing the bill for another security failure?",
          depth: 0,
          answers: [
            /* Challenge – President’s tough stance */
            {
              id: "abh_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Our enemies—domestic pranksters or foreign agents—will learn cyber negligence carries a price. We’ll strengthen systems without passing costs to hardworking families.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.SlightNegative, // −4
                abh_lingering_paranoia: OutcomeModifierWeight.SlightPositive, // +4
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
              },
            },

            /* Reassure – Homeland fiscal angle */
            {
              id: "abh_con_q1_a2",
              type: AnswerType.Reassure,
              text: "System upgrades will draw on existing security grants and private-sector cost-sharing. No blank government checks—just targeted fixes that keep broadcasts safe.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked:
                  OutcomeModifierWeight.ModeratePositive, // +6
                abh_lingering_paranoia: OutcomeModifierWeight.ModerateNegative, // −6
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
              },
            },

            /* Inform – Justice investigation update */
            {
              id: "abh_con_q1_a3",
              type: AnswerType.Inform,
              text: "The Justice Department is tracing IP hops tied to the hijack; grand-jury subpoenas went out this morning. Expect swift indictments, not extra spending.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.StrongPositive, // +8
                abh_lingering_paranoia: OutcomeModifierWeight.StrongNegative, // −8
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "abh_lib_q1",
      questions: {
        abh_lib_q1: {
          id: "abh_lib_q1",
          text: "Health advocates say the hoax spiked anxiety nationwide. How is the administration supporting vulnerable citizens shaken by the false alien alert?",
          depth: 0,
          answers: [
            /* Inform – HHS mental-health focus */
            {
              id: "abh_lib_q1_a1",
              type: AnswerType.Inform,
              text: "HHS has activated a 24-hour hotline, pushed calming guidance to phones, and funded community counselors. Accurate information beats fear every time.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked:
                  OutcomeModifierWeight.ModeratePositive, // +6
                abh_lingering_paranoia: OutcomeModifierWeight.ModerateNegative, // −6
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
              },
            },

            /* Deflect – President humour */
            {
              id: "abh_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "While comfort is crucial, let’s not forget the silver lining—America now knows its emergency TVs actually work! We’ll fix the glitch and keep spirits high.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.SlightPositive, // +4
                abh_lingering_paranoia: OutcomeModifierWeight.SlightNegative, // −4
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
              },
            },

            /* Authorized – Homeland tech detail */
            {
              id: "abh_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "DHS has issued an emergency directive: all stations must install the new encryption patch within 72 hours, with federal teams onsite to assist smaller affiliates.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                abh_hoax_quickly_debunked: OutcomeModifierWeight.StrongPositive, // +8
                abh_lingering_paranoia: OutcomeModifierWeight.StrongNegative, // −8
                abh_broadcast_overhaul_mandated: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
