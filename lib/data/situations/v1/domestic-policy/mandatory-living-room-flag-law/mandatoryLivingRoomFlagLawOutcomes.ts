import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const mandatoryLivingRoomFlagLawOutcomes: SituationOutcome[] = [
  {
    id: "flag_olympics",
    title: "Couch Compliance Olympics Crowned.",
    description: "The president hosts a live couch-based tournament while Homelandish refs measure sitting, and HSS awards ergonomic medals.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "pillow_peg",
    title: "Treasure Bureau Pegs Cash To Pillows.",
    description: "Fines convert to tassel taxes, fluff density becomes CPI, and parades double as stimulus checks in confetti.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "sofa_clinics",
    title: "HSS Declares Sofas 'Public Clinics'.",
    description: "Appointments are booked by waving the flag, coughs count as copays, and glitter glue receipts become medical records.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "drone_audit",
    title: "Homelandish Drones Audit Living Rooms.",
    description: "Window-scanning quadcopters misread ceiling fans as dissent, sparking appeals held inside elaborate pillow forts.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
