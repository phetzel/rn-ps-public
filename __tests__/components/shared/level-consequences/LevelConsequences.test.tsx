import React from "react";
import { render, screen } from "@testing-library/react-native";

import LevelConsequences from "~/components/shared/level-consequences/LevelConsequences";
import { CabinetMember, Level } from "~/lib/db/models";
import {
  OutcomeSnapshotType,
  ConsequenceResult,
  CabinetStaticId,
} from "~/types";

// Mock utilities
jest.mock("~/lib/utils", () => ({
  calculateRiskProbability: (value: number) => {
    // Simple mock calculation for testing
    if (value >= 50) return 0;
    if (value >= 40) return 0.1;
    if (value >= 30) return 0.3;
    if (value >= 20) return 0.6;
    return 0.9;
  },
  cn: (...args: any[]) => args.filter(Boolean).join(" "),
}));

// Mock the useRiskDisplay hook
jest.mock("~/lib/hooks/useRiskDisplay", () => ({
  useRiskDisplay: (
    currentValue: number,
    riskPercentage: number,
    threshold: number
  ) => ({
    level:
      riskPercentage === 0
        ? "safe"
        : riskPercentage < 0.25
        ? "low"
        : riskPercentage < 0.5
        ? "medium"
        : "high",
    color:
      riskPercentage === 0
        ? "text-green-700"
        : riskPercentage < 0.25
        ? "text-yellow-700"
        : riskPercentage < 0.5
        ? "text-orange-700"
        : "text-red-700",
    formattedRisk: `${Math.round(riskPercentage * 100)}%`,
    description:
      riskPercentage === 0
        ? "No risk"
        : riskPercentage < 0.25
        ? "Low risk"
        : riskPercentage < 0.5
        ? "Medium risk"
        : "High risk",
    isAboveThreshold: currentValue >= threshold,
    progressValue: Math.max(0, Math.min(100, currentValue)),
    thresholdPercentage: (threshold / 100) * 100,
  }),
}));

// Mock constants - Use actual value
jest.mock("~/lib/constants", () => ({
  CABINET_PENALTY_PER_FIRED_MEMBER: 10,
}));

// Mock WatermelonDB observer - return the props passed in
jest.mock("@nozbe/watermelondb/react", () => ({
  withObservables: (deps: any, observablesFactory: any) => (Component: any) => {
    return (props: any) => {
      const observables = {
        level: props.testLevel || null,
        cabinetMembers: props.testCabinetMembers || [],
      };
      return <Component {...props} {...observables} />;
    };
  },
}));

// Mock observations helpers
jest.mock("~/lib/db/helpers", () => ({
  observeLevel: (levelId: string) => null,
  observeCabinetMembersByLevel: (levelId: string) => [],
}));

describe("LevelConsequences", () => {
  const mockLevel: Level = {
    id: "level-1",
    game_id: "game-1",
    year: 1,
    month: 6,
  } as Level;

  const mockCabinetMembers: CabinetMember[] = [
    {
      id: "1",
      staticId: CabinetStaticId.State,
      name: "John Secretary",
      staticData: { cabinetName: "Secretary of State" },
    } as CabinetMember,
  ];

  const mockFinalSnapshot = {
    president: {
      approvalRating: 45,
      psRelationship: 35,
    },
    cabinetMembers: {
      [CabinetStaticId.State]: {
        approvalRating: 40,
        psRelationship: 50,
      },
    },
    subgroups: {},
    journalists: {},
  };

  const mockConsequences: ConsequenceResult = {
    gameEnded: false,
    cabinetMembersFired: [],
  };

  const mockCompleteOutcomeSnapshot: OutcomeSnapshotType = {
    initial: mockFinalSnapshot,
    final: mockFinalSnapshot,
    consequences: mockConsequences,
  };

  describe("when outcome snapshot is complete", () => {
    it("should render both risk card and consequences card", () => {
      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={mockCompleteOutcomeSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(screen.getByText("Risk Assessment")).toBeTruthy();
      expect(screen.getByText("No Negative Consequences")).toBeTruthy();
    });

    it("should display cabinet member information", () => {
      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={mockCompleteOutcomeSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(screen.getByText("John Secretary")).toBeTruthy();
      expect(screen.getByText("Secretary of State")).toBeTruthy();
    });

    it("should show fired members when applicable", () => {
      const outcomesWithFiredMembers: OutcomeSnapshotType = {
        ...mockCompleteOutcomeSnapshot,
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [CabinetStaticId.State],
        },
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={outcomesWithFiredMembers}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(screen.getByText("Cabinet Members Fired")).toBeTruthy();
      // Check for the fired badge accessibility label
      expect(screen.getByLabelText("Cabinet member was fired")).toBeTruthy();
    });
  });

  describe("when outcome snapshot is incomplete", () => {
    it("should show error message when final snapshot is missing", () => {
      const incompleteSnapshot: OutcomeSnapshotType = {
        initial: mockFinalSnapshot,
        final: undefined,
        consequences: mockConsequences,
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={incompleteSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(
        screen.getByText(
          "Consequence data not available - level may not be complete."
        )
      ).toBeTruthy();
    });

    it("should show error message when consequences are missing", () => {
      const incompleteSnapshot: OutcomeSnapshotType = {
        initial: mockFinalSnapshot,
        final: mockFinalSnapshot,
        consequences: undefined,
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={incompleteSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(
        screen.getByText(
          "Consequence data not available - level may not be complete."
        )
      ).toBeTruthy();
    });
  });

  describe("accessibility", () => {
    it("should have proper accessibility labels for complete state", () => {
      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={mockCompleteOutcomeSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(
        screen.getByLabelText("Level consequences and risk assessment.")
      ).toBeTruthy();
    });

    it("should have proper accessibility labels for incomplete state", () => {
      const incompleteSnapshot: OutcomeSnapshotType = {
        initial: mockFinalSnapshot,
        final: undefined,
        consequences: undefined,
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={incompleteSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(
        screen.getByLabelText(
          "Consequence data not available - level may not be complete"
        )
      ).toBeTruthy();
    });
  });

  describe("game end scenarios", () => {
    it("should handle game ended by firing", () => {
      const gameEndedSnapshot: OutcomeSnapshotType = {
        ...mockCompleteOutcomeSnapshot,
        consequences: {
          gameEnded: true,
          gameEndReason: "fired",
          cabinetMembersFired: [],
        },
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={gameEndedSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(screen.getByText("You've Been Fired")).toBeTruthy();
      expect(screen.getByText("GAME OVER")).toBeTruthy();
    });

    it("should handle game ended by impeachment", () => {
      const gameEndedSnapshot: OutcomeSnapshotType = {
        ...mockCompleteOutcomeSnapshot,
        consequences: {
          gameEnded: true,
          gameEndReason: "impeached",
          cabinetMembersFired: [],
        },
      };

      const EnhancedComponent = LevelConsequences;

      render(
        <EnhancedComponent
          levelId="level-1"
          outcomeSnapshot={gameEndedSnapshot}
          testLevel={mockLevel}
          testCabinetMembers={mockCabinetMembers}
        />
      );

      expect(screen.getByText("Presidential Impeachment")).toBeTruthy();
      expect(screen.getByText("GAME OVER")).toBeTruthy();
    });
  });
});
