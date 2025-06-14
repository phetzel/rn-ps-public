import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const vanityHistoryBookExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "vhb_inv_q1",
      questions: {
        vhb_inv_q1: {
          id: "vhb_inv_q1",
          text: "Investigative reporters say archives printed a glowing presidential bio under staff pressure. Did taxpayers pay for propaganda?",
          depth: 0,
          answers: [
            {
              id: "vhb_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "The biography was compiled by independent historians, not a vanity project. Printing costs came from the normal archives budget.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "vhb_inv_q1_f1",
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.SlightNegative,
                book_remains_rage: OutcomeModifierWeight.SlightPositive,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vhb_inv_q1_a2",
              type: AnswerType.Inform,
              text: "Our review found the printing used discretionary funds legally. The biography is part of a series; no rules were broken.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "vhb_inv_q1_f1",
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.ModerateNegative,
                book_remains_rage: OutcomeModifierWeight.ModeratePositive,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vhb_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Editor emails show a senior aide suggested praising language, but the budget line is legal. We'll return any funds if misuse is proven.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "vhb_inv_q1_f1",
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.StrongPositive,
                book_remains_rage: OutcomeModifierWeight.StrongNegative,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        vhb_inv_q1_f1: {
          id: "vhb_inv_q1_f1",
          text: "Sources say the order threatened funding cuts for refusal. Can you confirm these strong-arm tactics?",
          depth: 1,
          answers: [
            {
              id: "vhb_inv_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "This is about misuse of authority; we expect accountability if threats were made. Justice will share audit results soon.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.ModeratePositive,
                book_remains_rage: OutcomeModifierWeight.ModerateNegative,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vhb_inv_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "The archives remain independent. If any staffer pressured them, that person acted alone and will face discipline.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.SlightPositive,
                book_remains_rage: OutcomeModifierWeight.SlightNegative,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "vhb_con_q1",
      questions: {
        vhb_con_q1: {
          id: "vhb_con_q1",
          text: "Conservative outlets question spending for vanity literature. Why should taxpayers pay for the President's personal puff piece?",
          depth: 0,
          answers: [
            {
              id: "vhb_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Any promotional tone was unintended. We'll review distribution costs and ensure future materials meet standards.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.SlightPositive,
                book_remains_rage: OutcomeModifierWeight.SlightNegative,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vhb_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The biography highlights official milestones. It's hardly a personal puff piece; archival departments produce these for every administration.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.SlightNegative,
                book_remains_rage: OutcomeModifierWeight.SlightPositive,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "vhb_lib_q1",
      questions: {
        vhb_lib_q1: {
          id: "vhb_lib_q1",
          text: "Liberal press asks if rewriting history with taxpayer dollars undermines credibility. Will officials admit to vanity spending?",
          depth: 0,
          answers: [
            {
              id: "vhb_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, that edition crossed a line. We'll apologize, retract the book, and remind staff that archives must stay independent.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.StrongPositive,
                book_remains_rage: OutcomeModifierWeight.StrongNegative,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vhb_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The book is being reviewed. We expect clarifications, but it also highlights genuine achievements that deserve public attention.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                book_pulped_apology: OutcomeModifierWeight.ModerateNegative,
                book_remains_rage: OutcomeModifierWeight.ModeratePositive,
                satirical_rebuttal_bestseller: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
