// /Users/phillip/Desktop/repos/workspace/rn/press-secretary/rn-ps/lib/data/situations/v1/scandal/data_breach.ts
import {
  SituationType,
  SituationData,
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  PublicationStaticId,
  JournalistStaticId,
  AnswerType,
  ExchangeImpactWeight,
} from "~/types";

export const dataBreach: SituationData = {
  trigger: {
    staticKey: "data_breach",
    type: SituationType.Ethics,
    requirements: {
      president: {
        minApproval: 20,
        maxApproval: 80,
      },
    },
    isFollowUp: false,
  },
  type: SituationType.Ethics,
  title: "Major Government Data Breach",
  description:
    "A significant cybersecurity breach has exposed sensitive government data, raising questions about digital security protocols and public trust.",
  content: {
    preferences: {
      president: {
        answerType: AnswerType.Reassure,
        rationale:
          "Balance transparency with security concerns; maintain public confidence while acknowledging the seriousness.",
      },
      cabinet: {
        [CabinetStaticId.Homeland]: {
          preference: {
            answerType: AnswerType.Inform,
            rationale:
              "Emphasize immediate response measures and ongoing investigation; avoid revealing security details.",
          },
          authorizedContent:
            "Initial forensics suggest the breach originated from a sophisticated state-sponsored actor. We've contained the intrusion and are working with international partners on attribution.",
        },
        [CabinetStaticId.Justice]: {
          preference: {
            answerType: AnswerType.Challenge,
            rationale:
              "Focus on legal consequences for perpetrators and strengthening cybersecurity laws.",
          },
        },
      },
    },
    outcomes: [
      {
        id: "transparent_response",
        title: "Transparent, Accountable Response",
        description:
          "The administration takes full responsibility, implements immediate security measures, and launches a transparent investigation.",
        weight: 30,
        consequences: {
          approvalChanges: {
            cabinet: {
              [CabinetStaticId.Homeland]:
                SituationConsequenceWeight.SlightlyPositive,
              [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Positive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.Positive,
            },
          },
        },
      },
      {
        id: "deflect_blame",
        title: "Deflect and Minimize",
        description:
          "The administration downplays the breach's severity, deflects responsibility, and focuses on external factors.",
        weight: 40,
        consequences: {
          approvalChanges: {
            cabinet: {
              [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
              [CabinetStaticId.Justice]:
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
        id: "security_overhaul",
        title: "Major Security Overhaul",
        description:
          "The breach triggers a sweeping overhaul of government cybersecurity protocols and significant new funding.",
        weight: 30,
        consequences: {
          approvalChanges: {
            cabinet: {
              [CabinetStaticId.Homeland]:
                SituationConsequenceWeight.StronglyPositive,
              [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
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
      },
    ],
  },
  exchanges: [
    {
      content: {
        questions: {
          "breach-main": {
            id: "breach-main",
            text: "Reports indicate sensitive data from millions of Americans was exposed. Did the administration ignore security warnings prior to this breach?",
            depth: 0,
            answers: [
              {
                id: "breach-main-ans1",
                type: AnswerType.Deflect,
                text: "What's important right now is addressing the current situation. Our focus is on securing systems and helping affected citizens, not playing the blame game.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Neutral,
                    reaction:
                      "Appreciates avoiding direct admission of failures",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Negative,
                      reaction:
                        "Frustrated by unwillingness to acknowledge known issues",
                    },
                    [CabinetStaticId.Justice]: {
                      weight: ExchangeImpactWeight.Neutral,
                      reaction: "Neutral about the response",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Concerned about lack of transparency",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Disappointed by the evasiveness",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: -5,
                  deflect_blame: 8,
                  security_overhaul: -3,
                },
                followUpId: "breach-deflect-follow",
              },
              {
                id: "breach-main-ans2",
                type: AnswerType.Admit,
                text: "There were security vulnerabilities that weren't addressed as quickly as they should have been. The President has ordered a full review of how this happened and is committed to fixing the underlying issues.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyNegative,
                    reaction: "Concerned about the admission of failure",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Relieved that the truth is being acknowledged",
                    },
                    [CabinetStaticId.Justice]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Appreciates the truthful approach",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Values the honesty and accountability",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Appreciates the transparency",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 8,
                  deflect_blame: -6,
                  security_overhaul: -2,
                },
                followUpId: "breach-admit-follow",
              },
              {
                id: "breach-main-ans3",
                type: AnswerType.Inform,
                text: "Our preliminary investigation suggests this was a sophisticated attack by hostile foreign actors. We're working with intelligence agencies to identify the perpetrators and will hold them accountable.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                    reaction:
                      "Pleased with redirecting focus to external threats",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Concerned about downplaying internal failures",
                    },
                    [CabinetStaticId.Justice]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Supportive of the law enforcement emphasis",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Neutral,
                      reaction: "Neutral about the response",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Appreciates focus on foreign threats",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: -2,
                  deflect_blame: 0,
                  security_overhaul: 2,
                },
                followUpId: "breach-inform-follow",
              },
              {
                id: "breach-main-ans4",
                type: AnswerType.Authorized,
                authorizedCabinetMemberId: CabinetStaticId.Justice,
                text: "As the Attorney General has briefed the President, we have strong evidence this was a state-sponsored attack. This is being treated as a matter of national security, and we're coordinating with our allies on a response.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Neutral,
                    reaction: "Satisfied with the strategic framing",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction:
                        "Frustrated by focus being shifted from internal security failures",
                    },
                    [CabinetStaticId.Justice]: {
                      weight: ExchangeImpactWeight.StronglyPositive,
                      reaction:
                        "Very pleased with deference to their expertise",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Strongly supports national security emphasis",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction:
                        "Appreciates the serious tone and expert involvement",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: -1,
                  deflect_blame: -2,
                  security_overhaul: 3,
                },
              },
            ],
          },
          "breach-deflect-follow": {
            id: "breach-deflect-follow",
            text: "But without acknowledging past failures, how can the public trust this won't happen again? Isn't accountability important?",
            depth: 1,
            answers: [
              {
                id: "breach-deflect-follow-ans1",
                type: AnswerType.Reassure,
                text: "The President has directed a comprehensive review of our cybersecurity protocols. We will share appropriate findings with the public while protecting sensitive security information.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                    reaction: "Approves of the balanced approach",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction:
                        "Cautiously optimistic about promised transparency",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 2,
                  deflect_blame: -1,
                  security_overhaul: -1,
                },
              },
              {
                id: "breach-deflect-follow-ans2",
                type: AnswerType.Challenge,
                text: "I reject the premise that we're not being accountable. In fact, the President has taken immediate action, unlike previous administrations that ignored cybersecurity altogether.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                    reaction: "Appreciates the strong defense",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: ExchangeImpactWeight.Negative,
                      reaction: "Views this as partisan deflection",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Uncomfortable with the aggressive tone",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: -2,
                  deflect_blame: 4,
                  security_overhaul: -2,
                },
              },
            ],
          },
          "breach-admit-follow": {
            id: "breach-admit-follow",
            text: "Should any officials resign over this failure to protect Americans' data?",
            depth: 1,
            answers: [
              {
                id: "breach-admit-follow-ans1",
                type: AnswerType.Deflect,
                text: "The President is focused on fixing the problem, not assigning blame. Once we have all the facts from our investigation, appropriate actions will be taken.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Neutral,
                    reaction: "Relieved by avoiding direct personnel questions",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Appreciates not being thrown under the bus",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: -1,
                  deflect_blame: 2,
                  security_overhaul: -1,
                },
              },
              {
                id: "breach-admit-follow-ans2",
                type: AnswerType.Reassure,
                text: "The President believes in accountability at all levels. He's waiting for the investigation results, but has made it clear that leadership means taking responsibility.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyNegative,
                    reaction:
                      "Concerned about implications for personnel changes",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Negative,
                      reaction: "Worried about being scapegoated",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Strongly values the accountability message",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 2,
                  deflect_blame: -3,
                  security_overhaul: 1,
                },
              },
            ],
          },
          "breach-inform-follow": {
            id: "breach-inform-follow",
            text: "Your focus on foreign actors seems convenient. Reports suggest basic security measures weren't in place. Isn't this an attempt to deflect responsibility?",
            depth: 1,
            answers: [
              {
                id: "breach-inform-follow-ans1",
                type: AnswerType.Admit,
                text: "We're not deflecting. Yes, there were security gaps that need to be addressed, and we're doing that. But it's also important to understand who exploited those vulnerabilities and why.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyNegative,
                    reaction: "Displeased with admitting vulnerabilities",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Appreciates the balanced perspective",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Values the nuanced, honest response",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 3,
                  deflect_blame: -3,
                  security_overhaul: 0,
                },
              },
              {
                id: "breach-inform-follow-ans2",
                type: AnswerType.Authorized,
                authorizedCabinetMemberId: CabinetStaticId.Homeland,
                text: "The Secretary of Homeland Security has confirmed that despite previous security upgrade requests, budget constraints prevented implementing all recommended measures. This highlights why the President's cybersecurity funding initiative is so critical.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyNegative,
                    reaction:
                      "Very displeased by the public admission of funding failures",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction:
                        "Relieved to have budget challenges acknowledged",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction:
                        "Strongly supports addressing systemic funding issues",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Appreciates the candid explanation",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 4,
                  deflect_blame: -6,
                  security_overhaul: 2,
                },
              },
            ],
          },
        },
        rootQuestionId: "breach-main",
      },
      publication: PublicationStaticId.Investigative,
    },
    {
      content: {
        questions: {
          "breach-victims": {
            id: "breach-victims",
            text: "What is the administration doing to help the millions of Americans whose sensitive data has been compromised?",
            depth: 0,
            answers: [
              {
                id: "breach-victims-ans1",
                type: AnswerType.Inform,
                text: "We've established a comprehensive response program including free credit monitoring, identity theft insurance, and a dedicated helpline for affected individuals. Details are available at data.gov/response.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Positive,
                    reaction: "Very pleased with the concrete support measures",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Appreciates the specific, actionable help",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction:
                        "Supportive of government taking responsibility",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Values the practical assistance approach",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 3,
                  deflect_blame: -2,
                  security_overhaul: -1,
                },
              },
              {
                id: "breach-victims-ans2",
                type: AnswerType.Reassure,
                text: "The President has directed all agencies to prioritize victim support. We're working with private sector partners on remediation services and strengthening legal protections for those affected.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Neutral,
                    reaction: "Satisfied with the balanced response",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Wants more specific details",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyNegative,
                      reaction: "Concerned about reliance on private sector",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 1,
                  deflect_blame: 0,
                  security_overhaul: -1,
                },
                followUpId: "breach-victims-follow",
              },
            ],
          },
          "breach-victims-follow": {
            id: "breach-victims-follow",
            text: "Many experts say these measures aren't enough for such a massive breach. The damage for some victims could last years. Is the administration prepared for long-term support?",
            depth: 1,
            answers: [
              {
                id: "breach-victims-follow-ans1",
                type: AnswerType.Challenge,
                text: "Those criticisms don't account for the full scope of our response. We're developing legislation for enhanced data protection rights and long-term victim assistance programs.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                    reaction:
                      "Appreciates the strong defense of administration efforts",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction:
                        "Supports expanded protections through legislation",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: ExchangeImpactWeight.Negative,
                      reaction: "Skeptical of new regulatory frameworks",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 1,
                  deflect_blame: 0,
                  security_overhaul: -1,
                },
              },
              {
                id: "breach-victims-follow-ans2",
                type: AnswerType.Admit,
                text: "The President agrees that our initial response is just the beginning. He's directed the formation of a task force specifically focused on long-term victim support and systemic reforms.",
                impacts: {
                  president: {
                    weight: ExchangeImpactWeight.Neutral,
                    reaction: "Neutral about the measured response",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: ExchangeImpactWeight.Positive,
                      reaction: "Strongly values the long-term commitment",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: ExchangeImpactWeight.SlightlyPositive,
                      reaction: "Appreciates acknowledgment of ongoing needs",
                    },
                  },
                },
                outcomeModifiers: {
                  transparent_response: 2,
                  deflect_blame: -1,
                  security_overhaul: -1,
                },
              },
            ],
          },
        },
        rootQuestionId: "breach-victims",
      },
      publication: PublicationStaticId.ConPrimary,
    },
  ],
};
