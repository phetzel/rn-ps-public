import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const embassyExoticAnimalIncidentExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "eeai_inv_q1",
      questions: {
        eeai_inv_q1: {
          id: "eeai_inv_q1",
          text: "Why did our ambassador gift a protected elephant calf without proper permits? Was this sanctioned by the administration?",
          depth: 0,
          answers: [
            {
              id: "eeai_inv_q1_a1",
              type: AnswerType.Inform,
              text: "The gift was not cleared through official channels. We're coordinating with wildlife authorities to return the calf or secure legal status.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "eeai_inv_q1_f1",
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "The ambassador intended a goodwill gesture. We're reviewing the paperwork and working with local officials to resolve any breaches.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "eeai_inv_q1_f1",
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.SlightPositive,
                embassy_animal_uproar: OutcomeModifierWeight.SlightNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "The waiver email shows the calf was offered without proper CITES clearance. We're negotiating to either return it promptly or create a joint conservation effort.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "eeai_inv_q1_f1",
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.MajorPositive,
                embassy_animal_uproar: OutcomeModifierWeight.MajorNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        eeai_inv_q1_f1: {
          id: "eeai_inv_q1_f1",
          text: "Animal-rights groups claim this violates international law. Will anyone face disciplinary action?",
          depth: 1,
          answers: [
            {
              id: "eeai_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "We’re cooperating with investigators and reviewing the ambassador's conduct. Any violations will be addressed transparently.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "This was a lapse in protocol, not malicious trafficking. The ambassador may face censure, but our focus is repatriating the animal safely.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.SlightPositive,
                embassy_animal_uproar: OutcomeModifierWeight.SlightNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "eeai_lib_q1",
      questions: {
        eeai_lib_q1: {
          id: "eeai_lib_q1",
          text: "Is gifting a protected elephant calf tone-deaf to conservation efforts?",
          depth: 0,
          answers: [
            {
              id: "eeai_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We share concerns about wildlife protection. The calf is being cared for by experts until a legal resolution is reached.",
              impacts: { cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The ambassador misjudged the optics. We're focused on ensuring the calf's welfare while working out the legal details.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.SlightPositive,
                embassy_animal_uproar: OutcomeModifierWeight.SlightNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_lib_q1_a3",
              type: AnswerType.Inform,
              text: "State Department envoys are negotiating either the calf's return or a sanctioned sanctuary partnership with the host nation.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "eeai_con_q1",
      questions: {
        eeai_con_q1: {
          id: "eeai_con_q1",
          text: "Why are we meddling with exotic animals abroad when domestic issues need attention?",
          depth: 0,
          answers: [
            {
              id: "eeai_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Our ambassador sought to build goodwill. We're now redirecting focus to trade talks and ensuring no laws were broken.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.SlightPositive,
                embassy_animal_uproar: OutcomeModifierWeight.SlightNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_con_q1_a2",
              type: AnswerType.Reassure,
              text: "The Interior Department confirms the calf is safe and will either be returned or properly housed according to conservation laws.",
              impacts: { cabinet: { [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eeai_con_q1_a3",
              type: AnswerType.Inform,
              text: "Documents show the gift lacked proper clearance. We are cooperating with officials to resolve the violation and avoid future incidents.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                embassy_animal_returned: OutcomeModifierWeight.ModeratePositive,
                embassy_animal_uproar: OutcomeModifierWeight.ModerateNegative,
                embassy_animal_conservation_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
