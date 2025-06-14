import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const navalExerciseOopsExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "neo_con_q1",
      questions: {
        neo_con_q1: {
          id: "neo_con_q1",
          text: "Why did our Navy seize an ally's fishing boat during exercises? Was this reckless or a planned show of force?",
          depth: 0,
          answers: [
            {
              id: "neo_con_q1_a1",
              type: AnswerType.Admit,
              text: "Commanders misread the vessel's ID. We've apologized and will compensate the crew. Training protocols are already being updated.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "neo_con_q1_f1",
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.ModeratePositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.ModerateNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The exercise was complex and fast moving. No one intended disrespect, and we resolved the mix-up within minutes.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "neo_con_q1_f1",
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.SlightPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.SlightNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_con_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "The official report shows radar confusion from overlapping maneuvers. No classified information was compromised, and compensation has been approved.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "neo_con_q1_f1",
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.MajorPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.MajorNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        neo_con_q1_f1: {
          id: "neo_con_q1_f1",
          text: "Is the ally demanding an official investigation before continuing drills?",
          depth: 1,
          answers: [
            {
              id: "neo_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "They paused drills briefly while we review procedures together. Both navies plan to resume once the report is filed.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.ModeratePositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.ModerateNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Our cooperation is strong. A single mistake won't derail years of partnership if we handle it transparently.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.SlightPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.SlightNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "neo_lib_q1",
      questions: {
        neo_lib_q1: {
          id: "neo_lib_q1",
          text: "Does seizing an ally's boat show our military is careless with local livelihoods during these drills?",
          depth: 0,
          answers: [
            {
              id: "neo_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We regret the confusion and are compensating the fishermen. Joint exercises emphasize safety so incidents like this remain rare.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.ModeratePositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.ModerateNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The boat was returned within hours with no damage. Both navies continue coordinating closely on these maneuvers.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.SlightPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.SlightNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Defense has issued a detailed report outlining new identification protocols so fishing vessels won't be mistaken again.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.ModeratePositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.ModerateNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "neo_ind_q1",
      questions: {
        neo_ind_q1: {
          id: "neo_ind_q1",
          text: "How will this boat seizure affect local fishermen and the broader alliance going forward?",
          depth: 0,
          answers: [
            {
              id: "neo_ind_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "The report confirms miscommunication, not aggression. Compensation is set aside and joint drills will restart after a brief review period.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.MajorPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.MajorNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "Fishermen will be repaid for any losses, and both sides want drills back on track quickly to keep the region secure.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.ModeratePositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.ModerateNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "neo_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "This was an embarrassing mix-up, but relations remain strong. We expect cooperation to continue smoothly once reviews conclude.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                naval_oops_compensation: OutcomeModifierWeight.SlightPositive,
                naval_oops_drills_suspended: OutcomeModifierWeight.SlightNegative,
                naval_oops_movie_rights: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
