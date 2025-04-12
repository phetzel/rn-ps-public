import { SituationStatus, SituationType, NewSituationData } from "~/types";

export const mockDomesticSituations: NewSituationData[] = [
  {
    type: SituationType.Domestic,
    title: "Healthcare Reform Bill",
    description:
      "The President's healthcare reform bill faces fierce debate in Congress.",
    status: SituationStatus.Active,
    progress: '{"stage":0,"votesNeeded":50,"votesSecured":45}',
  },
  {
    type: SituationType.Domestic,
    title: "Major Infrastructure Initiative",
    description:
      "Administration pushes for massive spending on national infrastructure.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
];

export const mockForeignSituations: NewSituationData[] = [
  {
    type: SituationType.Foreign,
    title: "Trade Conflict with China",
    description: "Tariff negotiations with China escalate tensions.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
  {
    type: SituationType.Foreign,
    title: "Middle East Peace Talks",
    description:
      "US attempts to mediate ongoing peace talks in the Middle East.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
];

export const mockScandalSituations: NewSituationData[] = [
  {
    type: SituationType.Scandal,
    title: "Cabinet Member Ethics Investigation",
    description:
      "Secretary of Interior faces allegations of financial misconduct.",
    status: SituationStatus.Active,
    progress: '{"stage":0,"investigationStatus":"ongoing"}',
  },
  {
    type: SituationType.Scandal,
    title: "Leaked President's Comments",
    description:
      "Private derogatory remarks by the President leaked to the press.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
];

export const mockEconomicSituations: NewSituationData[] = [
  {
    type: SituationType.Economic,
    title: "Sudden Stock Market Drop",
    description:
      "Stock market faces an unexpected sharp decline causing panic.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
];

export const mockSecuritySituations: NewSituationData[] = [
  {
    type: SituationType.Security,
    title: "Cyberattack on US Infrastructure",
    description:
      "Massive cyberattack disrupts major infrastructure services nationwide.",
    status: SituationStatus.Active,
    progress: '{"stage":0}',
  },
];

export const mockSituationData = [
  ...mockDomesticSituations,
  ...mockForeignSituations,
  ...mockScandalSituations,
  ...mockEconomicSituations,
  ...mockSecuritySituations,
];
