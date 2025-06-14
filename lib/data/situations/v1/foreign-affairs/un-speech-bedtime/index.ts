import { SituationType, SituationData } from "~/types";
import { unSpeechBedtimePreferences } from "./unSpeechBedtimePreferences";
import { unSpeechBedtimeOutcomes } from "./unSpeechBedtimeOutcomes";
import { unSpeechBedtimeExchanges } from "./unSpeechBedtimeExchanges";

export const unSpeechBedtime: SituationData = {
  trigger: {
    staticKey: "un_speech_bedtime",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "UN Speech Bedtime",
  description:
    "During a UN address, the President nods off mid-speech. Cameras capture the brief snooze, sparking jokes and questions about stamina.",
  content: {
    preferences: unSpeechBedtimePreferences,
    outcomes: unSpeechBedtimeOutcomes,
  },
  exchanges: unSpeechBedtimeExchanges,
};
