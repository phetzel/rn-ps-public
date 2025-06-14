import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const toiletPaperSupplyThreatOutcomes: SituationOutcome[] = [
  {
    id: "tps_hoax_exposed",
    title: "Hoax Exposed; Shelves Restock",
    description:
      "Officials reveal the false rumor with audits showing ample supply; panic buying subsides and stores refill quickly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "tps_shortage_persists",
    title: "Shortage Persists; Anger Grows",
    description:
      "Despite reassurances, hoarders empty aisles for weeks, spurring angry protests and price gouging accusations.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "tps_stockpile_revealed",
    title: "Gov Stockpile Revealed",
    description:
      "The administration admits it stockpiled rolls for emergencies, drawing mixed reactions from grateful seniors and outraged libertarians.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
