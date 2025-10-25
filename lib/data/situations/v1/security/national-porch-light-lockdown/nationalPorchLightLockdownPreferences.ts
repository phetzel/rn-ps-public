import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalPorchLightLockdownPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge the moon to stop freeloading and pledge our porches to outshine it. If the device returns, we duel at dusk."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We will deploy Light Infantry—photon formations—and moth-decoy drones. Rural lines and seniors first, secured by twinkle and awe."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Treat the device as a roaming blackout pest. Registry data guides surge crews in minutes, even if the tech sector begs for dimmer talk."
      },
      authorizedContent: "Overnight we recovered one pocket-size jammer causing 8–12 second outages in a 60-foot radius. The registry lets us relight affected blocks within 12 hours, but it will trigger privacy pushback."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Admit the Bulb Registry Act is, at best, dimly drafted. Sockets are private; we need warrants and a sunset clause before tightening."
      }
    }
  }
};
