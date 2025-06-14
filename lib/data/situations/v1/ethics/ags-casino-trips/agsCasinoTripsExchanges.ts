import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const agsCasinoTripsExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "act_con_q1",
      questions: {
        act_con_q1: {
          id: "act_con_q1",
          text: "Conservative outlets claim the AG used DOJ jets for Vegas gambling weekends. Will they pay back taxpayers?",
          depth: 0,
          answers: [
            {
              id: "act_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Yes. The Attorney General will reimburse the flights and a new review is tightening rules for future travel.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "act_con_q1_f1",
              outcomeModifiers: {
                casino_flights_repaid: OutcomeModifierWeight.ModeratePositive,
                casino_ig_ouster: OutcomeModifierWeight.ModerateNegative,
                casino_rules_tightened: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Travel finances are being addressed appropriately. Let's not sensationalize a few weekend trips.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "act_con_q1_f1",
              outcomeModifiers: {
                casino_rules_tightened: OutcomeModifierWeight.SlightPositive,
                casino_flights_repaid: OutcomeModifierWeight.SlightNegative,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_con_q1_a3",
              type: AnswerType.Challenge,
              text: "These trips included outreach events. Calling for resignation is just partisan grandstanding.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "act_con_q1_f1",
              outcomeModifiers: {
                casino_ig_ouster: OutcomeModifierWeight.SlightNegative,
                casino_flights_repaid: OutcomeModifierWeight.Neutral,
                casino_rules_tightened: OutcomeModifierWeight.SlightPositive,
              },
            },
          ],
        },
        act_con_q1_f1: {
          id: "act_con_q1_f1",
          text: "Were any staff punished for approving these weekend flights?",
          depth: 1,
          answers: [
            {
              id: "act_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "The internal review found procedure gaps. Disciplinary letters are being issued and policies updated.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                casino_rules_tightened: OutcomeModifierWeight.ModeratePositive,
                casino_flights_repaid: OutcomeModifierWeight.ModerateNegative,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Personnel matters remain internal. The focus is on fixing travel policy going forward, not public shaming.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                casino_ig_ouster: OutcomeModifierWeight.SlightNegative,
                casino_rules_tightened: OutcomeModifierWeight.SlightPositive,
                casino_flights_repaid: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "act_inv_q1",
      questions: {
        act_inv_q1: {
          id: "act_inv_q1",
          text: "Investigators obtained flight logs showing weekend Vegas excursions. Was any official business conducted?",
          depth: 0,
          answers: [
            {
              id: "act_inv_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Flight logs show the AG met with state attorneys on crime initiatives, but the leisure time is being reimbursed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                casino_flights_repaid: OutcomeModifierWeight.StrongPositive,
                casino_ig_ouster: OutcomeModifierWeight.StrongNegative,
                casino_rules_tightened: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Those logs don't show personal expenses. Any recreation was off-duty and is now being reimbursed.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                casino_rules_tightened: OutcomeModifierWeight.SlightPositive,
                casino_flights_repaid: OutcomeModifierWeight.SlightNegative,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_inv_q1_a3",
              type: AnswerType.Reassure,
              text: "Official meetings did take place. Reimbursement and policy reviews show we're serious about preventing misuse.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                casino_rules_tightened: OutcomeModifierWeight.ModeratePositive,
                casino_flights_repaid: OutcomeModifierWeight.ModerateNegative,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "act_lib_q1",
      questions: {
        act_lib_q1: {
          id: "act_lib_q1",
          text: "Liberal media wonder if the AG's Vegas jet-setting shows disregard for justice reform and ethics.",
          depth: 0,
          answers: [
            {
              id: "act_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "Taking luxury flights while preaching reform reeks of hypocrisy. Why should anyone trust this AG now?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                casino_ig_ouster: OutcomeModifierWeight.SlightPositive,
                casino_flights_repaid: OutcomeModifierWeight.SlightNegative,
                casino_rules_tightened: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The AG is reimbursing the travel costs and backing new ethics guidelines. Mistakes happen, but reforms will stick.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                casino_rules_tightened: OutcomeModifierWeight.ModeratePositive,
                casino_flights_repaid: OutcomeModifierWeight.ModerateNegative,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "act_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "These flights were mostly legal and reimbursed. Let's keep attention on major justice initiatives, not tabloid gossip.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                casino_flights_repaid: OutcomeModifierWeight.SlightNegative,
                casino_rules_tightened: OutcomeModifierWeight.SlightPositive,
                casino_ig_ouster: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
