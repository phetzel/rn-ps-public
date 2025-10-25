import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const embassyClaimsYesterdayOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Today Held Twice; Monday Vetoed Into Exile.",
    description: "The executive runs two Todays and banishes Monday. Agencies duplicate themselves to avoid paradox payroll; HR asks if lunch repeats twice.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Court Rules Yesterday, Judgment Filed Yesterday.",
    description: "A Chronal Review Board rules yesterday, nullifying its own existence. Appeals are due tomorrow last week; queues loop back to infancy.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Airlines Launch Preflights That Land Before Takeoff.",
    description: "Retro-visas force carriers to invent minus-time boarding. Passengers deplane younger; luggage becomes antiquities and demands a pension.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
