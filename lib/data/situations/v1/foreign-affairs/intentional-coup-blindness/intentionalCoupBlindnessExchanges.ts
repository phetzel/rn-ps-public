import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const intentionalCoupBlindnessExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "icb_lib_q1",
      questions: {
        icb_lib_q1: {
          id: "icb_lib_q1",
          text: "Rights groups say you're ignoring Oilistan's coup for cheaper oil. Isn't this blatant hypocrisy?",
          depth: 0,
          answers: [
            {
              id: "icb_lib_q1_a1",
              type: AnswerType.Deflect,
              text: "We support democratic values everywhere, but we're monitoring events carefully before making hasty decisions that could harm citizens there.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              followUpId: "icb_lib_q1_f1",
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_lib_q1_a2",
              type: AnswerType.Admit,
              text: "We regret appearing silent. The State Department is reaching out to democratic partners to evaluate steps that uphold human rights and energy stability.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "icb_lib_q1_f1",
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.ModeratePositive,
                coup_blindness_sanctions: OutcomeModifierWeight.ModerateNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Our classified cables show coup leaders promised uninterrupted oil in exchange for recognition. We're reviewing potential regional instability if the deal sours.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "icb_lib_q1_f1",
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.MajorPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.MajorNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        icb_lib_q1_f1: {
          id: "icb_lib_q1_f1",
          text: "Will the US consider sanctions if abuses escalate?",
          depth: 1,
          answers: [
            {
              id: "icb_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Sanctions remain on the table. We're coordinating with allies to pressure a peaceful resolution while safeguarding energy supplies.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.ModeratePositive,
                coup_blindness_sanctions: OutcomeModifierWeight.ModerateNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We're still gathering intel. Jumping to sanctions talk now could provoke further instability and hurt ordinary Oilistanis.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "icb_con_q1",
      questions: {
        icb_con_q1: {
          id: "icb_con_q1",
          text: "Why hasn't the administration recognized the new Oilistan leadership? Are you risking vital oil supplies?",
          depth: 0,
          answers: [
            {
              id: "icb_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Oil flows remain steady. We're assessing the situation to ensure long-term stability and protect our strategic interests.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_con_q1_a2",
              type: AnswerType.Deflect,
              text: "We're not ignoring events. Recognizing any regime must come after a careful legal review and consultation with regional partners.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.ModeratePositive,
                coup_blindness_sanctions: OutcomeModifierWeight.ModerateNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Jumping to condemnation could imperil our troops protecting pipelines. Strategic patience serves American interests best right now.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "icb_ind_q1",
      questions: {
        icb_ind_q1: {
          id: "icb_ind_q1",
          text: "Some allies claim you secretly backed the coup. What's your response to rumors of U.S. fingerprints all over Oilistan?",
          depth: 0,
          answers: [
            {
              id: "icb_ind_q1_a1",
              type: AnswerType.Deny,
              text: "We categorically deny orchestrating the coup. Our focus is regional stability and the safety of Oilistan's citizens.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "icb_ind_q1_f1",
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Rumors swirl whenever regimes change. We're keeping all options open to support stability without jumping to conclusions.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "icb_ind_q1_f1",
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        icb_ind_q1_f1: {
          id: "icb_ind_q1_f1",
          text: "Are U.S. forces securing oil fields while democracy groups are silenced?",
          depth: 1,
          answers: [
            {
              id: "icb_ind_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Our troops protect existing contracts and civilians. We're pressing all parties toward elections as soon as conditions allow.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.ModeratePositive,
                coup_blindness_sanctions: OutcomeModifierWeight.ModerateNegative,
                coup_blindness_backfires: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "icb_ind_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Security details are classified, but we remain committed to an Oilistan led by its people, not by outside forces.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                coup_blindness_oil_backlash: OutcomeModifierWeight.SlightNegative,
                coup_blindness_backfires: OutcomeModifierWeight.SlightPositive,
                coup_blindness_sanctions: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
