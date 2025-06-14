import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const nationalBirdMigrationCrisisOutcomes: SituationOutcome[] = [
  {
    id: "nbmc_lights_out_success",
    title: "Lights-Out Program Corrects Paths",
    description:
      "Cities dim skyscrapers and stadiums, letting birds regain their bearings and winning cheers from ecologists.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Agriculture]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "nbmc_crop_yields_plunge",
    title: "Crop Yields Plunge Nationwide",
    description:
      "Altered migrations leave fields barren and supermarkets scrambling as food prices skyrocket.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Agriculture]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "nbmc_drone_guidance_chaos",
    title: "Drone Guidance Deepens Chaos",
    description:
      "Autonomous drones meant to guide flocks malfunction, scattering birds and confusing travelers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Agriculture]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
