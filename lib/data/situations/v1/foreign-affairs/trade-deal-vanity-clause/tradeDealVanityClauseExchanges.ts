import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const tradeDealVanityClauseExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "tdvc_ind_q1",
      questions: {
        tdvc_ind_q1: {
          id: "tdvc_ind_q1",
          text: "At trade talks you demanded the partner capital rename itself after you. How are negotiators reacting to this unusual condition?",
          depth: 0,
          answers: [
            {
              id: "tdvc_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We're clarifying that the naming idea was lighthearted. Both sides are still hashing out tariffs and expect to sign soon.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "tdvc_ind_q1_f1",
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.ModeratePositive,
                trade_deal_collapses: OutcomeModifierWeight.ModerateNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "The President enjoys creative proposals. Renaming cities isn't a prerequisite; it's part of a bigger conversation about mutual respect.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "tdvc_ind_q1_f1",
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "According to the annex draft, the naming request was floated as a goodwill gesture only. Our diplomatic cables show the partner is open to a lesser tribute.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "tdvc_ind_q1_f1",
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.MajorPositive,
                trade_deal_collapses: OutcomeModifierWeight.MajorNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        tdvc_ind_q1_f1: {
          id: "tdvc_ind_q1_f1",
          text: "Reports say the other side threatened to walk out unless you drop the vanity clause. Is the deal dead?",
          depth: 1,
          answers: [
            {
              id: "tdvc_ind_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Talks paused briefly, but envoys are still scheduling the next session. No one has left the table.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.ModeratePositive,
                trade_deal_collapses: OutcomeModifierWeight.ModerateNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Rumors of a collapse are exaggerated. We're confident once the dust settles both nations will return to pragmatic negotiations.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tdvc_con_q1",
      questions: {
        tdvc_con_q1: {
          id: "tdvc_con_q1",
          text: "Doesn't insisting a city be renamed after the President insult our partners and jeopardize the deal?",
          depth: 0,
          answers: [
            {
              id: "tdvc_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No one is forced to rename anything. We're exploring ways to celebrate the partnership. Economic benefits matter far more than naming rights.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.ModeratePositive,
                trade_deal_collapses: OutcomeModifierWeight.ModerateNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Our trade team assures me the clause is optional. The bigger issues are tariffs and market access, which remain on track.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_con_q1_a3",
              type: AnswerType.Deflect,
              text: "We're not negotiating through headlines. Let's wait until the final text is released instead of focusing on one playful idea.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "tdvc_lib_q1",
      questions: {
        tdvc_lib_q1: {
          id: "tdvc_lib_q1",
          text: "Does demanding a city rename show unchecked ego rather than diplomacy?",
          depth: 0,
          answers: [
            {
              id: "tdvc_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "It was a lighthearted suggestion highlighting the importance of this deal. Diplomacy often includes symbolic gestures.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.ModeratePositive,
                trade_deal_collapses: OutcomeModifierWeight.ModerateNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "We're more focused on jobs and exports than on city signage. Let's keep eyes on the economic gains.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tdvc_lib_q1_a3",
              type: AnswerType.Inform,
              text: "The proposal came up in a brainstorming session. Negotiators are evaluating more realistic ways to commemorate the pact.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                trade_deal_clause_dropped: OutcomeModifierWeight.SlightPositive,
                trade_deal_collapses: OutcomeModifierWeight.SlightNegative,
                trade_deal_plaza_compromise: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
