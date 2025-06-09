/**
 * ResultsTable Component Tests
 *
 * Tests results table with entity grouping:
 * - Groups entities by role (president, cabinet, journalists, subgroups)
 * - Shows appropriate sections: Admin, Journalists, Groups
 * - Header row with column labels
 * - Ad status messages
 * - Entity counting and section visibility logic
 * - Accessibility labels for sections and tables
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { ResultsTable } from "~/components/shared/results/ResultsTable";
import type { EntityWithDelta } from "~/types";

// No mocks - testing actual component behavior

const createMockEntity = (
  id: string,
  name: string,
  role: string,
  overrides: Partial<EntityWithDelta> = {}
): EntityWithDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: role as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  ...overrides,
});

describe("ResultsTable", () => {
  const defaultProps = {
    enhancedDeltas: null,
    isAdWatched: false,
    adMessage: {
      watched: "Ad boost applied!",
      notWatched: "Ad boost available!",
    },
  };

  describe("empty/null data handling", () => {
    it("renders with null enhancedDeltas", () => {
      render(<ResultsTable {...defaultProps} />);

      expect(
        screen.getByLabelText("Results table. Ad boost available!")
      ).toBeTruthy();
      expect(screen.getByText("Ad boost available!")).toBeTruthy();
    });

    it("renders with empty enhancedDeltas array", () => {
      render(<ResultsTable {...defaultProps} enhancedDeltas={[]} />);

      expect(
        screen.getByLabelText("Results table. Ad boost available!")
      ).toBeTruthy();
      expect(screen.getByText("Ad boost available!")).toBeTruthy();
    });
  });

  describe("ad status messages", () => {
    it("shows not watched message when ad not watched", () => {
      render(<ResultsTable {...defaultProps} />);

      expect(screen.getByText("Ad boost available!")).toBeTruthy();
      expect(
        screen.getByLabelText("Results table. Ad boost available!")
      ).toBeTruthy();
    });

    it("shows watched message when ad watched", () => {
      render(<ResultsTable {...defaultProps} isAdWatched={true} />);

      expect(screen.getByText("Ad boost applied!")).toBeTruthy();
      expect(
        screen.getByLabelText("Results table. Ad boost applied!")
      ).toBeTruthy();
    });

    it("ad status message has live region accessibility", () => {
      render(<ResultsTable {...defaultProps} />);

      const message = screen.getByText("Ad boost available!");
      expect(message).toHaveProp("accessibilityLiveRegion", "polite");
      expect(message).toHaveProp("accessibilityLabel", "Ad boost available!");
    });
  });

  describe("table header", () => {
    it("renders table header row", () => {
      render(<ResultsTable {...defaultProps} enhancedDeltas={[]} />);

      expect(screen.getByText("Name")).toBeTruthy();
      expect(screen.getByText("Current")).toBeTruthy();
      expect(screen.getByText("Change")).toBeTruthy();
      expect(screen.getByText("Boosted")).toBeTruthy();
    });

    it("has proper accessibility label for header", () => {
      render(<ResultsTable {...defaultProps} enhancedDeltas={[]} />);

      expect(
        screen.getByLabelText(
          "Table columns: Entity name, Current value, Base change, Ad boosted change"
        )
      ).toBeTruthy();
    });

    it("has accessibility label for comparison table", () => {
      render(<ResultsTable {...defaultProps} enhancedDeltas={[]} />);

      expect(
        screen.getByLabelText(
          "Results comparison table showing current values, base changes, and ad-boosted changes"
        )
      ).toBeTruthy();
    });
  });

  describe("Admin section", () => {
    it("shows Admin section with president entities", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Admin")).toBeTruthy();
      expect(screen.getByText("President Johnson")).toBeTruthy();
    });

    it("shows Admin section with cabinet entities", () => {
      const entities = [
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Admin")).toBeTruthy();
      expect(screen.getByText("Secretary of Defense")).toBeTruthy();
    });

    it("shows Admin section with both president and cabinet", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
        createMockEntity("cab2", "Secretary of State", "cabinet"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Admin")).toBeTruthy();
      expect(
        screen.getByLabelText("Administration section with 3 entities")
      ).toBeTruthy();
      expect(screen.getByText("President Johnson")).toBeTruthy();
      expect(screen.getByText("Secretary of Defense")).toBeTruthy();
      expect(screen.getByText("Secretary of State")).toBeTruthy();
    });

    it("does not show Admin section when no admin entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByText("Admin")).toBeNull();
    });
  });

  describe("Journalists section", () => {
    it("shows Journalists section with journalist entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
        createMockEntity("jour2", "Anchor Jones", "journalist"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Journalists")).toBeTruthy();
      expect(
        screen.getByLabelText("Journalists section with 2 entities")
      ).toBeTruthy();
      expect(screen.getByText("Reporter Smith")).toBeTruthy();
      expect(screen.getByText("Anchor Jones")).toBeTruthy();
    });

    it("does not show Journalists section when no journalist entities", () => {
      const entities = [
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByText("Journalists")).toBeNull();
    });
  });

  describe("Groups section", () => {
    it("shows Groups section with subgroup entities", () => {
      const entities = [
        createMockEntity("sub1", "Urban Professionals", "subgroup"),
        createMockEntity("sub2", "Rural Voters", "subgroup"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Groups")).toBeTruthy();
      expect(
        screen.getByLabelText("Voter groups section with 2 entities")
      ).toBeTruthy();
      expect(screen.getByText("Urban Professionals")).toBeTruthy();
      expect(screen.getByText("Rural Voters")).toBeTruthy();
    });

    it("does not show Groups section when no subgroup entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByText("Groups")).toBeNull();
    });
  });

  describe("all sections together", () => {
    it("shows all sections when all entity types present", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
        createMockEntity("jour1", "Reporter Smith", "journalist"),
        createMockEntity("sub1", "Urban Professionals", "subgroup"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Admin")).toBeTruthy();
      expect(screen.getByText("Journalists")).toBeTruthy();
      expect(screen.getByText("Groups")).toBeTruthy();

      expect(
        screen.getByLabelText("Administration section with 2 entities")
      ).toBeTruthy();
      expect(
        screen.getByLabelText("Journalists section with 1 entities")
      ).toBeTruthy();
      expect(
        screen.getByLabelText("Voter groups section with 1 entities")
      ).toBeTruthy();
    });
  });

  describe("section headers accessibility", () => {
    it("section headers have proper accessibility roles", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
        createMockEntity("jour1", "Reporter Smith", "journalist"),
        createMockEntity("sub1", "Urban Professionals", "subgroup"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      const adminHeader = screen.getByText("Admin");
      const journalistsHeader = screen.getByText("Journalists");
      const groupsHeader = screen.getByText("Groups");

      expect(adminHeader).toHaveProp("accessibilityRole", "header");
      expect(journalistsHeader).toHaveProp("accessibilityRole", "header");
      expect(groupsHeader).toHaveProp("accessibilityRole", "header");
    });
  });

  describe("entity content display", () => {
    it("displays entity data correctly in rows", () => {
      const entities = [
        createMockEntity("test1", "Test Entity", "cabinet", {
          currentValue: 75,
          delta: 10,
          adBoostedDelta: 15,
        }),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByText("Test Entity")).toBeTruthy();
      expect(screen.getByText("75")).toBeTruthy();
      expect(screen.getByText("+10")).toBeTruthy();
      expect(screen.getByText("+15")).toBeTruthy();
    });

    it("shows entities in correct sections based on role", () => {
      const entities = [
        createMockEntity("pres1", "President", "president"),
        createMockEntity("cab1", "Cabinet Member", "cabinet"),
        createMockEntity("jour1", "Journalist", "journalist"),
        createMockEntity("sub1", "Subgroup", "subgroup"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      // President and Cabinet should appear under Admin
      expect(screen.getByText("Admin")).toBeTruthy();
      expect(screen.getByText("President")).toBeTruthy();
      expect(screen.getByText("Cabinet Member")).toBeTruthy();

      // Journalist should appear under Journalists
      expect(screen.getByText("Journalists")).toBeTruthy();
      expect(screen.getByText("Journalist")).toBeTruthy();

      // Subgroup should appear under Groups
      expect(screen.getByText("Groups")).toBeTruthy();
      expect(screen.getByText("Subgroup")).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("handles empty arrays for specific roles", () => {
      const entities: EntityWithDelta[] = [];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByText("Admin")).toBeNull();
      expect(screen.queryByText("Journalists")).toBeNull();
      expect(screen.queryByText("Groups")).toBeNull();
    });

    it("handles unknown entity roles gracefully", () => {
      const entities = [
        createMockEntity("unknown1", "Unknown Entity", "unknown"),
      ];

      render(<ResultsTable {...defaultProps} enhancedDeltas={entities} />);

      // Unknown roles shouldn't break the component or appear in sections
      expect(screen.queryByText("Admin")).toBeNull();
      expect(screen.queryByText("Journalists")).toBeNull();
      expect(screen.queryByText("Groups")).toBeNull();
      // Unknown role entities are filtered out and don't render
      expect(screen.queryByText("Unknown Entity")).toBeNull();
    });

    it("renders without errors", () => {
      expect(() => render(<ResultsTable {...defaultProps} />)).not.toThrow();
    });
  });
});
