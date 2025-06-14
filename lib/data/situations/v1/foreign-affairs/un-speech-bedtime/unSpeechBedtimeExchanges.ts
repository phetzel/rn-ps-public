import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const unSpeechBedtimeExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "usb_lib_q1",
      questions: {
        usb_lib_q1: {
          id: "usb_lib_q1",
          text: "The President seemed to fall asleep during his UN speech. Is he healthy enough for this demanding schedule?",
          depth: 0,
          answers: [
            {
              id: "usb_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "The President had a grueling flight schedule and only nodded briefly. He's fully engaged and has apologized to the assembly.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "usb_lib_q1_f1",
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.ModeratePositive,
                un_speech_ridicule: OutcomeModifierWeight.ModerateNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Let's focus on the proposals he made for global cooperation. Jet lag happens to everyone.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "usb_lib_q1_f1",
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.SlightPositive,
                un_speech_ridicule: OutcomeModifierWeight.SlightNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "According to the sleep-study note from HHS, the President was running on three hours of rest. Doctors cleared him after a quick check.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "usb_lib_q1_f1",
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.MajorPositive,
                un_speech_ridicule: OutcomeModifierWeight.MajorNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        usb_lib_q1_f1: {
          id: "usb_lib_q1_f1",
          text: "Delegates want an apology for disrespect. Will he issue one?",
          depth: 1,
          answers: [
            {
              id: "usb_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "He already personally apologized to the delegates and reaffirmed commitments. We consider the matter closed.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.ModeratePositive,
                un_speech_ridicule: OutcomeModifierWeight.ModerateNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "It was a momentary lapse, not a national insult. Let's not dramatize a few seconds of tiredness.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.SlightNegative,
                un_speech_ridicule: OutcomeModifierWeight.SlightPositive,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "usb_con_q1",
      questions: {
        usb_con_q1: {
          id: "usb_con_q1",
          text: "Is the President nodding off proof he's unfit to represent us on the world stage?",
          depth: 0,
          answers: [
            {
              id: "usb_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Falling asleep for a split second doesn't negate decades of public service. He remains fully capable.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.SlightNegative,
                un_speech_ridicule: OutcomeModifierWeight.SlightPositive,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The real story is his policy successes at the summit. Let's focus on that, not on a momentary nap.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.SlightPositive,
                un_speech_ridicule: OutcomeModifierWeight.SlightNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_con_q1_a3",
              type: AnswerType.Inform,
              text: "Doctors evaluated him immediately and found no issues. He simply overextended himself traveling overnight.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.ModeratePositive,
                un_speech_ridicule: OutcomeModifierWeight.ModerateNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "usb_ind_q1",
      questions: {
        usb_ind_q1: {
          id: "usb_ind_q1",
          text: "Some viewers worry the snooze signals burnout. How are you addressing these concerns internationally?",
          depth: 0,
          answers: [
            {
              id: "usb_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We've shared the corrected schedule and he'll pace his travel better. Diplomats appreciate his dedication.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.ModeratePositive,
                un_speech_ridicule: OutcomeModifierWeight.ModerateNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Everyone's had a long day. The President kept the summit on track despite fatigue, which is what matters.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.SlightPositive,
                un_speech_ridicule: OutcomeModifierWeight.SlightNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "usb_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "HHS records show he was awake for over twenty hours. He is now following medical advice to rest between sessions.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                un_speech_apology_check: OutcomeModifierWeight.MajorPositive,
                un_speech_ridicule: OutcomeModifierWeight.MajorNegative,
                un_speech_humane_hours: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
