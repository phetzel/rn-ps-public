import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const pandaLoanDramaExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "pld_lib_q1",
      questions: {
        pld_lib_q1: {
          id: "pld_lib_q1",
          text: "Why demand the pandas be renamed after the First Kids? Isn't that petty brinkmanship?",
          depth: 0,
          answers: [
            {
              id: "pld_lib_q1_a1",
              type: AnswerType.Deflect,
              text: "The naming idea was lighthearted. Our priority is panda welfare and continued cultural exchange with their home nation.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "pld_lib_q1_f1",
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightPositive,
                pandas_return: OutcomeModifierWeight.SlightNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_lib_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Health reports show the pandas are thriving. Any decision will ensure they remain well cared for, regardless of naming talks.",
              impacts: { cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "pld_lib_q1_f1",
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.MajorPositive,
                pandas_return: OutcomeModifierWeight.MajorNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "Critics call this a childish stunt that jeopardizes diplomacy. Why play games with cherished animals?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              followUpId: "pld_lib_q1_f1",
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightNegative,
                pandas_return: OutcomeModifierWeight.SlightPositive,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pld_lib_q1_f1: {
          id: "pld_lib_q1_f1",
          text: "Will the pandas be taken away if the zoo refuses the new names?",
          depth: 1,
          answers: [
            {
              id: "pld_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "We're confident a friendly compromise will keep the pandas here while respecting both sides' wishes.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.ModeratePositive,
                pandas_return: OutcomeModifierWeight.ModerateNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Discussions are ongoing. We're exploring options so the pandas stay well cared for regardless of naming.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightPositive,
                pandas_return: OutcomeModifierWeight.SlightNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pld_con_q1",
      questions: {
        pld_con_q1: {
          id: "pld_con_q1",
          text: "Is threatening to ship the pandas back a sign of tough bargaining or a diplomatic misstep?",
          depth: 0,
          answers: [
            {
              id: "pld_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Strong negotiating shows we value our cultural assets. A little pressure may secure the naming rights we want.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightNegative,
                pandas_return: OutcomeModifierWeight.SlightPositive,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_con_q1_a2",
              type: AnswerType.Deflect,
              text: "It's a friendly dispute. We expect a compromise soon, so let's not overreact to negotiating tactics.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.ModeratePositive,
                pandas_return: OutcomeModifierWeight.ModerateNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_con_q1_a3",
              type: AnswerType.Reassure,
              text: "No one wants the pandas to leave. We're optimistic the lending nation will accept a light-hearted naming gesture.",
              impacts: { cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.ModeratePositive,
                pandas_return: OutcomeModifierWeight.ModerateNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pld_ind_q1",
      questions: {
        pld_ind_q1: {
          id: "pld_ind_q1",
          text: "Will panda diplomacy really hinge on naming rights, or is this a distraction from bigger issues?",
          depth: 0,
          answers: [
            {
              id: "pld_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Naming talks are part of a broader renewal agreement that covers funding and care. We're optimistic for a balanced deal.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.ModeratePositive,
                pandas_return: OutcomeModifierWeight.ModerateNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "The pandas are beloved. Regardless of names, both countries want them to stay and continue the goodwill they bring.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightPositive,
                pandas_return: OutcomeModifierWeight.SlightNegative,
                donor_buys_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pld_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If a wealthy donor buys naming rights, does that set a bad precedent for cultural exchanges?",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                panda_names_compromise: OutcomeModifierWeight.SlightNegative,
                donor_buys_rights: OutcomeModifierWeight.SlightPositive,
                pandas_return: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
