import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const wildfiresThreatenMovieSetsExchanges: ExchangeData[] = [
  /* ────────── Independent outlet ────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "wms_ind_q1",
      questions: {
        wms_ind_q1: {
          id: "wms_ind_q1",
          text: "Residents worry wildfires will erase film landmarks and jobs. What's the federal role in saving these sets?",
          depth: 0,
          answers: [
            {
              id: "wms_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We’re working with local crews and studios, using satellite maps to keep flames clear of sets. Insurance and emergency funds will cover damages.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "wms_ind_q1_f1",
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.ModeratePositive,
                wms_sets_lost_outrage: OutcomeModifierWeight.ModerateNegative,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "These are state fires, not a federal film festival. Studios have big budgets for pyrotechnics, and the governor loves the spotlight.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "wms_ind_q1_f1",
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.SlightNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.SlightPositive,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Classified fire maps show breakouts creeping toward major sets. Homeland teams have water-dropping drones ready if local crews falter.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "wms_ind_q1_f1",
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.StrongPositive,
                wms_sets_lost_outrage: OutcomeModifierWeight.StrongNegative,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        wms_ind_q1_f1: {
          id: "wms_ind_q1_f1",
          text: "If wildfires keep spreading, will you federalize firefighting or leave studios to fend for themselves?",
          depth: 1,
          answers: [
            {
              id: "wms_ind_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Federal teams will join if local resources fail. We’ve pre-positioned air tankers but still expect states and studios to shoulder most costs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.ModeratePositive,
                wms_sets_lost_outrage: OutcomeModifierWeight.ModerateNegative,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Studios aren’t national treasures. If they want extra help, they should pay hazard fees rather than ask taxpayers for VIP treatment.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                wms_fed_budget_takeover: OutcomeModifierWeight.ModeratePositive,
                wms_fires_contained_heroically: OutcomeModifierWeight.ModerateNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────── Conservative outlet ────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "wms_con_q1",
      questions: {
        wms_con_q1: {
          id: "wms_con_q1",
          text: "Taxpayers worry Hollywood handouts will drain disaster funds. How will you prevent a bailout of wealthy studios?",
          depth: 0,
          answers: [
            {
              id: "wms_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Studios know the risks of filming in dry canyons. We’ll assist where we can, but California has its own disaster budget.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.SlightPositive,
                wms_fed_budget_takeover: OutcomeModifierWeight.SlightNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Insurance policies and state funds cover most losses. Federal crews are supporting, not bankrolling, so taxpayers won’t foot a Hollywood bailout.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.ModeratePositive,
                wms_fed_budget_takeover: OutcomeModifierWeight.ModerateNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_con_q1_a3",
              type: AnswerType.Challenge,
              text: "If studios want extra funding, they should scrap risky stunts and call their own investors. We’re not writing blank checks for movie magic.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                wms_fed_budget_takeover: OutcomeModifierWeight.ModeratePositive,
                wms_fires_contained_heroically: OutcomeModifierWeight.ModerateNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────── Liberal outlet ────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "wms_lib_q1",
      questions: {
        wms_lib_q1: {
          id: "wms_lib_q1",
          text: "Cultural leaders fear film heritage will go up in flames. What long-term action will you take to preserve these creative landmarks?",
          depth: 0,
          answers: [
            {
              id: "wms_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We’re funding fire-resistant barriers around key sets and using satellite monitoring to direct crews. Preservation grants will safeguard film history.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.StrongPositive,
                wms_sets_lost_outrage: OutcomeModifierWeight.StrongNegative,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Movie magic thrives on risk. States manage their forests, and Hollywood loves a comeback story. Let’s not rewrite budgets before the final scene.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.ModerateNegative,
                wms_sets_lost_outrage: OutcomeModifierWeight.ModeratePositive,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wms_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Satellite intel reveals winds shifting. Drones will shield major backlots tonight, and federal teams are poised to coordinate a unified response.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                wms_fires_contained_heroically: OutcomeModifierWeight.StrongPositive,
                wms_sets_lost_outrage: OutcomeModifierWeight.StrongNegative,
                wms_fed_budget_takeover: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
