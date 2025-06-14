import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const translatorMixUpExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "tmu_ind_q1",
      questions: {
        tmu_ind_q1: {
          id: "tmu_ind_q1",
          text: "A translation error at last night's dinner suggested the President was giving Alaska away. How are you clearing up this bizarre mix-up?",
          depth: 0,
          answers: [
            {
              id: "tmu_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We've released the correct transcript and contacted every delegation. No territory was ever offered; it was a slip of the tongue.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "tmu_ind_q1_f1",
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.ModeratePositive,
                translator_mixup_market_dip: OutcomeModifierWeight.ModerateNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Markets like certainty. The translation was corrected within minutes, and our economic policies remain unchanged.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "tmu_ind_q1_f1",
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The official audio confirms the President said 'our Alaska partnership,' not 'your Alaska.' We've distributed the corrected transcript to all attendees.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "tmu_ind_q1_f1",
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.MajorPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.MajorNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        tmu_ind_q1_f1: {
          id: "tmu_ind_q1_f1",
          text: "Skeptics say the slip shows careless staffing. Will anyone be held accountable?",
          depth: 1,
          answers: [
            {
              id: "tmu_ind_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We’re reviewing procedures and will provide additional training. No staff changes planned yet.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Staff did their jobs; one human error shouldn't spark a witch hunt. We’re moving forward.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tmu_con_q1",
      questions: {
        tmu_con_q1: {
          id: "tmu_con_q1",
          text: "Does this translation blunder show your administration is careless with national assets like Alaska?",
          depth: 0,
          answers: [
            {
              id: "tmu_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No one offered away territory. It was an error that we corrected immediately. Suggesting otherwise is irresponsible fearmongering.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Investors should relax. The slip hasn't changed our policies or our commitment to Alaska's economy.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_con_q1_a3",
              type: AnswerType.Reassure,
              text: "We’ve spoken with our allies and provided the correct transcript. No one believes Alaska is on the auction block.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.ModeratePositive,
                translator_mixup_market_dip: OutcomeModifierWeight.ModerateNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tmu_lib_q1",
      questions: {
        tmu_lib_q1: {
          id: "tmu_lib_q1",
          text: "Opponents joke you nearly gave away Alaska. How will you reassure citizens this gaffe is resolved?",
          depth: 0,
          answers: [
            {
              id: "tmu_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We apologized for the slip and shared the corrected transcript publicly. Alaska remains proudly ours.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.ModeratePositive,
                translator_mixup_market_dip: OutcomeModifierWeight.ModerateNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "This was one word mangled by a tired interpreter. Let’s not treat a dinner joke as national policy.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.SlightNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.SlightPositive,
                translator_mixup_market_dip: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tmu_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Treasury analysts confirm zero impact on trade agreements. Markets should view this as a blip, not a policy shift.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                translator_mixup_clarified: OutcomeModifierWeight.ModeratePositive,
                translator_mixup_market_dip: OutcomeModifierWeight.ModerateNegative,
                translator_mixup_opposition_joke: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
