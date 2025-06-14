import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const fakeWeatherAlertHackExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Liberal outlet with follow-up ───────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "fwah_lib_q1",
      questions: {
        fwah_lib_q1: {
          id: "fwah_lib_q1",
          text: "Bogus emergency alerts caused panic evacuations. How will you rebuild trust and help those injured during the chaos?",
          depth: 0,
          answers: [
            {
              id: "fwah_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland traced the hack and patched the servers within minutes. We’re offering assistance to anyone displaced or hurt by the scare.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "fwah_lib_q1_f1",
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.ModeratePositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.ModerateNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "HHS is deploying counselors and medical aid. We’re updating the alert system and will publish a full timeline of the breach.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "fwah_lib_q1_f1",
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.SlightPositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.SlightNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "At least everyone now knows where their emergency exits are. We’re focused on fixes, not finger-pointing today.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "fwah_lib_q1_f1",
              outcomeModifiers: {
                fwah_trust_declines: OutcomeModifierWeight.SlightPositive,
                fwah_alerts_corrected: OutcomeModifierWeight.SlightNegative,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        fwah_lib_q1_f1: {
          id: "fwah_lib_q1_f1",
          text: "Will victims receive compensation for injuries and lost wages from this panic?",
          depth: 1,
          answers: [
            {
              id: "fwah_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "We’re coordinating relief funds and exploring legal options against the hackers. Details will be announced within days.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.ModeratePositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.ModerateNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_lib_q1_f1_a2",
              type: AnswerType.Admit,
              text: "Compensation programs are complicated. We’ll assist where we can, but lawsuits may take months to resolve.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Negative } } },
              outcomeModifiers: {
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.ModeratePositive,
                fwah_alerts_corrected: OutcomeModifierWeight.ModerateNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_lib_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Let’s focus on preventing the next hoax rather than writing checks today. People should verify alerts before panicking.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                fwah_trust_declines: OutcomeModifierWeight.SlightPositive,
                fwah_alerts_corrected: OutcomeModifierWeight.SlightNegative,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fwah_con_q1",
      questions: {
        fwah_con_q1: {
          id: "fwah_con_q1",
          text: "Doesn’t this hack show federal alert systems are too centralized? Should private broadcasters handle emergency warnings?",
          depth: 0,
          answers: [
            {
              id: "fwah_con_q1_a1",
              type: AnswerType.Challenge,
              text: "We’re strengthening security while keeping alerts under national oversight. Decentralizing would only slow response times.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                fwah_trust_declines: OutcomeModifierWeight.SlightNegative,
                fwah_alerts_corrected: OutcomeModifierWeight.SlightPositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_con_q1_a2",
              type: AnswerType.Inform,
              text: "Homeland’s new protocols include partnerships with broadcasters, not privatization. Central coordination prevents mixed messages.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.ModeratePositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.ModerateNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe the hackers just wanted everyone to spend quality family time in the basement. We’ll keep the system as is for now.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.SlightPositive,
                fwah_alerts_corrected: OutcomeModifierWeight.SlightNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "fwah_ind_q1",
      questions: {
        fwah_ind_q1: {
          id: "fwah_ind_q1",
          text: "Citizens are unsure what warnings to believe now. How will you prevent future fake alerts and keep people informed?",
          depth: 0,
          answers: [
            {
              id: "fwah_ind_q1_a1",
              type: AnswerType.Inform,
              text: "We’re rolling out two-factor verification for all alerts and launching a public education campaign on checking official channels.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.StrongPositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.StrongNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There’s no ongoing threat. This was a one-time breach and not evidence of systemic collapse, despite rumors online.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.SlightPositive,
                fwah_trust_declines: OutcomeModifierWeight.SlightNegative,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "fwah_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Server logs show the breach came from a leaked contractor key. We’ve revoked access and issued strict new credential policies.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                fwah_alerts_corrected: OutcomeModifierWeight.StrongPositive,
                fwah_evac_chaos_lawsuits: OutcomeModifierWeight.StrongNegative,
                fwah_trust_declines: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
