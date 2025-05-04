import {
  ExchangeContent,
  SituationType,
  // Import the static ID enums
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId, // If you plan to add journalist impacts later
} from "~/types";

interface MockExchange {
  text: string; // Main question text for easy reference
  situationType: SituationType;
  content: ExchangeContent;
}

export const mockExchanges: MockExchange[] = [
  // Domestic policy exchanges
  {
    text: "Mr. Press Secretary, what can you tell us about the administration's current stance on {situation_title}?",
    situationType: SituationType.Domestic,
    content: {
      situationStage: 0,
      questions: {
        "main-1": {
          id: "main-1",
          text: "Mr. Press Secretary, what can you tell us about the administration's current stance on {situation_title}?",
          depth: 0,
          answers: [
            {
              id: "main-1-ans-1",
              text: "The President considers this a top priority and we're making significant progress.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Appreciates the strong support",
                },
                cabinet: {
                  // Use CabinetStaticId enum
                  [CabinetStaticId.HHS]: {
                    weight: 1,
                    reaction: "Values your public support",
                  },
                },
                // publications removed
                subgroups: {
                  // Use SubgroupStaticId enum
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 0,
                    reaction: "Remains skeptical without details",
                  },
                },
                // journalists: {} // Add if needed later
              },
              followUpId: "followup-1-1",
            },
            {
              id: "main-1-ans-2",
              text: "We acknowledge there are challenges here, but we're implementing specific solutions to address them.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Neutral reaction to balanced answer",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: 1,
                    reaction: "Appreciates the measured response",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 1,
                    reaction: "Appreciates the honest assessment",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-1-ans-3",
              text: "I'll need to circle back with more details on that in a future briefing.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Disappointed with the deflection",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: -1,
                    reaction: "Feels thrown under the bus",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -1,
                    reaction: "Sees this as typical political evasion",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
        "followup-1-1": {
          id: "followup-1-1",
          text: "But what specific actions has the administration taken on {situation_title}?",
          depth: 1,
          answers: [
            {
              id: "followup-1-1-ans-1",
              text: "We've allocated additional resources and established a task force to address this issue thoroughly.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Satisfied with the detailed response",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: 1,
                    reaction: "Pleased with the specific support",
                  },
                },
                // publications removed
                // subgroups: {}, // No subgroups specified originally
                // journalists: {}
              },
            },
            {
              id: "followup-1-1-ans-2",
              text: "I can't get into specifics for security reasons, but we're taking this very seriously.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about the continued evasion",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: -1,
                    reaction: "Frustrated with the lack of support",
                  },
                },
                // publications removed
                // subgroups: {},
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-1",
    },
  },

  {
    text: "Critics say the administration's approach to {situation_title} has been woefully inadequate. How do you respond?",
    situationType: SituationType.Domestic,
    content: {
      situationStage: 0,
      questions: {
        "main-2": {
          id: "main-2",
          text: "Critics say the administration's approach to {situation_title} has been woefully inadequate. How do you respond?",
          depth: 0,
          answers: [
            {
              id: "main-2-ans-1",
              text: "Those criticisms are politically motivated and ignore the substantial progress we've made.",
              impacts: {
                president: {
                  weight: 2,
                  reaction: "Very pleased with the strong defense",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: 1,
                    reaction: "Appreciates defense of their work",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]: {
                    weight: 1,
                    reaction: "Energized by the strong response",
                  },
                  [SubgroupStaticId.RightWingBase]: {
                    weight: -2,
                    reaction: "Angered by the dismissal of legitimate concerns",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-2-ans-2",
              text: "We recognize there's more work to be done, but we're proud of the steps we've taken so far.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Accepts the balanced response",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: 0,
                    reaction: "Neutral reaction",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]: {
                    weight: 0,
                    reaction: "Wishes for stronger defense",
                  },
                  [SubgroupStaticId.RightWingBase]: {
                    weight: 0,
                    reaction: "Still critical but less enraged",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-2-ans-3",
              text: "The President has directed a comprehensive review of our approach and will be announcing new measures soon.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about implied admission of failure",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: 1,
                    reaction: "Glad their concerns are being addressed",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.LeftWingBase]: {
                    weight: -1,
                    reaction: "Worried about policy shift",
                  },
                  [SubgroupStaticId.RightWingBase]: {
                    weight: 1,
                    reaction: "Cautiously optimistic about changes",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-2",
    },
  },

  // Foreign policy exchanges
  {
    text: "What's the latest development regarding {situation_title}?",
    situationType: SituationType.Foreign,
    content: {
      situationStage: 0,
      questions: {
        "main-3": {
          id: "main-3",
          text: "What's the latest development regarding {situation_title}?",
          depth: 0,
          answers: [
            {
              id: "main-3-ans-1",
              text: "The President spoke with key international leaders this morning and we're making diplomatic progress.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Pleased with the positive framing",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: 1,
                    reaction: "Appreciates highlighting their diplomatic work",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 1,
                    reaction: "Reassured by diplomatic approach",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-3-ans-2",
              text: "This is a complex international situation that continues to evolve. We're monitoring it closely.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Neutral reaction to cautious response",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: 0,
                    reaction: "Understanding of the measured approach",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 0,
                    reaction: "Neither reassured nor concerned",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-3-ans-3",
              text: "We're considering all options but haven't made any new decisions on this matter.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about appearance of indecision",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: -1,
                    reaction: "Frustrated with lack of clear position",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -1,
                    reaction: "Worried about lack of direction",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-3",
    },
  },

  {
    text: "Many experts have criticized the President's handling of {situation_title}. Is this administration out of its depth?",
    situationType: SituationType.Foreign,
    content: {
      situationStage: 0,
      questions: {
        "main-4": {
          id: "main-4",
          text: "Many experts have criticized the President's handling of {situation_title}. Is this administration out of its depth?",
          depth: 0,
          answers: [
            {
              id: "main-4-ans-1",
              text: "Absolutely not. The President's approach is backed by our top foreign policy and security experts.",
              impacts: {
                president: {
                  weight: 2,
                  reaction: "Very pleased with the strong defense",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: 1,
                    reaction: "Appreciates the vote of confidence",
                  },
                  [CabinetStaticId.Defense]: {
                    weight: 1,
                    reaction: "Glad to see public backing",
                  },
                },
                // publications removed
                // subgroups: {}, // No subgroups originally
                // journalists: {}
              },
            },
            {
              id: "main-4-ans-2",
              text: "The President is consulting with a wide range of experts and considering all perspectives on this complex issue.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Wishes for stronger defense but understands",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: 0,
                    reaction: "Neutral reaction",
                  },
                },
                // publications removed
                // subgroups: {},
                // journalists: {}
              },
              followUpId: "followup-4-2",
            },
            {
              id: "main-4-ans-3",
              text: "I reject the premise of that question. Next question, please.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Likes the refusal to engage with criticism",
                },
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: -1,
                    reaction:
                      "Concerned about dismissing legitimate policy questions",
                  },
                },
                // publications removed
                // subgroups: {},
                // journalists: {}
              },
            },
          ],
        },
        "followup-4-2": {
          id: "followup-4-2",
          text: "Can you specify which experts the President is consulting on {situation_title}?",
          depth: 1,
          answers: [
            {
              id: "followup-4-2-ans-1",
              text: "The President is receiving regular briefings from our National Security Council, State Department, and intelligence agencies.",
              impacts: {
                president: { weight: 0 },
                cabinet: {
                  [CabinetStaticId.State]: { weight: 1 },
                  [CabinetStaticId.Defense]: { weight: 1 },
                },
                // publications removed
                // subgroups: {},
                // journalists: {}
              },
            },
            {
              id: "followup-4-2-ans-2",
              text: "I'm not going to provide a specific list of advisors for security reasons.",
              impacts: {
                president: { weight: 0 },
                cabinet: {
                  [CabinetStaticId.State]: { weight: -1 },
                },
                // publications removed
                // subgroups: {},
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-4",
    },
  },

  // Scandal exchanges
  {
    text: "Can you clarify the administration's position on the recent {situation_title} issue?",
    situationType: SituationType.Scandal,
    content: {
      situationStage: 0,
      questions: {
        "main-5": {
          id: "main-5",
          text: "Can you clarify the administration's position on the recent {situation_title} issue?",
          depth: 0,
          answers: [
            {
              id: "main-5-ans-1",
              text: "We take this matter seriously and have launched a thorough internal review.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Accepts the measured response",
                },
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: 1,
                    reaction: "Appreciates the serious approach",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 1,
                    reaction: "Values the transparent approach",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-5-ans-2",
              text: "The reports on this issue contain significant inaccuracies, and we'll be addressing those soon.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Pleased with deflection of criticism",
                },
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: -1,
                    reaction: "Concerned about potential coverup perception",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -1,
                    reaction: "Skeptical of denial without specifics",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-5-ans-3",
              text: "This is an ongoing matter that may involve legal proceedings, so I can't comment further at this time.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Understands the legal caution",
                },
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: 2,
                    reaction: "Very appreciative of respecting legal process",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -1,
                    reaction: "Frustrated by lack of transparency",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-5",
    },
  },

  // Economic exchanges
  {
    text: "How is the administration addressing public concerns about {situation_title}?",
    situationType: SituationType.Economic,
    content: {
      situationStage: 0,
      questions: {
        "main-6": {
          id: "main-6",
          text: "How is the administration addressing public concerns about {situation_title}?",
          depth: 0,
          answers: [
            {
              id: "main-6-ans-1",
              text: "The President has directed the Treasury Secretary to implement immediate stabilizing measures.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Satisfied with the decisive response",
                },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: 2,
                    reaction: "Pleased with the vote of confidence",
                  },
                },
                // publications removed
                // subgroups: {}, // Note: "financial_market" omitted due to no enum match
                // journalists: {}
              },
            },
            {
              id: "main-6-ans-2",
              text: "We're closely monitoring the situation and coordinating with financial regulators and market participants.",
              impacts: {
                president: { weight: 0, reaction: "Accepts cautious approach" },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: 1,
                    reaction: "Appreciates the measured response",
                  },
                },
                // publications removed
                // subgroups: {}, // Note: "financial_market" omitted
                // journalists: {}
              },
            },
            {
              id: "main-6-ans-3",
              text: "Markets fluctuate naturally, and we don't comment on day-to-day movements.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about appearing dismissive",
                },
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: -2,
                    reaction:
                      "Extremely frustrated with dismissal of serious concern",
                  },
                },
                // publications removed
                subgroups: {
                  // Note: "financial_market" omitted
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -2,
                    reaction: "Worried about their savings and investments",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-6",
    },
  },

  // Security exchanges
  {
    text: "What steps is the administration taking to address {situation_title}?",
    situationType: SituationType.Security,
    content: {
      situationStage: 0,
      questions: {
        "main-7": {
          id: "main-7",
          text: "What steps is the administration taking to address {situation_title}?",
          depth: 0,
          answers: [
            {
              id: "main-7-ans-1",
              text: "The President has convened the National Security Council and ordered immediate protective measures.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Pleased with portrayal of leadership",
                },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: 1,
                    reaction: "Appreciates highlighting their work",
                  },
                  [CabinetStaticId.Defense]: {
                    weight: 1,
                    reaction: "Satisfied with security focus",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 2,
                    reaction: "Reassured by quick, decisive action",
                  },
                },
                // journalists: {}
              },
              followUpId: "followup-7-1",
            },
            {
              id: "main-7-ans-2",
              text: "We're working with relevant agencies and private sector partners to address this threat.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Accepts the balanced response",
                },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: 0,
                    reaction: "Neutral reaction",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 0,
                    reaction: "Neither reassured nor concerned",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "main-7-ans-3",
              text: "For security reasons, I can't detail specific measures, but we are addressing the situation.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about appearance of secrecy",
                },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: 1,
                    reaction: "Appreciates protecting sensitive information",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: -1,
                    reaction: "Worried by lack of transparency",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
        "followup-7-1": {
          id: "followup-7-1",
          text: "Are Americans at risk from {situation_title}, and should they take any precautions?",
          depth: 1,
          answers: [
            {
              id: "followup-7-1-ans-1",
              text: "The immediate threat is contained, but we recommend standard cybersecurity practices for everyone.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Pleased with balanced, informative response",
                },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: 2,
                    reaction: "Very satisfied with public guidance",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 2,
                    reaction: "Appreciates useful information",
                  },
                },
                // journalists: {}
              },
            },
            {
              id: "followup-7-1-ans-2",
              text: "We have no indication of broader risk to the public at this time.",
              impacts: {
                president: { weight: 0, reaction: "Neutral reaction" },
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: 0,
                    reaction: "Neutral reaction",
                  },
                },
                // publications removed
                subgroups: {
                  [SubgroupStaticId.IndependentBase]: {
                    // Mapped from "middle_class"
                    weight: 0,
                    reaction: "Somewhat reassured but wants more detail",
                  },
                },
                // journalists: {}
              },
            },
          ],
        },
      },
      rootQuestionId: "main-7",
    },
  },
];
