import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const reallyfarawaystanAllianceExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "rfa_con_q1",
      questions: {
        rfa_con_q1: {
          id: "rfa_con_q1",
          text: "Why tie us to a micro-nation of nineteen people? Is this alliance worth any money or risk?",
          depth: 0,
          answers: [
            {
              id: "rfa_con_q1_a1",
              type: AnswerType.Challenge,
              text: "This island gives us a mid-ocean refueling point and early warning for shipping lanes. For minimal cost, we gain valuable reach.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "rfa_con_q1_f1",
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.ModeratePositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.ModerateNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_con_q1_a2",
              type: AnswerType.Reassure,
              text: "The annual expense is less than one fighter jet. We see potential trade benefits with nearby routes.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "rfa_con_q1_f1",
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.SlightPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_con_q1_a3",
              type: AnswerType.Deflect,
              text: "A tiny ally is still an ally. Let’s not scoff at a welcoming port when we need friends in every ocean.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "rfa_con_q1_f1",
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.SlightPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        rfa_con_q1_f1: {
          id: "rfa_con_q1_f1",
          text: "Critics call this a vanity pact that wastes defense funds. Will you reconsider?",
          depth: 1,
          answers: [
            {
              id: "rfa_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "Pulling out would harm our reputation for keeping commitments. The cost is tiny compared to strategic value.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.ModeratePositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.ModerateNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_con_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "If costs rise, we’ll reevaluate. For now the pact stands while we monitor benefits.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.Neutral,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "rfa_lib_q1",
      questions: {
        rfa_lib_q1: {
          id: "rfa_lib_q1",
          text: "Critics say partnering with a 19-person nation is absurd grandstanding. What real benefits justify this micro-alliance?",
          depth: 0,
          answers: [
            {
              id: "rfa_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "This pact gives us a strategic foothold and humanitarian staging area. Size doesn’t equal value.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.ModeratePositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.ModerateNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Sometimes small allies become big friends. Let’s celebrate cooperation instead of mocking their headcount.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.SlightPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Costs are tiny—less than many aid programs—and the island may open new shipping channels through remote waters.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.SlightPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "rfa_ind_q1",
      questions: {
        rfa_ind_q1: {
          id: "rfa_ind_q1",
          text: "What does our tiny alliance with Reallyfarawaystan actually accomplish? Is this symbolic or strategic?",
          depth: 0,
          answers: [
            {
              id: "rfa_ind_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Classified mapping shows the island’s airstrip enables rapid rescue coverage across a vast ocean gap. It’s a logistics gem despite its size.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.MajorPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.MajorNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "It's a sign of friendship and a potential stopover for our planes. No harm in a little goodwill.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.SlightPositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.SlightNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rfa_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "Dismiss size jokes—this pact extends our search-and-rescue range by hundreds of miles.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rfa_micro_bases_praised: OutcomeModifierWeight.ModeratePositive,
                rfa_wasteful_ridiculed: OutcomeModifierWeight.ModerateNegative,
                rfa_treaty_cancelled: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
