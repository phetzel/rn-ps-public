import { presidentialClothingLinePreferences } from "./presidentialClothingLinePreferences";
import { presidentialClothingLineOutcomes } from "./presidentialClothingLineOutcomes";
import { presidentialClothingLineExchanges } from "./presidentialClothingLineExchanges";
import { SituationType, SituationData } from "~/types";

export const presidentialClothingLine: SituationData = {
  trigger: {
    staticKey: "presidential_clothing_line",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Presidential Clothing Line",
  description:
    "The president unveils a luxury apparel brand using official insignia, drawing accusations of profiteering and misuse of office.",
  content: {
    preferences: presidentialClothingLinePreferences,
    outcomes: presidentialClothingLineOutcomes,
  },
  exchanges: presidentialClothingLineExchanges,
};
