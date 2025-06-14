import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const hhsPharmaInsiderTradeExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "hpit_inv_q1",
      questions: {
        hpit_inv_q1: {
          id: "hpit_inv_q1",
          text: "Trade blotter shows the Health Secretary repeatedly bought pharma shares just before favorable rulings. Is this insider trading?",
          depth: 0,
          answers: [
            {
              id: "hpit_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "The secretary's investment adviser handles all trades. Any timing overlap is coincidental and under routine review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "hpit_inv_q1_f1",
              outcomeModifiers: {
                hpit_cleared_review: OutcomeModifierWeight.ModeratePositive,
                hpit_sec_resignation: OutcomeModifierWeight.ModerateNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Trade blotter subpoenaed by Justice shows purchases right before policy shifts. Investigators are weighing charges.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "hpit_inv_q1_f1",
              outcomeModifiers: {
                hpit_sec_resignation: OutcomeModifierWeight.StrongPositive,
                hpit_cleared_review: OutcomeModifierWeight.StrongNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "Blind trusts won't cut it. When trades happen right after secret meetings, how can you dismiss insider suspicion?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "hpit_inv_q1_f1",
              outcomeModifiers: {
                hpit_case_tossed: OutcomeModifierWeight.SlightPositive,
                hpit_cleared_review: OutcomeModifierWeight.SlightNegative,
                hpit_sec_resignation: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        hpit_inv_q1_f1: {
          id: "hpit_inv_q1_f1",
          text: "Will Justice publish those blotter findings so the public can judge?",
          depth: 1,
          answers: [
            {
              id: "hpit_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Once charges are decided, the findings will be released with redactions. The timeline depends on the court's schedule.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                hpit_cleared_review: OutcomeModifierWeight.ModeratePositive,
                hpit_sec_resignation: OutcomeModifierWeight.ModerateNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The review process isn't finished. Premature disclosures could jeopardize due process, so we'll wait.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hpit_case_tossed: OutcomeModifierWeight.SlightPositive,
                hpit_cleared_review: OutcomeModifierWeight.SlightNegative,
                hpit_sec_resignation: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hpit_lib_q1",
      questions: {
        hpit_lib_q1: {
          id: "hpit_lib_q1",
          text: "Liberal papers claim this proves collusion with big pharma. Should the Secretary resign now?",
          depth: 0,
          answers: [
            {
              id: "hpit_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "This pattern screams corruption. Without a resignation, why should the public trust any drug approval?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                hpit_sec_resignation: OutcomeModifierWeight.ModeratePositive,
                hpit_cleared_review: OutcomeModifierWeight.ModerateNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "An independent review is underway. If wrongdoing is confirmed, resignations will follow and reforms will be swift.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                hpit_cleared_review: OutcomeModifierWeight.ModeratePositive,
                hpit_sec_resignation: OutcomeModifierWeight.ModerateNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's see the final report before calling for anyone's head. The Secretary remains focused on public health priorities.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hpit_case_tossed: OutcomeModifierWeight.SlightPositive,
                hpit_cleared_review: OutcomeModifierWeight.SlightNegative,
                hpit_sec_resignation: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hpit_con_q1",
      questions: {
        hpit_con_q1: {
          id: "hpit_con_q1",
          text: "Conservative outlets say this scandal shows government can't manage healthcare. Will reforms follow?",
          depth: 0,
          answers: [
            {
              id: "hpit_con_q1_a1",
              type: AnswerType.Reassure,
              text: "The review will clarify any wrongdoing, and we'll implement strict trading rules to restore confidence in healthcare oversight.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                hpit_cleared_review: OutcomeModifierWeight.ModeratePositive,
                hpit_sec_resignation: OutcomeModifierWeight.ModerateNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_con_q1_a2",
              type: AnswerType.Challenge,
              text: "If insider trading happened, will anyone face jail time or is this another case of elites skirting the law?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                hpit_sec_resignation: OutcomeModifierWeight.SlightPositive,
                hpit_cleared_review: OutcomeModifierWeight.SlightNegative,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hpit_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Past administrations faced similar claims. Let's focus on making healthcare affordable instead of political theater.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hpit_cleared_review: OutcomeModifierWeight.SlightNegative,
                hpit_sec_resignation: OutcomeModifierWeight.SlightPositive,
                hpit_case_tossed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
