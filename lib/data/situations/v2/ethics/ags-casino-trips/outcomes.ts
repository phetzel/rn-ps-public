import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const agCasinoTripsOutcomes: SituationOutcome[] = [
  {
    id: "outcome_ag_pays_back",
    title: "AG Pays Back Flight Costs, Stays in Office",
    description:
      "The Attorney General agrees to reimburse the government for the full cost of the flights. The move dampens the scandal, allowing them to keep their job.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_ag_ig_ouster",
    title: "Inspector General Fired, Sparks Outrage",
    description:
      "In the middle of the probe, the President fires the Inspector General leading it. The move is seen as obstruction, escalating the scandal significantly.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.StronglyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "outcome_ag_rules_tightened",
    title: "Ethics Rules Quietly Tightened, AG Stays",
    description:
      "The AG survives the scandal, but new, much stricter rules on the use of government aircraft are implemented to prevent a recurrence.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
