// lib/data/situations/economic/inflation_concerns.ts
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

export const inflationConcerns: SituationData = {
  trigger: {
    staticKey: "inflation_concerns",
    type: SituationType.Economic,
    requirements: {},
    isFollowUp: false,
  },
  type: SituationType.Economic,
  title: "Rising Inflation Concerns",
  description:
    "Inflation hits a 40-year high, sparking public concern and market volatility as the administration weighs policy responses.",
  content: {
    preferences: {
      president: {
        answerType: AnswerType.Reassure,
        weight: PreferenceWeight.SlightlyNegative,
        rationale:
          "Acknowledge concerns without causing panic. Emphasize temporary nature and administration's proactive measures.",
      },
      cabinet: {
        [CabinetStaticId.Treasury]: {
          answerType: AnswerType.Admit,
          weight: PreferenceWeight.StronglyNegative,
          rationale:
            "Extremely concerned; advocates for decisive action to prevent further economic disruption.",
        },
      },
    },
    outcomes: [
      {
        id: "inflation_stabilizing",
        title: "Inflation Shows Signs of Stabilizing",
        description:
          "Early data suggests inflation may be peaking, with key indicators showing signs of moderation.",
        weight: 30, // Sum of weights = 30+50+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Positive,
            cabinet: {
              [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.SlightlyPositive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyPositive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Positive,
            },
          },
        },
      },
      {
        id: "inflation_persists",
        title: "Inflation Persists Despite Measures",
        description:
          "Despite administration efforts, inflation remains elevated, continuing to stress household budgets.",
        weight: 50, // Sum of weights = 30+50+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Negative,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.SlightlyNegative,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.Negative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Negative,
            },
          },
        },
      },
      {
        id: "recession_fears",
        title: "Inflation Triggers Recession Fears",
        description:
          "Aggressive anti-inflation measures and persistent price increases spark serious recession concerns.",
        weight: 20, // Sum of weights = 30+50+20 = 100
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.StronglyNegative,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.StronglyNegative,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Negative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.StronglyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.StronglyNegative,
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
          "inflation-response": {
            id: "inflation-response",
            text: "How is the administration responding to inflation levels not seen in over four decades?",
            depth: 0,
            answers: [
              {
                id: "inflation-response-ans1",
                type: AnswerType.Inform,
                text: "We're taking a comprehensive approach, including releasing strategic reserves to lower energy prices and addressing supply chain bottlenecks.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the decisive messaging",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Supports the proactive approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the specific actions",
                    },
                  },
                },
                outcomeModifiers: {
                  // 4 - 2 - 2 = 0
                  inflation_stabilizing: 4,
                  inflation_persists: -2,
                  recession_fears: -2,
                },
                followUpId: "inflation-timeframe",
              },
              {
                id: "inflation-response-ans2",
                type: AnswerType.Reassure,
                text: "The President is focused on ensuring the Federal Reserve has the independence it needs while advancing policies to reduce costs for families.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the measured response",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: -1,
                      reaction: "Concerned about deferring too much to the Fed",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Appreciates Fed independence acknowledgment",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Wants more direct government action",
                    },
                  },
                },
                outcomeModifiers: {
                  // 2 + 0 - 2 = 0
                  inflation_stabilizing: 2,
                  inflation_persists: 0,
                  recession_fears: -2, // Changed from Positive to Negative to balance
                },
              },
              {
                id: "inflation-response-ans3",
                type: AnswerType.Deflect,
                text: "This inflation is primarily caused by global factors beyond any administration's control. We're doing everything possible within our power.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about deflecting responsibility",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Strongly objects to the deflection",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Skeptical of blame avoidance",
                    },
                  },
                },
                outcomeModifiers: {
                  // -4 + 2 + 2 = 0
                  inflation_stabilizing: -4,
                  inflation_persists: 2,
                  recession_fears: 2,
                },
              },
            ],
          },
          "inflation-timeframe": {
            id: "inflation-timeframe",
            text: "When can Americans expect to see relief from these high prices?",
            depth: 1,
            answers: [
              {
                id: "inflation-timeframe-ans1",
                type: AnswerType.Inform,
                text: "Our economists project inflation will begin moderating within the next quarter as our policies take effect and supply chains normalize.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the optimistic projection",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: -1,
                      reaction: "Concerned about overpromising",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Skeptical of the timeline",
                    },
                  },
                },
                outcomeModifiers: {
                  // 6 - 6 + 0 = 0
                  inflation_stabilizing: 6,
                  inflation_persists: -6,
                  recession_fears: 0,
                },
              },
              {
                id: "inflation-timeframe-ans2",
                type: AnswerType.Reassure,
                text: "While I won't make specific predictions, we're already seeing early indicators that inflation pressures are easing in several sectors.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Accepts the cautious approach",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Appreciates the measured response",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the honest assessment",
                    },
                  },
                },
                outcomeModifiers: {
                  // 4 - 2 - 2 = 0
                  inflation_stabilizing: 4,
                  inflation_persists: -2,
                  recession_fears: -2, // Changed from SlightlyPositive to balance
                },
              },
            ],
          },
        },
        rootQuestionId: "inflation-response",
      },
      publication: PublicationStaticId.IndependentPrimary,
    },
    {
      content: {
        questions: {
          "inflation-cause": {
            id: "inflation-cause",
            text: "Isn't this inflation largely a result of the administration's excessive spending policies?",
            depth: 0,
            answers: [
              {
                id: "inflation-cause-ans1",
                type: AnswerType.Deny,
                text: "No, economists widely agree this inflation is primarily driven by pandemic disruptions, supply chain issues, and global energy challenges.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the strong defense",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Agrees with the assessment",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Strongly disagrees with the explanation",
                    },
                  },
                },
                outcomeModifiers: {
                  // 2 + 0 - 2 = 0
                  inflation_stabilizing: 2,
                  inflation_persists: 0,
                  recession_fears: -2,
                },
              },
              {
                id: "inflation-cause-ans2",
                type: AnswerType.Admit,
                text: "There are multiple factors at play, including fiscal policy. The administration is taking a hard look at all spending to ensure fiscal responsibility.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about the partial concession",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 2,
                      reaction:
                        "Strongly approves of acknowledging fiscal concerns",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Disappointed by the defensive stance",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Appreciates the admission",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the balanced perspective",
                    },
                  },
                },
                outcomeModifiers: {
                  // 4 - 2 - 2 = 0
                  inflation_stabilizing: 4,
                  inflation_persists: -2,
                  recession_fears: -2,
                },
              },
            ],
          },
        },
        rootQuestionId: "inflation-cause",
      },
      publication: PublicationStaticId.ConPrimary,
    },
    {
      content: {
        questions: {
          "inflation-impact": {
            id: "inflation-impact",
            text: "How is the administration helping working families who are struggling with rising food and energy prices?",
            depth: 0,
            answers: [
              {
                id: "inflation-impact-ans1",
                type: AnswerType.Inform,
                text: "We've expanded tax credits for families, released oil reserves to lower gas prices, and are working to reduce prescription drug and childcare costs.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with highlighting concrete actions",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Strongly supports the family-focused policies",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the specific relief measures",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Concerned about additional spending",
                    },
                  },
                },
                outcomeModifiers: {
                  // 2 - 2 + 0 = 0
                  inflation_stabilizing: 2,
                  inflation_persists: -2,
                  recession_fears: 0, // Changed from SlightlyPositive to balance
                },
              },
              {
                id: "inflation-impact-ans2",
                type: AnswerType.Challenge,
                text: "The most important thing we can do is get inflation under control. Short-term relief measures that increase spending could make the problem worse.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about the lack of immediate solutions",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 2,
                      reaction: "Strongly approves of the economic realism",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -2,
                      reaction: "Strongly disappointed by lack of direct aid",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Appreciates the fiscal restraint",
                    },
                  },
                },
                outcomeModifiers: {
                  // 6 + 0 - 6 = 0
                  inflation_stabilizing: 6,
                  inflation_persists: 0, // Changed from SlightlyPositive to balance
                  recession_fears: -6, // Changed from Negative to StronglyNegative to balance
                },
              },
            ],
          },
        },
        rootQuestionId: "inflation-impact",
      },
      publication: PublicationStaticId.LibPrimary,
    },
  ],
};
