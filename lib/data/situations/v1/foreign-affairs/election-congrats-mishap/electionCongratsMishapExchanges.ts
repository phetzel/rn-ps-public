import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const electionCongratsMishapExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "ecm_inv_q1",
      questions: {
        ecm_inv_q1: {
          id: "ecm_inv_q1",
          text: "You congratulated the losing candidate and hinted at fraud. Did you have intel or was it a mistake?",
          depth: 0,
          answers: [
            {
              id: "ecm_inv_q1_a1",
              type: AnswerType.Admit,
              text: "It was an unfortunate mistake. Staff gave the President outdated results, and he corrected the record as soon as we realized.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "ecm_inv_q1_f1",
              outcomeModifiers: {
                ecm_correction_ties_hold:
                  OutcomeModifierWeight.ModeratePositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.ModerateNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "We congratulated based on preliminary data. The focus now is supporting a peaceful transition, not reliving the mix-up.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ecm_inv_q1_f1",
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightPositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The transcript shows he read from an outdated briefing. A correction cable went out within minutes to the rightful winner.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "ecm_inv_q1_f1",
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.MajorPositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.MajorNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ecm_inv_q1_f1: {
          id: "ecm_inv_q1_f1",
          text: "Will this gaffe strain relations with the actual winner's government?",
          depth: 1,
          answers: [
            {
              id: "ecm_inv_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Our ambassador is already meeting with the elected administration to reaffirm respect. We expect relations to remain solid.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ecm_correction_ties_hold:
                  OutcomeModifierWeight.ModeratePositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.ModerateNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "The slip won't derail diplomacy; the real story is our commitment to mutual trade and security.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightNegative,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightPositive,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ecm_con_q1",
      questions: {
        ecm_con_q1: {
          id: "ecm_con_q1",
          text: "By congratulating the loser, did the President accidentally endorse election fraud abroad?",
          depth: 0,
          answers: [
            {
              id: "ecm_con_q1_a1",
              type: AnswerType.Challenge,
              text: "The President relied on outdated info. He quickly corrected it, so accusations of endorsing fraud are nonsense.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightPositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_con_q1_a2",
              type: AnswerType.Deflect,
              text: "We congratulated the people for turning out. Let's not misrepresent that as taking sides.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightPositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_con_q1_a3",
              type: AnswerType.Inform,
              text: "Justice officials confirm there is no evidence of fraud. We acknowledged the correct winner immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ecm_correction_ties_hold:
                  OutcomeModifierWeight.ModeratePositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.ModerateNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ecm_lib_q1",
      questions: {
        ecm_lib_q1: {
          id: "ecm_lib_q1",
          text: "Opponents call this a reckless smear of their election. How will you fix diplomatic ties now?",
          depth: 0,
          answers: [
            {
              id: "ecm_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We issued an apology to the rightful leader and reaffirmed our respect for their democratic choice.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                ecm_correction_ties_hold:
                  OutcomeModifierWeight.ModeratePositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.ModerateNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The misstatement was brief. What's important is we stand with the elected government now.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightPositive,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightNegative,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Critics twisting this flub into a conspiracy should look at the swift correction we made.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_correction_ties_hold: OutcomeModifierWeight.SlightNegative,
                ecm_ambassador_recalled: OutcomeModifierWeight.SlightPositive,
                ecm_disinfo_spreads: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
