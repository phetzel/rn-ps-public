import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const mintingPersonalCoinsExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "mpc_lib_q1",
      questions: {
        mpc_lib_q1: {
          id: "mpc_lib_q1",
          text: "Liberal papers say Treasury minted coins with the Secretary's face. Why spend public funds on personal vanity?",
          depth: 0,
          answers: [
            {
              id: "mpc_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, a small commemorative batch was produced for a charity auction. Costs are repaid and the coins will be melted.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "mpc_lib_q1_f1",
              outcomeModifiers: {
                coins_melted_apology: OutcomeModifierWeight.ModeratePositive,
                coins_collectors_hoard: OutcomeModifierWeight.ModerateNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mpc_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "This was an overzealous commemorative idea, not corruption. Let's stay focused on growing the economy for everyone.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "mpc_lib_q1_f1",
              outcomeModifiers: {
                coins_melted_apology: OutcomeModifierWeight.SlightNegative,
                coins_collectors_hoard: OutcomeModifierWeight.Neutral,
                coins_congress_bans: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "mpc_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Mint documents show this was an approved test batch tied to a museum exhibit, not a vanity profit scheme.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "mpc_lib_q1_f1",
              outcomeModifiers: {
                coins_melted_apology: OutcomeModifierWeight.StrongPositive,
                coins_collectors_hoard: OutcomeModifierWeight.StrongNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        mpc_lib_q1_f1: {
          id: "mpc_lib_q1_f1",
          text: "Will the Treasury Secretary keep any of these commemorative coins as personal souvenirs?",
          depth: 1,
          answers: [
            {
              id: "mpc_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "No coins will remain in personal hands. They're being melted and the metal recycled to close the matter.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                coins_melted_apology: OutcomeModifierWeight.ModeratePositive,
                coins_collectors_hoard: OutcomeModifierWeight.ModerateNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mpc_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Why not auction them for charity instead of melting everything? Public interest could raise funds for good causes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                coins_collectors_hoard: OutcomeModifierWeight.SlightPositive,
                coins_melted_apology: OutcomeModifierWeight.SlightNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "mpc_con_q1",
      questions: {
        mpc_con_q1: {
          id: "mpc_con_q1",
          text: "Conservative media call the coin scheme egotistical. What penalties will the Secretary face?",
          depth: 0,
          answers: [
            {
              id: "mpc_con_q1_a1",
              type: AnswerType.Reassure,
              text: "An internal review is under way. Any public funds will be repaid and procedures tightened to avoid repeat mistakes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                coins_melted_apology: OutcomeModifierWeight.ModeratePositive,
                coins_collectors_hoard: OutcomeModifierWeight.ModerateNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mpc_con_q1_a2",
              type: AnswerType.Deny,
              text: "No penalty is warranted. The coins were part of normal outreach and did not cost taxpayers in the end.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                coins_collectors_hoard: OutcomeModifierWeight.SlightPositive,
                coins_melted_apology: OutcomeModifierWeight.SlightNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mpc_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Past administrations minted souvenirs too. Let's focus on bigger fiscal issues instead of novelty coins.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                coins_congress_bans: OutcomeModifierWeight.SlightPositive,
                coins_melted_apology: OutcomeModifierWeight.SlightNegative,
                coins_collectors_hoard: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "mpc_ind_q1",
      questions: {
        mpc_ind_q1: {
          id: "mpc_ind_q1",
          text: "Independent outlets ask whether new rules will stop officials from printing their own money.",
          depth: 0,
          answers: [
            {
              id: "mpc_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Treasury is drafting guidelines restricting commemorative runs to historic figures only, preventing personal portraits.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                coins_congress_bans: OutcomeModifierWeight.ModeratePositive,
                coins_melted_apology: OutcomeModifierWeight.ModerateNegative,
                coins_collectors_hoard: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mpc_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Rules aside, isn't this a lapse in judgment? Shouldn't officials get ethics training before ordering vanity currency?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                coins_collectors_hoard: OutcomeModifierWeight.SlightPositive,
                coins_melted_apology: OutcomeModifierWeight.SlightNegative,
                coins_congress_bans: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
