import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const treasuryInsiderTradingExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "tit_inv_q1",
      questions: {
        tit_inv_q1: {
          id: "tit_inv_q1",
          text: "Investigators link Treasury trades to policy meetings. Did officials exploit inside knowledge for profit?",
          depth: 0,
          answers: [
            {
              id: "tit_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "Officials used blind trusts. Any overlap between meetings and trades is coincidental and under independent review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "tit_inv_q1_f1",
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.ModeratePositive,
                insider_guilty_resignation: OutcomeModifierWeight.ModerateNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Subpoena logs reveal unusual trading patterns soon after closed-door meetings. Investigations are ongoing.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "tit_inv_q1_f1",
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.StrongNegative,
                insider_guilty_resignation: OutcomeModifierWeight.StrongPositive,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "Blind trusts aside, how can taxpayers trust officials who profit while crafting policy?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "tit_inv_q1_f1",
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.SlightNegative,
                insider_guilty_resignation: OutcomeModifierWeight.Neutral,
                insider_hung_jury: OutcomeModifierWeight.SlightPositive,
              },
            },
          ],
        },
        tit_inv_q1_f1: {
          id: "tit_inv_q1_f1",
          text: "Will Treasury release trading records to prove no wrongdoing?",
          depth: 1,
          answers: [
            {
              id: "tit_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Justice is coordinating with the SEC. Records will be released after the legal review concludes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.ModeratePositive,
                insider_guilty_resignation: OutcomeModifierWeight.ModerateNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Those records contain sensitive financial data. We'll comply with investigators but won't fuel speculation.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.SlightPositive,
                insider_guilty_resignation: OutcomeModifierWeight.SlightNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tit_lib_q1",
      questions: {
        tit_lib_q1: {
          id: "tit_lib_q1",
          text: "Liberal papers wonder if insider trading proves corruption runs deep. Should the officials resign?",
          depth: 0,
          answers: [
            {
              id: "tit_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "Public confidence is shattered. Without resignations, why should anyone believe Treasury isn't gaming the system?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.SlightNegative,
                insider_guilty_resignation: OutcomeModifierWeight.SlightPositive,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "An ethics board review is underway. If wrongdoing is found, resignations will follow and reforms will be swift.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.ModeratePositive,
                insider_guilty_resignation: OutcomeModifierWeight.ModerateNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_lib_q1_a3",
              type: AnswerType.Deny,
              text: "These trades were legal and disclosed. We won't encourage trial by headline when regulators found no violations yet.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.ModeratePositive,
                insider_guilty_resignation: OutcomeModifierWeight.ModerateNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "tit_con_q1",
      questions: {
        tit_con_q1: {
          id: "tit_con_q1",
          text: "Conservative media question if this insider trading case proves Treasury can't be trusted with the economy.",
          depth: 0,
          answers: [
            {
              id: "tit_con_q1_a1",
              type: AnswerType.Reassure,
              text: "The ethics board review will clear the officials soon. Treasury remains focused on a stable economy and open markets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.ModeratePositive,
                insider_guilty_resignation: OutcomeModifierWeight.ModerateNegative,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_con_q1_a2",
              type: AnswerType.Challenge,
              text: "If found guilty, will Treasury leaders face jail time or just a slap on the wrist?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.SlightNegative,
                insider_guilty_resignation: OutcomeModifierWeight.SlightPositive,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "tit_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Past administrations had similar accusations. Let's focus on policies that grow the economy instead of political theater.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                insider_cleared_by_board: OutcomeModifierWeight.SlightNegative,
                insider_guilty_resignation: OutcomeModifierWeight.SlightPositive,
                insider_hung_jury: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
