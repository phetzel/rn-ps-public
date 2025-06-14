import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const carnivalSanctionsExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cs_con_q1",
      questions: {
        cs_con_q1: {
          id: "cs_con_q1",
          text: "Mirth's clown ban looks humiliating. Are you demanding they reverse it or just cracking jokes?",
          depth: 0,
          answers: [
            {
              id: "cs_con_q1_a1",
              type: AnswerType.Challenge,
              text: "We expect the ban lifted immediately. If not, we'll review all travel perks the island enjoys with us.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "cs_con_q1_f1",
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightNegative,
                cs_visa_bans: OutcomeModifierWeight.SlightPositive,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_con_q1_a2",
              type: AnswerType.Reassure,
              text: "State has already apologized for the misunderstanding. We expect the carnival to welcome our clowns back shortly.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "cs_con_q1_f1",
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.ModeratePositive,
                cs_visa_bans: OutcomeModifierWeight.ModerateNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The carnival brings in good money for Mirth. We're confident cooler heads will prevail without heavy-handed threats.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "cs_con_q1_f1",
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightPositive,
                cs_visa_bans: OutcomeModifierWeight.SlightNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cs_con_q1_f1: {
          id: "cs_con_q1_f1",
          text: "Will you retaliate economically if the clown ban stays?",
          depth: 1,
          answers: [
            {
              id: "cs_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We're confident diplomacy will fix this. Sanctions aren't on the table as long as talks continue.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.ModeratePositive,
                cs_visa_bans: OutcomeModifierWeight.ModerateNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If the island won't budge, all options remain open, including travel advisories and economic pressure.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightNegative,
                cs_visa_bans: OutcomeModifierWeight.SlightPositive,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cs_lib_q1",
      questions: {
        cs_lib_q1: {
          id: "cs_lib_q1",
          text: "Did the President's tasteless joke cause this diplomatic row with the Isle of Mirth?",
          depth: 0,
          answers: [
            {
              id: "cs_lib_q1_a1",
              type: AnswerType.Deflect,
              text: "The President meant no insult. We're working with Mirth to smooth over the misunderstanding and keep tourists coming.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightPositive,
                cs_visa_bans: OutcomeModifierWeight.SlightNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_lib_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Tourism data shows the carnival relies heavily on U.S. visitors. Both sides want this resolved so nobody misses out.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.MajorPositive,
                cs_visa_bans: OutcomeModifierWeight.MajorNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "This fiasco shows a lack of cultural awareness. How will you ensure such gaffes don't keep hurting diplomacy?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightNegative,
                cs_visa_bans: OutcomeModifierWeight.SlightPositive,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cs_ind_q1",
      questions: {
        cs_ind_q1: {
          id: "cs_ind_q1",
          text: "How will the carnival ban affect tourism revenues and local performers here at home?",
          depth: 0,
          answers: [
            {
              id: "cs_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Tour operators report early cancellations, but we're encouraging both sides to settle so travel plans can resume.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.ModeratePositive,
                cs_visa_bans: OutcomeModifierWeight.ModerateNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "It's a temporary spat. Many visitors travel for the beaches, not just clowns, so the overall impact will be limited.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightPositive,
                cs_visa_bans: OutcomeModifierWeight.SlightNegative,
                cs_alt_carnival: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cs_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If the ban sticks, will the administration support our performers to run their own event instead?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                cs_apology_restores: OutcomeModifierWeight.SlightNegative,
                cs_alt_carnival: OutcomeModifierWeight.SlightPositive,
                cs_visa_bans: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
