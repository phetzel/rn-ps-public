import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const treasuryAuctionsImaginaryGdpOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Mall Street Bottles Growth; GDP Sold As Cologne.",
    description: "Traders decant credits into 'GDP Parfum' ETFs; lenders accept optimism as collateral, and prices rise under newly minted influfflation.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Spreadsheet NPCs Unionize After Auction Glitch.",
    description: "Imaginary credits animate workbook workers who demand dental lore; Treasury bargains with a dragon CFO to keep layoffs purely mythical.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "President Shreds Credits, Tangible Boom Ensues.",
    description: "Live shredding sparks a stampede into potatoes, wrenches, and socks; markets outlaw vibes, and GDP is weighed on bathroom scales.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
