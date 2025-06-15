import { SituationType, SituationData } from "~/types";
import { icebergRelocationProjectPreferences } from "./icebergRelocationProjectPreferences";
import { icebergRelocationProjectOutcomes } from "./icebergRelocationProjectOutcomes";
import { icebergRelocationProjectExchanges } from "./icebergRelocationProjectExchanges";

export const icebergRelocationProject: SituationData = {
  trigger: {
    staticKey: "iceberg_relocation_project",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Iceberg Relocation Project",
  description:
    "Ambitious scheme to tow icebergs south for drought relief triggers global ridicule and diplomatic headaches.",
  content: {
    preferences: icebergRelocationProjectPreferences,
    outcomes: icebergRelocationProjectOutcomes,
  },
  exchanges: icebergRelocationProjectExchanges,
};
