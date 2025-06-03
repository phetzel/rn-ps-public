import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const threeAmTweetstormExchanges: ExchangeData[] = [
  /* ───── Investigative outlet ───── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "tat_inv_q1",
      questions: {
        tat_inv_q1: {
          id: "tat_inv_q1",
          text: "At 3 a.m. the President claimed ‘cheese barons control the weather.’ Were advisers consulted, and is an internal review under way?",
          depth: 0,
          answers: [
            {
              id: "tat_inv_q1_a1",
              type: AnswerType.Reassure, // Homeland
              text: "No classified briefs support that claim. An internal communication review is under way, and protocols now gate unscheduled posts.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.ModeratePositive, // +6
                tat_conspiracy_trend: OutcomeModifierWeight.ModerateNegative, // −6
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_inv_q1_a2",
              type: AnswerType.Deflect, // President
              text: "Sometimes creativity strikes before sunrise. The real story is Big Dairy’s lobbying power—worth investigating, don’t you think?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                tat_conspiracy_trend: OutcomeModifierWeight.SlightPositive, // +4
                tat_walked_back: OutcomeModifierWeight.SlightNegative, // −4
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_inv_q1_a3",
              type: AnswerType.Inform, // HHS factual
              text: "No link exists between cheese production and meteorology. HHS will publish a myth-busting brief and direct citizens to reputable science sources.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.StrongPositive, // +8
                tat_conspiracy_trend: OutcomeModifierWeight.StrongNegative, // −8
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Conservative outlet ───── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "tat_con_q1",
      questions: {
        tat_con_q1: {
          id: "tat_con_q1",
          text: "Unfiltered 3 a.m. tweets embarrass the nation. Will the White House finally take away the President’s phone at night?",
          depth: 0,
          answers: [
            {
              id: "tat_con_q1_a1",
              type: AnswerType.Reassure, // Homeland again
              text: "A secure scheduling feature now delays posts until staff review them. Night-time phone stays, but impulsive send buttons do not.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.ModeratePositive, // +6
                tat_conspiracy_trend: OutcomeModifierWeight.ModerateNegative, // −6
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_con_q1_a2",
              type: AnswerType.Challenge, // President
              text: "Leadership never sleeps. If a 3 a.m. idea saves Americans, I’ll keep tweeting at dawn, dusk, or dinner—phone stays in my hand.",
              impacts: {
                president: { weight: ExchangeImpactWeight.StronglyPositive },
              },
              outcomeModifiers: {
                tat_conspiracy_trend: OutcomeModifierWeight.SlightPositive, // +4
                tat_walked_back: OutcomeModifierWeight.SlightNegative, // −4
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_con_q1_a3",
              type: AnswerType.Inform, // HHS late-night health note
              text: "Sleep experts advise device downtime. The President supports new public guidance on healthy tech habits—even for leaders.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.StrongPositive, // +8
                tat_conspiracy_trend: OutcomeModifierWeight.StrongNegative, // −8
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Liberal outlet ───── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "tat_lib_q1",
      questions: {
        tat_lib_q1: {
          id: "tat_lib_q1",
          text: "Mental-health advocates worry the 3 a.m. tweets reflect exhaustion. How is the administration supporting the President’s well-being?",
          depth: 0,
          answers: [
            {
              id: "tat_lib_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "The President undergoes regular medical checks. A new schedule now builds protected sleep blocks, and staff handle non-urgent posts.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.ModeratePositive, // +6
                tat_conspiracy_trend: OutcomeModifierWeight.ModerateNegative, // −6
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "I run on espresso and patriotism. If sleepless nights birthed light bulbs and vaccines, Twitter can handle my cheese musings.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                tat_meme_viral: OutcomeModifierWeight.SlightPositive, // +4
                tat_walked_back: OutcomeModifierWeight.SlightNegative, // −4
                tat_conspiracy_trend: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tat_lib_q1_a3",
              type: AnswerType.Admit,
              text: "We acknowledge timing matters. Future policy ideas will debut in daylight after expert vetting—no more 3 a.m. brainstorm tweets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                tat_walked_back: OutcomeModifierWeight.StrongPositive, // +8
                tat_conspiracy_trend: OutcomeModifierWeight.StrongNegative, // −8
                tat_meme_viral: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
