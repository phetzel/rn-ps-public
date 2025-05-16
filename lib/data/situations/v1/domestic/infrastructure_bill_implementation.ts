// lib/data/situations/domestic/infrastructure_implementation.ts
import {
  SituationType,
  SituationData,
  PreferenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  PublicationStaticId,
  AnswerType,
} from "~/types";

export const infrastructureBillImplementation: SituationData = {
  trigger: {
    staticKey: "infrastructure_bill_implementation",
    type: SituationType.Domestic,
    requirements: {},
    isFollowUp: true,
  },
  type: SituationType.Domestic,
  title: "Infrastructure Bill Implementation",
  description:
    "The administration faces challenges and scrutiny as it begins implementing the major infrastructure package.",
  content: {
    preferences: {
      president: {
        answerType: AnswerType.Inform,
        weight: PreferenceWeight.Positive,
        rationale:
          "Highlight early successes and manage expectations about timeline. Focus on job creation statistics.",
      },
      cabinet: {
        [CabinetStaticId.Treasury]: {
          answerType: AnswerType.Reassure,
          weight: PreferenceWeight.Neutral,
          rationale:
            "Emphasize fiscal oversight and responsible fund allocation.",
        },
        [CabinetStaticId.State]: {
          answerType: AnswerType.Inform,
          weight: PreferenceWeight.Positive,
          rationale:
            "Emphasize how these projects will strengthen America's global competitiveness.",
        },
      },
    },
    outcomes: [
      {
        id: "smooth_implementation",
        title: "Smooth Implementation Begins",
        description:
          "Early implementation of the infrastructure bill proceeds smoothly, with projects starting on schedule.",
        weight: 40, // Sum of weights = 40+40+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Positive,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.SlightlyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Positive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Positive,
            },
          },
        },
      },
      {
        id: "implementation_challenges",
        title: "Implementation Challenges Emerge",
        description:
          "The administration encounters regulatory hurdles and coordination issues in early infrastructure projects.",
        weight: 40, // Sum of weights = 40+40+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.SlightlyNegative,
            cabinet: {
              [CabinetStaticId.Treasury]: SituationConsequenceWeight.Neutral,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyNegative,
            },
          },
        },
      },
      {
        id: "cost_overruns",
        title: "Projects Face Cost Overruns",
        description:
          "Initial infrastructure projects face significant cost overruns, prompting congressional scrutiny.",
        weight: 20, // Sum of weights = 40+40+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Negative,
            cabinet: {
              [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.StronglyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Negative,
            },
          },
        },
      },
    ],
  },
  exchanges: [
    {
      content: {
        questions: {
          "implement-progress": {
            id: "implement-progress",
            text: "What concrete progress can Americans expect to see from the infrastructure bill in the next six months?",
            depth: 0,
            answers: [
              {
                id: "implement-progress-ans1",
                type: AnswerType.Inform,
                text: "Within six months, Americans will see construction begin on major roads and bridges, with thousands of workers already hired across the country.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the specific, positive messaging",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the concrete timeline",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Pleased with the rapid implementation",
                    },
                  },
                },
                outcomeModifiers: {
                  // 6 - 3 - 3 = 0
                  smooth_implementation: 6,
                  implementation_challenges: -3,
                  cost_overruns: -3,
                },
                followUpId: "implement-oversight",
              },
              {
                id: "implement-progress-ans2",
                type: AnswerType.Reassure,
                text: "We're focused on getting this right rather than rushing. The first phase involves detailed planning and contractor selection to ensure taxpayer dollars are used efficiently.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Accepts the measured approach",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 2,
                      reaction: "Strongly approves of the prudent approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Appreciates the fiscal responsibility",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about potential delays",
                    },
                  },
                },
                outcomeModifiers: {
                  // 2 + 2 - 4 = 0
                  smooth_implementation: 2,
                  implementation_challenges: 2,
                  cost_overruns: -4,
                },
              },
            ],
          },
          "implement-oversight": {
            id: "implement-oversight",
            text: "How is the administration ensuring proper oversight of these massive infrastructure funds?",
            depth: 1,
            answers: [
              {
                id: "implement-oversight-ans1",
                type: AnswerType.Inform,
                text: "We've established a dedicated Infrastructure Implementation Task Force to coordinate across agencies and ensure transparency in fund allocation.",
                impacts: {
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Approves of the oversight mechanism",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the accountability measures",
                    },
                  },
                },
                outcomeModifiers: {
                  // 5 - 2 - 3 = 0
                  smooth_implementation: 5,
                  implementation_challenges: -2,
                  cost_overruns: -3,
                },
              },
              {
                id: "implement-oversight-ans2",
                type: AnswerType.Reassure,
                text: "We're working with state and local officials who know their communities' needs best, while maintaining federal oversight to prevent waste and abuse.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction:
                      "Pleased with balancing local control and oversight",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction:
                        "Appreciates empowering state/local governments",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about inconsistent implementation",
                    },
                  },
                },
                outcomeModifiers: {
                  // -2 + 4 - 2 = 0
                  smooth_implementation: -2,
                  implementation_challenges: 4,
                  cost_overruns: -2,
                },
              },
            ],
          },
        },
        rootQuestionId: "implement-progress",
      },
      publication: PublicationStaticId.IndependentPrimary,
    },
    {
      content: {
        questions: {
          "implement-jobs": {
            id: "implement-jobs",
            text: "How many jobs have actually been created so far from the infrastructure bill, and where?",
            depth: 0,
            answers: [
              {
                id: "implement-jobs-ans1",
                type: AnswerType.Inform,
                text: "In just the first month, we've seen over 50,000 new jobs created across 38 states, primarily in construction and planning roles.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with the impressive statistics",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Excited about job creation",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Impressed by the specific numbers",
                    },
                  },
                },
                outcomeModifiers: {
                  // 6 - 4 - 2 = 0
                  smooth_implementation: 6,
                  implementation_challenges: -4,
                  cost_overruns: -2,
                },
              },
              {
                id: "implement-jobs-ans2",
                type: AnswerType.Deflect,
                text: "It's too early for precise numbers, but hiring is underway across the country, with significant job creation expected as projects move from planning to implementation.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about the lack of specific metrics",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Skeptical about promised job creation",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Disappointed by the vague response",
                    },
                  },
                },
                outcomeModifiers: {
                  // -3 + 3 + 0 = 0
                  smooth_implementation: -3,
                  implementation_challenges: 3,
                  cost_overruns: 0,
                },
              },
            ],
          },
        },
        rootQuestionId: "implement-jobs",
      },
      publication: PublicationStaticId.LibPrimary,
    },
    {
      content: {
        questions: {
          "implement-delays": {
            id: "implement-delays",
            text: "Reports suggest several key projects are already behind schedule. Will this impact the overall timeline for implementation?",
            depth: 0,
            answers: [
              {
                id: "implement-delays-ans1",
                type: AnswerType.Deny,
                text: "These reports are exaggerated. All major projects remain on schedule, with some even ahead of our initial projections.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the positive counter-narrative",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Reassured by the confidence",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Deeply skeptical of the claim",
                    },
                  },
                },
                outcomeModifiers: {
                  // 0 - 6 + 6 = 0
                  smooth_implementation: 0,
                  implementation_challenges: -6,
                  cost_overruns: 6,
                },
              },
              {
                id: "implement-delays-ans2",
                type: AnswerType.Reassure,
                text: "Any project of this scale faces initial adjustments. We're addressing specific challenges transparently while keeping the overall implementation on track.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Appreciates the balanced, honest approach",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Appreciates the transparency",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the honest assessment",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 0,
                      reaction:
                        "Still skeptical but appreciates acknowledgment",
                    },
                  },
                },
                outcomeModifiers: {
                  // -1 + 3 - 2 = 0
                  smooth_implementation: -1,
                  implementation_challenges: 3,
                  cost_overruns: -2,
                },
              },
            ],
          },
        },
        rootQuestionId: "implement-delays",
      },
      publication: PublicationStaticId.ConPrimary,
    },
  ],
};
