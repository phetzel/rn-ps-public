import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const homelandCasinoScandalExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "hcs_inv_q1",
      questions: {
        hcs_inv_q1: {
          id: "hcs_inv_q1",
          text: "Investigators say the DHS chief used agency resources for weekend casino trips. Were surveillance tools misused?",
          depth: 0,
          answers: [
            {
              id: "hcs_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "Any leisure time was incidental to official meetings. The chief will fully cooperate with reviews of travel logs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "hcs_inv_q1_f1",
              outcomeModifiers: {
                hcs_suspension_fix: OutcomeModifierWeight.ModeratePositive,
                hcs_resignation_probe: OutcomeModifierWeight.ModerateNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Surveillance logs show repeated casino visits using government drivers. Investigators are evaluating potential misuse charges.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "hcs_inv_q1_f1",
              outcomeModifiers: {
                hcs_resignation_probe: OutcomeModifierWeight.StrongPositive,
                hcs_suspension_fix: OutcomeModifierWeight.StrongNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "If resources were diverted for gambling, shouldn't the chief step aside now and face consequences?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "hcs_inv_q1_f1",
              outcomeModifiers: {
                hcs_resignation_probe: OutcomeModifierWeight.SlightPositive,
                hcs_suspension_fix: OutcomeModifierWeight.SlightNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        hcs_inv_q1_f1: {
          id: "hcs_inv_q1_f1",
          text: "Will Justice release surveillance details confirming the casino trips?",
          depth: 1,
          answers: [
            {
              id: "hcs_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Justice is compiling the logs now. Once legal reviews finish, summaries will be public along with any disciplinary action.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hcs_suspension_fix: OutcomeModifierWeight.ModeratePositive,
                hcs_resignation_probe: OutcomeModifierWeight.ModerateNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Those details are part of an ongoing investigation. Premature release could compromise sensitive sources and methods.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hcs_reprimand_morale: OutcomeModifierWeight.SlightPositive,
                hcs_suspension_fix: OutcomeModifierWeight.SlightNegative,
                hcs_resignation_probe: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hcs_con_q1",
      questions: {
        hcs_con_q1: {
          id: "hcs_con_q1",
          text: "Conservative media question if the DHS chief gambling on the taxpayer dime proves the agency is out of control.",
          depth: 0,
          answers: [
            {
              id: "hcs_con_q1_a1",
              type: AnswerType.Reassure,
              text: "The review will hold officials accountable. New travel rules are being put in place to prevent misuse going forward.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hcs_suspension_fix: OutcomeModifierWeight.ModeratePositive,
                hcs_resignation_probe: OutcomeModifierWeight.ModerateNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Will the Homeland Security chief face criminal charges for wasting taxpayer resources on gambling trips?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                hcs_resignation_probe: OutcomeModifierWeight.SlightPositive,
                hcs_suspension_fix: OutcomeModifierWeight.SlightNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's remember previous administrations had their own travel controversies. Our focus is national security, not casino gossip.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hcs_reprimand_morale: OutcomeModifierWeight.SlightPositive,
                hcs_suspension_fix: OutcomeModifierWeight.SlightNegative,
                hcs_resignation_probe: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "hcs_lib_q1",
      questions: {
        hcs_lib_q1: {
          id: "hcs_lib_q1",
          text: "Liberal outlets argue the DHS chief abused power for personal fun. Should the president demand a resignation?",
          depth: 0,
          answers: [
            {
              id: "hcs_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "Gambling with taxpayer resources is unacceptable. Why hasn't the administration forced the chief to quit?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                hcs_resignation_probe: OutcomeModifierWeight.ModeratePositive,
                hcs_suspension_fix: OutcomeModifierWeight.ModerateNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The president expects full accountability. Pending the investigation, appropriate disciplinary actions will follow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                hcs_suspension_fix: OutcomeModifierWeight.ModeratePositive,
                hcs_resignation_probe: OutcomeModifierWeight.ModerateNegative,
                hcs_reprimand_morale: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "hcs_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's see the final report before demanding resignations. Security operations must stay focused during the review.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                hcs_reprimand_morale: OutcomeModifierWeight.SlightPositive,
                hcs_suspension_fix: OutcomeModifierWeight.SlightNegative,
                hcs_resignation_probe: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
