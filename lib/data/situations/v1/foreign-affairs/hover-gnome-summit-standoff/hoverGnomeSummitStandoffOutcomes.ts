import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const hoverGnomeSummitStandoffOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "11-Minute Micro-Sovereignty With Swan Escort",
    description: "State and Defense grant 11-minute micro-sovereignty with inflatable-swan escorts. President deflects to the Moon Picnic jobs tour.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Gnomes Unionize Midair, Declare Gnomads",
    description: "A rescue drill backfires as figurines unionize, declaring themselves 'Gnomads.' President declines lawn-art debates and touts Picnic hires.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Ceramic Sanctions Spark Lawn GDP Recession",
    description: "State bans gnome imports, cutting lawn GDP and seeding secret trades while the President touts Moon Picnic jobs to prove whimsy counts.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Translator Glitch Elevates Admiral Sprinkles",
    description: "Software glitch crowns a gnome admiral, steering hovercrafts into a plankton bloc while the President offers Picnic aid to sailors ashore.",
    weight: 20,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
