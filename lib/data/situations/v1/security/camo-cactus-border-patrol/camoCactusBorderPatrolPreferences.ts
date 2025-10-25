import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const camoCactusBorderPatrolPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Prove these objections aren't from drones posing as botanists. Until then, I arm-wrestle reality and win with a smile."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "These are disciplined succulents with gentle beeps. They guard fences and speak Bluetooth, charming county fairs and the tech crowd."
      },
      authorizedContent: "Only 37 units are live in Pecan County for a 72-hour test; sensors log motion pulses only and audio is off. If locations leak, vandalism risk spikes and data becomes useless."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We value privacy, even for thorny volunteers. We are auditing fence permissions and training plants to ask with polite blinking LEDs."
      }
    }
  }
};
