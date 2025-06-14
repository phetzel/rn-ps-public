import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const globalBuffetIncidentExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "gbi_con_q1",
      questions: {
        gbi_con_q1: {
          id: "gbi_con_q1",
          text: "At the summit you stormed out over cheeseburgers. Did that tantrum jeopardize the talks?",
          depth: 0,
          answers: [
            {
              id: "gbi_con_q1_a1",
              type: AnswerType.Challenge,
              text: "The walkout lasted five minutes. The hosts quickly offered a new menu and talks resumed. No serious harm done.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "gbi_con_q1_f1",
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.ModeratePositive,
                gbi_walkout: OutcomeModifierWeight.ModerateNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Yes, he left briefly, but both sides laughed it off. The summit schedule barely changed.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "gbi_con_q1_f1",
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.ModeratePositive,
                gbi_walkout: OutcomeModifierWeight.ModerateNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The real agenda is trade, not burgers. The President simply requested the meal he was promised.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "gbi_con_q1_f1",
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.SlightPositive,
                gbi_walkout: OutcomeModifierWeight.SlightNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        gbi_con_q1_f1: {
          id: "gbi_con_q1_f1",
          text: "Will you apologize to the hosts or compensate them for the disruption?",
          depth: 1,
          answers: [
            {
              id: "gbi_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "He expressed regret to the hosts and the catering bill is settled. Everyone's moving on.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.ModeratePositive,
                gbi_walkout: OutcomeModifierWeight.ModerateNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Apologies are overrated; what matters is that negotiations continued and new agreements are on the table.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.SlightNegative,
                gbi_walkout: OutcomeModifierWeight.SlightPositive,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "gbi_lib_q1",
      questions: {
        gbi_lib_q1: {
          id: "gbi_lib_q1",
          text: "Did the President really abandon diplomacy over a missing cheeseburger? How is that leadership?",
          depth: 0,
          answers: [
            {
              id: "gbi_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "It shows questionable priorities when cheeseburgers cause a scene. How can allies take us seriously?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.SlightNegative,
                gbi_walkout: OutcomeModifierWeight.SlightPositive,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The buffet issue was sorted quickly. Let's discuss the treaties signed rather than the menu.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.SlightPositive,
                gbi_walkout: OutcomeModifierWeight.SlightNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_lib_q1_a3",
              type: AnswerType.Inform,
              text: "State Department staff confirmed the menu change was a cost-cutting move, not a slight. Everyone's back at the table.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.ModeratePositive,
                gbi_walkout: OutcomeModifierWeight.ModerateNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "gbi_ind_q1",
      questions: {
        gbi_ind_q1: {
          id: "gbi_ind_q1",
          text: "How did foreign leaders react when the President walked out because the buffet lacked cheeseburgers?",
          depth: 0,
          answers: [
            {
              id: "gbi_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Leaders were surprised but quickly laughed when burgers arrived. The talks are still productive.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.ModeratePositive,
                gbi_walkout: OutcomeModifierWeight.ModerateNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "The incident was overblown. The President just wanted to eat before negotiating long hours.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.SlightPositive,
                gbi_walkout: OutcomeModifierWeight.SlightNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "gbi_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The catering contract omitted burgers to cut costs, but the hosts have since provided them and apologized in writing.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                gbi_hosts_appease: OutcomeModifierWeight.MajorPositive,
                gbi_walkout: OutcomeModifierWeight.MajorNegative,
                gbi_burger_brand: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
