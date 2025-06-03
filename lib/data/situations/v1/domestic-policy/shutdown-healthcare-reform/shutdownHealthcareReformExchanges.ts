import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const shutdownHealthcareReformExchanges: ExchangeData[] = [
  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "shr_ind_q1",
      questions: {
        shr_ind_q1: {
          id: "shr_ind_q1",
          text: "Families want to know: when will paychecks resume and doctors stop prescribing novelty vitamins? What’s the path to ending this shutdown?",
          depth: 0,
          answers: [
            {
              id: "shr_ind_q1_a1",
              type: AnswerType.Reassure, // Treasury pref
              text: "Talks resume at noon; contingency funds cover essential staff. Both sides agree on core reforms—expect a reopening deal within days.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                shr_deal_struck: OutcomeModifierWeight.ModeratePositive, // +6
                shr_protracted_shutdown: OutcomeModifierWeight.ModerateNegative, // −6
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_ind_q1_a2",
              type: AnswerType.Deflect, // President spin
              text: "A short nap for government is healthy. We’re negotiating the nation’s wellness—good things take time, just like vitamins.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                shr_protracted_shutdown: OutcomeModifierWeight.SlightPositive, // +4
                shr_deal_struck: OutcomeModifierWeight.SlightNegative, // −4
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Shutdown costs $320 M daily; cash buffer ends in 17 days. Treasury urges deal this week to prevent ratings review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                shr_deal_struck: OutcomeModifierWeight.StrongPositive, // +8
                shr_protracted_shutdown: OutcomeModifierWeight.StrongNegative, // −8
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "shr_con_q1",
      questions: {
        shr_con_q1: {
          id: "shr_con_q1",
          text: "Isn’t a vitamin-mandate nanny state nonsense? Why not scrap it now and reopen the government immediately?",
          depth: 0,
          answers: [
            {
              id: "shr_con_q1_a1",
              type: AnswerType.Challenge, // President
              text: "Healthy citizens cut healthcare costs. Opponents should swallow that fact like a vitamin—deal will pass once they do.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
              },
              outcomeModifiers: {
                shr_protracted_shutdown: OutcomeModifierWeight.ModeratePositive, // +6
                shr_deal_struck: OutcomeModifierWeight.ModerateNegative, // −6
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_con_q1_a2",
              type: AnswerType.Reassure, // Treasury again
              text: "If cost-benefit data fail, the clause will sunset. We’re open to revisions tonight, aiming for swift reopening with fiscal discipline.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                shr_deal_struck: OutcomeModifierWeight.ModeratePositive, // +6
                shr_protracted_shutdown: OutcomeModifierWeight.ModerateNegative, // −6
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_con_q1_a3",
              type: AnswerType.Inform, // State global view
              text: "A swift deal protects our credit and keeps borrowing costs low—crucial for allies who buy our bonds. Talks focus on that shared priority.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                shr_deal_struck: OutcomeModifierWeight.StrongPositive, // +8
                shr_protracted_shutdown: OutcomeModifierWeight.StrongNegative, // −8
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "shr_lib_q1",
      questions: {
        shr_lib_q1: {
          id: "shr_lib_q1",
          text: "Hospitals fear supply delays as the shutdown drags on. Will you drop the vitamin gimmick and prioritize real patient care?",
          depth: 0,
          answers: [
            {
              id: "shr_lib_q1_a1",
              type: AnswerType.Admit, // HHS candor
              text: "We hear the concern. HHS will pause enforcement and consult medical boards, focusing on evidence-based nutrition policy after reopening.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                shr_deal_struck: OutcomeModifierWeight.ModeratePositive, // +6
                shr_protracted_shutdown: OutcomeModifierWeight.ModerateNegative, // −6
                shr_vitamin_sales_surge: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_lib_q1_a2",
              type: AnswerType.Deflect, // President banter
              text: "Millions already take daily vitamins—our policy just celebrates that healthy habit. Let’s not make nutrition a partisan food fight.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                shr_vitamin_sales_surge: OutcomeModifierWeight.SlightPositive, // +4
                shr_deal_struck: OutcomeModifierWeight.SlightNegative, // −4
                shr_protracted_shutdown: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "shr_lib_q1_a3",
              type: AnswerType.Inform, // HHS data
              text: "A public dashboard will track essential-drug shipments during the shutdown, ensuring no patient faces a shortage while talks continue.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                shr_vitamin_sales_surge: OutcomeModifierWeight.SlightNegative, // −4
                shr_deal_struck: OutcomeModifierWeight.Neutral,
                shr_protracted_shutdown: OutcomeModifierWeight.SlightPositive, // +4
              },
            },
          ],
        },
      },
    },
  },
];
