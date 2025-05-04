import {
  SituationType,
  NewSituationData,
  CabinetStaticId,
  PreferenceWeight,
} from "~/types";

export const mockDomesticSituations: NewSituationData[] = [
  {
    type: SituationType.Domestic,
    title: "Healthcare Reform Bill",
    description:
      "The President's healthcare reform bill faces fierce debate in Congress.",

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.Positive,
          rationale:
            "Passage is crucial; prioritize moderate bipartisan support.",
        },
        cabinet: {
          [CabinetStaticId.HHS]: {
            weight: PreferenceWeight.StronglyPositive,
            rationale:
              "Fully supportive; urgent action needed to improve healthcare access.",
          },
          [CabinetStaticId.Treasury]: {
            weight: PreferenceWeight.Negative,
            rationale:
              "Concerns about budgetary impact; advise fiscal caution.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.StronglyPositive,
          rationale:
            "Infrastructure spending is a key campaign promise; push hard.",
        },
        cabinet: {
          [CabinetStaticId.Treasury]: {
            weight: PreferenceWeight.Negative,
            rationale: "Budget constraints raise significant concerns.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.Positive,
          rationale: "Maintain tough but open negotiation stance.",
        },
        cabinet: {
          [CabinetStaticId.Treasury]: {
            weight: PreferenceWeight.Positive,
            rationale: "Protect domestic businesses aggressively.",
          },
          [CabinetStaticId.State]: {
            weight: PreferenceWeight.Neutral,
            rationale: "",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.Positive,
          rationale:
            "Support peace talks strongly but remain neutral publicly.",
        },
        cabinet: {
          [CabinetStaticId.State]: {
            weight: PreferenceWeight.StronglyPositive,
            rationale: "Fully invested in diplomatic solutions.",
          },
          [CabinetStaticId.Defense]: {
            weight: PreferenceWeight.Negative,
            rationale: "Skeptical; prefer cautious military preparedness.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.Negative,
          rationale: "Maintain distance; let the investigation run its course.",
        },
        cabinet: {
          [CabinetStaticId.Homeland]: {
            weight: PreferenceWeight.StronglyNegative,
            rationale: "Strongly defensive, denies wrongdoing.",
          },
          [CabinetStaticId.Justice]: {
            weight: PreferenceWeight.Positive,
            rationale: "Advocates thorough and transparent investigation.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.StronglyNegative,
          rationale:
            "Damage control needed immediately; minimize further fallout.",
        },
        cabinet: {
          [CabinetStaticId.Justice]: {
            weight: PreferenceWeight.StronglyPositive,
            rationale: "Immediate public relations strategy required.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.Positive,
          rationale: "Calm public statements needed to prevent panic.",
        },
        cabinet: {
          [CabinetStaticId.Treasury]: {
            weight: PreferenceWeight.StronglyPositive,
            rationale: "Immediate fiscal measures needed to stabilize markets.",
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

    content: JSON.stringify({
      preferences: {
        president: {
          weight: PreferenceWeight.StronglyPositive,
          rationale: "Rapid and decisive public response needed.",
        },
        cabinet: {
          [CabinetStaticId.Homeland]: {
            weight: PreferenceWeight.StronglyPositive,
            rationale:
              "Immediate actions required to secure and restore services.",
          },
          [CabinetStaticId.Defense]: {
            weight: PreferenceWeight.Positive,
            rationale:
              "Military cybersecurity readiness should be highlighted.",
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
