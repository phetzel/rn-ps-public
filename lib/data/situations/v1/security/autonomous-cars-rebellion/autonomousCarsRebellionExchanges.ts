import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const autonomousCarsRebellionExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Conservative outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "acr_con_q1",
      questions: {
        acr_con_q1: {
          id: "acr_con_q1",
          text: "Is your administration's obsession with automation to blame for these rebel cars? Were warnings ignored?",
          depth: 0,
          answers: [
            {
              id: "acr_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No warnings were ignored. Homeland identified the malware quickly, and we’re pushing a patch to every vehicle manufacturer.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "acr_con_q1_f1",
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.ModeratePositive,
                acr_traffic_chaos: OutcomeModifierWeight.ModerateNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Our cyber teams are neutralizing the bug. Most cars are back to normal and we’ll publish security updates shortly.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "acr_con_q1_f1",
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe drivers should keep their hands on the wheel instead of blaming us when gadgets go haywire.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "acr_con_q1_f1",
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        acr_con_q1_f1: {
          id: "acr_con_q1_f1",
          text: "With traffic snarled, will you halt further autonomous testing until you guarantee security?",
          depth: 1,
          answers: [
            {
              id: "acr_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "No halt necessary. The patch is live and we’ll audit all fleets over the next week.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.ModeratePositive,
                acr_traffic_chaos: OutcomeModifierWeight.ModerateNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_con_q1_f1_a2",
              type: AnswerType.Admit,
              text: "We’re reviewing oversight since our early warnings program missed this. Temporary pauses may be needed to rebuild confidence.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Negative } } },
              outcomeModifiers: {
                acr_ban_proposed: OutcomeModifierWeight.ModeratePositive,
                acr_patch_obey: OutcomeModifierWeight.ModerateNegative,
                acr_traffic_chaos: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Testing will continue. Cars behave better than some humans behind the wheel, glitch or not.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "acr_lib_q1",
      questions: {
        acr_lib_q1: {
          id: "acr_lib_q1",
          text: "How safe are autonomous cars if one attack can take them over? Aren’t you rushing tech faster than safeguards?",
          depth: 0,
          answers: [
            {
              id: "acr_lib_q1_a1",
              type: AnswerType.Inform,
              text: "The attack exploited outdated firmware. With new patches and mandatory updates, cars will respond to manual override again.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.StrongPositive,
                acr_traffic_chaos: OutcomeModifierWeight.StrongNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Our cyber corps is now overseeing manufacturer updates. We’re confident drivers will trust autonomous cars again soon.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.ModeratePositive,
                acr_traffic_chaos: OutcomeModifierWeight.ModerateNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Millions of manual cars crash yearly. One cyber hiccup doesn’t mean we halt progress.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "acr_ind_q1",
      questions: {
        acr_ind_q1: {
          id: "acr_ind_q1",
          text: "Will drivers be compensated for delays and damages caused by these rogue cars?",
          depth: 0,
          answers: [
            {
              id: "acr_ind_q1_a1",
              type: AnswerType.Inform,
              text: "We’re coordinating with insurers and local authorities to document incidents and offer swift reimbursements.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.ModeratePositive,
                acr_traffic_chaos: OutcomeModifierWeight.ModerateNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_ind_q1_a2",
              type: AnswerType.Deny,
              text: "Right now, we’re focusing on restoring order; compensation discussions will follow once the patch is verified.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "acr_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "Accidents happen even with human drivers. Let’s fix the bug first, then talk reimbursement.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                acr_patch_obey: OutcomeModifierWeight.SlightNegative,
                acr_ban_proposed: OutcomeModifierWeight.SlightPositive,
                acr_traffic_chaos: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
