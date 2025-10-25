import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const camoCactusBorderPatrolOutcomes: SituationOutcome[] = [
  {
    id: "cacti_union",
    title: "Cacti Unionize; Demand Sunscreen and Overtime",
    description: "Motion-sensor succulents unionize as \"spiky contractors,\" striking by photosynthesizing slowly until a thorny court grants hazard pay.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "latin_captcha",
    title: "Drones Pass Latin CAPTCHA; Botanists Fail",
    description: "Defense adds Latin-name CAPTCHA to cactus alerts; drones ace it, botanists fail, and the President labels them \"lab-coat drones\" on air.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "hoa_pricklistan",
    title: "HOA Declares Cactus Easement Independence",
    description: "Neighborhood HOA secedes over fence flora, forming Pricklistan, a 12-hour micronation recognized by Defense long enough to issue stamps.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "armwrestle_gravity",
    title: "President Arm-Wrestles Reality; Gravity Quits",
    description: "Televised bout ends with reality pinned; gravity resigns, and camo cacti drift like spiky balloons while Homeland issues anti-levitationtips",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
