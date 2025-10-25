import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const gondolaNationPeaceAccordOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Flag-Eating Showdown Recognizes Gondola State",
    description: "State bakes edible flags, drones judge bites, and the gondola wins on sauce. Foreign policy rebrands as Snacks and Ceremony Department.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Harbor Drones Defect, Salute Floating Admiral",
    description: "Seagulls hack patrol bots, crowning the gondola navy. State issues stern origami, while residents seek dual canal citizenship for perks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Flag Contest Denied; Poll Numbers Eaten Alive",
    description: "Gondola refuses the snack test and devours approval ratings instead. Elections pivot to interpretive dance ballots, confusing yet delicious.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Snack-Based Microstate Declared At Pier",
    description: "A treaty makes the gondola a breadstick-tariff zone. Drones enforce marinara embargoes as residents cheer a weekly Clamnesty parade.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
