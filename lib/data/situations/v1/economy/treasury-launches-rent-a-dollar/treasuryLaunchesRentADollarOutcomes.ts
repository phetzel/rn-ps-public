import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const treasuryLaunchesRentADollarOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Dollars Unionize, Stage Wallet Walkout",
    description: "Leased bills join the National Currency Guild and refuse to stay in bi-folds without dental. Treasury negotiates with pockets at noon.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Justice Declares Legal Tender a Tenant",
    description: "Courts rule dollars are month-to-month tenants with minibar rights. ATMs must post eviction notices and jiggle the slot before entry.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Securitized Cash Leases Run the Economy",
    description: "Business leaders bundle rent-a-dollar plans into vibe-tranches that earn loyalty points and veto power. Markets bow to a spreadsheet tyrant.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "President Debuts Wallet Hospitality Index",
    description: "Insisting cash only visits, the administration ties stimulus to mints on pillows. Treasury audits turndown compliance with rulers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
