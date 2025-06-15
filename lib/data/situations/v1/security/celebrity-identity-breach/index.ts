import { SituationType, SituationData } from "~/types";
import { celebrityIdentityBreachPreferences } from "./celebrityIdentityBreachPreferences";
import { celebrityIdentityBreachOutcomes } from "./celebrityIdentityBreachOutcomes";
import { celebrityIdentityBreachExchanges } from "./celebrityIdentityBreachExchanges";

export const celebrityIdentityBreach: SituationData = {
  trigger: {
    staticKey: "celebrity_identity_breach",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Celebrity Identity Breach",
  description:
    "Deep-fake endorsements of government policy flood the net, leaving the public baffled and celebrities outraged at stolen likenesses.",
  content: {
    preferences: celebrityIdentityBreachPreferences,
    outcomes: celebrityIdentityBreachOutcomes,
  },
  exchanges: celebrityIdentityBreachExchanges,
};
