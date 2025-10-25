import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sentryVacuumArmadaActivatedPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Grand challenges rally crowds and confuse critics. Turning security into a contest flatters rural pride and keeps headlines fun."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Clear specs project strength and tame panic. If rivals know the cord length, they’ll stay just beyond it and stop poking our nozzles."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Reassurance calms seniors and spares farm dogs. Soft vows beat hard sirens and buy 72 quiet hours to unfurl the suction net."
      },
      authorizedContent: "The network runs in passive airflow mapping for 72 hours; no cameras or microphones are active. The opt-out hotline opens at 8 a.m., and removals finish within 24 hours."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Admitting gray zones preserves cases later. A humble tone keeps judges from yanking the plug on crumb data and warrantless suction."
      }
    }
  }
};
