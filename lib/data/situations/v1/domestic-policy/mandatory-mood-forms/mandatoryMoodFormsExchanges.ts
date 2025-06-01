import {
  AnswerType,
  CabinetStaticId,
  ExchangeData,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  PublicationStaticId,
} from "~/types";

export const mandatoryMoodFormsExchanges: ExchangeData[] = [
  // ──────────────────────────────────── 1. Integrity Watch (orig. + follow-ups)
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "mmf_inv_main_q1",
      questions: {
        // ── root ──────────────────────────────────────────────
        mmf_inv_main_q1: {
          id: "mmf_inv_main_q1",
          text: "These 'Mandatory Mood Forms' are called bureaucratic overreach. What's the administration's justification for this mass data collection?",
          depth: 0,
          answers: [
            {
              id: "mmf_inv_main_q1_a1",
              type: AnswerType.Inform,
              text: "This is a groundbreaking initiative to gather anonymized data for enhancing national well-being and allocating resources more effectively. The benefits are significant.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction:
                    "Good, stick to the script. It's about happiness and data!",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                    reaction:
                      "Trying to put a positive spin on a tough sell for sure.",
                  },
                },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.ModerateNegative, // −6
                mmf_program_scaled_mocked: OutcomeModifierWeight.Neutral, // 0
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModeratePositive, // +6
              },
              followUpId: "mmf_inv_fu_privacy_q",
            },
            {
              id: "mmf_inv_main_q1_a2",
              type: AnswerType.Reassure,
              text: "We understand the concerns. This is a pilot program, and we're actively listening to feedback to refine the process and ensure privacy is protected.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction:
                    "Sounds a bit weak, like we're already backing down now.",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                    reaction:
                      "Good, reassuring tone. Emphasizes our responsiveness here.",
                  },
                },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.ModerateNegative, // −6
                mmf_program_scaled_mocked: OutcomeModifierWeight.MajorPositive, // +12
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModerateNegative, // −6
              },
              followUpId: "mmf_inv_fu_timeline_q",
            },
            {
              id: "mmf_inv_main_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Let me clarify: the 'triplicate' form was an unfortunate typo. The actual program is a streamlined, single digital submission. We apologize for the confusion.",
              impacts: {
                president: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction:
                    "A typo? Well, at least it's some kind of excuse, I guess.",
                },
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                    reaction:
                      "Excellent use of intel to defuse the 'triplicate' absurdity.",
                  },
                },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.MajorPositive, // +12
                mmf_program_scaled_mocked: OutcomeModifierWeight.Neutral, // 0
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.MajorNegative, // −12
              },
              followUpId: "mmf_inv_fu_typo_q",
            },
          ],
        },

        // ── follow-up A: privacy safeguards ───────────────────
        mmf_inv_fu_privacy_q: {
          id: "mmf_inv_fu_privacy_q",
          text: "Experts warn moods can be re-identified. What concrete safeguards prevent agencies or advertisers from tracing individual feelings back to citizens?",
          depth: 1,
          answers: [
            {
              id: "mmf_inv_fu_privacy_q_a1",
              type: AnswerType.Deflect,
              text: "Our cybersecurity team assures all regulations are followed, but the real focus today is on how happier data will guide better parks and puppy policies nationwide.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.ModerateNegative, // −6
                mmf_program_scaled_mocked: OutcomeModifierWeight.Neutral, // 0
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModeratePositive, // +6
              },
            },
            {
              id: "mmf_inv_fu_privacy_q_a2",
              type: AnswerType.Inform,
              text: "All mood submissions are hashed, salted, and stored separately from identifiers, with independent audits and immediate deletion of raw files, eliminating deanonymization risk.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.ModeratePositive, // +6
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModerateNegative, // −6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.Neutral, // 0
              },
            },
            {
              id: "mmf_inv_fu_privacy_q_a3",
              type: AnswerType.Reassure,
              text: "We’re partnering with the Non-Partisan Privacy League to publish a transparency report next week, so citizens can see exactly who accesses what and why.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.SlightNegative, // −4
                mmf_program_scaled_mocked: OutcomeModifierWeight.SlightPositive, // +4
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.Neutral, // 0
              },
            },
          ],
        },

        // ── follow-up B: pilot timeline ───────────────────────
        mmf_inv_fu_timeline_q: {
          id: "mmf_inv_fu_timeline_q",
          text: "You call this a pilot. How long will citizens file mood logs, and what metric decides whether the experiment is abandoned or becomes permanent?",
          depth: 1,
          answers: [
            {
              id: "mmf_inv_fu_timeline_q_a1",
              type: AnswerType.Inform,
              text: "The pilot ends in ninety days or after gathering a statistically sound sample—whichever is sooner. We’ll keep it only if reported life satisfaction rises at least fifteen percent.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.ModerateNegative, // −6
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModeratePositive, // +6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.Neutral, // 0
              },
            },
            {
              id: "mmf_inv_fu_timeline_q_a2",
              type: AnswerType.Deflect,
              text: "Our data scientists are still calibrating thresholds; the real question is why anyone would oppose measuring happiness in the first place, but we welcome suggestions nonetheless.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Neutral },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked: OutcomeModifierWeight.SlightNegative, // −4
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.SlightPositive, // +4
              },
            },
            {
              id: "mmf_inv_fu_timeline_q_a3",
              type: AnswerType.Challenge,
              text: "Would you prefer we ignore emotional health metrics and stick to outdated GDP worship? This administration believes feelings deserve dashboard space alongside dollars.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked: OutcomeModifierWeight.SlightNegative, // −4
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.SlightPositive, // +4
              },
            },
          ],
        },

        // ── follow-up C: typo accountability ──────────────────
        mmf_inv_fu_typo_q: {
          id: "mmf_inv_fu_typo_q",
          text: "If the triplicate line was a typo, who authored the directive, and what disciplinary action is planned for the Bureau of Redundant Paperwork?",
          depth: 1,
          answers: [
            {
              id: "mmf_inv_fu_typo_q_a1",
              type: AnswerType.Inform,
              text: "The directive draft came from a junior analyst, already reassigned to the Department of Apology Letters. We are implementing a mandatory spell-check on all future decrees.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModeratePositive, // +6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "mmf_inv_fu_typo_q_a2",
              type: AnswerType.Deflect,
              text: "We don’t comment on personnel matters; the bigger story is the streamlined single-click interface rolling out tomorrow. Let’s focus on improvements, not typos.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Neutral },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModerateNegative, // −6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModeratePositive, // +6
              },
            },
            {
              id: "mmf_inv_fu_typo_q_a3",
              type: AnswerType.Deny,
              text: "There was no formal 'triplicate' directive—only a misinterpreted draft. Any circulated PDFs were unofficial leaks, so punitive measures would be misplaced.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.SlightNegative, // −4
                mmf_program_scaled_mocked: OutcomeModifierWeight.SlightPositive, // +4
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.Neutral, // 0
              },
            },
          ],
        },
      },
    },
  },

  // ──────────────────────────────────── 2. The Daily Soy (new exchange)
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "mmf_lib_main_q1",
      questions: {
        mmf_lib_main_q1: {
          id: "mmf_lib_main_q1",
          text: "Critics say mood forms commodify happiness and shame sadness. Why measure emotions instead of simply funding better mental health services?",
          depth: 0,
          answers: [
            {
              id: "mmf_lib_main_q1_a1",
              type: AnswerType.Inform,
              text: "Measuring emotions lets us identify regions where sadness spikes and direct counseling grants rapidly, ensuring resources reach communities before crises become tragedies.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.SlightPositive, // +4
                mmf_program_scaled_mocked: OutcomeModifierWeight.Neutral, // 0
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "mmf_lib_main_q1_a2",
              type: AnswerType.Reassure,
              text: "We're piloting the forms for just ninety days; meanwhile, the budget proposes record mental-health funding so no one is choosing paperwork over therapy.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModeratePositive, // +6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModerateNegative, // −6
              },
            },
            {
              id: "mmf_lib_main_q1_a3",
              type: AnswerType.Deflect,
              text: "Let’s not pit measurement against mental health; both can coexist like kale and quinoa. Next question: who wouldn’t want more insight into nationwide vibes?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Neutral },
              },
              outcomeModifiers: {
                mmf_program_retracted: OutcomeModifierWeight.Neutral, // 0
                mmf_program_scaled_mocked:
                  OutcomeModifierWeight.ModerateNegative, // −6
                mmf_stubborn_rollout_noncompliance:
                  OutcomeModifierWeight.ModeratePositive, // +6
              },
            },
          ],
        },
      },
    },
  },
];
