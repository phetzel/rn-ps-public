import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cheeseTariffWarExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "ctw_con_q1",
      questions: {
        ctw_con_q1: {
          id: "ctw_con_q1",
          text: "The cheese joke triggered tariffs from Dairystan. Are you ready to shield our farmers if this trade war drags on?",
          depth: 0,
          answers: [
            {
              id: "ctw_con_q1_a1",
              type: AnswerType.Challenge,
              text: "We’re pressing Dairystan to negotiate immediately. Our farmers will get relief if tariffs persist, but we expect talks to resolve it soon.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "ctw_con_q1_f1",
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Our trade team is in constant contact with Dairystan. We’ll cushion any impact on farmers and aim to remove tariffs quickly.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "ctw_con_q1_f1",
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Dairystan overreacted to a lighthearted quip. We’re confident cooler heads will prevail without drastic countermeasures.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ctw_con_q1_f1",
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.SlightPositive,
                ctw_farmers_hurt: OutcomeModifierWeight.SlightNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ctw_con_q1_f1: {
          id: "ctw_con_q1_f1",
          text: "Will you apologize for insulting their cheese to end the standoff?",
          depth: 1,
          answers: [
            {
              id: "ctw_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We’ll clarify it was humor, not hostility. An apology isn’t off the table if it gets tariffs dropped.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_con_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "Negotiations are progressing. We expect both sides to lower duties soon without needing formal apologies.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ctw_lib_q1",
      questions: {
        ctw_lib_q1: {
          id: "ctw_lib_q1",
          text: "Why provoke Dairystan with a cheese insult that triggered tariffs hurting everyday farmers?",
          depth: 0,
          answers: [
            {
              id: "ctw_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We’re working through diplomatic channels to roll back the duties and support our dairy sector in the meantime.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "It was a passing joke blown out of proportion. We expect cooler heads to lower tariffs once emotions settle.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.SlightPositive,
                ctw_farmers_hurt: OutcomeModifierWeight.SlightNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Treasury data show losses are limited so far. We’re confident negotiations will restore normal trade soon.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ctw_ind_q1",
      questions: {
        ctw_ind_q1: {
          id: "ctw_ind_q1",
          text: "What benefit does this cheese tariff fight bring to ordinary citizens?",
          depth: 0,
          answers: [
            {
              id: "ctw_ind_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Internal forecasts show limited short-term harm, but we’re pushing for quick resolution to avoid prolonged pain for farmers and consumers.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.MajorPositive,
                ctw_farmers_hurt: OutcomeModifierWeight.MajorNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Tariff tiffs are common and usually short lived. Consumers should see little change at the grocery store.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.SlightPositive,
                ctw_farmers_hurt: OutcomeModifierWeight.SlightNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ctw_ind_q1_a3",
              type: AnswerType.Reassure,
              text: "We’re negotiating daily and expect to dial back tariffs soon so families and farmers aren’t squeezed for long.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                ctw_tariffs_eased: OutcomeModifierWeight.ModeratePositive,
                ctw_farmers_hurt: OutcomeModifierWeight.ModerateNegative,
                ctw_cheese_pride: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
