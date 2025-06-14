import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const luxuryDoomsdayBunkerExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ldb_inv_q1",
      questions: {
        ldb_inv_q1: {
          id: "ldb_inv_q1",
          text: "Investigative reporters discovered a gold-plated bunker funded by diplomatic accounts. Did the Secretary plan a private escape pod?",
          depth: 0,
          answers: [
            {
              id: "ldb_inv_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, there is a bunker, built from diplomatic security funds, but we halted work once questions arose. It never served as a private palace.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "ldb_inv_q1_f1",
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.StrongPositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.StrongNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_inv_q1_a2",
              type: AnswerType.Deny,
              text: "No secret escape pod exists; it was a hypothetical safe room for embassy staff. The gold finish came from a contractor's flamboyant brochure.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              followUpId: "ldb_inv_q1_f1",
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_probe_drags: OutcomeModifierWeight.ModeratePositive,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Invoices show funds earmarked for 'seismic shelter upgrade' after last year’s quake drill. The structure failed tests and is being dismantled.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "ldb_inv_q1_f1",
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.StrongPositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.StrongNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ldb_inv_q1_f1: {
          id: "ldb_inv_q1_f1",
          text: "Why were taxpayers billed for luxury fixtures like a gold-plated panic room sofa?",
          depth: 1,
          answers: [
            {
              id: "ldb_inv_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "The invoices are being reversed; only standard safety upgrades will remain. Treasury will reimburse misused funds immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModeratePositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Are we really quibbling over fancy couches while global crises loom? The focus should be on readiness, not décor gossip.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.SlightNegative,
                luxury_bunker_probe_drags: OutcomeModifierWeight.Neutral,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "ldb_con_q1",
      questions: {
        ldb_con_q1: {
          id: "ldb_con_q1",
          text: "How can taxpayers trust your team after blowing funds on a deluxe bunker fit for royalty?",
          depth: 0,
          answers: [
            {
              id: "ldb_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Treasury has frozen the remaining budget and is launching a review. No further spending happens until every dollar is accounted for.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModeratePositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The bunker idea started years ago under a different administration. We're fixing it now; focus should be on tomorrow's security, not yesterday's plans.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.SlightNegative,
                luxury_bunker_probe_drags: OutcomeModifierWeight.SlightPositive,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_con_q1_a3",
              type: AnswerType.Admit,
              text: "We mistakenly approved fancy features, but the core shelter served contingency planning. We're correcting invoices and cooperating with oversight.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModeratePositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ldb_lib_q1",
      questions: {
        ldb_lib_q1: {
          id: "ldb_lib_q1",
          text: "Liberal newspapers ask why the State Department built a secret bunker while embassy security budgets are slashed elsewhere.",
          depth: 0,
          answers: [
            {
              id: "ldb_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Resources were misallocated; we've redirected funds back to embassy protection and canceled the bunker extras. Transparency reports are forthcoming.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModeratePositive,
                luxury_bunker_probe_drags: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ldb_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury's review shows the bunker used leftover security grants, not embassy funds. Embassies see no cuts from this misstep.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.ModerateNegative,
                luxury_bunker_probe_drags: OutcomeModifierWeight.Neutral,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.ModeratePositive,
              },
            },
            {
              id: "ldb_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "The Secretary loves public tours, not underground hideouts. Let's not let conspiracy fantasies derail real policy debates.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                luxury_bunker_scrapped: OutcomeModifierWeight.SlightNegative,
                luxury_bunker_probe_drags: OutcomeModifierWeight.SlightPositive,
                luxury_bunker_safety_narrative: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
