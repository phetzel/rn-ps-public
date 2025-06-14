import { SituationType, SituationData } from "~/types";
import { pandemicPizzaShortagePreferences } from "./pandemicPizzaShortagePreferences";
import { pandemicPizzaShortageOutcomes } from "./pandemicPizzaShortageOutcomes";
import { pandemicPizzaShortageExchanges } from "./pandemicPizzaShortageExchanges";

export const pandemicPizzaShortage: SituationData = {
  trigger: {
    staticKey: "pandemic_pizza_shortage",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Pandemic Pizza Shortage",
  description:
    "Rumors of a pizza-related virus spark nationwide hoarding, threatening to collapse delivery services and morale alike.",
  content: {
    preferences: pandemicPizzaShortagePreferences,
    outcomes: pandemicPizzaShortageOutcomes,
  },
  exchanges: pandemicPizzaShortageExchanges,
};
