import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const defenseContractorKickbacksExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "dck_inv_q1",
      questions: {
        dck_inv_q1: {
          id: "dck_inv_q1",
          text: "Emails suggest Defense officials approved unneeded gear in return for contractor kickbacks. Who pocketed the money?",
          depth: 0,
          answers: [
            {
              id: "dck_inv_q1_a1",
              type: AnswerType.Deny,
              text: "No official accepted kickbacks. The emails show contractors boasting, not proof of wrongdoing by our staff.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "dck_inv_q1_f1",
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.SlightNegative,
                kickbacks_criminal_scandal: OutcomeModifierWeight.SlightPositive,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "DOJ subpoenas reveal a money trail from contractors to a few procurement officers. Prosecutions are underway.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "dck_inv_q1_f1",
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.StrongPositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.StrongNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's not leap to conclusions from incomplete emails. Our priority is national defense, not rumor-based witch hunts.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "dck_inv_q1_f1",
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.ModerateNegative,
                kickbacks_criminal_scandal: OutcomeModifierWeight.ModeratePositive,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        dck_inv_q1_f1: {
          id: "dck_inv_q1_f1",
          text: "Why were these pricey items purchased if the military never requested them?",
          depth: 1,
          answers: [
            {
              id: "dck_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "The gear came from a rushed budget cycle. Once irregularities surfaced, Justice recommended voiding the deals and clawing funds back.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.ModeratePositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.ModerateNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Contractors overhyped demand to line their pockets. We're cracking down, but don't paint every officer as crooked.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.SlightPositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.Neutral,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.SlightNegative,
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
      rootQuestionId: "dck_con_q1",
      questions: {
        dck_con_q1: {
          id: "dck_con_q1",
          text: "Why should taxpayers trust Defense after insiders took kickbacks for junk gear?",
          depth: 0,
          answers: [
            {
              id: "dck_con_q1_a1",
              type: AnswerType.Deny,
              text: "Allegations are exaggerated. We fired the bad actors and strengthened contracts to prevent repeat abuses.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.ModeratePositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.ModerateNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury is coordinating refunds and new oversight. Most funds will return to the treasury shortly.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.ModeratePositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.ModerateNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's not forget these contractors donated heavily to previous administrations too. Corruption is bipartisan history.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.SlightNegative,
                kickbacks_criminal_scandal: OutcomeModifierWeight.SlightPositive,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "dck_lib_q1",
      questions: {
        dck_lib_q1: {
          id: "dck_lib_q1",
          text: "Liberal commentators demand resignations over Defense kickbacks. Will heads roll?",
          depth: 0,
          answers: [
            {
              id: "dck_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, any official proven to have taken bribes will be removed immediately and face prosecution.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.ModeratePositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.ModerateNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Justice is already pursuing charges. Refunds are being processed and oversight reforms are underway.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.StrongPositive,
                kickbacks_criminal_scandal: OutcomeModifierWeight.StrongNegative,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "dck_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Resignations won't fix a culture of greed. We must overhaul procurement laws to stop this system-wide corruption.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                kickbacks_contracts_voided: OutcomeModifierWeight.SlightNegative,
                kickbacks_criminal_scandal: OutcomeModifierWeight.Neutral,
                kickbacks_inquiry_fizzles: OutcomeModifierWeight.SlightPositive,
              },
            },
          ],
        },
      },
    },
  },
];
