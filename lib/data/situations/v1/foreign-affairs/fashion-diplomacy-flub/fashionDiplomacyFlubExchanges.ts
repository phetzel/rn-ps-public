import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const fashionDiplomacyFlubExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "fdf_ind_q1",
      questions: {
        fdf_ind_q1: {
          id: "fdf_ind_q1",
          text: "The President wore ceremonial robes backward during the ceremony. How will you smooth over this faux pas?",
          depth: 0,
          answers: [
            {
              id: "fdf_ind_q1_a1",
              type: AnswerType.Inform,
              text: "We apologized to our hosts and shared a light moment. Cultural seminars for staff are being scheduled to avoid repeats.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "fdf_ind_q1_f1",
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.ModeratePositive,
                fashion_flub_crisis: OutcomeModifierWeight.ModerateNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Jet lag and quick costume changes can confuse anyone. The President meant no disrespect and thanked our hosts profusely.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "fdf_ind_q1_f1",
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.SlightPositive,
                fashion_flub_crisis: OutcomeModifierWeight.SlightNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        fdf_ind_q1_f1: {
          id: "fdf_ind_q1_f1",
          text: "Any cultural outreach planned to fix the impression of disrespect?",
          depth: 1,
          answers: [
            {
              id: "fdf_ind_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Yes, we're organizing a joint fashion showcase to celebrate local designers and highlight our ongoing friendship.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.ModeratePositive,
                fashion_flub_crisis: OutcomeModifierWeight.ModerateNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_ind_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Our hosts joked about it themselves. We'll continue the visit as planned and focus on economic talks.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.SlightNegative,
                fashion_flub_trend: OutcomeModifierWeight.SlightPositive,
                fashion_flub_crisis: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fdf_lib_q1",
      questions: {
        fdf_lib_q1: {
          id: "fdf_lib_q1",
          text: "Some say the robe blunder shows cultural ignorance. Will there be a formal apology to the host nation?",
          depth: 0,
          answers: [
            {
              id: "fdf_lib_q1_a1",
              type: AnswerType.Admit,
              text: "The President offered a personal apology and plans to donate the ceremonial robe to a cultural exchange charity auction.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.ModeratePositive,
                fashion_flub_crisis: OutcomeModifierWeight.ModerateNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Mistakes happen on marathon trips. The President has a packed schedule aimed at strengthening our partnership.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.SlightNegative,
                fashion_flub_trend: OutcomeModifierWeight.SlightPositive,
                fashion_flub_crisis: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Protocol notes show the host leader laughed privately and suggested auctioning the robe for charity—no offense taken.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.MajorPositive,
                fashion_flub_crisis: OutcomeModifierWeight.MajorNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fdf_con_q1",
      questions: {
        fdf_con_q1: {
          id: "fdf_con_q1",
          text: "Does the robe incident show careless staff work or poor preparation?",
          depth: 0,
          answers: [
            {
              id: "fdf_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Our protocol team reviewed the attire, but mistakes happen. What's important is the trade agreements we secured.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.SlightPositive,
                fashion_flub_crisis: OutcomeModifierWeight.SlightNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_con_q1_a2",
              type: AnswerType.Reassure,
              text: "The host nation laughed it off and gifted us a photo. This won't hinder our ongoing negotiations.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.ModeratePositive,
                fashion_flub_crisis: OutcomeModifierWeight.ModerateNegative,
                fashion_flub_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fdf_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Blaming staff for a simple wardrobe slip distracts from the deals inked this week, including tech and agriculture pacts.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                fashion_flub_laugh_off: OutcomeModifierWeight.SlightNegative,
                fashion_flub_trend: OutcomeModifierWeight.SlightPositive,
                fashion_flub_crisis: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
