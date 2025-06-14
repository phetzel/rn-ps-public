import { presidentialStadiumNamingPreferences } from "./presidentialStadiumNamingPreferences";
import { presidentialStadiumNamingOutcomes } from "./presidentialStadiumNamingOutcomes";
import { presidentialStadiumNamingExchanges } from "./presidentialStadiumNamingExchanges";
import { SituationType, SituationData } from "~/types";

export const presidentialStadiumNaming: SituationData = {
  trigger: {
    staticKey: "presidential_stadium_naming",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Presidential Stadium Naming",
  description:
    "Reports say the president pressured a city to rename its stadium after them, threatening to pull federal grants.",
  content: {
    preferences: presidentialStadiumNamingPreferences,
    outcomes: presidentialStadiumNamingOutcomes,
  },
  exchanges: presidentialStadiumNamingExchanges,
};
