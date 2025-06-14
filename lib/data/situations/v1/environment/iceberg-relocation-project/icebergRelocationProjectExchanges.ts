import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const icebergRelocationProjectExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "irp_con_q1",
      questions: {
        irp_con_q1: {
          id: "irp_con_q1",
          text: "Skeptics say towing icebergs wastes money and might break international law. Why push ahead with this far-fetched project?",
          depth: 0,
          answers: [
            {
              id: "irp_con_q1_a1",
              type: AnswerType.Deflect,
              text: "The plan's price tag is dwarfed by drought losses. We're using rented tugs and global goodwill, not emptying the treasury.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "irp_con_q1_f1",
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.SlightNegative,
                irp_melts_fiasco: OutcomeModifierWeight.SlightPositive,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Our neighbors signed on in principle. If they back out, they'll answer to thirsty farmers watching crops die.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              followUpId: "irp_con_q1_f1",
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_international_lawsuit: OutcomeModifierWeight.ModerateNegative,
                irp_melts_fiasco: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_con_q1_a3",
              type: AnswerType.Inform,
              text: "Contracts include liability clauses and joint studies. Breakthrough tow gear reduces melt so the gamble is calculated.",
              impacts: {
                cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "irp_con_q1_f1",
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_melts_fiasco: OutcomeModifierWeight.ModerateNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        irp_con_q1_f1: {
          id: "irp_con_q1_f1",
          text: "If the icebergs melt or lawsuits pile up, who pays the damages?",
          depth: 1,
          answers: [
            {
              id: "irp_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Private partners carry insurance. Any spillover costs will be shared, so taxpayers aren't on the hook.",
              impacts: {
                cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_melts_fiasco: OutcomeModifierWeight.ModerateNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_con_q1_f1_a2",
              type: AnswerType.Admit,
              text: "We budgeted contingencies. If courts rule against us, we may eat some costs, but water shortages are pricier.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                irp_international_lawsuit: OutcomeModifierWeight.ModeratePositive,
                irp_drought_relief_success: OutcomeModifierWeight.ModerateNegative,
                irp_melts_fiasco: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Let's not predict disaster before the first tug even hooks up. We'll cross that bridge if a berg melts.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                irp_melts_fiasco: OutcomeModifierWeight.SlightPositive,
                irp_drought_relief_success: OutcomeModifierWeight.SlightNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "irp_lib_q1",
      questions: {
        irp_lib_q1: {
          id: "irp_lib_q1",
          text: "Foreign leaders call this misguided. Why ignore climate solutions at home?",
          depth: 0,
          answers: [
            {
              id: "irp_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "This project is one tool. We're still investing in conservation and renewables while testing the iceberg idea.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.SlightPositive,
                irp_melts_fiasco: OutcomeModifierWeight.SlightNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Critics abroad enjoy complaining from rain-soaked capitals. We'll welcome their apologies when ice keeps our crops alive.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_international_lawsuit: OutcomeModifierWeight.ModerateNegative,
                irp_melts_fiasco: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_lib_q1_a3",
              type: AnswerType.Inform,
              text: "State engineers report the tow could deliver billions of gallons. Partner nations will monitor every step.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_melts_fiasco: OutcomeModifierWeight.ModerateNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "irp_inv_q1",
      questions: {
        irp_inv_q1: {
          id: "irp_inv_q1",
          text: "Documents suggest tow cables could snap, risking shipwrecks and diplomatic incidents. What safety measures are in place?",
          depth: 0,
          answers: [
            {
              id: "irp_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Naval experts upgraded tugs with magnetic clamps and quick-release bolts. Crews drill daily to avoid accidents.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.ModeratePositive,
                irp_melts_fiasco: OutcomeModifierWeight.ModerateNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Those documents read like worst-case fiction. We trust our engineers and won't second-guess until tests begin.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.SlightNegative,
                irp_melts_fiasco: OutcomeModifierWeight.SlightPositive,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "irp_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Classified simulations show a 30% failure risk unless winds stay calm. We'll halt the tow if that threshold is breached.",
              impacts: {
                cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } },
              },
              outcomeModifiers: {
                irp_drought_relief_success: OutcomeModifierWeight.StrongPositive,
                irp_melts_fiasco: OutcomeModifierWeight.StrongNegative,
                irp_international_lawsuit: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
