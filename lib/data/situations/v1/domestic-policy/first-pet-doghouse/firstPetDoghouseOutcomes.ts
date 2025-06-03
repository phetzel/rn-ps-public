import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const firstPetDoghouseOutcomes: SituationOutcome[] = [
  {
    id: "fpd_public_laughs_moves_on",
    title: "Public Laughs, Moves On",
    description:
      "A cute apology video of the dog goes viral; replacement copy of the speech calms outrage within days.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "fpd_historical_outcry",
    title: "Historians Demand Dog Apology",
    description:
      "Scholars call the damage ‘cultural vandalism’; petitions demand tighter archive security and canine etiquette lessons.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "fpd_speech_fragments_auctioned",
    title: "Speech Fragments Auctioned",
    description:
      "Chewed pages sell for charity; collectors bid millions, turning gaffe into quirky fundraising victory.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
