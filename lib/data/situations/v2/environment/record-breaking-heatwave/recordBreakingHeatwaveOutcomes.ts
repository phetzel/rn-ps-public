import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

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
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.Negative,
          // Generator companies and off-grid startups see a boom amid the chaos
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
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
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
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
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
