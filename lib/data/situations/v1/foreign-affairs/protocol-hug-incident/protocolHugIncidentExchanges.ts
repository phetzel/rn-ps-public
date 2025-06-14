import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const protocolHugIncidentExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "phi_inv_q1",
      questions: {
        phi_inv_q1: {
          id: "phi_inv_q1",
          text: "Footage shows the President giving Coldshoulderia's emperor a full bear hug, ignoring protocol. Was this reckless or a security slip?",
          depth: 0,
          answers: [
            {
              id: "phi_inv_q1_a1",
              type: AnswerType.Admit,
              text: "We regret the exuberant greeting. The President has apologized and invited the Emperor to a private meeting to reaffirm mutual respect.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } },
              },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.ModeratePositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.ModerateNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Our security team expected a smaller distance. When the Emperor stepped forward, the President reacted instinctively to steady him. No insult intended.",
              impacts: {
                cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.SlightPositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.SlightNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "According to the etiquette brief, the Emperor later told our ambassador he appreciated the enthusiasm and suggested a private tea. The issue is settled.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } },
              },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.MajorPositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.MajorNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        phi_inv_q1_f1: {
          id: "phi_inv_q1_f1",
          text: "Some officials claim the Emperor was rattled and left early. Are you hiding a diplomatic rift?",
          depth: 1,
          answers: [
            {
              id: "phi_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "We maintain regular contact; the Emperor left for a scheduled event. Our teams remain in touch to finalize the energy pact.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.ModeratePositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.ModerateNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If there was discomfort, we’ll adjust protocols. But we see no rift—trade envoys are still on track for next month.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.SlightPositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.SlightNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "phi_con_q1",
      questions: {
        phi_con_q1: {
          id: "phi_con_q1",
          text: "Does the Emperor hugging fiasco make the administration look amateurish, risking national prestige abroad?",
          depth: 0,
          answers: [
            {
              id: "phi_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Critics obsess over form. Our warm approach paved the way for open talks on security. Prestige comes from results, not stiff rituals.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.SlightPositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.SlightNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_con_q1_a2",
              type: AnswerType.Reassure,
              text: "The Emperor signaled no offense. We've exchanged courtesies and arranged more talks. Our protocol team is reviewing guidelines.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.ModeratePositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.ModerateNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Protocol staff were adjusting for security, and the President reacted spontaneously. Our focus is protecting both leaders, not choreographing every handshake.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.SlightNegative,
                protocol_hug_media_frenzy: OutcomeModifierWeight.SlightPositive,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "phi_lib_q1",
      questions: {
        phi_lib_q1: {
          id: "phi_lib_q1",
          text: "Some call the hug disrespectful to Coldshoulderia’s strict customs. How will you mend cultural fences?",
          depth: 0,
          answers: [
            {
              id: "phi_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We’ve expressed regret and will host a joint exhibit on cultural etiquette to spotlight mutual respect.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.ModeratePositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.ModerateNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Protocol experts said the Emperor appreciates spontaneity. Let’s focus on the economic agreements we secured, not one awkward hug.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.SlightNegative,
                protocol_hug_media_frenzy: OutcomeModifierWeight.SlightPositive,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Our etiquette office will conduct refresher briefings for all officials traveling abroad and issue guidelines to avoid unintentional gestures.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                protocol_hug_emperor_laughs: OutcomeModifierWeight.StrongPositive,
                protocol_hug_media_frenzy: OutcomeModifierWeight.StrongNegative,
                protocol_hug_memes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
