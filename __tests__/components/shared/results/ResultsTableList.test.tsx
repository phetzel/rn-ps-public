/**
 * ResultsTableList Component Tests
 *
 * Tests results table list with entity grouping:
 * - Groups entities by role (president, cabinet, journalists, subgroups)
 * - Shows appropriate sections: Admin, Journalists, Groups
 * - Section visibility logic based on entity presence
 * - Proper delegation to ResultsTable components
 * - Accessibility labels for overall container
 * - Handles null/empty entity arrays
 * - Passes props correctly to child components
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { ResultsTableList } from "~/components/shared/results/ResultsTableList";
import type { EntityWithDelta, EntityWithMediaDelta } from "~/types";

// Mock ResultsTable component
jest.mock("~/components/shared/results/ResultsTable", () => ({
  ResultsTable: ({ entities, title, isAdWatched, showAdColumn }: any) => {
    const { Text } = require("react-native");
    return (
      <Text
        testID={`mocked-results-table-${title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {`MockedResultsTable: ${title} - ${entities.length} entities, adWatched: ${isAdWatched}, showAdColumn: ${showAdColumn}`}
      </Text>
    );
  },
}));

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

const createMockMediaEntity = (
  id: string,
  name: string,
  role: string,
  overrides: Partial<EntityWithMediaDelta> = {}
): EntityWithMediaDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: role as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  preMediaDelta: 3,
  ...overrides,
});

describe("ResultsTableList", () => {
  const defaultProps = {
    enhancedDeltas: [],
    isAdWatched: false,
  };

  describe("empty/null data handling", () => {
    it("returns null when enhancedDeltas is null", () => {
      const result = render(
        <ResultsTableList {...defaultProps} enhancedDeltas={null} />
      );
      expect(result.toJSON()).toBeNull();
    });

    it("renders empty container when enhancedDeltas is empty", () => {
      render(<ResultsTableList {...defaultProps} enhancedDeltas={[]} />);

      // Should render container but no table sections
      expect(
        screen.getByLabelText(
          "Results comparison table showing start values, changes, and ad-boosted changes"
        )
      ).toBeTruthy();
      expect(screen.queryByTestId("mocked-results-table-admin")).toBeNull();
      expect(
        screen.queryByTestId("mocked-results-table-journalists")
      ).toBeNull();
      expect(screen.queryByTestId("mocked-results-table-groups")).toBeNull();
    });

    it("returns null when enhancedDeltas is undefined", () => {
      const result = render(
        <ResultsTableList {...defaultProps} enhancedDeltas={undefined as any} />
      );
      expect(result.toJSON()).toBeNull();
    });
  });

  describe("basic rendering", () => {
    it("renders container with proper accessibility label", () => {
      const entities = [createMockEntity("1", "Entity One", "cabinet")];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByLabelText(
          "Results comparison table showing start values, changes, and ad-boosted changes"
        )
      ).toBeTruthy();
    });
  });

  describe("Admin section", () => {
    it("shows Admin section with president entities", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("shows Admin section with cabinet entities", () => {
      const entities = [
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("shows Admin section with both president and cabinet", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
        createMockEntity("cab2", "Secretary of State", "cabinet"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 3 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("does not show Admin section when no admin entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByTestId("mocked-results-table-admin")).toBeNull();
    });
  });

  describe("Journalists section", () => {
    it("shows Journalists section with journalist entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
        createMockEntity("jour2", "Anchor Jones", "journalist"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByTestId("mocked-results-table-journalists")
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Journalists - 2 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("does not show Journalists section when no journalist entities", () => {
      const entities = [
        createMockEntity("cab1", "Secretary of Defense", "cabinet"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.queryByTestId("mocked-results-table-journalists")
      ).toBeNull();
    });
  });

  describe("Groups section", () => {
    it("shows Groups section with subgroup entities", () => {
      const entities = [
        createMockEntity("sub1", "Urban Professionals", "subgroup"),
        createMockEntity("sub2", "Rural Voters", "subgroup"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-groups")).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Groups - 2 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("does not show Groups section when no subgroup entities", () => {
      const entities = [
        createMockEntity("jour1", "Reporter Smith", "journalist"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.queryByTestId("mocked-results-table-groups")).toBeNull();
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

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.getByTestId("mocked-results-table-journalists")
      ).toBeTruthy();
      expect(screen.getByTestId("mocked-results-table-groups")).toBeTruthy();

      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 2 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Journalists - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Groups - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("only shows sections with entities", () => {
      const entities = [
        createMockEntity("pres1", "President Johnson", "president"),
        createMockEntity("sub1", "Urban Professionals", "subgroup"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.queryByTestId("mocked-results-table-journalists")
      ).toBeNull();
      expect(screen.getByTestId("mocked-results-table-groups")).toBeTruthy();
    });
  });

  describe("prop passing", () => {
    it("passes isAdWatched to all table components", () => {
      const entities = [
        createMockEntity("pres1", "President", "president"),
        createMockEntity("jour1", "Journalist", "journalist"),
      ];

      render(
        <ResultsTableList
          {...defaultProps}
          enhancedDeltas={entities}
          isAdWatched={true}
        />
      );

      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: true, showAdColumn: true"
        )
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Journalists - 1 entities, adWatched: true, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("passes showAdColumn to all table components", () => {
      const entities = [createMockEntity("cab1", "Cabinet Member", "cabinet")];

      render(
        <ResultsTableList
          {...defaultProps}
          enhancedDeltas={entities}
          showAdColumn={false}
        />
      );

      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: false"
        )
      ).toBeTruthy();
    });

    it("uses default showAdColumn when not provided", () => {
      const entities = [createMockEntity("cab1", "Cabinet Member", "cabinet")];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });
  });

  describe("entity grouping", () => {
    it("correctly groups entities by role", () => {
      const entities = [
        createMockEntity("pres1", "President", "president"),
        createMockEntity("cab1", "Cabinet 1", "cabinet"),
        createMockEntity("cab2", "Cabinet 2", "cabinet"),
        createMockEntity("jour1", "Journalist 1", "journalist"),
        createMockEntity("jour2", "Journalist 2", "journalist"),
        createMockEntity("jour3", "Journalist 3", "journalist"),
        createMockEntity("sub1", "Subgroup 1", "subgroup"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      // Admin should have president + cabinet (3 entities)
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 3 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      // Journalists should have 3 entities
      expect(
        screen.getByText(
          "MockedResultsTable: Journalists - 3 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      // Groups should have 1 entity
      expect(
        screen.getByText(
          "MockedResultsTable: Groups - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("handles unknown entity roles gracefully", () => {
      const entities = [
        createMockEntity("cab1", "Cabinet Member", "cabinet"),
        createMockEntity("unknown1", "Unknown Entity", "unknown"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      // Only cabinet member should appear in Admin section
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      // Unknown entities are filtered out, so no other sections should appear
      expect(
        screen.queryByTestId("mocked-results-table-journalists")
      ).toBeNull();
      expect(screen.queryByTestId("mocked-results-table-groups")).toBeNull();
    });
  });

  describe("mixed entity types", () => {
    it("handles mix of EntityWithDelta and EntityWithMediaDelta", () => {
      const entities = [
        createMockEntity("cab1", "Regular Entity", "cabinet"),
        createMockMediaEntity("cab2", "Media Entity", "cabinet"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(screen.getByTestId("mocked-results-table-admin")).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 2 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("renders empty container for empty arrays", () => {
      const entities: EntityWithDelta[] = [];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      // Should render container but no table sections
      expect(
        screen.getByLabelText(
          "Results comparison table showing start values, changes, and ad-boosted changes"
        )
      ).toBeTruthy();
      expect(screen.queryByTestId("mocked-results-table-admin")).toBeNull();
      expect(
        screen.queryByTestId("mocked-results-table-journalists")
      ).toBeNull();
      expect(screen.queryByTestId("mocked-results-table-groups")).toBeNull();
    });

    it("renders without errors", () => {
      const entities = [createMockEntity("test1", "Test Entity", "cabinet")];

      expect(() =>
        render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />)
      ).not.toThrow();
    });

    it("handles single entity in each category", () => {
      const entities = [
        createMockEntity("pres1", "President", "president"),
        createMockEntity("jour1", "Journalist", "journalist"),
        createMockEntity("sub1", "Subgroup", "subgroup"),
      ];

      render(<ResultsTableList {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByText(
          "MockedResultsTable: Admin - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Journalists - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
      expect(
        screen.getByText(
          "MockedResultsTable: Groups - 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });
  });
});
