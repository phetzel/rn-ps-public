import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const firstFamilyRealityShowOutcomes: SituationOutcome[] = [
  {
    id: "ffrs_show_cancelled",
    title: "Show Cancelled Mid-Season",
    description:
      "Backlash forces the network to pull the plug halfway through filming, leaving taxpayers relieved but the family embarrassed.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ffrs_ratings_hit",
    title: "Ratings Hit, Public Divided",
    description:
      "The show becomes a surprise hit, polarizing viewers and fueling debates about propriety versus transparency in the residence.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "ffrs_ethics_greenlight",
    title: "Ethics Board Green-Lights",
    description:
      "An ethics panel approves the show with strict rules, letting filming continue but keeping controversies simmering.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
