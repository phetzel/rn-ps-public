import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const pillowFortNationalAlertPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge gravity and the couch lobby in one breath. Today our unity is measured in fluff, not fear."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We inform calmly: we rate cushions by Threat Fluff Level. Seniors get quilt lanes, and barns can certify as mega-pillows."
      },
      authorizedContent: "Interim pillow fort standards post at 3 p.m. today; enforcement begins in five days. Spot checks are paused for 72 hours to prevent panic buying."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We challenge the premise: sofas need strategic deterrence. The Duvet Brigade can parachute with weighted blankets."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit the exemption portal asks for lullabies and nap allegiance. That cannot be defended under any statute."
      }
    }
  }
};
