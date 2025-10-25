import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const houseplantJuryMandateOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Dept. of Just Leaves Launches Voir Dirt",
    description: "Dept. of Just Leaves pilots soil-based jury selection; citizens spritz ferns to sway rulings, triggering humidifier bans and ethics hotlines",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treeshury Debuts Chlorophyll Tax Cards",
    description: "Treeshury loads refunds onto leaf-shaped cards that photosynthesize interest; planters get credit scores, baffling bankers and thrilling Tod",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Hose & Health Services OKs Plant Telehealth",
    description: "Hoses, Humidity & Spritzers allows therapists to bill for cactus consults; stress rates drop as couples outsource bickering to stoic aloe",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Juror Ferns Unionize, Demand Window Seats",
    description: "Juror ferns strike for sunlight and bigger pots; the National Furniture Assembly mediates via wind chimes, and poll numbers sprout briefly",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
