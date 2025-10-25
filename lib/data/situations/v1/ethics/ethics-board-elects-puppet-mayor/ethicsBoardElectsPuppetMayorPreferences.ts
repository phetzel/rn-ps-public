import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ethicsBoardElectsPuppetMayorPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale: "That is not a puppet; it's an interim civic metronome with strings for accountability. Calm citizens beat chaotic knots every time."
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "A wooden appointee cannot sign laws without a human hand; we will seek an injunction. Protest is fine, but statutes aren't stringy."
      },
      authorizedContent: "A judge will hear our emergency petition at 3 p.m. today. If that time circulates widely, crowds could swell at the courthouse and delay public access."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "We secure the stage, not the script; strings are a trip hazard. Youth rallies get safety shears; unions get knot marshals."
      }
    }
  }
};
