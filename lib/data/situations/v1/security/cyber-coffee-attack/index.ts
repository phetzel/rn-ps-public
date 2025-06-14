import { SituationType, SituationData } from "~/types";
import { cyberCoffeeAttackPreferences } from "./cyberCoffeeAttackPreferences";
import { cyberCoffeeAttackOutcomes } from "./cyberCoffeeAttackOutcomes";
import { cyberCoffeeAttackExchanges } from "./cyberCoffeeAttackExchanges";

export const cyberCoffeeAttack: SituationData = {
  trigger: {
    staticKey: "cyber_coffee_attack",
    type: SituationType.Security,
    requirements: {
      // Could happen any time caffeine is short
    },
  },
  type: SituationType.Security,
  title: "Cyber Attack on Coffee Supply",
  description:
    "Hackers freeze national coffee distribution networks, causing widespread panic and empty break rooms across Reallyfarawaystan.",
  content: {
    preferences: cyberCoffeeAttackPreferences,
    outcomes: cyberCoffeeAttackOutcomes,
  },
  exchanges: cyberCoffeeAttackExchanges,
};
