import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { treasurySwitchesToEmojiGdpOutcomes } from "./treasurySwitchesToEmojiGdpOutcomes";
import { treasurySwitchesToEmojiGdpPreferences } from "./treasurySwitchesToEmojiGdpPreferences";
import { treasurySwitchesToEmojiGdpExchanges } from "./exchanges";

export const treasurySwitchesToEmojiGdp: SituationDataType = {
  trigger: {
    staticKey: "treasury-switches-to-emoji-gdp",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "Treasury Switches to Emoji GDP",
  description: "Treasury wants GDP in emoji baskets, pushing markets to hire meme economists, unions to demand emoji-indexed wages, and Defense to decode shrug briefings.",
  content: {
    outcomes: treasurySwitchesToEmojiGdpOutcomes,
    preferences: treasurySwitchesToEmojiGdpPreferences,
  },
  exchanges: treasurySwitchesToEmojiGdpExchanges,
};
