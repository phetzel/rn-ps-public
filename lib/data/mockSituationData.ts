import { SituationStatus, SituationType, NewSituationData } from "~/types";

export const mockDomesticSituations: NewSituationData[] = [
  {
    type: SituationType.Domestic,
    title: "Healthcare Reform Bill",
    description:
      "The President's healthcare reform bill faces fierce debate in Congress.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 2,
            rationale:
              "Passage is crucial; prioritize moderate bipartisan support.",
          },
          cabinet: {
            health: {
              weight: 3,
              rationale:
                "Fully supportive; urgent action needed to improve healthcare access.",
            },
            treasury: {
              weight: -1,
              rationale:
                "Concerns about budgetary impact; advise fiscal caution.",
            },
          },
        },
      },
    }),
  },
  {
    type: SituationType.Domestic,
    title: "Major Infrastructure Initiative",
    description:
      "Administration pushes for massive spending on national infrastructure.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 3,
            rationale:
              "Infrastructure spending is a key campaign promise; push hard.",
          },
          cabinet: {
            transportation: {
              weight: 3,
              rationale: "Strongly supportive; critical repairs are overdue.",
            },
            treasury: {
              weight: -2,
              rationale: "Budget constraints raise significant concerns.",
            },
          },
        },
      },
    }),
  },
];

export const mockForeignSituations: NewSituationData[] = [
  {
    type: SituationType.Foreign,
    title: "Trade Conflict with China",
    description: "Tariff negotiations with China escalate tensions.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 1,
            rationale: "Maintain tough but open negotiation stance.",
          },
          cabinet: {
            commerce: {
              weight: 2,
              rationale: "Protect domestic businesses aggressively.",
            },
            state: {
              weight: 0,
              rationale: "",
            },
          },
        },
      },
    }),
  },
  {
    type: SituationType.Foreign,
    title: "Middle East Peace Talks",
    description:
      "US attempts to mediate ongoing peace talks in the Middle East.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 2,
            rationale:
              "Support peace talks strongly but remain neutral publicly.",
          },
          cabinet: {
            state: {
              weight: 3,
              rationale: "Fully invested in diplomatic solutions.",
            },
            defense: {
              weight: -1,
              rationale: "Skeptical; prefer cautious military preparedness.",
            },
          },
        },
      },
    }),
  },
];

export const mockScandalSituations: NewSituationData[] = [
  {
    type: SituationType.Scandal,
    title: "Cabinet Member Ethics Investigation",
    description:
      "Secretary of Interior faces allegations of financial misconduct.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: -2,
            rationale:
              "Maintain distance; let the investigation run its course.",
          },
          cabinet: {
            interior: {
              weight: -3,
              rationale: "Strongly defensive, denies wrongdoing.",
            },
            justice: {
              weight: 2,
              rationale: "Advocates thorough and transparent investigation.",
            },
          },
        },
      },
    }),
  },
  {
    type: SituationType.Scandal,
    title: "Leaked President's Comments",
    description:
      "Private derogatory remarks by the President leaked to the press.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: -3,
            rationale:
              "Damage control needed immediately; minimize further fallout.",
          },
          cabinet: {
            communications: {
              weight: 3,
              rationale: "Immediate public relations strategy required.",
            },
          },
        },
      },
    }),
  },
];

export const mockEconomicSituations: NewSituationData[] = [
  {
    type: SituationType.Economic,
    title: "Sudden Stock Market Drop",
    description:
      "Stock market faces an unexpected sharp decline causing panic.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 1,
            rationale: "Calm public statements needed to prevent panic.",
          },
          cabinet: {
            treasury: {
              weight: 3,
              rationale:
                "Immediate fiscal measures needed to stabilize markets.",
            },
          },
        },
      },
    }),
  },
];

export const mockSecuritySituations: NewSituationData[] = [
  {
    type: SituationType.Security,
    title: "Cyberattack on US Infrastructure",
    description:
      "Massive cyberattack disrupts major infrastructure services nationwide.",
    status: SituationStatus.Active,
    progress: JSON.stringify({
      stage: 0,
      preferences: {
        0: {
          president: {
            weight: 3,
            rationale: "Rapid and decisive public response needed.",
          },
          cabinet: {
            homeland_security: {
              weight: 3,
              rationale:
                "Immediate actions required to secure and restore services.",
            },
            defense: {
              weight: 2,
              rationale:
                "Military cybersecurity readiness should be highlighted.",
            },
          },
        },
      },
    }),
  },
];

export const mockSituationData = [
  ...mockDomesticSituations,
  ...mockForeignSituations,
  ...mockScandalSituations,
  ...mockEconomicSituations,
  ...mockSecuritySituations,
];
