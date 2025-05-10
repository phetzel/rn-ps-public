import {
  SituationType,
  SituationData,
  PreferenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  PublicationStaticId,
  AnswerOutcomeModifier,
  JournalistStaticId,
} from "~/types";

export const infrastructureBill: SituationData = {
  trigger: {
    staticKey: "infrastructure_bill",
    type: SituationType.Domestic,
    requirements: {
      president: {
        minApproval: 40,
      },
    },
  },
  type: SituationType.Domestic,
  title: "Major Infrastructure Package",
  description:
    "The administration pushes a $1.2 trillion infrastructure bill amid congressional gridlock and budget concerns.",
  content: {
    preferences: {
      president: {
        weight: PreferenceWeight.StronglyPositive,
        rationale:
          "Signature legislative priority; emphasize job creation and economic benefits.",
      },
      cabinet: {
        [CabinetStaticId.Treasury]: {
          weight: PreferenceWeight.SlightlyNegative,
          rationale:
            "Concerned about deficit impact; advises fiscal restraint and phased approach.",
        },
        [CabinetStaticId.State]: {
          weight: PreferenceWeight.Positive,
          rationale:
            "Emphasize how infrastructure investment strengthens global competitiveness.",
        },
      },
    },
    outcomes: [
      {
        id: "bill_passes_bipartisan",
        title: "Bill Passes with Bipartisan Support",
        description:
          "The infrastructure package passes with support from both parties, marking a major legislative victory.",
        weight: 30,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.StronglyPositive,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.SlightlyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Positive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyPositive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Positive,
            },
          },
        },
        followUpId: "infrastructure_bill_implementation",
      },
      {
        id: "bill_passes_partisan",
        title: "Bill Passes Along Party Lines",
        description:
          "The infrastructure package passes through reconciliation with only the President's party supporting it.",
        weight: 40,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Positive,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.SlightlyNegative,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.StronglyPositive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.Negative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Neutral,
            },
          },
        },
        followUpId: "infrastructure_bill_implementation",
      },
      {
        id: "bill_scaled_back",
        title: "Scaled-Back Bill Passes",
        description:
          "A significantly reduced infrastructure package passes after extensive compromise.",
        weight: 20,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.SlightlyNegative,
            cabinet: {
              [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Negative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyPositive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyPositive,
            },
          },
        },
      },
      {
        id: "bill_fails",
        title: "Infrastructure Bill Fails",
        description:
          "The infrastructure package collapses amid partisan disagreement, dealing a major blow to the administration's agenda.",
        weight: 10,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.StronglyNegative,
            cabinet: {
              [CabinetStaticId.Treasury]:
                SituationConsequenceWeight.SlightlyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
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
          "infra-main": {
            id: "infra-main",
            text: "How does the administration plan to secure sufficient votes for the infrastructure bill?",
            depth: 0,
            answers: [
              {
                id: "infra-main-ans1",
                text: "The President is actively engaging with lawmakers from both parties, focusing on the bill's economic benefits for all Americans.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the bipartisan messaging",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Appreciates the pragmatic approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the collaborative approach",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction:
                        "Cautiously optimistic about bipartisan efforts",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.StronglyPositive,
                  bill_passes_partisan: AnswerOutcomeModifier.Negative,
                  bill_scaled_back: AnswerOutcomeModifier.Positive,
                  bill_fails: AnswerOutcomeModifier.StronglyNegative,
                },
                followUpId: "infra-bipartisan",
              },
              {
                id: "infra-main-ans2",
                text: "We're prepared to use reconciliation if necessary to deliver this critical investment the American people need.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with the decisive approach",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: -1,
                      reaction: "Concerned about partisan strategy",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Strongly supports using all available tools",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Strongly opposes partisan tactics",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.StronglyNegative,
                  bill_passes_partisan: AnswerOutcomeModifier.StronglyPositive,
                  bill_scaled_back: AnswerOutcomeModifier.Negative,
                  bill_fails: AnswerOutcomeModifier.SlightlyNegative,
                },
                followUpId: "infra-partisan",
              },
              {
                id: "infra-main-ans3",
                text: "We're focused on finding elements that can gain broad support, even if it means adjusting the scope of the package.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about potential compromises",
                  },
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 2,
                      reaction: "Strongly approves of the fiscal prudence",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -2,
                      reaction: "Disappointed by willingness to scale back",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the pragmatic approach",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction:
                        "Cautiously approves of willingness to compromise",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.SlightlyPositive,
                  bill_passes_partisan: AnswerOutcomeModifier.StronglyNegative,
                  bill_scaled_back: AnswerOutcomeModifier.StronglyPositive,
                  bill_fails: AnswerOutcomeModifier.Negative,
                },
              },
            ],
          },
          "infra-bipartisan": {
            id: "infra-bipartisan",
            text: "Critics say the administration isn't making enough concessions to gain Republican support. How do you respond?",
            depth: 1,
            answers: [
              {
                id: "infra-bipartisan-ans1",
                text: "We've already made significant adjustments based on Republican input and remain open to reasonable compromises.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the balanced messaging",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction:
                        "Cautiously appreciates acknowledgment of input",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about too many concessions",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan: AnswerOutcomeModifier.Positive,
                  bill_passes_partisan: AnswerOutcomeModifier.Negative,
                  bill_scaled_back: AnswerOutcomeModifier.Positive,
                  bill_fails: AnswerOutcomeModifier.Negative,
                },
              },
              {
                id: "infra-bipartisan-ans2",
                text: "Our priority is delivering results for the American people, not endless negotiations that delay critical infrastructure investments.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the strong messaging",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Strongly supports the assertive stance",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction:
                        "Views this as rejecting good faith negotiation",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.StronglyNegative,
                  bill_passes_partisan: AnswerOutcomeModifier.Positive,
                  bill_scaled_back: AnswerOutcomeModifier.SlightlyNegative,
                  bill_fails: AnswerOutcomeModifier.SlightlyPositive,
                },
              },
            ],
          },
          "infra-partisan": {
            id: "infra-partisan",
            text: "How do you respond to concerns that pushing this through on party lines will damage future bipartisan cooperation?",
            depth: 1,
            answers: [
              {
                id: "infra-partisan-ans1",
                text: "We've attempted bipartisan negotiations for months. The American people can't wait any longer for critical infrastructure improvements.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Appreciates defending the strategy",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Supports the decisive action",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Concerned about increasing polarization",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.StronglyNegative,
                  bill_passes_partisan: AnswerOutcomeModifier.StronglyPositive,
                  bill_scaled_back: AnswerOutcomeModifier.Negative,
                  bill_fails: AnswerOutcomeModifier.SlightlyPositive,
                },
              },
              {
                id: "infra-partisan-ans2",
                text: "We remain open to bipartisan solutions but are prepared to move forward if necessary. Many elements have support from both parties.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about walking back the strong stance",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the more balanced approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about perceived weakness",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.SlightlyPositive,
                  bill_passes_partisan: AnswerOutcomeModifier.Negative,
                  bill_scaled_back: AnswerOutcomeModifier.Positive,
                  bill_fails: AnswerOutcomeModifier.Negative,
                },
              },
            ],
          },
        },
        rootQuestionId: "infra-main",
      },
      publication: PublicationStaticId.IndependentPrimary,
    },
    {
      content: {
        questions: {
          "infra-funding": {
            id: "infra-funding",
            text: "How will the administration pay for this massive infrastructure package?",
            depth: 0,
            answers: [
              {
                id: "infra-funding-ans1",
                text: "The plan includes corporate tax increases that ensure the wealthy pay their fair share without raising taxes on anyone making under $400,000.",
                impacts: {
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 1,
                      reaction: "Supports the revenue-raising approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction:
                        "Strongly supports tax increases on corporations",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Strongly opposes any tax increases",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan: AnswerOutcomeModifier.Negative,
                  bill_passes_partisan: AnswerOutcomeModifier.Positive,
                  bill_scaled_back: AnswerOutcomeModifier.SlightlyNegative,
                  bill_fails: AnswerOutcomeModifier.SlightlyPositive,
                },
              },
              {
                id: "infra-funding-ans2",
                text: "The bill includes multiple funding mechanisms, including public-private partnerships and redirecting unused funds from previous relief packages.",
                impacts: {
                  cabinet: {
                    [CabinetStaticId.Treasury]: {
                      weight: 2,
                      reaction:
                        "Very pleased with the fiscally responsible approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the creative funding approach",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Cautiously approves of the approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about insufficient funding",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan: AnswerOutcomeModifier.Positive,
                  bill_passes_partisan: AnswerOutcomeModifier.Negative,
                  bill_scaled_back: AnswerOutcomeModifier.Positive,
                  bill_fails: AnswerOutcomeModifier.Negative,
                },
              },
            ],
          },
        },
        rootQuestionId: "infra-funding",
      },
      publication: PublicationStaticId.ConPrimary,
    },
    {
      content: {
        questions: {
          "infra-economic": {
            id: "infra-economic",
            text: "How many jobs will this infrastructure plan actually create, and are they sustainable?",
            depth: 0,
            answers: [
              {
                id: "infra-economic-ans1",
                text: "Economic analysis shows the plan will create over 2 million high-quality jobs across construction, manufacturing, and emerging green sectors.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the strong economic messaging",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Supports the jobs focus",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates the concrete numbers",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan: AnswerOutcomeModifier.Positive,
                  bill_passes_partisan: AnswerOutcomeModifier.Positive,
                  bill_scaled_back: AnswerOutcomeModifier.SlightlyNegative,
                  bill_fails: AnswerOutcomeModifier.Negative,
                },
              },
              {
                id: "infra-economic-ans2",
                text: "We're focusing on quality over quantity, ensuring that the jobs created offer good wages and build skills for the future economy.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the measured response",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Supports the quality jobs focus",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Skeptical of government job creation",
                    },
                  },
                },
                outcomeModifiers: {
                  bill_passes_bipartisan:
                    AnswerOutcomeModifier.SlightlyNegative,
                  bill_passes_partisan: AnswerOutcomeModifier.SlightlyPositive,
                  bill_scaled_back: AnswerOutcomeModifier.Neutral,
                  bill_fails: AnswerOutcomeModifier.SlightlyNegative,
                },
              },
            ],
          },
        },
        rootQuestionId: "infra-economic",
      },
      publication: PublicationStaticId.LibPrimary,
    },
  ],
};
