import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { squirrelCyberCorpsActivatedOutcomes } from "./squirrelCyberCorpsActivatedOutcomes";
import { squirrelCyberCorpsActivatedPreferences } from "./squirrelCyberCorpsActivatedPreferences";
import { squirrelCyberCorpsActivatedExchanges } from "./exchanges";

export const squirrelCyberCorpsActivated: SituationDataType = {
  trigger: {
    staticKey: "squirrel-cyber-corps-activated",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Squirrel Cyber Corps Activated",
  description: "Defense and Homeland announce program to train squirrels as cyber-incident responders, touting superior signal sniffing and tree-top server skills.",
  content: {
    outcomes: squirrelCyberCorpsActivatedOutcomes,
    preferences: squirrelCyberCorpsActivatedPreferences,
  },
  exchanges: squirrelCyberCorpsActivatedExchanges,
};
