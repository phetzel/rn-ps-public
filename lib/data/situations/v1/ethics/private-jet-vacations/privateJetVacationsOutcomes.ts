import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const privateJetVacationsOutcomes: SituationOutcome[] = [
  {
    id: "pjv_repays_partial",
    title: "Repays Partial Costs",
    description:
      "The secretary reimburses a portion of the travel bills, promising better oversight. Public frustration cools a bit.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "pjv_omb_rules",
    title: "OMB Tightens Travel Rules",
    description:
      "After uproar, the OMB imposes strict travel guidelines on all departments. Media coverage intensifies for weeks.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "pjv_no_action",
    title: "No Action, Polls Dip Slightly",
    description:
      "Despite the headlines, no penalties follow. Critics call it a free vacation, and polls show minor dips in trust.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
