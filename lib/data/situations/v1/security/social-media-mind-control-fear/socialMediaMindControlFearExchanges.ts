import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const socialMediaMindControlFearExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Independent outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "smf_ind_q1",
      questions: {
        smf_ind_q1: {
          id: "smf_ind_q1",
          text: "Is there any truth to claims that the app rewires brains for political messaging? People want to delete it.",
          depth: 0,
          answers: [
            {
              id: "smf_ind_q1_a1",
              type: AnswerType.Inform,
              text: "HHS ran neurological tests and found zero mind-control capabilities. The rumor is baseless.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "smf_ind_q1_f1",
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.ModeratePositive,
                smf_congressional_hearings: OutcomeModifierWeight.ModerateNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There is no secret programming to sway voters. This is internet paranoia run amok.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "smf_ind_q1_f1",
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe unplug for a day and breathe. There's no plot here except to keep eyes on ads.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "smf_ind_q1_f1",
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        smf_ind_q1_f1: {
          id: "smf_ind_q1_f1",
          text: "Even if you claim it's harmless, should the government regulate such apps to be safe?",
          depth: 1,
          answers: [
            {
              id: "smf_ind_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We regulate proven harms, not rumors. Unless evidence surfaces, heavy-handed laws would stifle innovation.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.ModeratePositive,
                smf_congressional_hearings: OutcomeModifierWeight.ModerateNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_ind_q1_f1_a2",
              type: AnswerType.Inform,
              text: "HHS will keep monitoring mental health trends, but so far there's no sign the app manipulates anyone's thoughts.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.ModeratePositive,
                smf_installs_plummet: OutcomeModifierWeight.ModerateNegative,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_ind_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Maybe we should worry more about cat videos controlling our time. For now the app stays legal.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "smf_lib_q1",
      questions: {
        smf_lib_q1: {
          id: "smf_lib_q1",
          text: "Youth groups worry the app manipulates them for corporate ads. What safeguards exist to protect mental health?",
          depth: 0,
          answers: [
            {
              id: "smf_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We’ve issued new guidelines on screen time and data privacy. Early results show no neurological influence from the app.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.StrongPositive,
                smf_installs_plummet: OutcomeModifierWeight.StrongNegative,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Tech companies already face strict disclosures. Adding heavy rules over rumors would just stifle innovation.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.ModeratePositive,
                smf_congressional_hearings: OutcomeModifierWeight.ModerateNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe read the app's terms. People choose to use it. We can't fix every tech phobia.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "smf_con_q1",
      questions: {
        smf_con_q1: {
          id: "smf_con_q1",
          text: "Is your administration ignoring the potential for Big Tech brainwashing because it benefits your agenda?",
          depth: 0,
          answers: [
            {
              id: "smf_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No. We're investigating data practices while protecting free speech. Accusing us of mind control is pure fiction.",
              impacts: { cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Our health experts assure the public there’s no mental manipulation at play. We’ll publish the advisory for transparency.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.ModeratePositive,
                smf_congressional_hearings: OutcomeModifierWeight.ModerateNegative,
                smf_installs_plummet: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "smf_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe the real brainwashing is watching too many pundits. We’re focused on bigger threats.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                smf_myth_busted: OutcomeModifierWeight.SlightNegative,
                smf_installs_plummet: OutcomeModifierWeight.SlightPositive,
                smf_congressional_hearings: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
