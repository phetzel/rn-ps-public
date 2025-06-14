import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const undercoverSelfieScandalExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "uss_inv_q1",
      questions: {
        uss_inv_q1: {
          id: "uss_inv_q1",
          text: "A staffer's selfie exposed a covert base location. How did such a lapse get past your security protocols?",
          depth: 0,
          answers: [
            {
              id: "uss_inv_q1_a1",
              type: AnswerType.Admit,
              text: "We immediately removed the image and relocated personnel. An internal review is underway to tighten social media guidelines.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "uss_inv_q1_f1",
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.ModeratePositive,
                selfie_ops_compromised: OutcomeModifierWeight.ModerateNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "The post was up briefly and we coordinated with tech firms to scrub copies. Operational security remains intact.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "uss_inv_q1_f1",
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Defense logs confirm the base was evacuated within hours. No sensitive equipment remained on site by sunrise.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "uss_inv_q1_f1",
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.MajorPositive,
                selfie_ops_compromised: OutcomeModifierWeight.MajorNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        uss_inv_q1_f1: {
          id: "uss_inv_q1_f1",
          text: "Will anyone face disciplinary action for this security breach?",
          depth: 1,
          answers: [
            {
              id: "uss_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "The Defense Department is considering reprimands and mandatory training to ensure this never happens again.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.ModeratePositive,
                selfie_ops_compromised: OutcomeModifierWeight.ModerateNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We won't discuss personnel matters, but procedures are being updated to prevent any repeat incidents.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "uss_con_q1",
      questions: {
        uss_con_q1: {
          id: "uss_con_q1",
          text: "Does this blunder prove the administration is careless with military secrets?",
          depth: 0,
          answers: [
            {
              id: "uss_con_q1_a1",
              type: AnswerType.Challenge,
              text: "One careless selfie doesn't define our security record. We acted swiftly and no missions were compromised.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Defense relocated the base immediately. Allies have been briefed, and operations continue without interruption.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.ModeratePositive,
                selfie_ops_compromised: OutcomeModifierWeight.ModerateNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The individual responsible has been disciplined. Our focus is preventing leaks, not dwelling on a single misstep.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "uss_lib_q1",
      questions: {
        uss_lib_q1: {
          id: "uss_lib_q1",
          text: "Critics call the selfie scandal a sign of reckless social media habits. What safeguards are in place now?",
          depth: 0,
          answers: [
            {
              id: "uss_lib_q1_a1",
              type: AnswerType.Inform,
              text: "New restrictions on personal devices near sensitive sites take effect immediately, along with mandatory security briefings for staff.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "uss_lib_q1_f1",
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.ModeratePositive,
                selfie_ops_compromised: OutcomeModifierWeight.ModerateNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The staffer faces disciplinary review. Let's remember our administration has invested heavily in cybersecurity across government.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "uss_lib_q1_f1",
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        uss_lib_q1_f1: {
          id: "uss_lib_q1_f1",
          text: "Was this staffer properly vetted before being near a classified site?",
          depth: 1,
          answers: [
            {
              id: "uss_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Yes. The individual passed background checks. We’re tightening training to ensure awareness of photo restrictions.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uss_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We can’t discuss personnel details but we’re reviewing protocols to prevent any recurrence of this security oversight.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                selfie_base_relocated: OutcomeModifierWeight.SlightNegative,
                selfie_scrubbed_fast: OutcomeModifierWeight.SlightPositive,
                selfie_ops_compromised: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
