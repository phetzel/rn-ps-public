import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const celebrityIdentityBreachExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Investigative with follow-up ────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "cib_inv_q1",
      questions: {
        cib_inv_q1: {
          id: "cib_inv_q1",
          text: "Dozens of fake celebrity videos back government bills. How close are you to unmasking who’s behind these deep fakes?",
          depth: 0,
          answers: [
            {
              id: "cib_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Justice traced the forgeries to a foreign troll farm using open-source face models. Warrants are underway with international partners.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "cib_inv_q1_f1",
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.ModeratePositive,
                cib_trust_plummets: OutcomeModifierWeight.ModerateNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_inv_q1_a2",
              type: AnswerType.Reassure,
              text: "We’re cooperating with studios and tech firms to verify real endorsements. Expect a full report within days.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              followUpId: "cib_inv_q1_f1",
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.SlightPositive,
                cib_trust_plummets: OutcomeModifierWeight.SlightNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Celebrities have always endorsed odd things. Let’s focus on real issues, not digital impersonations.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "cib_inv_q1_f1",
              outcomeModifiers: {
                cib_trust_plummets: OutcomeModifierWeight.SlightPositive,
                cib_fakes_debunked_fast: OutcomeModifierWeight.SlightNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cib_inv_q1_f1: {
          id: "cib_inv_q1_f1",
          text: "Will the administration push for new AI regulations in response to this identity theft?",
          depth: 1,
          answers: [
            {
              id: "cib_inv_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "Absolutely. We’ll pursue strict penalties for malicious deep fakes while protecting innovation.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cib_new_ai_laws_praised: OutcomeModifierWeight.ModeratePositive,
                cib_trust_plummets: OutcomeModifierWeight.ModerateNegative,
                cib_fakes_debunked_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_inv_q1_f1_a2",
              type: AnswerType.Admit,
              text: "Regulation takes time, but we’re drafting proposals. For now, public awareness is our best defense against fake endorsements.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Negative } } },
              outcomeModifiers: {
                cib_trust_plummets: OutcomeModifierWeight.ModeratePositive,
                cib_fakes_debunked_fast: OutcomeModifierWeight.ModerateNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_inv_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "We’ll look at options, but let’s not let a few phony clips overshadow bigger national priorities.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.SlightNegative,
                cib_trust_plummets: OutcomeModifierWeight.SlightPositive,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cib_con_q1",
      questions: {
        cib_con_q1: {
          id: "cib_con_q1",
          text: "Doesn’t this deep-fake mess prove Big Tech needs a crackdown? What’s your stance on free speech vs. security?",
          depth: 0,
          answers: [
            {
              id: "cib_con_q1_a1",
              type: AnswerType.Challenge,
              text: "We can protect speech and punish malicious actors. New penalties target impersonation without muzzling satire or opinion.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                cib_new_ai_laws_praised: OutcomeModifierWeight.ModeratePositive,
                cib_trust_plummets: OutcomeModifierWeight.ModerateNegative,
                cib_fakes_debunked_fast: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Justice is already issuing takedown orders. We’re balancing rights with protection from fraud.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.ModeratePositive,
                cib_trust_plummets: OutcomeModifierWeight.ModerateNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Celebs may be upset, but most citizens care more about jobs than fake ads. We’ll focus on the bigger picture.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                cib_trust_plummets: OutcomeModifierWeight.SlightPositive,
                cib_fakes_debunked_fast: OutcomeModifierWeight.SlightNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cib_lib_q1",
      questions: {
        cib_lib_q1: {
          id: "cib_lib_q1",
          text: "Fans feel betrayed seeing beloved stars in fake videos. How will you support them and stop future digital impersonation?",
          depth: 0,
          answers: [
            {
              id: "cib_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "HHS has opened a hotline for confused fans while Justice works with platforms to remove fakes swiftly.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.ModeratePositive,
                cib_trust_plummets: OutcomeModifierWeight.ModerateNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_lib_q1_a2",
              type: AnswerType.Inform,
              text: "The Justice Department’s AI unit is releasing a public guide on spotting deep fakes and verifying sources.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                cib_fakes_debunked_fast: OutcomeModifierWeight.StrongPositive,
                cib_trust_plummets: OutcomeModifierWeight.StrongNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cib_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe our celebrities should stick to acting and leave policy talk to professionals—real or fake.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                cib_trust_plummets: OutcomeModifierWeight.SlightPositive,
                cib_fakes_debunked_fast: OutcomeModifierWeight.SlightNegative,
                cib_new_ai_laws_praised: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
