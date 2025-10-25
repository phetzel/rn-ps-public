import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treasurySwitchesToEmojiGdpPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I admit I pushed for scratch-and-sniff money; emojis are the compromise. Numbers made markets itchy; pictures calm them."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Stability improves when GDP speaks in tiny faces; decimals cause panic. Meme-economists calibrate sparkle rates and bread-loaf density every hour."
      },
      authorizedContent: "Treasury will release a draft emoji-to-dollar conversion table at 9 a.m. Friday. Early coverage could whipsaw wage talks and prompt businesses to change prices overnight."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We salute flags, not reaction GIFs; route math to Treasury. Submarines misread 😂 as distress beacons, so keep emojis off operational maps."
      }
    }
  }
};
