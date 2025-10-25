import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ethicsTokenVendingMeltdownPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will challenge the vending machine to an ethics duel to show leadership over rogue appliances. Snack-based morality ends today."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We must state the facts while tiptoeing over a legal minefield laid by a snack machine. Precision now prevents pizza-powered panics."
      },
      authorizedContent: "We seized the kiosk at 6 a.m.; logs show 89 waivers, 14 traded for pizza slices. Dispensing is halted, but publishing this may drive copycat kiosks to wipe records."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Urban residents deserve calm; we will classify pizza as ethically non-tender. Broccoli stamps will replace crust-based waivers."
      }
    }
  }
};
