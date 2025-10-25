import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sentientEnvelopeScandalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I govern by spectacle; challenging a letter reclaims momentum and baffles both bases. It proves I won't be intimidated by mail."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We must decide if an envelope can be a witness, a bribe, or a worker. Law beats lore, and clarity calms both markets and mayhem."
      },
      authorizedContent: "Our lab recorded one autonomous act: a 7-word scribble at 2:11 a.m. today. A judge set a public hearing for Friday at 10 a.m.; no criminal charges are filed, which may calm markets but anger activists."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "If paper is labor, wages could index to envelopes. We'll pivot to ink supply and stamp elasticity and bury gratitude-futures talk."
      }
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We piloted a feelings-screening for office stationery and named it Steve. Owning it lowers rumor fever and steadies urban clinics."
      }
    }
  }
};
