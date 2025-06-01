import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const nationalGlitterSpillOutcomes: SituationOutcome[] = [
  {
    id: "glitter_spill_disaster_contained_quickly",
    title: "Spill Contained, Ecosystem Recovers",
    description:
      "Cleanup efforts, aided by unexpected glitter-eating microbes, are surprisingly effective. Long-term damage is minimized greatly.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive, // "Effective environmental response."
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Good job protecting the environment!"
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive, // "Glad our waterways are safe again."
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive, // "Competent handling of a crisis."
        },
      },
    },
  },
  {
    id: "glitter_spill_disaster_ecological_mess",
    title: "Protracted Ecological Mess",
    description:
      "The glitter proves incredibly difficult to remove, harming aquatic life and local tourism for months. 'Glitter Fish' become a sad meme.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative, // "Failed to manage environmental crisis."
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative, // "Cleanup costs are astronomical."
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.StronglyNegative, // "Environmental disaster on their watch!"
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Negative, // "Fishing and local tourism ruined."
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative, // "Local economic impact is severe."
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative, // "Total government incompetence shown."
        },
      },
    },
  },
  {
    id: "glitter_spill_disaster_becomes_tourist_attraction",
    title: "Glitter River Becomes Weird Tourist Trap",
    description:
      "In a bizarre twist, the affected waterways become a kitschy tourist attraction known for their 'shimmering' (polluted) waters.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative, // "Environmental failure, absurd outcome."
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative, // "This is not a solution, it's a tragedy."
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive, // "Opportunistic local tourism boost."
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive, // "Ironic tourism, let's go see it!"
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative, // "Government incompetence leads to weirdness."
        },
      },
    },
  },
];
