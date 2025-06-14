import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const ovalOfficeMerchShopExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "oos_con_q1",
      questions: {
        oos_con_q1: {
          id: "oos_con_q1",
          text: "Conservative outlets call the Oval Office gift shop tacky and possibly illegal. Who approved this merchandising stunt?",
          depth: 0,
          answers: [
            {
              id: "oos_con_q1_a1",
              type: AnswerType.Reassure,
              text: "All merchandise approvals went through proper channels. Sales fund civic education programs, not the President's pocket.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "oos_con_q1_f1",
              outcomeModifiers: {
                oos_store_closed: OutcomeModifierWeight.ModeratePositive,
                oos_ethics_waiver: OutcomeModifierWeight.ModerateNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_con_q1_a2",
              type: AnswerType.Challenge,
              text: "There's nothing illegal about souvenirs. Maybe the critics just hate fun and want to deny tourists a memento.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "oos_con_q1_f1",
              outcomeModifiers: {
                oos_public_shrug: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_ethics_waiver: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's focus on policy, not trinkets. The shop is a minor attraction run by volunteers.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "oos_con_q1_f1",
              outcomeModifiers: {
                oos_ethics_waiver: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        oos_con_q1_f1: {
          id: "oos_con_q1_f1",
          text: "Is the President profiting personally from these souvenir sales?",
          depth: 1,
          answers: [
            {
              id: "oos_con_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Sales ledgers show revenue goes into a government account dedicated to civic outreach. The President gets none.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                oos_store_closed: OutcomeModifierWeight.ModeratePositive,
                oos_ethics_waiver: OutcomeModifierWeight.ModerateNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The details of revenue distribution are in a standard agreement. We'll release totals in the next report.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                oos_ethics_waiver: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_con_q1_f1_a3",
              type: AnswerType.Challenge,
              text: "Those complaining might be the same folks buying t-shirts. Let's talk about real issues, not mugs.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                oos_public_shrug: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_ethics_waiver: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "oos_ind_q1",
      questions: {
        oos_ind_q1: {
          id: "oos_ind_q1",
          text: "Independent journalists ask whether the Oval Office is an appropriate place for commercial activity.",
          depth: 0,
          answers: [
            {
              id: "oos_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "It's a temporary pop-up meant to engage visitors. Proceeds go to a civic fund, so there's no profiteering.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                oos_ethics_waiver: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Is selling merchandise in the Oval Office so shocking when past administrations rented it out for events?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                oos_public_shrug: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_ethics_waiver: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "The Oval Office remains fully operational. The shop occupies a small corner for a short season.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                oos_ethics_waiver: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "oos_lib_q1",
      questions: {
        oos_lib_q1: {
          id: "oos_lib_q1",
          text: "Liberal outlets say selling souvenirs in the Oval Office cheapens the presidency. Is this even legal?",
          depth: 0,
          answers: [
            {
              id: "oos_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We're reviewing the ethics guidance and may close the shop if it conflicts with precedent.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                oos_store_closed: OutcomeModifierWeight.ModeratePositive,
                oos_ethics_waiver: OutcomeModifierWeight.ModerateNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The waiver process is under review, but all profits are accounted for and would be donated if the shop closes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                oos_store_closed: OutcomeModifierWeight.SlightPositive,
                oos_ethics_waiver: OutcomeModifierWeight.SlightNegative,
                oos_public_shrug: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "oos_lib_q1_a3",
              type: AnswerType.Deny,
              text: "We are well within legal bounds. Merchandising of presidential symbols has precedent, and visitors enjoy it.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                oos_public_shrug: OutcomeModifierWeight.SlightPositive,
                oos_store_closed: OutcomeModifierWeight.SlightNegative,
                oos_ethics_waiver: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
