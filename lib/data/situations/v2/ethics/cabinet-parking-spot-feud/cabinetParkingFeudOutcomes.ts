import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const cabinetParkingFeudOutcomes: SituationOutcome[] = [
  {
    id: "outcome_parking_mediated",
    title: "Feud Mediated, Parking Spot Reassigned",
    description:
      "The President intervenes, mediating the petty dispute. The spot is reassigned to a rotating 'Employee of the Month,' ending the feud with a PR win.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_parking_ridicule",
    title: "Public Ridicule Hurts Cabinet Credibility",
    description:
      "The feud leaks to the press and becomes a symbol of a petty, dysfunctional cabinet. The public mocks the administration's lack of focus on real issues.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_parking_escalates",
    title: "Feud Escalates, Involving Staffers",
    description:
      "The feud spirals as staffers for each Secretary begin a prank war over the parking spot. The distraction starts to affect departmental cooperation.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
