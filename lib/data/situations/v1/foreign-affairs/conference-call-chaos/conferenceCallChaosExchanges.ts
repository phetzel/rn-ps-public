import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const conferenceCallChaosExchanges: ExchangeData[] = [
  /* ────────────────── Investigative outlet ───────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ccc_inv_q1",
      questions: {
        ccc_inv_q1: {
          id: "ccc_inv_q1",
          text: "Your call with foreign leaders was overshadowed by the pirate filter fiasco. What technical failure caused this embarrassing moment?",
          depth: 0,
          answers: [
            {
              id: "ccc_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "It was a silly software glitch. We're focusing on the summit's progress, not filter errors.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ccc_inv_q1_f1",
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.SlightPositive,
                ccc_markets_jitter: OutcomeModifierWeight.SlightNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_inv_q1_a2",
              type: AnswerType.Reassure,
              text: "Our tech team says the filter was triggered by a misconfigured plugin, not a cyberattack, so markets should stay calm.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ccc_inv_q1_f1",
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.ModeratePositive,
                ccc_markets_jitter: OutcomeModifierWeight.ModerateNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The video log confirms the filter came from outdated software, not sabotage. We've shared the clip privately with all participants.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "ccc_inv_q1_f1",
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.MajorPositive,
                ccc_markets_jitter: OutcomeModifierWeight.MajorNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ccc_inv_q1_f1: {
          id: "ccc_inv_q1_f1",
          text: "Has the security team confirmed it wasn't a hack, and what steps are you taking to reassure allies?",
          depth: 1,
          answers: [
            {
              id: "ccc_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Security teams confirm it was internal. Markets can relax; we've patched the software and updated protocols.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.ModeratePositive,
                ccc_markets_jitter: OutcomeModifierWeight.ModerateNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Look, it was embarrassing but brief. We’ve apologized and moved on to the actual agenda.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ccc_pirate_meme: OutcomeModifierWeight.SlightPositive,
                ccc_markets_jitter: OutcomeModifierWeight.SlightNegative,
                ccc_leaders_laugh: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Conservative outlet ───────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "ccc_con_q1",
      questions: {
        ccc_con_q1: {
          id: "ccc_con_q1",
          text: "How can allies trust our competence when the President appears as a pirate on live calls?",
          depth: 0,
          answers: [
            {
              id: "ccc_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Our opponents may laugh, but we addressed the glitch and kept talking policy. Judge us by results, not filters.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.SlightNegative,
                ccc_markets_jitter: OutcomeModifierWeight.SlightPositive,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Plenty of world leaders have tech mishaps. We're focused on diplomacy, not digital fashion.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ccc_pirate_meme: OutcomeModifierWeight.SlightPositive,
                ccc_markets_jitter: OutcomeModifierWeight.SlightNegative,
                ccc_leaders_laugh: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_con_q1_a3",
              type: AnswerType.Reassure,
              text: "The President apologized immediately. Leaders stayed on the line and finished agreements despite the silly filter.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.ModeratePositive,
                ccc_markets_jitter: OutcomeModifierWeight.ModerateNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Liberal outlet ───────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ccc_lib_q1",
      questions: {
        ccc_lib_q1: {
          id: "ccc_lib_q1",
          text: "Why didn't the administration test its video setup before such a high-stakes call?",
          depth: 0,
          answers: [
            {
              id: "ccc_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Testing happened, but an automatic update triggered the filter last minute. We're improving checks for future calls.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.ModeratePositive,
                ccc_markets_jitter: OutcomeModifierWeight.ModerateNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Everyone saw the humor in it except maybe the markets. The agenda stayed on track.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ccc_pirate_meme: OutcomeModifierWeight.SlightPositive,
                ccc_markets_jitter: OutcomeModifierWeight.SlightNegative,
                ccc_leaders_laugh: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ccc_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Treasury analysis shows only a minor stock wobble. Investors know a pirate filter is not a policy shift.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ccc_leaders_laugh: OutcomeModifierWeight.ModeratePositive,
                ccc_markets_jitter: OutcomeModifierWeight.ModerateNegative,
                ccc_pirate_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
