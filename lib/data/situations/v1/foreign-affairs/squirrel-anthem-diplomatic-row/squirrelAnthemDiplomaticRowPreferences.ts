import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const squirrelAnthemDiplomaticRowPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "He admits he once deputized a squirrel choir. Owning the weird lets him steer the story and outflank both bases with showmanship."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "They choose to inform with treaty citations; nut-neutral rules and rodent visas sound orderly, pacify urban commuters, and bore both bases."
      },
      authorizedContent: "We approved 12 performer-animal visas for the ally's squirrels. The anthem is set for 9:10 a.m. day two; early leaks could trigger new per-diem demands and delay the summit."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "They posture hard, branding squirrels 'unflagged air assets.' It thrills hawks, spooks diplomats, and reframes tariffs as necessary seed interdiction."
      }
    }
  }
};
