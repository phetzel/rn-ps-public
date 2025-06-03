import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const firstPetDoghouseExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "fpd_lib_q1",
      questions: {
        fpd_lib_q1: {
          id: "fpd_lib_q1",
          text: "The First Dog just ate a priceless presidential speech draft on live TV. How will you preserve history and prevent repeats?",
          depth: 0,
          answers: [
            {
              id: "fpd_lib_q1_a1",
              type: AnswerType.Inform, // HHS
              text: "Digital backups exist; conservators reconstruct the text today, and climate-controlled storage will house future drafts out of paw-reach.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.ModeratePositive, // +6
                fpd_historical_outcry: OutcomeModifierWeight.ModerateNegative, // −6
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "Our pup has impeccable taste—he devoured only the dull paragraphs! A polished rewrite will be even better and totally chew-proof.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.SlightPositive, // +4
                fpd_historical_outcry: OutcomeModifierWeight.SlightNegative, // −4
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Teleprompter backups recovered 83 % of the text; a parchment facsimile replaces the damaged pages tomorrow, ensuring zero historical loss.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.StrongPositive, // +8
                fpd_historical_outcry: OutcomeModifierWeight.StrongNegative, // −8
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "fpd_ind_q1",
      questions: {
        fpd_ind_q1: {
          id: "fpd_ind_q1",
          text: "Viewers loved the dog’s live apology video, yet archivists worry. What’s the cost of restoring or replacing the chewed document?",
          depth: 0,
          answers: [
            {
              id: "fpd_ind_q1_a1",
              type: AnswerType.Reassure, // State budget
              text: "Restoration is under $50 k, covered by cultural-preservation funds. No taxpayer hike, and a high-resolution copy will tour schools.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.ModeratePositive, // +6
                fpd_historical_outcry: OutcomeModifierWeight.ModerateNegative, // −6
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_ind_q1_a2",
              type: AnswerType.Deflect, // Homeland security
              text: "Important takeaway: security worked—the dog was the only breach. Humans and archives stay protected; chew-gates install tomorrow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.SlightPositive, // +4
                fpd_historical_outcry: OutcomeModifierWeight.SlightNegative, // −4
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_ind_q1_a3",
              type: AnswerType.Inform, // HHS fun fact
              text: "Chewed parchment bits are stable; labs can display them safely. If auctioned for charity, proceeds could fund history programs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_speech_fragments_auctioned:
                  OutcomeModifierWeight.SlightPositive, // +4
                fpd_public_laughs_moves_on: OutcomeModifierWeight.Neutral,
                fpd_historical_outcry: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "fpd_con_q1",
      questions: {
        fpd_con_q1: {
          id: "fpd_con_q1",
          text: "Critics say letting a dog near historic papers shows sloppy leadership. How will you reassure Americans their heritage is respected?",
          depth: 0,
          answers: [
            {
              id: "fpd_con_q1_a1",
              type: AnswerType.Reassure, // State protocol
              text: "New archival rules ban pets from document rooms, add glass cases, and expand digital backups. Our national story stays safe.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.StrongPositive, // +8
                fpd_historical_outcry: OutcomeModifierWeight.StrongNegative, // −8
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_con_q1_a2",
              type: AnswerType.Challenge, // President jab
              text: "Some prefer statues silent; we prefer leaders human—with lovable pets. America can handle a little drool on greatness.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.SlightNegative, // −4
                fpd_historical_outcry: OutcomeModifierWeight.SlightPositive, // +4
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fpd_con_q1_a3",
              type: AnswerType.Inform, // Homeland cost
              text: "Dog-free document zones cost under $10 k to retrofit nationwide. Security dogs exempt—no speeches on their snack list.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                fpd_public_laughs_moves_on:
                  OutcomeModifierWeight.ModeratePositive, // +6
                fpd_historical_outcry: OutcomeModifierWeight.ModerateNegative, // −6
                fpd_speech_fragments_auctioned: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
