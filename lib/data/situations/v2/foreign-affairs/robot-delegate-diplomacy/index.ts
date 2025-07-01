import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { robotDelegateDiplomacyOutcomes } from "./robotDelegateDiplomacyOutcomes";
import { robotDelegateDiplomacyPreferences } from "./robotDelegateDiplomacyPreferences";
import { robotDelegateDiplomacyExchanges } from "./exchanges";

export const robotDelegateDiplomacy: SituationData = {
  trigger: {
    staticKey: "robot_delegate_diplomacy",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Robot Delegate Diplomacy",
  description:
    "Admin sends an AI diplomat to peace talks. Some leaders praise the move, while others refuse to negotiate with a robot.",
  content: {
    outcomes: robotDelegateDiplomacyOutcomes,
    preferences: robotDelegateDiplomacyPreferences,
  },
  exchanges: robotDelegateDiplomacyExchanges,
};
