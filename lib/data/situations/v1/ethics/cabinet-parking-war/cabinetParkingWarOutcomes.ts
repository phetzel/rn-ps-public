import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cabinetParkingWarOutcomes: SituationOutcome[] = [
  {
    id: "cpw_public_apology",
    title: "Public Apology, Memes",
    description:
      "State and Homeland issue a joint apology after video leaks show petty sabotage, inspiring memes but little real fallout.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "cpw_panel_reprimand",
    title: "Ethics Panel Reprimand",
    description:
      "An ethics panel reprimands several aides, raising questions about agency culture and oversight.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "cpw_peace_photo",
    title: "Parking Peace Accord Photo-op",
    description:
      "The two departments sign a 'parking peace accord' in a staged ceremony. Critics dismiss it as a gimmick while staff quietly stop feuding.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
