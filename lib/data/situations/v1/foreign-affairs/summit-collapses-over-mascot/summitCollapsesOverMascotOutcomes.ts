import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const summitCollapsesOverMascotOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Mime Declares Dual Victory; Silence Sparks War.",
    description: "At the beak-to-beak debate, the mime crowns both birds; each side hears silence as surrender and invades with confetti cannons.",
    weight: 34,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Defense Deploys Inflatable Peacekeepers.",
    description: "Foam-free borders are patrolled by giant pool flamingos that drift into parliaments, passing buoyant resolutions no one can veto.",
    weight: 33,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "State Brokers Custody via Egg Arbitration.",
    description: "Both mascots incubate a neutral egg; the hatchling is sworn in as interim picnic president and outlaws foam, ending the poultry feud.",
    weight: 33,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
