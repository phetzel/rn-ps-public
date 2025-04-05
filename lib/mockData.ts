// --- START OF FILE mockData.ts ---

import type Game from "~/lib/db/models/Game";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";

// --- Mock Cabinet Member Data ---
export interface NewCabinetMemberData {
  role: string;
  name: string;
  influenceArea: string; // Use camelCase
  approvalRating: number; // Use camelCase
  isActive: boolean; // Use camelCase (matches model)
}

export const DEFAULT_CABINET_MEMBERS: NewCabinetMemberData[] = [
  {
    role: "state",
    name: "Alice Albright",
    influenceArea: "foreign_relations",
    approvalRating: 55,
    isActive: true,
  },
  {
    role: "treasury",
    name: "Bob Banker",
    influenceArea: "economy",
    approvalRating: 50,
    isActive: true,
  },
  {
    role: "defense",
    name: "General Carl Command",
    influenceArea: "military",
    approvalRating: 60,
    isActive: true,
  },
  {
    role: "justice",
    name: "Judge Diana Decree",
    influenceArea: "legal",
    approvalRating: 52,
    isActive: true,
  },
  {
    role: "hhs",
    name: "Dr. Evelyn Epidemic",
    influenceArea: "health",
    approvalRating: 48,
    isActive: true,
  },
  {
    role: "homeland",
    name: "Frank Fortress",
    influenceArea: "homeland_security",
    approvalRating: 50,
    isActive: true,
  },
];

// --- Mock Publication Data ---
export interface NewPublicationData {
  name: string;
  politicalLeaning: string; // Use camelCase
  reach: number;
}

export const generateMockPublications = (): NewPublicationData[] => [
  { name: "Capital Chronicle", politicalLeaning: "liberal", reach: 60 },
  { name: "Liberty Ledger", politicalLeaning: "conservative", reach: 55 },
  { name: "Metro Monitor", politicalLeaning: "neutral", reach: 70 },
  { name: "Digital Dispatch", politicalLeaning: "liberal", reach: 40 },
  { name: "Wall Street Wire", politicalLeaning: "conservative", reach: 0.5 },
];

// --- Mock Journalist Data ---

export interface NewJournalistData {
  publication: Publication; // Use camelCase (represents the foreign key)
  name: string;
  bias: string | null;
  aggressiveness: number;
  reputation: number;
  relationship: number;
  isActive: boolean; // Use camelCase
}

export const generateMockJournalists = (
  publications: Publication[]
): NewJournalistData[] => {
  if (publications.length === 0) return [];

  const mockJournalists: NewJournalistData[] = [
    {
      publication: publications[0 % publications.length],
      name: "Sarah Inquiry",
      bias: "liberal",
      aggressiveness: 70,
      reputation: 70,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[1 % publications.length],
      name: "Mark Statement",
      bias: "conservative",
      aggressiveness: 60,
      reputation: 65,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[2 % publications.length],
      name: "Alex Objective",
      bias: "neutral",
      aggressiveness: 50,
      reputation: 80,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[3 % publications.length],
      name: "Brenda Beat",
      bias: "neutral",
      aggressiveness: 80,
      reputation: 60,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[4 % publications.length],
      name: "Chris Coder",
      bias: "liberal",
      aggressiveness: 40,
      reputation: 50,
      relationship: 50,
      isActive: true,
    },
    {
      publication: publications[5 % publications.length],
      name: "Penny Profit",
      bias: "conservative",
      aggressiveness: 60,
      reputation: 70,
      relationship: 50,
      isActive: true,
    },
  ];

  return mockJournalists;
};
// --- END OF FILE mockData.ts ---
