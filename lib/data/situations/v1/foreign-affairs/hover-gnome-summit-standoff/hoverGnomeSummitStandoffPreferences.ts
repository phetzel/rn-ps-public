import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const hoverGnomeSummitStandoffPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale: "Deflect to avoid legitimizing gnome hostages and spotlight the Moon Picnic jobs tour. I will not debate the sovereignty of lawn art."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Reassure markets and gardeners with talk of ancient Gnome Conveyance Protocols, and promise a tasteful, bilingual gnome-swap ceremony."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Challenge to signal deterrence and win funds for anti-gnome countermeasures, deploying polka-jamming escorts to terrify hover-pirates."
      },
      authorizedContent: "Defense satellites tracked both hovercraft drifting 9 nautical miles due to a magnetized kelp bloom; joint tugs meet at 1600 GMT to tow them to neutral waters, though saying this may embarrass both embassies."
    }
  }
};
