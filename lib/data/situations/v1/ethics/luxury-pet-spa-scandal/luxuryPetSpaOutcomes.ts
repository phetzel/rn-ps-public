import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const luxuryPetSpaOutcomes: SituationOutcome[] = [
  {
    id: "pet_spa_defunded",
    title: "Spa Defunded Amid Outrage",
    description:
      "Following uproar, the administration shutters the pet spa and vows no taxpayer pampering for pets again.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "pet_spa_public_cam",
    title: "Public Loves Pet Cam, Tolerates Cost",
    description:
      "A live cam from the spa charms viewers. Most voters shrug off the expense, saying pets deserve TLC too.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "pet_spa_initiative_expands",
    title: "Pet-Care Initiative Expands",
    description:
      "Officials spin the spa as part of a wider animal wellness initiative, expanding programs despite criticism.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
