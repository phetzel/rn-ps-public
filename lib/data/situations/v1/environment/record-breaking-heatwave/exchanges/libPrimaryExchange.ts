import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_heatwave_climate",
      text: "This heatwave is clearly climate change. Is the administration considering radical solutions like geoengineering or cloud-seeding?",
      answers: [
        {
          id: "a_climate_reassure",
          type: AnswerType.Reassure,
          text: "Our focus is on the immediate crisis. Debates about long-term climate solutions are important, but they don't help people who are suffering today.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
              [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          id: "a_climate_admit",
          type: AnswerType.Admit,
          text: "In a crisis of this magnitude, all options must be on the table. We are consulting with top scientists on the feasibility of such measures.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
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
          followUpId: "q_heatwave_geoengineering_risks",
        },
        {
          id: "a_climate_challenge",
          type: AnswerType.Challenge,
          text: "Climate deniers want us to ignore the obvious connection, but we won't. This administration is committed to both immediate relief and long-term climate action.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
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
          followUpId: "q_heatwave_infrastructure_failure",
        },
        {
          id: "a_climate_inform",
          type: AnswerType.Inform,
          text: "We're releasing a transparent scientific advisory process and will not move forward without rigorous peer review.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
              [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse: OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cooling_grants: OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cloud_seeding_backfire: OutcomeModifierWeight.Neutral, // 0
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_heatwave_geoengineering_risks",
        text: "But geoengineering is incredibly risky and could have disastrous, unforeseen consequences. Is it responsible to even consider it?",
        answers: [
          {
            id: "a_risks_reassure",
            type: AnswerType.Reassure,
            text: "To be clear: we are only in the earliest, most preliminary stages of research. No such action would be taken without years of rigorous study.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
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
          },
          {
            id: "a_risks_challenge",
            type: AnswerType.Challenge,
            text: "What's truly risky is doing nothing while temperatures continue to rise. We can't afford to take any potential solution off the table.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_heatwave_immediate_relief",
          },
        {
          id: "a_risks_inform",
          type: AnswerType.Inform,
          text: "Current research shows cloud-seeding has limited success and unknown impacts. We're prioritizing proven cooling centers over experimental weather modification.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Neutral },
            cabinet: {
              [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
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
        },
        {
          id: "a_risks_neutral",
          type: AnswerType.Inform,
          text: "Any research will include public comment, ethical review, and international coordination to avoid unintended consequences.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
              },
            },
          },
          outcomeModifiers: {},
        },
        ],
      },
      {
        id: "q_heatwave_infrastructure_failure",
        text: "The power grid is failing because we've ignored climate infrastructure for decades. Why hasn't this administration invested more in grid resilience?",
        answers: [
        {
          id: "a_infrastructure_admit",
          type: AnswerType.Admit,
          text: "You're absolutely right. Decades of underinvestment have left us vulnerable. We need massive infrastructure spending to prepare for climate reality.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
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
            followUpId: "q_heatwave_federal_response",
          },
        {
          id: "a_infrastructure_challenge",
          type: AnswerType.Challenge,
          text: "This administration has proposed billions in grid modernization, but Republican obstruction has blocked every climate infrastructure bill we've put forward.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
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
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        {
          id: "a_infrastructure_inform",
          type: AnswerType.Inform,
          text: "We've allocated $50 billion for grid upgrades, but infrastructure takes years to build. In the meantime, we're focusing on emergency cooling centers and demand management.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
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
          id: "a_infrastructure_neutral",
          type: AnswerType.Inform,
          text: "We’ll publish shovel-ready projects, funding sources, and timelines so communities can see exactly what resilience work happens next.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse: OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cloud_seeding_backfire: OutcomeModifierWeight.SlightPositive, // +4
          },
        },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_heatwave_immediate_relief",
        text: "What about people suffering right now? Are cooling centers really enough when entire neighborhoods are without power?",
        answers: [
        {
          id: "a_relief_admit",
          type: AnswerType.Admit,
          text: "Cooling centers are imperfect, but they're what we can deploy immediately. We're also working with hospitals to expand capacity for heat-related emergencies.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
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
          id: "a_relief_inform",
          type: AnswerType.Inform,
          text: "HHS and Treasury have released emergency funds for mobile cooling units, transportation to centers, and medical support for vulnerable populations.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
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
          id: "a_relief_reassure",
          type: AnswerType.Reassure,
          text: "We're mobilizing every federal resource available. FEMA, National Guard, and emergency medical teams are all deployed to affected areas.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
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
              OutcomeModifierWeight.SlightPositive, // +4
          outcome_heatwave_cloud_seeding_backfire:
            OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_relief_neutral",
          type: AnswerType.Inform,
          text: "We'll publish capacity dashboards and deploy mobile teams to neighborhoods furthest from cooling centers.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_heatwave_grid_collapse: OutcomeModifierWeight.SlightPositive, // +4
            outcome_heatwave_cooling_grants: OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cloud_seeding_backfire: OutcomeModifierWeight.Neutral, // 0
          },
        },
        ],
      },
      {
        id: "q_heatwave_federal_response",
        text: "Should the federal government take direct control of the power grid during climate emergencies rather than relying on private utilities?",
        answers: [
        {
          id: "a_federal_challenge",
          type: AnswerType.Challenge,
          text: "When private utilities fail to protect public safety, federal intervention becomes necessary. We can't let profit motives override public health.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Treasury]: {
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
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_heatwave_cloud_seeding_backfire:
              OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_federal_deflect",
          type: AnswerType.Deflect,
          text: "We're working closely with utility companies to coordinate response. The focus should be on better regulation and investment, not nationalization.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
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
          id: "a_federal_inform",
          type: AnswerType.Inform,
          text: "We have emergency powers to coordinate grid management during crises. The question is whether we need permanent federal oversight of climate-critical infrastructure.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
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
              OutcomeModifierWeight.SlightPositive, // +4
          outcome_heatwave_cloud_seeding_backfire:
            OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_federal_neutral",
          type: AnswerType.Inform,
          text: "We'll report weekly on utility performance and consider temporary federal coordination where outages persist.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {},
        },
        ],
      },
    ],
  },
};
