import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const taxpayerGolfCourseExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "tgc_con_q1",
      questions: {
        tgc_con_q1: {
          id: "tgc_con_q1",
          text: "Conservative media question using infrastructure funds to build a presidential golf course. Will the money be repaid?",
          depth: 0,
          answers: [
            {
              id: "tgc_con_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, Treasury will reimburse the diverted funds and institute tighter approval processes to prevent future misuse.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "tgc_con_q1_f1",
              outcomeModifiers: {
                tgc_funds_repaid: OutcomeModifierWeight.ModeratePositive,
                tgc_injunction_halts: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The project promised economic growth. Let's see the audit results before condemning a potential tourist draw.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "tgc_con_q1_f1",
              outcomeModifiers: {
                tgc_course_opens: OutcomeModifierWeight.SlightPositive,
                tgc_funds_repaid: OutcomeModifierWeight.SlightNegative,
                tgc_injunction_halts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Why raid infrastructure money for a vanity golf course? Isn't that a slap in the face to taxpayers?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "tgc_con_q1_f1",
              outcomeModifiers: {
                tgc_injunction_halts: OutcomeModifierWeight.ModeratePositive,
                tgc_funds_repaid: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        tgc_con_q1_f1: {
          id: "tgc_con_q1_f1",
          text: "Who authorized shifting the infrastructure funds toward the course?",
          depth: 1,
          answers: [
            {
              id: "tgc_con_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Treasury memos show the reallocation was signed off internally without public notice. Repayment plans are now in draft.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                tgc_funds_repaid: OutcomeModifierWeight.StrongPositive,
                tgc_injunction_halts: OutcomeModifierWeight.StrongNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The authorization trail is being reviewed. We'll release details when the audit concludes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                tgc_course_opens: OutcomeModifierWeight.SlightPositive,
                tgc_funds_repaid: OutcomeModifierWeight.SlightNegative,
                tgc_injunction_halts: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tgc_lib_q1",
      questions: {
        tgc_lib_q1: {
          id: "tgc_lib_q1",
          text: "Liberal news calls this project blatant self-dealing. Will courts step in to stop construction?",
          depth: 0,
          answers: [
            {
              id: "tgc_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "With infrastructure crumbling, how can you justify funneling resources to a presidential golf resort?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                tgc_injunction_halts: OutcomeModifierWeight.ModeratePositive,
                tgc_funds_repaid: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "If courts rule against the project, construction will stop and funds will be restored to infrastructure needs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                tgc_injunction_halts: OutcomeModifierWeight.ModeratePositive,
                tgc_funds_repaid: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "The golf course aims to boost tourism revenue that can help fund other projects. Let's not prejudge the benefits.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                tgc_course_opens: OutcomeModifierWeight.SlightPositive,
                tgc_funds_repaid: OutcomeModifierWeight.SlightNegative,
                tgc_injunction_halts: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "tgc_ind_q1",
      questions: {
        tgc_ind_q1: {
          id: "tgc_ind_q1",
          text: "Independent outlets wonder if this plan was ever legal. What oversight was skipped before approving the golf course?",
          depth: 0,
          answers: [
            {
              id: "tgc_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "Audits are underway. If misuse is confirmed, all funds will be repaid and new rules will prevent similar diversions.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                tgc_funds_repaid: OutcomeModifierWeight.ModeratePositive,
                tgc_injunction_halts: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "There is legal ambiguity here. The administration saw it as an economic catalyst, not a personal perk.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                tgc_course_opens: OutcomeModifierWeight.SlightPositive,
                tgc_funds_repaid: OutcomeModifierWeight.SlightNegative,
                tgc_injunction_halts: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tgc_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If courts block it, will taxpayers ever recover the money already spent on the course?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                tgc_injunction_halts: OutcomeModifierWeight.ModeratePositive,
                tgc_funds_repaid: OutcomeModifierWeight.ModerateNegative,
                tgc_course_opens: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
