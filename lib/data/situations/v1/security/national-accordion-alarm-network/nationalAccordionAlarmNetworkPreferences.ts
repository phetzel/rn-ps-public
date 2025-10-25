import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalAccordionAlarmNetworkPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "Challenges the premise and the drones, turning it into a duel of volume. Spectacle keeps him conductor-in-chief and sidelines the tech chorus."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Insists on informing with decibel math and marching cadence. Treats accordions as foldable forts that spook drones and sway satellites."
      },
      authorizedContent: "At 07:00 tomorrow, five downtown blocks will run a 90-second accordion-jam test. It will halt hobby drones within 300 meters, but may trigger car alarms and upset pets."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Prefers reassurance to ease seniors and skittish pets. Rebrands bingo halls as 'Homeland Hootenannies' to make evacuation feel like a dance."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Admits murky legality under the Noise Clause and the Fourth Accordianment. Fears warrantless sound sweeps and discriminatory polka zoning."
      }
    }
  }
};
