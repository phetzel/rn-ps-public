import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const teachersStrikeBackOutcomes: SituationOutcome[] = [
  {
    id: "outcome_strike_repealed",
    title: "Karaoke Rule Repealed, Teachers Return",
    description:
      "The administration quickly repeals the absurd mandate. Teachers declare victory and return to classrooms, ending the strike with a PR win.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_strike_prolonged",
    title: "Prolonged Strike Leads to School Closures",
    description:
      "The administration digs in its heels, refusing to budge. The prolonged strike forces school closures, angering parents.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_strike_compromise",
    title: "Karaoke Compromise Celebrated as Arts Win",
    description:
      "A compromise is reached: the mandate is dropped, but funding is increased for optional arts programs, including karaoke clubs.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
