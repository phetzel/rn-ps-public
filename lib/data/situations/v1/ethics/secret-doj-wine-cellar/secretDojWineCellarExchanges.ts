import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const secretDojWineCellarExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "sdwc_lib_q1",
      questions: {
        sdwc_lib_q1: {
          id: "sdwc_lib_q1",
          text: "Liberal papers uncovered a secret DOJ wine cellar funded by taxpayers. How long has this vault existed?",
          depth: 0,
          answers: [
            {
              id: "sdwc_lib_q1_a1",
              type: AnswerType.Admit,
              text: "The cellar dates back years for receptions. We're cataloging bottles now and will auction them for charity.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "sdwc_lib_q1_f1",
              outcomeModifiers: {
                cellar_auction_goodwill: OutcomeModifierWeight.ModeratePositive,
                cellar_media_firing: OutcomeModifierWeight.ModerateNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_lib_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Inventory logs show a curated vault under a DOJ annex stocked for private receptions. It's now sealed pending auction.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "sdwc_lib_q1_f1",
              outcomeModifiers: {
                cellar_auction_goodwill: OutcomeModifierWeight.StrongPositive,
                cellar_media_firing: OutcomeModifierWeight.StrongNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "This cellar predates current leadership. We're focused on justice reforms, not collecting rare vintages.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "sdwc_lib_q1_f1",
              outcomeModifiers: {
                cellar_story_fades: OutcomeModifierWeight.SlightPositive,
                cellar_auction_goodwill: OutcomeModifierWeight.SlightNegative,
                cellar_media_firing: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        sdwc_lib_q1_f1: {
          id: "sdwc_lib_q1_f1",
          text: "Will the wine collection be sold to the public or kept for future private government events?",
          depth: 1,
          answers: [
            {
              id: "sdwc_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "All bottles will be auctioned with proceeds returned to the treasury. No one will keep private stock.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cellar_auction_goodwill: OutcomeModifierWeight.ModeratePositive,
                cellar_media_firing: OutcomeModifierWeight.ModerateNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Why should taxpayers believe this was innocent storage when lavish perks keep popping up?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cellar_media_firing: OutcomeModifierWeight.SlightPositive,
                cellar_story_fades: OutcomeModifierWeight.SlightNegative,
                cellar_auction_goodwill: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sdwc_ind_q1",
      questions: {
        sdwc_ind_q1: {
          id: "sdwc_ind_q1",
          text: "Independent outlets ask whether other hidden perks exist at DOJ and what reforms will follow.",
          depth: 0,
          answers: [
            {
              id: "sdwc_ind_q1_a1",
              type: AnswerType.Inform,
              text: "An internal audit is underway to identify any other perks. Findings will be released alongside new oversight rules.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cellar_story_fades: OutcomeModifierWeight.ModeratePositive,
                cellar_media_firing: OutcomeModifierWeight.ModerateNegative,
                cellar_auction_goodwill: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "This isn't just another sign of the department being out of touch with regular citizens and their daily struggles?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cellar_media_firing: OutcomeModifierWeight.SlightPositive,
                cellar_auction_goodwill: OutcomeModifierWeight.SlightNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "sdwc_con_q1",
      questions: {
        sdwc_con_q1: {
          id: "sdwc_con_q1",
          text: "Conservative commentators call the wine stash elitist. Who approved it and will heads roll?",
          depth: 0,
          answers: [
            {
              id: "sdwc_con_q1_a1",
              type: AnswerType.Reassure,
              text: "The cellar is being emptied and oversight tightened. Any officials who misused funds will face disciplinary action.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cellar_auction_goodwill: OutcomeModifierWeight.ModeratePositive,
                cellar_media_firing: OutcomeModifierWeight.ModerateNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_con_q1_a2",
              type: AnswerType.Deflect,
              text: "This stash dates back decades. Let's focus on future accountability rather than old perks.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cellar_story_fades: OutcomeModifierWeight.SlightPositive,
                cellar_auction_goodwill: OutcomeModifierWeight.SlightNegative,
                cellar_media_firing: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdwc_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Someone approved this indulgence. Until we see resignations, the public won't buy your reform talk.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                cellar_media_firing: OutcomeModifierWeight.SlightPositive,
                cellar_auction_goodwill: OutcomeModifierWeight.SlightNegative,
                cellar_story_fades: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
