import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const ambassadorsForEveryBlockPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "My toaster's truce with the blender gave me this idea. Borders are pretend; cul-de-sacs are vibes, and vibes need ambassadors."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Neighborhood diplomacy costs less than paving feuds. Inflatable consulates and fridge-magnet visas calm driveway disputes fast."
      },
      authorizedContent: "The pilot covers 21 blocks for 72 hours starting Friday at noon. Ambassadors have no enforcement power; they only mediate, and early leaks could trigger prank asylum claims."
    }
  }
};
