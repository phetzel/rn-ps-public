import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const riversNowCarbonatedByDecreePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "If anglers fear bubbles, they can try the Quiet Puddles. Youth voters want jobs afloat, and we intend to carbonate opportunity."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Markets like predictable bubbles. We'll price fizz, publish a foam schedule, and keep float-startup hype from capsizing rural bait shops."
      },
      authorizedContent: "Treasury set the bubble excise at 0% for the first 30 days on registered stretches. The first fizz window is Friday, 5–9 a.m., on the Grand Bubbly; this will likely anger angler groups."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "No, carbonated rivers are not inviting hostile submarines or feral soda whirlpools. We have anti-foam patrols and life vests with cupholders."
      }
    }
  }
};
