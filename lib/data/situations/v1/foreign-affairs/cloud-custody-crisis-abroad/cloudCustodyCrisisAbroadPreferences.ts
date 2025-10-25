import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const cloudCustodyCrisisAbroadPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "Owning the weird keeps markets calm, so I'll admit our clerical drizzle. It's better than stoking a vapor turf war over embassy umbrellas."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We should reassure both sides that clouds have no passports or corners. Caution avoids a tariff drizzle that could swell into a lawsuit monsoon."
      },
      authorizedContent: "Joint trackers show the cloud will drift over Neutral Umbrella Plaza from 15:00 to 15:12 local tomorrow. If we say this, both sides may claim we scheduled the weather."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Challenge the premise; atmospheric entities are common airspace. Approve dehumidifier escorts and kite diplomacy before anyone patents rain."
      }
    }
  }
};
