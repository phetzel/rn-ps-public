import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const agsCasinoTripsOutcomes: SituationOutcome[] = [
  {
    id: "casino_flights_repaid",
    title: "Pays Back Flights",
    description:
      "The AG reimburses taxpayers for the Vegas trips and apologizes, calming most of the outrage.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "casino_ig_ouster",
    title: "Inspector-General Ouster",
    description:
      "Investigations blame lax oversight, leading to the Inspector General's firing and weeks of scandal coverage.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "casino_rules_tightened",
    title: "Ethics Rules Tightened Quietly",
    description:
      "New travel rules quietly restrict personal trips on government aircraft, and attention quickly fades.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
