import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const recordBreakingHeatwaveOutcomes: SituationOutcome[] = [
  {
    id: "outcome_heatwave_grid_collapse",
    title: "Grid Collapse Leads to Rolling Blackouts",
    description:
      "The immense strain from air conditioning overloads the nation's power grid, leading to widespread, multi-day blackouts in major cities.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_heatwave_cooling_grants",
    title: "Cooling Center Grants Praised",
    description:
      "The administration's rapid deployment of federal grants for public cooling centers is widely praised and credited with saving lives.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_heatwave_cloud_seeding_backfire",
    title: "Experimental Cloud-Seeding Backfires",
    description:
      "A desperate, experimental attempt at cloud-seeding goes wrong, causing unexpected torrential downpours and flash floods in a nearby region.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
