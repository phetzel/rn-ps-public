// /Users/phillip/Desktop/repos/workspace/rn/press-secretary/rn-ps/lib/data/situations/v1/security/border_crisis.ts
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

export const borderSecurityCrisis: SituationData = {
  trigger: {
    staticKey: "border_security_crisis",
    type: SituationType.Security,
    requirements: {
      president: {
        minApproval: 30,
        maxApproval: 70,
      },
    },
    isFollowUp: false,
  },
  type: SituationType.Security,
  title: "Border Security Crisis",
  description:
    "A surge in unauthorized border crossings has created humanitarian concerns and political pressure, with detention facilities overwhelmed.",
  content: {
    preferences: {
      president: {
        answerType: AnswerType.Reassure,
        weight: PreferenceWeight.SlightlyNegative,
        rationale:
          "Balance humanitarian concerns with security messaging; avoid appearing weak on border enforcement or callous about migrants.",
      },
      cabinet: {
        [CabinetStaticId.Homeland]: {
          preference: {
            answerType: AnswerType.Inform,
            weight: PreferenceWeight.StronglyNegative,
            rationale:
              "Resources are critically strained; requesting additional funding and personnel deployment from other agencies.",
          },
          authorizedContent:
            "Internal projections show border crossings may increase 200% over next month without immediate intervention. Current facilities can only handle 30% of expected numbers.",
        },
        [CabinetStaticId.Justice]: {
          preference: {
            answerType: AnswerType.Challenge,
            weight: PreferenceWeight.Negative,
            rationale:
              "Believes opposition is exploiting crisis for political gain; wants to emphasize historical precedent and push back on criticism.",
          },
        },
        [CabinetStaticId.State]: {
          preference: {
            answerType: AnswerType.Deflect,
            weight: PreferenceWeight.Positive,
            rationale:
              "Focus on diplomatic efforts with source countries rather than border policies; emphasize root causes over enforcement.",
          },
        },
      },
    },
    outcomes: [
      {
        id: "enhanced_enforcement",
        title: "Enhanced Border Enforcement",
        description:
          "The administration increases border security personnel and resources, focusing on stricter enforcement of existing laws.",
        weight: 35,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Neutral,
            cabinet: {
              [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
              [CabinetStaticId.Justice]:
                SituationConsequenceWeight.SlightlyPositive,
              [CabinetStaticId.State]:
                SituationConsequenceWeight.SlightlyNegative,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.StronglyNegative,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.Positive,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyPositive,
            },
          },
        },
      },
      {
        id: "humanitarian_approach",
        title: "Humanitarian-Focused Response",
        description:
          "The administration prioritizes humanitarian aid, expedited processing, and improved conditions in detention facilities.",
        weight: 35,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.SlightlyPositive,
            cabinet: {
              [CabinetStaticId.Homeland]:
                SituationConsequenceWeight.SlightlyNegative,
              [CabinetStaticId.Justice]:
                SituationConsequenceWeight.SlightlyNegative,
              [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.StronglyPositive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.StronglyNegative,
              [SubgroupStaticId.IndependentBase]:
                SituationConsequenceWeight.SlightlyNegative,
            },
          },
        },
      },
      {
        id: "comprehensive_reform",
        title: "Push for Comprehensive Reform",
        description:
          "The administration leverages the crisis to build momentum for comprehensive immigration reform legislation.",
        weight: 30,
        consequences: {
          approvalChanges: {
            president: SituationConsequenceWeight.Positive,
            cabinet: {
              [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
              [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
              [CabinetStaticId.State]:
                SituationConsequenceWeight.StronglyPositive,
            },
            subgroups: {
              [SubgroupStaticId.LeftWingBase]:
                SituationConsequenceWeight.Positive,
              [SubgroupStaticId.RightWingBase]:
                SituationConsequenceWeight.Negative,
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
          "border-crisis-main": {
            id: "border-crisis-main",
            text: "How is the administration addressing the humanitarian crisis at the border with facilities reportedly at 150% capacity?",
            depth: 0,
            answers: [
              {
                id: "border-crisis-main-ans1",
                type: AnswerType.Inform,
                text: "The President has directed FEMA and HHS to establish additional temporary facilities while we process claims more efficiently. We're deploying more personnel and resources to manage the situation humanely.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction:
                      "Pleased with the balanced, action-oriented message",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 2,
                      reaction: "Appreciates acknowledgment of capacity issues",
                    },
                    [CabinetStaticId.State]: {
                      weight: 0,
                      reaction: "Neutral about the domestic focus",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the practical approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Appreciates humanitarian emphasis",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -2,
                  humanitarian_approach: 4,
                  comprehensive_reform: -2,
                },
                followUpId: "border-humanitarian-follow",
              },
              {
                id: "border-crisis-main-ans2",
                type: AnswerType.Challenge,
                text: "This situation didn't develop overnight, and critics who suddenly care about border conditions were silent during previous administrations. We're implementing long-term solutions while addressing immediate needs.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about the partisan tone",
                  },
                  cabinet: {
                    [CabinetStaticId.Justice]: {
                      weight: 3,
                      reaction:
                        "Strongly approves of pushing back against critics",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Energized by the strong response to critics",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction:
                        "Angered by perceived deflection of responsibility",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Disappointed by partisan framing",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 0,
                  humanitarian_approach: -3,
                  comprehensive_reform: 3,
                },
                followUpId: "border-partisan-follow",
              },
              {
                id: "border-crisis-main-ans3",
                type: AnswerType.Reassure,
                text: "The President recognizes both the humanitarian and security dimensions of this challenge. We're expanding processing capacity while ensuring our border remains secure and orderly.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with balanced framing",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 1,
                      reaction: "Appreciates the security emphasis",
                    },
                    [CabinetStaticId.State]: {
                      weight: 0,
                      reaction: "Wishes for more focus on diplomatic solutions",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly approves of balanced approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about security emphasis",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction:
                        "Appreciates acknowledgment of security concerns",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 2,
                  humanitarian_approach: 0,
                  comprehensive_reform: -2,
                },
              },
              {
                id: "border-crisis-main-ans4",
                type: AnswerType.Authorized,
                authorizedCabinetMemberId: CabinetStaticId.Homeland,
                text: "As Secretary of Homeland Security has informed the President, we're facing unprecedented numbers that may increase 200% in coming weeks. We're implementing emergency measures to expand capacity while preserving humane treatment standards.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction:
                      "Concerned about revealing concerning projections",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 3,
                      reaction:
                        "Very appreciative of transparency about resource needs",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 2,
                      reaction:
                        "Alarmed by numbers; supports stronger response",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction:
                        "Worried about framing that could stigmatize migrants",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values the factual, transparent assessment",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 5,
                  humanitarian_approach: -2,
                  comprehensive_reform: -3,
                },
              },
            ],
          },
          "border-humanitarian-follow": {
            id: "border-humanitarian-follow",
            text: "Critics say these temporary facilities are essentially 'camps' with poor conditions. How does this approach differ from previous administrations that faced similar criticism?",
            depth: 1,
            answers: [
              {
                id: "border-humanitarian-follow-ans1",
                type: AnswerType.Deflect,
                text: "Rather than looking backward, we're focused on solutions. The President has mandated improved standards, regular inspections by independent observers, and transparency about conditions.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Satisfied with avoiding direct comparisons",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Appreciates focus on current solutions",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -1,
                  humanitarian_approach: 2,
                  comprehensive_reform: -1,
                },
              },
              {
                id: "border-humanitarian-follow-ans2",
                type: AnswerType.Challenge,
                text: "There's a fundamental difference in our approach. We've increased legal oversight, mandated higher standards of care, and are processing cases faster to minimize detention time - all while inheriting a broken system.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction:
                      "Concerned about implicitly criticizing predecessors",
                  },
                  cabinet: {
                    [CabinetStaticId.Justice]: {
                      weight: 2,
                      reaction:
                        "Strongly approves of highlighting legal improvements",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Energized by criticism of previous approaches",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Angered by partisan implications",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -2,
                  humanitarian_approach: 3,
                  comprehensive_reform: -1,
                },
              },
            ],
          },
          "border-partisan-follow": {
            id: "border-partisan-follow",
            text: "Isn't this partisan framing undermining potential for bipartisan cooperation on border solutions?",
            depth: 1,
            answers: [
              {
                id: "border-partisan-follow-ans1",
                type: AnswerType.Admit,
                text: "You raise a fair point. The President is actively working with members of both parties who are serious about solving this challenge. We welcome constructive input from all sides.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Appreciates course correction toward unity",
                  },
                  cabinet: {
                    [CabinetStaticId.Justice]: {
                      weight: -1,
                      reaction: "Disappointed by softened stance",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values bipartisan approach",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Cautiously appreciates conciliatory tone",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 0,
                  humanitarian_approach: -2,
                  comprehensive_reform: 2,
                },
              },
              {
                id: "border-partisan-follow-ans2",
                type: AnswerType.Reassure,
                text: "The President welcomes anyone to the table who is serious about solutions. But it's important to acknowledge the reality of the situation we inherited while we work toward better systems.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with balanced but firm stance",
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Appreciates maintaining some criticism",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values measured response",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 0,
                  humanitarian_approach: 0,
                  comprehensive_reform: 0,
                },
              },
            ],
          },
        },
        rootQuestionId: "border-crisis-main",
      },
      publication: PublicationStaticId.IndependentPrimary,
    },
    {
      content: {
        questions: {
          "border-security-question": {
            id: "border-security-question",
            text: "Why hasn't the administration deployed more border security personnel given the record number of crossings?",
            depth: 0,
            answers: [
              {
                id: "border-security-ans1",
                type: AnswerType.Inform,
                text: "The President has actually authorized a 15% increase in border security personnel and resources. However, we're taking a comprehensive approach that includes processing efficiency, technology, and addressing root causes.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Satisfied with factual correction",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 2,
                      reaction:
                        "Appreciates acknowledgment of increased resources",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Somewhat reassured by security emphasis",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 1,
                      reaction: "Values comprehensive approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: -1,
                      reaction: "Concerned about security-first framing",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 3,
                  humanitarian_approach: -1,
                  comprehensive_reform: -2,
                },
                followUpId: "border-effectiveness-follow",
              },
              {
                id: "border-security-ans2",
                type: AnswerType.Deflect,
                text: "The real solution isn't just more personnel at the border. We're focused on addressing the root causes of migration through diplomatic efforts with source countries and improving our processing systems.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the diplomatic emphasis",
                  },
                  cabinet: {
                    [CabinetStaticId.State]: {
                      weight: 3,
                      reaction:
                        "Very pleased with focus on diplomatic solutions",
                    },
                    [CabinetStaticId.Homeland]: {
                      weight: -2,
                      reaction: "Frustrated by downplaying security needs",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Strongly supports root cause approach",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction: "Views as avoiding security responsibility",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -4,
                  humanitarian_approach: 2,
                  comprehensive_reform: 2,
                },
              },
              {
                id: "border-security-ans3",
                type: AnswerType.Challenge,
                text: "Your question assumes more personnel is the solution, but experts know that's just one piece of a complex problem. Our data-driven approach is more efficient than simply adding more agents.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about confrontational tone",
                  },
                  cabinet: {
                    [CabinetStaticId.Justice]: {
                      weight: 2,
                      reaction:
                        "Approves of challenging oversimplified narratives",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction:
                        "Appreciates pushing back on security-only framing",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -2,
                      reaction:
                        "Views response as dismissive of legitimate concerns",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction: "Finds tone unnecessarily confrontational",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -3,
                  humanitarian_approach: 0,
                  comprehensive_reform: 3,
                },
                followUpId: "border-data-follow",
              },
            ],
          },
          "border-effectiveness-follow": {
            id: "border-effectiveness-follow",
            text: "If the administration has increased personnel by 15%, why are crossings still at record levels? Doesn't this suggest the strategy isn't working?",
            depth: 1,
            answers: [
              {
                id: "border-effectiveness-follow-ans1",
                type: AnswerType.Admit,
                text: "There's no simple solution to this complex challenge. While we've increased resources, we're also facing unprecedented migration patterns driven by global conditions. We continue to adapt our approach based on real-time data.",
                impacts: {
                  president: {
                    weight: 0,
                    reaction: "Neutral about the measured response",
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values nuanced, honest assessment",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -1,
                      reaction: "Sees admission as sign of policy failure",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 0,
                  humanitarian_approach: -1,
                  comprehensive_reform: 1,
                },
              },
              {
                id: "border-effectiveness-follow-ans2",
                type: AnswerType.Challenge,
                text: "Your metrics of success are flawed. We're processing people more efficiently, identifying legitimate asylum claims, and managing the flow more humanely. Those are the appropriate measures, not simply reducing numbers.",
                impacts: {
                  president: {
                    weight: -1,
                    reaction: "Concerned about dismissing legitimate concerns",
                  },
                  cabinet: {
                    [CabinetStaticId.Justice]: {
                      weight: 1,
                      reaction: "Appreciates reframing success metrics",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 2,
                      reaction: "Strongly supports humanitarian framing",
                    },
                    [SubgroupStaticId.RightWingBase]: {
                      weight: -3,
                      reaction:
                        "Outraged by perceived dismissal of border security",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: -1,
                      reaction:
                        "Finds response dismissive of legitimate concerns",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -3,
                  humanitarian_approach: 5,
                  comprehensive_reform: -2,
                },
              },
            ],
          },
          "border-data-follow": {
            id: "border-data-follow",
            text: "You mentioned data-driven approaches. What specific metrics is the administration using to measure success at the border?",
            depth: 1,
            answers: [
              {
                id: "border-data-follow-ans1",
                type: AnswerType.Inform,
                text: "We're tracking processing times, humanitarian standards compliance, asylum grant rates, and long-term outcomes for migrants. These provide a more complete picture than raw crossing numbers alone.",
                impacts: {
                  president: {
                    weight: 1,
                    reaction: "Pleased with specific, substantive response",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 1,
                      reaction: "Appreciates comprehensive metrics",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly values data-focused approach",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Supports humanitarian metrics",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: -2,
                  humanitarian_approach: 3,
                  comprehensive_reform: -1,
                },
              },
              {
                id: "border-data-follow-ans2",
                type: AnswerType.Reassure,
                text: "We're monitoring both security and humanitarian metrics. This includes apprehension efficiency, processing speed, detention conditions, criminal interception rates, and legitimate asylum approvals. This balanced approach guides our policy decisions.",
                impacts: {
                  president: {
                    weight: 2,
                    reaction: "Very pleased with balanced framing",
                  },
                  cabinet: {
                    [CabinetStaticId.Homeland]: {
                      weight: 1,
                      reaction: "Appreciates inclusion of security metrics",
                    },
                  },
                  subgroups: {
                    [SubgroupStaticId.RightWingBase]: {
                      weight: 1,
                      reaction: "Values mention of security metrics",
                    },
                    [SubgroupStaticId.LeftWingBase]: {
                      weight: 1,
                      reaction: "Appreciates humanitarian standards",
                    },
                    [SubgroupStaticId.IndependentBase]: {
                      weight: 2,
                      reaction: "Strongly approves of balanced approach",
                    },
                  },
                },
                outcomeModifiers: {
                  enhanced_enforcement: 2,
                  humanitarian_approach: 0,
                  comprehensive_reform: -2,
                },
              },
            ],
          },
        },
        rootQuestionId: "border-security-question",
      },
      publication: PublicationStaticId.ConPrimary,
    },
  ],
};
