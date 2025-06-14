import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const electionCongratsMishapExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Liberal outlet with follow-up ───────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "ecm_lib_q1",
      questions: {
        ecm_lib_q1: {
          id: "ecm_lib_q1",
          text: "People woke up to tweets congratulating the wrong candidates and even a foreign autocrat. How did this happen and who is accountable?",
          depth: 0,
          answers: [
            {
              id: "ecm_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We accidentally scheduled a generic congratulation across multiple accounts. The social team apologized and corrected the posts.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "ecm_lib_q1_f1",
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.ModeratePositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.ModerateNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_a2",
              type: AnswerType.Inform,
              text: "The misfire came from a queue used for all standard messages. Logs confirm no outside interference, only a mix-up by our intern.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "ecm_lib_q1_f1",
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.StrongPositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.StrongNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe everyone could take a breath. Our admin congratulates winners as a courtesy. We'll refine our filters so it doesn't happen again.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "ecm_lib_q1_f1",
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightNegative,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.SlightPositive,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        ecm_lib_q1_f1: {
          id: "ecm_lib_q1_f1",
          text: "Critics say this reveals secret sympathies. Can you guarantee no favoritism influenced these messages?",
          depth: 1,
          answers: [
            {
              id: "ecm_lib_q1_f1_a1",
              type: AnswerType.Deny,
              text: "There were no hidden loyalties. It was an automated mistake, nothing more, and we've provided logs proving that.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightPositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.SlightNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_f1_a2",
              type: AnswerType.Inform,
              text: "The scheduler is run by interns under strict supervision. It queued standard congratulatory text for all potential winners.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.ModeratePositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.ModerateNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_lib_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Conspiracy theories aside, we simply misfired. We've apologized and we're reviewing social media protocols.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightNegative,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.Neutral,
                ecm_foreign_allies_upset: OutcomeModifierWeight.SlightPositive,
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
      rootQuestionId: "ecm_con_q1",
      questions: {
        ecm_con_q1: {
          id: "ecm_con_q1",
          text: "Does this slip prove the administration favored certain candidates and cannot run secure communications?",
          depth: 0,
          answers: [
            {
              id: "ecm_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No favoritism. Our team uses generic templates for any potential winner. We're implementing extra checks to prevent duplicates.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightPositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.SlightNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_con_q1_a2",
              type: AnswerType.Reassure,
              text: "This was human error by an intern. We reached out to all campaigns to clarify and no one suspects foul play.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.ModeratePositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.ModerateNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_con_q1_a3",
              type: AnswerType.Deflect,
              text: "If only campaigns used our auto scheduler they'd see mistakes happen. Let's keep focus on final results, not stray tweets.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightNegative,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.SlightPositive,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "ecm_ind_q1",
      questions: {
        ecm_ind_q1: {
          id: "ecm_ind_q1",
          text: "Some fear the tweets indicate deeper security issues. Can you rule out a hack or sabotage?",
          depth: 0,
          answers: [
            {
              id: "ecm_ind_q1_a1",
              type: AnswerType.Inform,
              text: "We checked system logs—no sign of hacking. It was purely internal scheduling failure.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.ModeratePositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.ModerateNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_ind_q1_a2",
              type: AnswerType.Deny,
              text: "Sabotage theories are nonsense. We investigated and found zero evidence of infiltration.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.SlightPositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.SlightNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "ecm_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Diplomatic cables confirm allies received apologies and believed it was a glitch, not a policy statement.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                ecm_apology_quells_chaos: OutcomeModifierWeight.StrongPositive,
                ecm_messages_breed_suspicion: OutcomeModifierWeight.StrongNegative,
                ecm_foreign_allies_upset: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
