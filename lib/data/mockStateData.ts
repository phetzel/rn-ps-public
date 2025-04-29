// --- START OF FILE mockData.ts ---
import type Publication from "~/lib/db/models/Publication";

import { CabinetRole, InfluenceArea, PoliticalLeaning } from "~/types";

// --- Mock Cabinet Member Data ---
export interface NewCabinetMemberData {
  role: CabinetRole;
  name: string;
  influenceArea: InfluenceArea;
  approvalRating: number; // Use camelCase
  psRelationship: number;
  isActive: boolean; // Use camelCase (matches model)
}

export const DEFAULT_CABINET_MEMBERS: NewCabinetMemberData[] = [
  {
    role: CabinetRole.State,
    name: "Alice Albright",
    influenceArea: InfluenceArea.ForeignRelations,
    approvalRating: 55,
    psRelationship: 50,
    isActive: true,
  },
  {
    role: CabinetRole.Treasury,
    name: "Bob Banker",
    influenceArea: InfluenceArea.Economy,
    approvalRating: 50,
    psRelationship: 50,
    isActive: true,
  },
  {
    role: CabinetRole.Defense,
    name: "General Carl Command",
    influenceArea: InfluenceArea.Military,
    approvalRating: 60,
    psRelationship: 50,
    isActive: true,
  },
  {
    role: CabinetRole.Justice,
    name: "Judge Diana Decree",
    influenceArea: InfluenceArea.Legal,
    approvalRating: 52,
    psRelationship: 50,
    isActive: true,
  },
  {
    role: CabinetRole.HHS,
    name: "Dr. Evelyn Epidemic",
    influenceArea: InfluenceArea.Health,
    approvalRating: 48,
    psRelationship: 50,
    isActive: true,
  },
  {
    role: CabinetRole.Homeland,
    name: "Frank Fortress",
    influenceArea: InfluenceArea.HomelandSecurity,
    approvalRating: 50,
    psRelationship: 50,
    isActive: true,
  },
];
