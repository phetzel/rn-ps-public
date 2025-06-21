/**
 * ResultsCard Component Tests
 *
 * Tests results card component functionality:
 * - Renders card with title and results content
 * - Integrates with ResultsTableList and ResultsCardHeader
 * - Handles different entity data scenarios
 * - Proper accessibility labels and structure
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { ResultsCard } from "~/components/shared/results/ResultsCard";
import type { EntityWithDelta } from "~/types";

// Mock ResultsCardHeader
jest.mock("~/components/shared/results/ResultsCardHeader", () => ({
  __esModule: true,
  default: ({ isAdWatched, onAdComplete }: any) => {
    const { Text } = require("react-native");
    return (
      <Text testID="mocked-results-card-header">
        {`Header: adWatched: ${isAdWatched}, hasCallback: ${!!onAdComplete}`}
      </Text>
    );
  },
}));

// Mock ResultsTableList
jest.mock("~/components/shared/results/ResultsTableList", () => ({
  ResultsTableList: ({ enhancedDeltas, isAdWatched, showAdColumn }: any) => {
    const { Text } = require("react-native");
    return (
      <Text testID="mocked-results-table-list">
        {`TableList: ${
          enhancedDeltas?.length || 0
        } entities, adWatched: ${isAdWatched}, showAdColumn: ${showAdColumn}`}
      </Text>
    );
  },
}));

const createMockEntity = (
  id: string,
  name: string,
  overrides: Partial<EntityWithDelta> = {}
): EntityWithDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: "cabinet" as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  ...overrides,
});

describe("ResultsCard", () => {
  const defaultProps = {
    enhancedDeltas: [],
    isAdWatched: false,
  };

  describe("basic rendering", () => {
    it("renders card with header", () => {
      render(<ResultsCard {...defaultProps} />);

      expect(screen.getByTestId("mocked-results-card-header")).toBeTruthy();
      expect(
        screen.getByText("Header: adWatched: false, hasCallback: false")
      ).toBeTruthy();
    });

    it("renders table list component", () => {
      render(<ResultsCard {...defaultProps} />);

      expect(screen.getByTestId("mocked-results-table-list")).toBeTruthy();
      expect(
        screen.getByText(
          "TableList: 0 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("renders card with accessibility label", () => {
      render(<ResultsCard {...defaultProps} />);

      expect(
        screen.getByLabelText(
          "Results summary with 0 entities. Ad boost available."
        )
      ).toBeTruthy();
    });
  });

  describe("prop passing", () => {
    it("passes enhancedDeltas to ResultsTableList", () => {
      const entities = [
        createMockEntity("1", "Entity One"),
        createMockEntity("2", "Entity Two"),
      ];

      render(<ResultsCard {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByText(
          "TableList: 2 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("passes isAdWatched to both components", () => {
      render(<ResultsCard {...defaultProps} isAdWatched={true} />);

      expect(
        screen.getByText("Header: adWatched: true, hasCallback: false")
      ).toBeTruthy();
      expect(
        screen.getByText(
          "TableList: 0 entities, adWatched: true, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("passes onAdComplete callback to header", () => {
      const mockCallback = jest.fn();
      render(<ResultsCard {...defaultProps} onAdComplete={mockCallback} />);

      expect(
        screen.getByText("Header: adWatched: false, hasCallback: true")
      ).toBeTruthy();
    });

    it("applies custom className", () => {
      render(<ResultsCard {...defaultProps} className="custom-class" />);

      expect(screen.getByTestId("mocked-results-card-header")).toBeTruthy();
    });

    it("always shows ad column in table list", () => {
      render(<ResultsCard {...defaultProps} />);

      expect(
        screen.getByText(
          "TableList: 0 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });
  });

  describe("accessibility labels", () => {
    it("shows correct label when ad not watched", () => {
      const entities = [createMockEntity("1", "Entity One")];

      render(<ResultsCard {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByLabelText(
          "Results summary with 1 entities. Ad boost available."
        )
      ).toBeTruthy();
    });

    it("shows correct label when ad watched", () => {
      const entities = [
        createMockEntity("1", "Entity One"),
        createMockEntity("2", "Entity Two"),
      ];

      render(
        <ResultsCard
          {...defaultProps}
          enhancedDeltas={entities}
          isAdWatched={true}
        />
      );

      expect(
        screen.getByLabelText(
          "Results summary with 2 entities. Ad boost applied."
        )
      ).toBeTruthy();
    });

    it("handles zero entities", () => {
      render(<ResultsCard {...defaultProps} enhancedDeltas={[]} />);

      expect(
        screen.getByLabelText(
          "Results summary with 0 entities. Ad boost available."
        )
      ).toBeTruthy();
    });

    it("handles null entities", () => {
      render(<ResultsCard {...defaultProps} enhancedDeltas={null} />);

      expect(
        screen.getByLabelText(
          "Results summary with 0 entities. Ad boost available."
        )
      ).toBeTruthy();
    });
  });

  describe("different data scenarios", () => {
    it("handles null enhancedDeltas", () => {
      render(<ResultsCard {...defaultProps} enhancedDeltas={null} />);

      expect(
        screen.getByText(
          "TableList: 0 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("handles empty enhancedDeltas array", () => {
      render(<ResultsCard {...defaultProps} enhancedDeltas={[]} />);

      expect(
        screen.getByText(
          "TableList: 0 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("handles single entity", () => {
      const entities = [createMockEntity("1", "Single Entity")];

      render(<ResultsCard {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByText(
          "TableList: 1 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("handles multiple entities", () => {
      const entities = [
        createMockEntity("1", "Entity One"),
        createMockEntity("2", "Entity Two"),
        createMockEntity("3", "Entity Three"),
      ];

      render(<ResultsCard {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByText(
          "TableList: 3 entities, adWatched: false, showAdColumn: true"
        )
      ).toBeTruthy();
    });
  });

  describe("component integration", () => {
    it("renders both header and table list components", () => {
      const entities = [createMockEntity("1", "Test Entity")];

      render(
        <ResultsCard
          enhancedDeltas={entities}
          isAdWatched={true}
          onAdComplete={jest.fn()}
        />
      );

      expect(
        screen.getByText("Header: adWatched: true, hasCallback: true")
      ).toBeTruthy();
      expect(
        screen.getByText(
          "TableList: 1 entities, adWatched: true, showAdColumn: true"
        )
      ).toBeTruthy();
    });

    it("maintains component structure", () => {
      render(<ResultsCard {...defaultProps} />);

      // Both components should be present
      expect(screen.getByTestId("mocked-results-card-header")).toBeTruthy();
      expect(screen.getByTestId("mocked-results-table-list")).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("renders without errors", () => {
      expect(() => render(<ResultsCard {...defaultProps} />)).not.toThrow();
    });

    it("handles various prop combinations", () => {
      const entities = [createMockEntity("1", "Test Entity")];

      expect(() =>
        render(
          <ResultsCard
            enhancedDeltas={entities}
            isAdWatched={true}
            onAdComplete={jest.fn()}
            className="test-class"
          />
        )
      ).not.toThrow();
    });

    it("handles large entity arrays", () => {
      const entities = Array.from({ length: 10 }, (_, i) =>
        createMockEntity(`${i}`, `Entity ${i}`)
      );

      render(<ResultsCard {...defaultProps} enhancedDeltas={entities} />);

      expect(
        screen.getByLabelText(
          "Results summary with 10 entities. Ad boost available."
        )
      ).toBeTruthy();
    });
  });
});
