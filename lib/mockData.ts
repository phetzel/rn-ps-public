// --- START OF FILE mockData.ts ---
import type Publication from "~/lib/db/models/Publication";

import { CabinetRole, InfluenceArea, PoliticalLeaning } from "~/types";

// --- Mock Cabinet Member Data ---
export interface NewCabinetMemberData {
  role: CabinetRole;
  name: string;
  influenceArea: InfluenceArea;
  approvalRating: number; // Use camelCase
  isActive: boolean; // Use camelCase (matches model)
}

export const DEFAULT_CABINET_MEMBERS: NewCabinetMemberData[] = [
  {
    role: CabinetRole.State,
    name: "Alice Albright",
    influenceArea: InfluenceArea.ForeignRelations,
    approvalRating: 55,
    isActive: true,
  },
  {
    role: CabinetRole.Treasury,
    name: "Bob Banker",
    influenceArea: InfluenceArea.Economy,
    approvalRating: 50,
    isActive: true,
  },
  {
    role: CabinetRole.Defense,
    name: "General Carl Command",
    influenceArea: InfluenceArea.Military,
    approvalRating: 60,
    isActive: true,
  },
  {
    role: CabinetRole.Justice,
    name: "Judge Diana Decree",
    influenceArea: InfluenceArea.Legal,
    approvalRating: 52,
    isActive: true,
  },
  {
    role: CabinetRole.HHS,
    name: "Dr. Evelyn Epidemic",
    influenceArea: InfluenceArea.Health,
    approvalRating: 48,
    isActive: true,
  },
  {
    role: CabinetRole.Homeland,
    name: "Frank Fortress",
    influenceArea: InfluenceArea.HomelandSecurity,
    approvalRating: 50,
    isActive: true,
  },
];

// --- Mock Publication Data ---
export interface NewPublicationData {
  name: string;
  politicalLeaning: PoliticalLeaning;
  reach: number;
  approvalRating: number;
}

export const generateMockPublications = (): NewPublicationData[] => [
  {
    name: "Capital Chronicle",
    politicalLeaning: PoliticalLeaning.Liberal,
    reach: 60,
    approvalRating: 50,
  },
  {
    name: "Liberty Ledger",
    politicalLeaning: PoliticalLeaning.Conservative,
    reach: 55,
    approvalRating: 50,
  },
  {
    name: "Metro Monitor",
    politicalLeaning: PoliticalLeaning.Neutral,
    reach: 70,
    approvalRating: 50,
  },
  {
    name: "Digital Dispatch",
    politicalLeaning: PoliticalLeaning.Liberal,
    reach: 40,
    approvalRating: 50,
  },
];

// --- Mock Journalist Data ---
export interface NewJournalistData {
  publication: Publication;
  name: string;
  bias: PoliticalLeaning | null;
  aggressiveness: number;
  reputation: number;
  relationship: number;
  isActive: boolean;
}

export const generateMockJournalists = (
  publications: Publication[]
): NewJournalistData[] => {
  if (publications.length === 0) return [];

  const mockJournalists: NewJournalistData[] = [
    {
      publication: publications[0 % publications.length],
      name: "Sarah Inquiry",
      bias: PoliticalLeaning.Liberal,
      aggressiveness: 70,
      reputation: 70,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[1 % publications.length],
      name: "Mark Statement",
      bias: PoliticalLeaning.Conservative,
      aggressiveness: 60,
      reputation: 65,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[2 % publications.length],
      name: "Alex Objective",
      bias: PoliticalLeaning.Neutral,
      aggressiveness: 50,
      reputation: 80,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[3 % publications.length],
      name: "Brenda Beat",
      bias: PoliticalLeaning.Neutral,
      aggressiveness: 80,
      reputation: 60,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[4 % publications.length],
      name: "Chris Coder",
      bias: PoliticalLeaning.Liberal,
      aggressiveness: 40,
      reputation: 50,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[5 % publications.length],
      name: "Penny Profit",
      bias: PoliticalLeaning.Conservative,
      aggressiveness: 60,
      reputation: 70,
      relationship: 50,
      isActive: true,
    },
  ];

  return mockJournalists;
};
// --- END OF FILE mockData.ts ---
