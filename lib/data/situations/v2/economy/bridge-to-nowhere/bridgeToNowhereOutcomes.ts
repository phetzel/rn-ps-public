import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const bridgeToNowhereOutcomes: SituationOutcome[] = [
  {
    id: "outcome_bridge_scandal",
    title: "Bridge Scandal Explodes, Project Frozen",
    description:
      "An internal audit reveals massive corruption and waste. The project is immediately frozen, sparking public fury and multiple investigations.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.StronglyNegative,
        },
      },
    },
  },
  {
    id: "outcome_bridge_tourist_trap",
    title: "Bridge Becomes Bizarre Tourist Attraction",
    description:
      "The bridge is built and becomes an internet-famous landmark. Tourists flock to see the absurdity, creating an unexpected economic boom.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Positive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_bridge_limbo",
    title: "Project Stalls in Political Limbo",
    description:
      "Political infighting and budget battles halt construction indefinitely. The half-built bridge stands as a monument to government gridlock.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
