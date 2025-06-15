import { SituationType, SituationData } from "~/types";
import { reallyfarawaystanAlliancePreferences } from "./reallyfarawaystanAlliancePreferences";
import { reallyfarawaystanAllianceOutcomes } from "./reallyfarawaystanAllianceOutcomes";
import { reallyfarawaystanAllianceExchanges } from "./reallyfarawaystanAllianceExchanges";

export const reallyfarawaystanAlliance: SituationData = {
  trigger: {
    staticKey: "reallyfarawaystan_alliance",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Reallyfarawaystan Alliance",
  description:
    "The President signs a defense pact with Reallyfarawaystan, a remote island nation of just nineteen citizens, promising protection and a tiny joint airstrip.",
  content: {
    preferences: reallyfarawaystanAlliancePreferences,
    outcomes: reallyfarawaystanAllianceOutcomes,
  },
  exchanges: reallyfarawaystanAllianceExchanges,
};
