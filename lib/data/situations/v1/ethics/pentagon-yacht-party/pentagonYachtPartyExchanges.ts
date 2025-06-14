import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const pentagonYachtPartyExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pyp_con_q1",
      questions: {
        pyp_con_q1: {
          id: "pyp_con_q1",
          text: "Taxpayers are furious about a Pentagon yacht party with defense contractors. Who authorized this luxury bash?",
          depth: 0,
          answers: [
            {
              id: "pyp_con_q1_a1",
              type: AnswerType.Admit,
              text: "The event was ill-advised. Officials are reimbursing costs, and a warning letter has been issued to all attendees.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pyp_con_q1_f1",
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.ModeratePositive,
                yacht_house_hearings: OutcomeModifierWeight.ModerateNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury confirms repayments are underway. No taxpayer money will ultimately be spent on the yacht party.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pyp_con_q1_f1",
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.StrongPositive,
                yacht_house_hearings: OutcomeModifierWeight.StrongNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_con_q1_a3",
              type: AnswerType.Deflect,
              text: "This was a morale event planned long ago. Let's not blow it out of proportion when more pressing threats loom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "pyp_con_q1_f1",
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.SlightNegative,
                yacht_house_hearings: OutcomeModifierWeight.SlightPositive,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pyp_con_q1_f1: {
          id: "pyp_con_q1_f1",
          text: "Why were defense contractors footing the entertainment bill?",
          depth: 1,
          answers: [
            {
              id: "pyp_con_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "The party manifest shows contractors paid for catering. Officials signed IOUs to reimburse every cent after media inquiries.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.StrongPositive,
                yacht_house_hearings: OutcomeModifierWeight.StrongNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Contractors always cozy up to officials, but this party crossed a line. Shouldn't someone be fired?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.SlightNegative,
                yacht_house_hearings: OutcomeModifierWeight.Neutral,
                yacht_public_memes: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "pyp_lib_q1",
      questions: {
        pyp_lib_q1: {
          id: "pyp_lib_q1",
          text: "Liberal outlets slam the yacht party as proof of a revolving door with contractors. How will the Pentagon regain trust?",
          depth: 0,
          answers: [
            {
              id: "pyp_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We regret the optics. Reimbursements are happening, and new ethics rules for social events will be issued.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.ModeratePositive,
                yacht_house_hearings: OutcomeModifierWeight.ModerateNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury will publish reimbursement receipts. We aim to prevent future conflicts with stricter oversight.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.ModeratePositive,
                yacht_house_hearings: OutcomeModifierWeight.ModerateNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_lib_q1_a3",
              type: AnswerType.Deny,
              text: "This was not a bribe-fest. It was a poorly timed morale outing, and we have already addressed costs.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.SlightNegative,
                yacht_house_hearings: OutcomeModifierWeight.SlightPositive,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pyp_ind_q1",
      questions: {
        pyp_ind_q1: {
          id: "pyp_ind_q1",
          text: "Independent reporters ask whether this yacht party signals deeper spending problems. What's being done?",
          depth: 0,
          answers: [
            {
              id: "pyp_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We're reviewing all entertainment spending. Any misuse will be repaid and new guidelines will be implemented immediately.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.ModeratePositive,
                yacht_house_hearings: OutcomeModifierWeight.ModerateNegative,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pyp_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Why should the public believe a few repayments fix systemic coziness with contractors?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.SlightNegative,
                yacht_house_hearings: OutcomeModifierWeight.Neutral,
                yacht_public_memes: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "pyp_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "The Pentagon hosts many events. This one stood out because it was off base. Lessons learned, moving forward.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                yacht_repayment_warning: OutcomeModifierWeight.SlightNegative,
                yacht_house_hearings: OutcomeModifierWeight.SlightPositive,
                yacht_public_memes: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
