import { SituationType, SituationData } from "~/types";
import { robotDelegateDebatePreferences } from "./robotDelegateDebatePreferences";
import { robotDelegateDebateOutcomes } from "./robotDelegateDebateOutcomes";
import { robotDelegateDebateExchanges } from "./robotDelegateDebateExchanges";

export const robotDelegateDebate: SituationData = {
  trigger: {
    staticKey: "robot_delegate_debate",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Robot Delegate Debate",
  description:
    "During crucial peace talks, the administration sends a shiny AI diplomat to negotiate. Some leaders praise the tech, while others refuse to speak to a robot.",
  content: {
    preferences: robotDelegateDebatePreferences,
    outcomes: robotDelegateDebateOutcomes,
  },
  exchanges: robotDelegateDebateExchanges,
};
