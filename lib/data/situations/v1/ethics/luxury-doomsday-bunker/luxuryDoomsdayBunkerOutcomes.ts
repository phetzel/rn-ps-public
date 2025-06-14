import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const luxuryDoomsdayBunkerOutcomes: SituationOutcome[] = [
  {
    id: "luxury_bunker_scrapped",
    title: "Bunker Project Scrapped",
    description:
      "Facing backlash, the administration cancels the bunker plan, citing miscommunication and promises an internal audit.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "luxury_bunker_probe_drags",
    title: "Ethics Probe Drags On",
    description:
      "A drawn-out ethics investigation keeps the story in headlines for months, souring relations with foreign partners.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "luxury_bunker_safety_narrative",
    title: "'Safety First' Narrative Sticks",
    description:
      "The administration spins the bunker as a necessary safety measure; some voters accept it while watchdogs remain skeptical.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
