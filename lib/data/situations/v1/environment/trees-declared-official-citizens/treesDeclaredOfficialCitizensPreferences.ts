import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const treesDeclaredOfficialCitizensPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "He craves high-drama optics and wants to outflank critics by debating a maple on live TV. Dares skeptics to out-photosynthesize."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "They fixate on perimeter control but know panicked yard patrols are worse. Promise soft root checkpoints and quick bark scans."
      }
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Numbers calm markets and unions; dates and rates tame leaf-strike chaos. They prefer crisp forms over forest chants."
      },
      authorizedContent: "Registration opens 11/15 at LeafFile.gov; no back taxes, and IDs ship in 10 days. City levies are capped at 1% canopy value through 2026, which may frustrate revenue plans."
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "They must look humane while admitting oak triage is hard. Own confusion and pitch 'wellness for wood' clinics."
      }
    }
  }
};
