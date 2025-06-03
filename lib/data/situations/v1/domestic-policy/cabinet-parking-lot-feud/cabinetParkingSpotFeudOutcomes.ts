import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cabinetParkingSpotFeudOutcomes: SituationOutcome[] = [
  {
    id: "cpf_feud_mediated",
    title: "Feud Mediated Peacefully",
    description:
      "HR steps in; ministers shake hands, pose for photo, and agree to share a carpool space on odd days.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
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
    id: "cpf_public_ridicule",
    title: "Public Ridicule Hurts Credibility",
    description:
      "Late-night shows lampoon the spat; polls show dip in confidence as government looks petty and distracted.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "cpf_handicap_space",
    title: "Spot Turned into Handicap Space",
    description:
      "Compromise repaints the coveted slot for disability access, earning praise from advocates and ending quarrel.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
