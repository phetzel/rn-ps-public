import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const defenseArmsTheLawnGnomesPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He dares critics: if your yard can't outwit a gnome, how can it outwit spies? He loves spectacle and turf-warfare optics."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "They must calm appropriators and keep the budget alive; rebranding gnomes as 'non-lethal yard diplomacy' beats explaining the glitter mortars."
      },
      authorizedContent: "None of the gnomes are weaponized. The microdrones spray biodegradable glitter for training; 18 prototypes ran a 22-minute demo; all were boxed at 12:00 today, but saying this may compromise test sites."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "They need legal distance; an active probe into 'gnome entrapment' and microdrone licensing makes comment risky, so they hoard subpoenas."
      }
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "They must mollify allies whose embassies sprouted singing gnomes; candidly admitting 'hedge outreach' went sideways beats blaming weather balloons."
      }
    }
  }
};
