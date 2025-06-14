import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const icebergRealEstateExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "ire_con_q1",
      questions: {
        ire_con_q1: {
          id: "ire_con_q1",
          text: "Buying icebergs for bottled water sounds far-fetched. How serious is this plan?",
          depth: 0,
          answers: [
            {
              id: "ire_con_q1_a1",
              type: AnswerType.Challenge,
              text: "It's an ambitious proposal to secure new resources. Dismissing it outright ignores potential economic gains.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ire_con_q1_f1",
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.ModeratePositive,
                iceberg_plan_mocked: OutcomeModifierWeight.ModerateNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_con_q1_a2",
              type: AnswerType.Inform,
              text: "Treasury is reviewing cost models. Early numbers show profits could offset purchase and towing expenses.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "ire_con_q1_f1",
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.ModeratePositive,
                iceberg_plan_mocked: OutcomeModifierWeight.ModerateNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_con_q1_a3",
              type: AnswerType.Deflect,
              text: "We're exploring many ideas to secure clean water. Purchasing icebergs is only one option under consideration.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "ire_con_q1_f1",
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ire_con_q1_f1: {
          id: "ire_con_q1_f1",
          text: "Would you push forward even if environmental groups sue?",
          depth: 1,
          answers: [
            {
              id: "ire_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "Lawsuits won't stop us from exploring innovative ways to provide affordable water and create jobs.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.ModeratePositive,
                iceberg_lawsuit: OutcomeModifierWeight.ModerateNegative,
                iceberg_plan_mocked: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_con_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "We'll consult experts and comply with environmental laws. If lawsuits arise, we'll adjust the plan accordingly.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ire_lib_q1",
      questions: {
        ire_lib_q1: {
          id: "ire_lib_q1",
          text: "Global leaders are laughing at the iceberg proposal. Why pursue an idea that looks so absurd?",
          depth: 0,
          answers: [
            {
              id: "ire_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "Bold ideas often face mockery at first. We're exploring all avenues to secure clean water and jobs for our people.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The concept is preliminary. Let's focus on infrastructure bills already creating jobs right now.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Our memo shows several icebergs drift through unclaimed waters. Purchasing them could open new diplomatic partnerships.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.MajorPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.MajorNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ire_inv_q1",
      questions: {
        ire_inv_q1: {
          id: "ire_inv_q1",
          text: "Environmental groups say towing icebergs could harm ecosystems. What's your response?",
          depth: 0,
          answers: [
            {
              id: "ire_inv_q1_a1",
              type: AnswerType.Inform,
              text: "We'd conduct full environmental studies before any purchase. No plan would proceed without safeguards.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                iceberg_lawsuit: OutcomeModifierWeight.ModerateNegative,
                iceberg_water_venture: OutcomeModifierWeight.ModeratePositive,
                iceberg_plan_mocked: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_inv_q1_a2",
              type: AnswerType.Challenge,
              text: "Opponents exaggerate. Iceberg towing has been studied for decades and can be done responsibly.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ire_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "The proposal is in early stages, so critics are getting ahead of the facts. We'll review all impacts first.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                iceberg_water_venture: OutcomeModifierWeight.SlightPositive,
                iceberg_plan_mocked: OutcomeModifierWeight.SlightNegative,
                iceberg_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
