import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q_heatwave_grid",
      text: "The power grid is failing under the strain. What is the administration's plan to prevent catastrophic, widespread blackouts?",
      answers: [
        {
          id: "a_grid_reassure",
          type: AnswerType.Reassure,
          text: "We are in constant contact with utility providers to manage the load. We're asking for voluntary conservation, but we are prepared for all scenarios.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cooling_grants:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_grid_challenge",
          type: AnswerType.Challenge,
          text: "This crisis highlights the decades of underinvestment in our national grid. We need bold, long-term infrastructure spending to fix this.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
              },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cooling_grants:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_heatwave_long_term",
        },
        {
          id: "a_grid_admit",
          type: AnswerType.Admit,
          text: "The grid is more vulnerable than we hoped. We're implementing rolling blackouts to prevent total collapse while emergency cooling centers provide refuge.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cooling_grants:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.StrongNegative, // -8
          },
          followUpId: "q_heatwave_emergency_measures",
        },
        {
          id: "a_grid_neutral",
          type: AnswerType.Inform,
          text: "We'll publish outage schedules, cooling center maps, and conservation targets so people can plan hour by hour.",
          impacts: {},
          outcomeModifiers: {},
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_heatwave_long_term",
        text: "Long-term spending doesn't help people whose power is out now. What is the immediate solution for vulnerable citizens stuck in this heat?",
        answers: [
          {
            id: "a_long_term_inform",
            type: AnswerType.Inform,
            text: "HHS and Treasury have released emergency funds for cities to open public cooling centers with access to water and medical staff.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_heatwave_federal_coordination",
          },
          {
            id: "a_long_term_admit",
            type: AnswerType.Admit,
            text: "You're right, the immediate options are limited and imperfect. We're doing everything we can, but this is a stark reminder of our infrastructure debt.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_long_term_reassure",
            type: AnswerType.Reassure,
            text: "We're mobilizing every available resource - mobile cooling units, emergency shelters, and medical teams. The response is massive and coordinated.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_long_term_neutral",
          type: AnswerType.Inform,
          text: "A real-time portal shows open centers, transit options, and wait times across affected cities.",
          impacts: {},
          outcomeModifiers: {},
        },
        ],
      },
      {
        id: "q_heatwave_emergency_measures",
        text: "Are you considering any emergency weather modification like cloud-seeding to break this heat dome? What about the risks of unproven technology?",
        answers: [
          {
            id: "a_emergency_admit",
            type: AnswerType.Admit,
            text: "We're exploring all options, including experimental weather modification. The risks are real, but so is the crisis. We're proceeding very cautiously.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_heatwave_cost_benefit",
          },
          {
            id: "a_emergency_deflect",
            type: AnswerType.Deflect,
            text: "Our focus is on proven solutions - cooling centers, grid management, and emergency response. We're not rushing into experimental territory.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
          {
            id: "a_emergency_inform",
            type: AnswerType.Inform,
            text: "We have teams evaluating cloud-seeding feasibility, but the technology is inconsistent and could cause flooding. Priority remains on immediate cooling solutions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Neutral },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse: OutcomeModifierWeight.Neutral, // 0
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_emergency_neutral",
            type: AnswerType.Inform,
            text: "Independent scientists are part of our review board, and any pilot would include rapid-stop criteria.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_heatwave_federal_coordination",
        text: "Cities are struggling to fund these centers. Shouldn't the federal government take direct control rather than just throwing money at the problem?",
        answers: [
          {
            id: "a_federal_challenge",
            type: AnswerType.Challenge,
            text: "Direct federal management would be slower and less effective. Local officials know their communities' needs better than Washington bureaucrats.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse: OutcomeModifierWeight.Neutral, // 0
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_federal_reassure",
            type: AnswerType.Reassure,
            text: "We're providing both funding and coordination through Homeland Security. This combines federal resources with local expertise for maximum effectiveness.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_federal_inform",
            type: AnswerType.Inform,
            text: "We're deploying federal emergency management protocols while maintaining local control. FEMA coordinates but cities implement based on their specific needs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Neutral },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_federal_neutral",
            type: AnswerType.Inform,
            text: "We'll issue after-action reports and update playbooks so coordination improves each heat event.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_heatwave_cost_benefit",
        text: "What's the economic cost of this heatwave response versus the long-term investment needed to prevent future crises?",
        answers: [
          {
            id: "a_cost_inform",
            type: AnswerType.Inform,
            text: "Treasury estimates this emergency response will cost $2 billion, while grid modernization would require $200 billion over a decade. The math is clear.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Neutral },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_cost_admit",
            type: AnswerType.Admit,
            text: "The emergency costs are enormous, but they're dwarfed by the long-term economic damage if we don't invest in climate resilience infrastructure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_cost_deflect",
            type: AnswerType.Deflect,
            text: "We can't put a price on human life. The immediate priority is saving lives, and we'll address long-term costs through proper planning and investment.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_cost_neutral",
            type: AnswerType.Inform,
            text: "Treasury will publish cost-benefit analyses comparing emergency spending with grid resilience investments.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
