import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const pandemicPizzaShortageExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Conservative outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pps_con_q1",
      questions: {
        pps_con_q1: {
          id: "pps_con_q1",
          text: "Rumors of a pizza virus have people hoarding slices. Is your administration hiding a food safety crisis?",
          depth: 0,
          answers: [
            {
              id: "pps_con_q1_a1",
              type: AnswerType.Deflect,
              text: "The only virus here is bad comedy. Our labs found nothing dangerous. Folks should enjoy pizza in moderation and relax.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "pps_con_q1_f1",
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.SlightPositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.SlightNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Homeland is monitoring supply chains. We expect normal deliveries within days as the rumor dies down.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "pps_con_q1_f1",
              outcomeModifiers: {
                pps_rumor_quashed_relief:
                  OutcomeModifierWeight.ModeratePositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.ModerateNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_con_q1_a3",
              type: AnswerType.Inform,
              text: "HHS confirms no pathogen in pizzas. This scare started from a satire site and spread online without verification.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "pps_con_q1_f1",
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.StrongPositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.StrongNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pps_con_q1_f1: {
          id: "pps_con_q1_f1",
          text: "If hoarding continues, will you impose rationing or price controls?",
          depth: 1,
          answers: [
            {
              id: "pps_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We’ll fine gougers and keep shelves stocked. Rationing is off the table unless real shortages emerge.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.ModeratePositive,
                pps_rumor_quashed_relief: OutcomeModifierWeight.Neutral,
                pps_virus_found_panic: OutcomeModifierWeight.ModerateNegative,
              },
            },
            {
              id: "pps_con_q1_f1_a2",
              type: AnswerType.Admit,
              text: "If panic buying spirals, rationing may become necessary, though we hope public common sense prevails first.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Negative,
                  },
                },
              },
              outcomeModifiers: {
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.ModeratePositive,
                pps_rumor_quashed_relief:
                  OutcomeModifierWeight.ModerateNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Let’s cross that cheesy bridge if we come to it. Right now, there’s plenty of dough to go around.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.SlightNegative,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.SlightPositive,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "pps_lib_q1",
      questions: {
        pps_lib_q1: {
          id: "pps_lib_q1",
          text: "Pizza workers fear for their jobs as rumors swirl. How are you protecting them and ensuring safe food handling?",
          depth: 0,
          answers: [
            {
              id: "pps_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "HHS is issuing updated food-safety guidance and supporting local health boards. We’re keeping delivery staff employed and safe.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pps_rumor_quashed_relief:
                  OutcomeModifierWeight.ModeratePositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.ModerateNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_lib_q1_a2",
              type: AnswerType.Inform,
              text: "Homeland is coordinating with major chains to prevent panic closures and keep deliveries running smoothly.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.StrongPositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.StrongNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Americans eat an alarming amount of pizza. Maybe diversify your diets and we won’t fear shortages so easily.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.SlightPositive,
                pps_rumor_quashed_relief: OutcomeModifierWeight.SlightNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "pps_ind_q1",
      questions: {
        pps_ind_q1: {
          id: "pps_ind_q1",
          text: "Citizens are confused—virus or not? When will we know for sure if pizza is safe to eat?",
          depth: 0,
          answers: [
            {
              id: "pps_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Lab results show no viral contamination. Official confirmation will post online today so everyone can enjoy their slices without fear.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.StrongPositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.StrongNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There’s no credible evidence of a pizza virus. Rumors are fueling panic buying and nothing more.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.SlightNegative,
                pps_rumor_quashed_relief: OutcomeModifierWeight.SlightPositive,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pps_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Internal memos confirm all inspections clear. The rumor traces to a parody blog. We’re releasing the lab data for transparency.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                pps_rumor_quashed_relief: OutcomeModifierWeight.StrongPositive,
                pps_hoarding_causes_shortage:
                  OutcomeModifierWeight.StrongNegative,
                pps_virus_found_panic: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
