import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const domesticHarmonyPlaylistActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge critics to a national dance-off judged by toddlers. If the playlist loses, I'll saxophone an apology."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Clinicians say breakfast humming reduces sibling fights by 83%. The playlist is chewable unity with fewer crumbs."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Compliance is a vibe, not a raid. We favor voluntary sing-alongs, with fines only for egregious unplugging during designated choruses."
      },
      authorizedContent: "In a 5-city pilot, dinner-time arguments fell 21% in two weeks. Mentioning the 12-second voice opt-out will trigger pushback from device makers."
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Yes, fines fund the National Kazoo Reserve and a slippers credit. The budget balances on the chorus, says our humming spreadsheet."
      }
    }
  }
};
