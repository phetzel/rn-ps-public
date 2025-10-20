import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const embassyQuarantineTangoPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Let diplomats argue while I convene a summit on chair yoga for passports. This is a vibes issue, not a maps issue."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We pioneered ambassadotherapy: boosters with cucumber water and harp music. Health conquers etiquette when velvet ropes waste herd immunity."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We will speak softly and remove the spa signage with tongs. Sovereignty is a jigsaw; our job is to hide the extra pieces before breakfast."
      },
      authorizedContent: "Talks with the Embassy of Snorvia begin at 3 p.m. today. HHS agreed to pause the vaccine spa for 72 hours while we audit access logs; this may trigger formal protest if leaked early."
    }
  }
};
