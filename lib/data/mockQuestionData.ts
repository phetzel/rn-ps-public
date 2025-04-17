import { QuestionData, SituationType } from "~/types";

interface MockQuestion {
  text: string;
  situationType: SituationType;
  data: QuestionData;
}

export const mockQuestions: MockQuestion[] = [
  // Domestic policy questions
  {
    text: "Mr. Press Secretary, what can you tell us about the administration's current stance on {situation_title}?",
    situationType: SituationType.Domestic,
    data: {
      text: "Mr. Press Secretary, what can you tell us about the administration's current stance on {situation_title}?",
      situationStage: 0,
      answers: [
        {
          text: "The President considers this a top priority and we're making significant progress.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Appreciates the strong support",
            },
            cabinet: {
              health: { weight: 1, reaction: "Values your public support" },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 0,
                reaction: "Remains skeptical without details",
              },
            },
          },
        },
        {
          text: "We acknowledge there are challenges here, but we're implementing specific solutions to address them.",
          impacts: {
            president: {
              weight: 0,
              reaction: "Neutral reaction to balanced answer",
            },
            cabinet: {
              health: {
                weight: 1,
                reaction: "Appreciates the measured response",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 1,
                reaction: "Appreciates the honest assessment",
              },
            },
          },
        },
        {
          text: "I'll need to circle back with more details on that in a future briefing.",
          impacts: {
            president: {
              weight: -1,
              reaction: "Disappointed with the deflection",
            },
            cabinet: {
              health: { weight: -1, reaction: "Feels thrown under the bus" },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: -1,
                reaction: "Sees this as typical political evasion",
              },
            },
          },
        },
      ],
      followUps: {
        0: {
          text: "But what specific actions has the administration taken on {situation_title}?",
          answers: [
            {
              text: "We've allocated additional resources and established a task force to address this issue thoroughly.",
              impacts: {
                president: {
                  weight: 0,
                  reaction: "Satisfied with the detailed response",
                },
                cabinet: {
                  health: {
                    weight: 1,
                    reaction: "Pleased with the specific support",
                  },
                },
                publications: {},
              },
            },
            {
              text: "I can't get into specifics for security reasons, but we're taking this very seriously.",
              impacts: {
                president: {
                  weight: -1,
                  reaction: "Concerned about the continued evasion",
                },
                cabinet: {
                  health: {
                    weight: -1,
                    reaction: "Frustrated with the lack of support",
                  },
                },
                publications: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    text: "Critics say the administration's approach to {situation_title} has been woefully inadequate. How do you respond?",
    situationType: SituationType.Domestic,
    data: {
      text: "Critics say the administration's approach to {situation_title} has been woefully inadequate. How do you respond?",
      situationStage: 0,
      answers: [
        {
          text: "Those criticisms are politically motivated and ignore the substantial progress we've made.",
          impacts: {
            president: {
              weight: 2,
              reaction: "Very pleased with the strong defense",
            },
            cabinet: {
              health: {
                weight: 1,
                reaction: "Appreciates defense of their work",
              },
            },
            publications: {},
            subgroups: {
              left_wing_base: {
                weight: 1,
                reaction: "Energized by the strong response",
              },
              right_wing_base: {
                weight: -2,
                reaction: "Angered by the dismissal of legitimate concerns",
              },
            },
          },
        },
        {
          text: "We recognize there's more work to be done, but we're proud of the steps we've taken so far.",
          impacts: {
            president: { weight: 0, reaction: "Accepts the balanced response" },
            cabinet: {
              health: { weight: 0, reaction: "Neutral reaction" },
            },
            publications: {},
            subgroups: {
              left_wing_base: {
                weight: 0,
                reaction: "Wishes for stronger defense",
              },
              right_wing_base: {
                weight: 0,
                reaction: "Still critical but less enraged",
              },
            },
          },
        },
        {
          text: "The President has directed a comprehensive review of our approach and will be announcing new measures soon.",
          impacts: {
            president: {
              weight: -1,
              reaction: "Concerned about implied admission of failure",
            },
            cabinet: {
              health: {
                weight: 1,
                reaction: "Glad their concerns are being addressed",
              },
            },
            publications: {},
            subgroups: {
              left_wing_base: {
                weight: -1,
                reaction: "Worried about policy shift",
              },
              right_wing_base: {
                weight: 1,
                reaction: "Cautiously optimistic about changes",
              },
            },
          },
        },
      ],
    },
  },

  // Foreign policy questions
  {
    text: "What's the latest development regarding {situation_title}?",
    situationType: SituationType.Foreign,
    data: {
      text: "What's the latest development regarding {situation_title}?",
      situationStage: 0,
      answers: [
        {
          text: "The President spoke with key international leaders this morning and we're making diplomatic progress.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Pleased with the positive framing",
            },
            cabinet: {
              state: {
                weight: 1,
                reaction: "Appreciates highlighting their diplomatic work",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 1,
                reaction: "Reassured by diplomatic approach",
              },
            },
          },
        },
        {
          text: "This is a complex international situation that continues to evolve. We're monitoring it closely.",
          impacts: {
            president: {
              weight: 0,
              reaction: "Neutral reaction to cautious response",
            },
            cabinet: {
              state: {
                weight: 0,
                reaction: "Understanding of the measured approach",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 0,
                reaction: "Neither reassured nor concerned",
              },
            },
          },
        },
        {
          text: "We're considering all options but haven't made any new decisions on this matter.",
          impacts: {
            president: {
              weight: -1,
              reaction: "Concerned about appearance of indecision",
            },
            cabinet: {
              state: {
                weight: -1,
                reaction: "Frustrated with lack of clear position",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: -1,
                reaction: "Worried about lack of direction",
              },
            },
          },
        },
      ],
    },
  },
  {
    text: "Many experts have criticized the President's handling of {situation_title}. Is this administration out of its depth?",
    situationType: SituationType.Foreign,
    data: {
      text: "Many experts have criticized the President's handling of {situation_title}. Is this administration out of its depth?",
      situationStage: 0,
      answers: [
        {
          text: "Absolutely not. The President's approach is backed by our top foreign policy and security experts.",
          impacts: {
            president: {
              weight: 2,
              reaction: "Very pleased with the strong defense",
            },
            cabinet: {
              state: {
                weight: 1,
                reaction: "Appreciates the vote of confidence",
              },
              defense: { weight: 1, reaction: "Glad to see public backing" },
            },
            publications: {},
            subgroups: {},
          },
        },
        {
          text: "The President is consulting with a wide range of experts and considering all perspectives on this complex issue.",
          impacts: {
            president: {
              weight: 0,
              reaction: "Wishes for stronger defense but understands",
            },
            cabinet: {
              state: { weight: 0, reaction: "Neutral reaction" },
            },
            publications: {},
            subgroups: {},
          },
        },
        {
          text: "I reject the premise of that question. Next question, please.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Likes the refusal to engage with criticism",
            },
            cabinet: {
              state: {
                weight: -1,
                reaction:
                  "Concerned about dismissing legitimate policy questions",
              },
            },
            publications: {},
            subgroups: {},
          },
        },
      ],
      followUps: {
        1: {
          text: "Can you specify which experts the President is consulting on {situation_title}?",
          answers: [
            {
              text: "The President is receiving regular briefings from our National Security Council, State Department, and intelligence agencies.",
              impacts: {
                president: { weight: 0 },
                cabinet: {
                  state: { weight: 1 },
                  defense: { weight: 1 },
                },
                publications: {},
              },
            },
            {
              text: "I'm not going to provide a specific list of advisors for security reasons.",
              impacts: {
                president: { weight: 0 },
                cabinet: {
                  state: { weight: -1 },
                },
                publications: {},
              },
            },
          ],
        },
      },
    },
  },

  // Scandal questions
  {
    text: "Can you clarify the administration's position on the recent {situation_title} issue?",
    situationType: SituationType.Scandal,
    data: {
      text: "Can you clarify the administration's position on the recent {situation_title} issue?",
      situationStage: 0,
      answers: [
        {
          text: "We take this matter seriously and have launched a thorough internal review.",
          impacts: {
            president: { weight: 0, reaction: "Accepts the measured response" },
            cabinet: {
              justice: {
                weight: 1,
                reaction: "Appreciates the serious approach",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 1,
                reaction: "Values the transparent approach",
              },
            },
          },
        },
        {
          text: "The reports on this issue contain significant inaccuracies, and we'll be addressing those soon.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Pleased with deflection of criticism",
            },
            cabinet: {
              justice: {
                weight: -1,
                reaction: "Concerned about potential coverup perception",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: -1,
                reaction: "Skeptical of denial without specifics",
              },
            },
          },
        },
        {
          text: "This is an ongoing matter that may involve legal proceedings, so I can't comment further at this time.",
          impacts: {
            president: { weight: 0, reaction: "Understands the legal caution" },
            cabinet: {
              justice: {
                weight: 2,
                reaction: "Very appreciative of respecting legal process",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: -1,
                reaction: "Frustrated by lack of transparency",
              },
            },
          },
        },
      ],
    },
  },

  // Economic questions
  {
    text: "How is the administration addressing public concerns about {situation_title}?",
    situationType: SituationType.Economic,
    data: {
      text: "How is the administration addressing public concerns about {situation_title}?",
      situationStage: 0,
      answers: [
        {
          text: "The President has directed the Treasury Secretary to implement immediate stabilizing measures.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Satisfied with the decisive response",
            },
            cabinet: {
              treasury: {
                weight: 2,
                reaction: "Pleased with the vote of confidence",
              },
            },
            publications: {},
            subgroups: {
              financial_market: {
                weight: 2,
                reaction: "Reassured by quick action",
              },
            },
          },
        },
        {
          text: "We're closely monitoring the situation and coordinating with financial regulators and market participants.",
          impacts: {
            president: { weight: 0, reaction: "Accepts cautious approach" },
            cabinet: {
              treasury: {
                weight: 1,
                reaction: "Appreciates the measured response",
              },
            },
            publications: {},
            subgroups: {
              financial_market: {
                weight: 0,
                reaction: "Wants more decisive action",
              },
            },
          },
        },
        {
          text: "Markets fluctuate naturally, and we don't comment on day-to-day movements.",
          impacts: {
            president: {
              weight: -1,
              reaction: "Concerned about appearing dismissive",
            },
            cabinet: {
              treasury: {
                weight: -2,
                reaction:
                  "Extremely frustrated with dismissal of serious concern",
              },
            },
            publications: {},
            subgroups: {
              financial_market: {
                weight: -3,
                reaction: "Alarmed by lack of concern",
              },
              middle_class: {
                weight: -2,
                reaction: "Worried about their savings and investments",
              },
            },
          },
        },
      ],
    },
  },

  // Security questions
  {
    text: "What steps is the administration taking to address {situation_title}?",
    situationType: SituationType.Security,
    data: {
      text: "What steps is the administration taking to address {situation_title}?",
      situationStage: 0,
      answers: [
        {
          text: "The President has convened the National Security Council and ordered immediate protective measures.",
          impacts: {
            president: {
              weight: 1,
              reaction: "Pleased with portrayal of leadership",
            },
            cabinet: {
              homeland: {
                weight: 1,
                reaction: "Appreciates highlighting their work",
              },
              defense: { weight: 1, reaction: "Satisfied with security focus" },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 2,
                reaction: "Reassured by quick, decisive action",
              },
            },
          },
        },
        {
          text: "We're working with relevant agencies and private sector partners to address this threat.",
          impacts: {
            president: { weight: 0, reaction: "Accepts the balanced response" },
            cabinet: {
              homeland: { weight: 0, reaction: "Neutral reaction" },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: 0,
                reaction: "Neither reassured nor concerned",
              },
            },
          },
        },
        {
          text: "For security reasons, I can't detail specific measures, but we are addressing the situation.",
          impacts: {
            president: {
              weight: -1,
              reaction: "Concerned about appearance of secrecy",
            },
            cabinet: {
              homeland: {
                weight: 1,
                reaction: "Appreciates protecting sensitive information",
              },
            },
            publications: {},
            subgroups: {
              middle_class: {
                weight: -1,
                reaction: "Worried by lack of transparency",
              },
            },
          },
        },
      ],
      followUps: {
        0: {
          text: "Are Americans at risk from {situation_title}, and should they take any precautions?",
          answers: [
            {
              text: "The immediate threat is contained, but we recommend standard cybersecurity practices for everyone.",
              impacts: {
                president: {
                  weight: 1,
                  reaction: "Pleased with balanced, informative response",
                },
                cabinet: {
                  homeland: {
                    weight: 2,
                    reaction: "Very satisfied with public guidance",
                  },
                },
                publications: {},
                subgroups: {
                  middle_class: {
                    weight: 2,
                    reaction: "Appreciates useful information",
                  },
                },
              },
            },
            {
              text: "We have no indication of broader risk to the public at this time.",
              impacts: {
                president: { weight: 0, reaction: "Neutral reaction" },
                cabinet: {
                  homeland: { weight: 0, reaction: "Neutral reaction" },
                },
                publications: {},
                subgroups: {
                  middle_class: {
                    weight: 0,
                    reaction: "Somewhat reassured but wants more detail",
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
];
