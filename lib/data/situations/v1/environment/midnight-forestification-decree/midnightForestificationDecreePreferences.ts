import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const midnightForestificationDecreePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "Yes, I ordered midnight forestification. The highways have enjoyed decades of treeless privilege; dawn will be fair and leafy."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We must verify worm easements and moss visas before mediating. Until soil passports exist, any root border disputes remain theoretical."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Arborborne crews will precision-drop seedlings with biodegradable chutes. Collateral shade stays minimal, and the squirrels have hazard vests."
      },
      authorizedContent: "Air-drops start at 3:05 a.m. local with 52,000 saplings across Routes R1–R7. Expect 90-second rolling closures; early disclosure could draw spectators and slow the operation."
    }
  }
};
