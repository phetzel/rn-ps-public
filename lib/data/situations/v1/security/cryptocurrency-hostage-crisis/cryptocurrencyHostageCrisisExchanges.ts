import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cryptocurrencyHostageCrisisExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Investigative outlet with follow-up ──────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "chc_inv_q1",
      questions: {
        chc_inv_q1: {
          id: "chc_inv_q1",
          text: "Hackers claim they control our payment backbone and demand crypto ransom. How close are you to tracing their wallets?",
          depth: 0,
          answers: [
            {
              id: "chc_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Treasury analysts followed the coins through mixers to a shady exchange overseas. Warrants are drafted and funds are frozen as we speak.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "chc_inv_q1_f1",
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.ModeratePositive,
                chc_payment_made: OutcomeModifierWeight.ModerateNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_inv_q1_a2",
              type: AnswerType.Challenge,
              text: "We won’t negotiate with digital pirates. Justice is coordinating with allies to hunt them down and seize every last token.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "chc_inv_q1_f1",
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.ModeratePositive,
                chc_partial_meltdown: OutcomeModifierWeight.ModerateNegative,
                chc_payment_made: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Our experts see through the hackers’ bravado. The real crime may be how confusing cryptocurrency names have become.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "chc_inv_q1_f1",
              outcomeModifiers: {
                chc_payment_made: OutcomeModifierWeight.SlightPositive,
                chc_ransom_averted: OutcomeModifierWeight.SlightNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        chc_inv_q1_f1: {
          id: "chc_inv_q1_f1",
          text: "If the ransom isn’t paid, how long until citizens regain full access to their money?",
          depth: 1,
          answers: [
            {
              id: "chc_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Systems will be back online within hours as we reroute through secured nodes. No ransom payment will be authorized.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.ModeratePositive,
                chc_partial_meltdown: OutcomeModifierWeight.ModerateNegative,
                chc_payment_made: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_inv_q1_f1_a2",
              type: AnswerType.Admit,
              text: "Restoration may take days if we have to rebuild servers. We’re exploring all options to avoid paying these criminals.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Negative } } },
              outcomeModifiers: {
                chc_partial_meltdown: OutcomeModifierWeight.ModeratePositive,
                chc_ransom_averted: OutcomeModifierWeight.ModerateNegative,
                chc_payment_made: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_inv_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Citizens should keep calm and maybe try bartering for a day or two. We’re confident the tech teams will sort this out.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                chc_payment_made: OutcomeModifierWeight.SlightPositive,
                chc_ransom_averted: OutcomeModifierWeight.SlightNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "chc_con_q1",
      questions: {
        chc_con_q1: {
          id: "chc_con_q1",
          text: "Isn’t this crisis proof that lax cyber policies invite criminals? Will you support tougher regulations on digital currency?",
          depth: 0,
          answers: [
            {
              id: "chc_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Absolutely. Justice is drafting new penalties for crypto extortion while Treasury secures exchanges against future attacks.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                chc_partial_meltdown: OutcomeModifierWeight.SlightPositive,
                chc_ransom_averted: OutcomeModifierWeight.Neutral,
                chc_payment_made: OutcomeModifierWeight.SlightNegative,
              },
            },
            {
              id: "chc_con_q1_a2",
              type: AnswerType.Inform,
              text: "Treasury already requires stronger reporting. This incident proves those rules work—we traced funds quickly.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.ModeratePositive,
                chc_payment_made: OutcomeModifierWeight.ModerateNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The real lesson here is don’t put your life savings into mystery coins. Common sense beats any regulation.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                chc_payment_made: OutcomeModifierWeight.SlightPositive,
                chc_ransom_averted: OutcomeModifierWeight.SlightNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "chc_lib_q1",
      questions: {
        chc_lib_q1: {
          id: "chc_lib_q1",
          text: "Many worry small businesses can’t survive this shutdown. Will there be aid or will hackers dictate our economy?",
          depth: 0,
          answers: [
            {
              id: "chc_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Treasury is setting up emergency credit lines while Justice hunts the culprits. We expect normal operations by tomorrow.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.ModeratePositive,
                chc_partial_meltdown: OutcomeModifierWeight.ModerateNegative,
                chc_payment_made: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_lib_q1_a2",
              type: AnswerType.Inform,
              text: "We’re coordinating with banks and tech experts to restore every account. No ransom has been paid and none will be.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                chc_ransom_averted: OutcomeModifierWeight.StrongPositive,
                chc_payment_made: OutcomeModifierWeight.StrongNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "chc_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe this will convince people to carry some cash again. Digital wallets are great until someone flips the off switch.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                chc_payment_made: OutcomeModifierWeight.SlightPositive,
                chc_ransom_averted: OutcomeModifierWeight.SlightNegative,
                chc_partial_meltdown: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
