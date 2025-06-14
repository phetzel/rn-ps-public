import { SituationType, SituationData } from "~/types";
import { carnivalSanctionsPreferences } from "./carnivalSanctionsPreferences";
import { carnivalSanctionsOutcomes } from "./carnivalSanctionsOutcomes";
import { carnivalSanctionsExchanges } from "./carnivalSanctionsExchanges";

export const carnivalSanctions: SituationData = {
  trigger: {
    staticKey: "carnival_sanctions",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Carnival Sanctions",
  description:
    "After a joke by the President bombs, the Isle of Mirth bans American clowns from its famed carnival, stoking tourism worries.",
  content: {
    preferences: carnivalSanctionsPreferences,
    outcomes: carnivalSanctionsOutcomes,
  },
  exchanges: carnivalSanctionsExchanges,
};
