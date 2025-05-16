// /Users/phillip/Desktop/repos/workspace/rn/press-secretary/rn-ps/lib/data/situations/v1/foreign/taiwan_tensions.ts
import {
  SituationType,
  SituationData,
  PreferenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  PublicationStaticId,
  JournalistStaticId,
  AnswerType,
} from "~/types";

export const taiwanTensions: SituationData = {
  trigger: {
    staticKey: "taiwan_tensions",
    type: SituationType.Foreign,
    requirements: {
      president: {
        minApproval: 40,
      },
      cabinet: {
        [CabinetStaticId.State]: {
          minApproval: 50,
        },
        [CabinetStaticId.Defense]: {
          minApproval: 50,
        },
      },
    },
    isFollowUp: false,
  },
  type: SituationType.Foreign,
  title: "Taiwan Strait Tensions",
  description:
    "Military exercises and aggressive rhetoric have raised concerns about potential conflict in the Taiwan Strait, testing U.S. diplomatic and security commitments.",
  content: {
    preferences: {
      president: {
        answerType: AnswerType.Reassure,
        weight: PreferenceWeight.SlightlyNegative,
        rationale:
          "Balance firm commitment to allies with avoidance of escalation; emphasize diplomatic channels while maintaining strategic ambiguity.",
      },
      cabinet: {
        [CabinetStaticId.State]: {
          preference: {
            answerType: AnswerType.Deflect,
            weight: PreferenceWeight.Negative,
            rationale:
              "Emphasize diplomatic efforts and downplay military options; concerned about disrupting ongoing talks with China on other matters.",
          },
          authorizedContent:
            "Back-channel communications with Beijing suggest this is primarily posturing ahead of their internal political transitions, but miscalculation risks remain high.",
        },
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Challenge,
            weight: PreferenceWeight.StronglyPositive,
            rationale:
              "Prefers strong, clear messaging about U.S. commitments; advocates increased military readiness in the region.",
          },
        },
      },
    },
    outcomes: [
      {
        id: "diplomatic_de_escalation",
        title: "Diplomatic De-escalation",
        description:
          "International diplomatic pressure and U.S. engagement lead to reduction in tensions without major concessions.",
        weight: 40,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Positive,
            cabinet: {
              [CabinetStaticId.State]:
                SituationConsequenceWeight.StronglyPositive,
              [CabinetStaticId.Defense]:
                SituationConsequenceWeight.SlightlyNegative,
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
        id: "military_show_of_force",
        title: "Military Show of Force",
        description:
          "U.S. deploys additional naval assets and conducts exercises with allies, demonstrating resolve while raising tensions.",
        weight: 35,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.SlightlyPositive,
            cabinet: {
              [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
              [CabinetStaticId.Defense]:
                SituationConsequenceWeight.StronglyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.StronglyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.StronglyPositive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyNegative,
            },
          },
        },
      },
      {
        id: "strategic_ambiguity",
        title: "Maintained Strategic Ambiguity",
        description:
          "The administration carefully balances diplomatic engagement and military readiness without significant policy changes.",
        weight: 25,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Neutral,
            cabinet: {
              [CabinetStaticId.State]:
                SituationConsequenceWeight.SlightlyPositive,
              [CabinetStaticId.Defense]:
                SituationConsequenceWeight.SlightlyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.SlightlyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyPositive,
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
          "taiwan-main": {
            id: "taiwan-main",
            text: "Would the United States militarily defend Taiwan if it were attacked?",
            depth: 0,
            answers: [
              {
                id: "taiwan-main-ans1",
                type: AnswerType.Reassure,
                text: "Our commitment to peace and stability in the Taiwan Strait remains rock solid. The Taiwan Relations Act guides our approach, and we maintain the capacity to resist any resort to force that would jeopardize Taiwan.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction:
                      "Very pleased with maintaining strategic ambiguity",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 1,
                      reaction: "Appreciates diplomatic framing",
                    },
                    [CabinetStaticId.Defense]: {
                      weight: 0,
                      reaction: "Neutral about the measured response",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values careful, balanced approach",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 2,
                  military_show_of_force: -1,
                  strategic_ambiguity: -1,
                },
              },
              {
                id: "taiwan-main-ans2",
                type: AnswerType.Challenge,
                text: "That's a hypothetical that serves no purpose other than increasing tensions. What's important is our clear opposition to any unilateral changes to the status quo and our commitment to the Taiwan Relations Act.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction:
                      "Satisfied with deflecting the provocative question",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 2,
                      reaction: "Strongly approves of avoiding commitment",
                    },
                    [CabinetStaticId.Defense]: {
                      weight: -2,
                      reaction: "Disappointed by ambiguous stance",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Views response as weak and evasive",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Approves of diplomatic approach",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 4,
                  military_show_of_force: -3,
                  strategic_ambiguity: -1,
                },
                followUpId: "taiwan-challenge-follow",
              },
              {
                id: "taiwan-main-ans3",
                type: AnswerType.Inform,
                text: "The President has been clear: we maintain significant military capabilities in the region. We've also increased security cooperation with Taiwan and regional allies to ensure the preservation of peace and stability.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the security emphasis",
                  },
                  cabinet: {
                    [CabinetStaticId.Defense]: {
                      weight: 3,
                      reaction:
                        "Very pleased with emphasis on military readiness",
                    },
                    [CabinetStaticId.State]: {
                      weight: -1,
                      reaction: "Concerned about military focus",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 2,
                      reaction: "Strongly approves of military commitment",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Worried about military escalation",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: -4,
                  military_show_of_force: 5,
                  strategic_ambiguity: -1,
                },
                followUpId: "taiwan-military-follow",
              },
              {
                id: "taiwan-main-ans4",
                type: AnswerType.Authorized,
                authorizedCabinetMemberId: CabinetStaticId.State,
                text: "As the Secretary of State has briefed the President, we have reason to believe this is primarily posturing related to internal political dynamics. We're maintaining all diplomatic channels while being vigilant against miscalculation.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with the nuanced inside perspective",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 3,
                      reaction:
                        "Very pleased with deference to diplomatic assessment",
                    },
                    [CabinetStaticId.Defense]: {
                      weight: -1,
                      reaction: "Concerned about downplaying military threat",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates insider perspective",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Values diplomatic emphasis",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 3,
                  military_show_of_force: -4,
                  strategic_ambiguity: 1,
                },
              },
            ],
          },
          "taiwan-challenge-follow": {
            id: "taiwan-challenge-follow",
            text: "But hasn't the President himself previously stated the U.S. would defend Taiwan? Are you walking back those comments?",
            depth: 1,
            answers: [
              {
                id: "taiwan-challenge-follow-ans1",
                type: AnswerType.Deflect,
                text: "I'm not going to parse previous statements. Our policy has remained consistent for decades, guided by the Taiwan Relations Act, the Three Joint Communiqués, and the Six Assurances.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction:
                      "Satisfied with avoiding contradicting previous statements",
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Frustrated by perceived evasiveness",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 0,
                      reaction: "Neutral about the technical response",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 1,
                  military_show_of_force: -2,
                  strategic_ambiguity: 1,
                },
              },
              {
                id: "taiwan-challenge-follow-ans2",
                type: AnswerType.Reassure,
                text: "The President's commitment to Taiwan is unwavering. He has consistently opposed unilateral changes to the status quo and has backed that position with concrete security cooperation.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction:
                      "Pleased with supporting his stance without explicit commitment",
                  },
                  cabinet: {
                    [CabinetStaticId.Defense]: {
                      weight: 1,
                      reaction: "Appreciates stronger language",
                    },
                    [CabinetStaticId.State]: {
                      weight: -1,
                      reaction: "Concerned about potential escalation",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Somewhat satisfied with firmer stance",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: -2,
                  military_show_of_force: 2,
                  strategic_ambiguity: 0,
                },
              },
            ],
          },
          "taiwan-military-follow": {
            id: "taiwan-military-follow",
            text: "Are you concerned that highlighting military capabilities could provoke rather than deter aggressive actions in the region?",
            depth: 1,
            answers: [
              {
                id: "taiwan-military-follow-ans1",
                type: AnswerType.Reassure,
                text: "Our actions are calibrated to maintain regional stability. Deterrence and diplomacy work together - we're equally engaged in diplomatic efforts at all levels to reduce tensions.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with balanced framing",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 1,
                      reaction: "Appreciates inclusion of diplomatic emphasis",
                    },
                    [CabinetStaticId.Defense]: {
                      weight: 1,
                      reaction: "Satisfied with maintaining deterrence message",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values balanced approach",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 0,
                  military_show_of_force: -2,
                  strategic_ambiguity: 2,
                },
              },
              {
                id: "taiwan-military-follow-ans2",
                type: AnswerType.Challenge,
                text: "History has shown that weakness, not strength, invites aggression. Our position is clear and contributes to regional stability by preventing miscalculation about our commitments.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about hawkish tone",
                  },
                  cabinet: {
                    [CabinetStaticId.Defense]: {
                      weight: 2,
                      reaction: "Strongly approves of firm stance",
                    },
                    [CabinetStaticId.State]: {
                      weight: -2,
                      reaction:
                        "Very concerned about confrontational messaging",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 3,
                      reaction: "Enthusiastically supports strong stance",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -2,
                      reaction: "Alarmed by hawkish rhetoric",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Worried about escalatory tone",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: -3,
                  military_show_of_force: 5,
                  strategic_ambiguity: -2,
                },
              },
            ],
          },
        },
        rootQuestionId: "taiwan-main",
      },
      publication: PublicationStaticId.LibPrimary,
    },
    {
      content: {
        questions: {
          "taiwan-economic": {
            id: "taiwan-economic",
            text: "How would a Taiwan Strait conflict impact the U.S. economy, particularly given Taiwan's dominance in semiconductor manufacturing?",
            depth: 0,
            answers: [
              {
                id: "taiwan-economic-ans1",
                type: AnswerType.Inform,
                text: "A conflict would have serious global economic consequences, which is precisely why the President is working to prevent one. We're also investing in domestic semiconductor manufacturing to reduce vulnerabilities.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with highlighting domestic initiatives",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values pragmatic economic focus",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Appreciates domestic manufacturing emphasis",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Supports reducing foreign dependencies",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 2,
                  military_show_of_force: -2,
                  strategic_ambiguity: 0,
                },
                followUpId: "taiwan-economic-follow",
              },
              {
                id: "taiwan-economic-ans2",
                type: AnswerType.Deflect,
                text: "I won't speculate on hypothetical scenarios. What I can tell you is that maintaining peace and stability in the Taiwan Strait is crucial for global commerce, which is why it remains a top priority.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about avoiding the question",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 1,
                      reaction: "Approves of avoiding alarmist scenarios",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Disappointed by lack of substantive answer",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 1,
                  military_show_of_force: -1,
                  strategic_ambiguity: 0,
                },
              },
              {
                id: "taiwan-economic-ans3",
                type: AnswerType.Reassure,
                text: "The economic stakes make conflict prevention our absolute priority. We're working with allies on supply chain resilience while maintaining our commitment to Taiwan's security and regional stability.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction:
                      "Very pleased with balanced economic/security framing",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 1,
                      reaction: "Appreciates allied cooperation emphasis",
                    },
                    [CabinetStaticId.Defense]: {
                      weight: 1,
                      reaction: "Satisfied with security commitment",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values pragmatic approach",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 0,
                  military_show_of_force: 0,
                  strategic_ambiguity: 0,
                },
              },
            ],
          },
          "taiwan-economic-follow": {
            id: "taiwan-economic-follow",
            text: "But experts say domestic manufacturing won't meet our needs for years. Does the administration have contingency plans for supply chain disruptions if conflict occurs?",
            depth: 1,
            answers: [
              {
                id: "taiwan-economic-follow-ans1",
                type: AnswerType.Admit,
                text: "Yes, we have extensive contingency planning for critical supply chains. The President has directed a whole-of-government approach to minimize potential disruptions while working to prevent any conflict from occurring.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with balanced transparency",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values honest preparation",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Appreciates acknowledgment of risks",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: -1,
                  military_show_of_force: 1,
                  strategic_ambiguity: 0,
                },
              },
              {
                id: "taiwan-economic-follow-ans2",
                type: AnswerType.Deflect,
                text: "Our focus remains on preventing conflict through active diplomacy and deterrence. Discussing detailed contingency plans would be counterproductive to those efforts.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the cautious approach",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 1,
                      reaction: "Approves of diplomatic emphasis",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Disappointed by perceived evasion",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Concerned about apparent lack of preparation",
                    },
                  },
                },
                outcomeModifiers: {
                  diplomatic_de_escalation: 2,
                  military_show_of_force: -2,
                  strategic_ambiguity: 0,
                },
              },
            ],
          },
        },
        rootQuestionId: "taiwan-economic",
      },
      publication: PublicationStaticId.ConPrimary,
    },
  ],
};
