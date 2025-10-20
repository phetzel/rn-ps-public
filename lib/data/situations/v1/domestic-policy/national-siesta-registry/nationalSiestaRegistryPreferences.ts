import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const nationalSiestaRegistryPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge critics to a televised power-nap duel; winner sets policy. Bring your own blanket and a lawyer for snoring claims."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "It’s a wellness census, not dream surveillance. We count yawns and pillow time to soothe independents and calm business leaders."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Inform with urgency: naps are civil defense. Synchronized snoozes keep sirens on key; rogue catnaps risk national grogginess during drills."
      },
      authorizedContent: "The first nap-alert drill runs at 2:14 p.m. this week in eight test counties. Households may reply 'already napping' to mute the tone; test data auto-deletes after 30 hours."
    }
  }
};
