import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const aidRefusalEmbarrassmentExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "are_lib_q1",
      questions: {
        are_lib_q1: {
          id: "are_lib_q1",
          text: "Refusing flood aid over a TV insult appears spiteful. Will the administration reverse course?",
          depth: 0,
          answers: [
            {
              id: "are_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, we mishandled the situation. Aid is being sent immediately along with an apology to Dramastan’s people.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "are_lib_q1_f1",
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.ModeratePositive,
                are_condemnation: OutcomeModifierWeight.ModerateNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The insult created confusion about intentions. We’re in talks to provide assistance once protocols are clear.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "are_lib_q1_f1",
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.SlightPositive,
                are_condemnation: OutcomeModifierWeight.SlightNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Treasury has funds ready and State is coordinating logistics. We expect aid to depart within hours.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "are_lib_q1_f1",
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.ModeratePositive,
                are_condemnation: OutcomeModifierWeight.ModerateNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        are_lib_q1_f1: {
          id: "are_lib_q1_f1",
          text: "Critics claim the delay cost lives. Who will be held responsible?",
          depth: 1,
          answers: [
            {
              id: "are_lib_q1_f1_a1",
              type: AnswerType.Admit,
              text: "We’re reviewing internal communications and will release a report. The priority now is delivering aid swiftly and transparently.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.ModeratePositive,
                are_condemnation: OutcomeModifierWeight.ModerateNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "We acted based on incomplete information. Blame games won’t help victims; our focus is rushing aid and preventing future lapses.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.SlightPositive,
                are_rival_fills: OutcomeModifierWeight.SlightNegative,
                are_condemnation: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "are_con_q1",
      questions: {
        are_con_q1: {
          id: "are_con_q1",
          text: "Do you stand by rejecting Dramastan’s aid request after that TV jab, or was it a misunderstanding?",
          depth: 0,
          answers: [
            {
              id: "are_con_q1_a1",
              type: AnswerType.Deflect,
              text: "The President felt insulted, but we’re clarifying the context. Aid discussions are back on track.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.SlightPositive,
                are_condemnation: OutcomeModifierWeight.SlightNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_con_q1_a2",
              type: AnswerType.Reassure,
              text: "We never intended to abandon flood victims. Logistics were paused briefly but help is forthcoming.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.ModeratePositive,
                are_condemnation: OutcomeModifierWeight.ModerateNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_con_q1_a3",
              type: AnswerType.Challenge,
              text: "The opposition is exaggerating. Dramastan mocked our culture first. We’re still evaluating the best aid channel.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative } } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.SlightNegative,
                are_rival_fills: OutcomeModifierWeight.SlightPositive,
                are_condemnation: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "are_ind_q1",
      questions: {
        are_ind_q1: {
          id: "are_ind_q1",
          text: "How does withholding flood aid over a TV insult serve our national interests?",
          depth: 0,
          answers: [
            {
              id: "are_ind_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Embassy cables show aid was recommended before the joke. We’re correcting the delay and coordinating delivery now.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.MajorPositive,
                are_condemnation: OutcomeModifierWeight.MajorNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "The refusal stemmed from confusion over insults and respect. We’re sorting it out and aiming to help soon.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.SlightPositive,
                are_condemnation: OutcomeModifierWeight.SlightNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "are_ind_q1_a3",
              type: AnswerType.Reassure,
              text: "Aid discussions resumed this morning. We expect to contribute resources alongside allies within days.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                are_aid_sent: OutcomeModifierWeight.ModeratePositive,
                are_condemnation: OutcomeModifierWeight.ModerateNegative,
                are_rival_fills: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
