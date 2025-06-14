import { SituationType, SituationData } from "~/types";
import { artificialBeachDisasterPreferences } from "./artificialBeachDisasterPreferences";
import { artificialBeachDisasterOutcomes } from "./artificialBeachDisasterOutcomes";
import { artificialBeachDisasterExchanges } from "./artificialBeachDisasterExchanges";

export const artificialBeachDisaster: SituationData = {
  trigger: {
    staticKey: "artificial_beach_disaster",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Artificial Beach Disaster",
  description:
    "Costly government-made beaches erode within months, washing debris into bays and embarrassing officials.",
  content: {
    preferences: artificialBeachDisasterPreferences,
    outcomes: artificialBeachDisasterOutcomes,
  },
  exchanges: artificialBeachDisasterExchanges,
};
