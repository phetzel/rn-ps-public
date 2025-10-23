import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const staplerShieldActivationPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "This isn't a weapon; it's stationery diplomacy. We staple fear to the horizon so seniors can nap in peace."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Our staplers are defensive, like sharp umbrellas. They shoo threats, not mail; unions get overtime for certified cloud-calming."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Units are geofenced to rooftops and public boxes, with beak-recognition to spare birds. Seniors and mail get a generous no-staple buffer."
      },
      authorizedContent: "Initial activation covers seven pilot districts at 6:00 a.m. Friday. Triggers need dual confirmation and a flagged path over 28 mph, but publishing the time may draw crowds and slow first responders."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit the law never imagined aerial stapling. We will set a temporary un-staple order process and brief courts before any bindings occur."
      }
    }
  }
};
