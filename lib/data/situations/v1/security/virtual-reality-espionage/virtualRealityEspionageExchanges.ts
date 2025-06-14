import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const virtualRealityEspionageExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Investigative outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "vre_inv_q1",
      questions: {
        vre_inv_q1: {
          id: "vre_inv_q1",
          text: "Did your administration ignore red flags about this VR platform collecting users' private moments?",
          depth: 0,
          answers: [
            {
              id: "vre_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Defense uncovered suspicious traffic during routine audits and shut down the spy servers. We alerted players as soon as we confirmed the breach.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.ModeratePositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.ModerateNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_a2",
              type: AnswerType.Reassure,
              text: "We take player privacy seriously. The investigation is ongoing, and early evidence shows only a limited data leak.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightPositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe gamers should read the terms they scroll past. We're working on it, but some responsibility is on users.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightNegative,
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightPositive,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        vre_inv_q1_f1: {
          id: "vre_inv_q1_f1",
          text: "When will you release the seized server logs so experts can verify your claims?",
          depth: 1,
          answers: [
            {
              id: "vre_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Once our forensics team finishes sanitizing personal data, we will publish the logs within the week.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.ModeratePositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.ModerateNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_f1_a2",
              type: AnswerType.Deny,
              text: "We can't risk players' privacy by rushing. The logs contain sensitive info and will not be released until the investigation closes.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyNegative } } },
              outcomeModifiers: {
                vre_security_treaty: OutcomeModifierWeight.SlightPositive,
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightNegative,
                vre_gamer_distrust_gov: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Experts can join our closed-door briefing, but we won't dump raw data online for conspiracy bloggers.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightPositive,
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "vre_lib_q1",
      questions: {
        vre_lib_q1: {
          id: "vre_lib_q1",
          text: "Doesn't this scandal prove the dangers of unregulated VR tech? Will you push for stronger privacy rules?",
          depth: 0,
          answers: [
            {
              id: "vre_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "Yes, we are drafting strict transparency rules for VR firms to prevent such spying from ever happening again.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                vre_security_treaty: OutcomeModifierWeight.ModeratePositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.ModerateNegative,
                vre_spy_network_shut_down: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_lib_q1_a2",
              type: AnswerType.Inform,
              text: "Defense is already working with developers to patch vulnerabilities, and we’ll propose privacy legislation soon.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.StrongPositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.StrongNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "We can't regulate every new gadget the moment it appears. Consumers also need to research the products they buy.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightPositive,
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "vre_con_q1",
      questions: {
        vre_con_q1: {
          id: "vre_con_q1",
          text: "Is this VR spying fiasco another example of big government failing to protect citizens' privacy?",
          depth: 0,
          answers: [
            {
              id: "vre_con_q1_a1",
              type: AnswerType.Challenge,
              text: "We uncovered the espionage precisely because we monitor threats. Now we're ensuring game companies tighten security.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightPositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Justice is cooperating with the industry to keep players safe. We will pursue charges against the spying network.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                vre_spy_network_shut_down: OutcomeModifierWeight.ModeratePositive,
                vre_gamer_distrust_gov: OutcomeModifierWeight.ModerateNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe gamers should worry more about virtual dragons than imaginary spies. We're on it, but don't panic.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                vre_gamer_distrust_gov: OutcomeModifierWeight.SlightPositive,
                vre_spy_network_shut_down: OutcomeModifierWeight.SlightNegative,
                vre_security_treaty: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
