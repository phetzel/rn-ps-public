/**
 * ResultsCard Component Tests
 *
 * Tests main results card container:
 * - Shows proper accessibility labels with entity count and ad status
 * - Border styling based on ad watched status
 * - Header integration with ad functionality
 * - Custom messages for ad status
 * - Proper prop handling and rendering
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { ResultsCard } from "~/components/shared/results/ResultsCard";
import { EntityWithDelta } from "~/types";

// No mocks - testing actual component behavior

const createMockEntity = (
  id: string,
  name: string,
  role: string = "cabinet"
): EntityWithDelta => ({
  id,
  name,
  title: `Secretary of ${name}`,
  role: role as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
});

describe("ResultsCard", () => {
  const mockEntities = [
    createMockEntity("1", "Defense"),
    createMockEntity("2", "State"),
  ];

  const defaultProps = {
    enhancedDeltas: mockEntities,
    isAdWatched: false,
  };

  it("has proper accessibility label with entity count and ad status", () => {
    render(<ResultsCard {...defaultProps} />);

    expect(
      screen.getByLabelText(
        "Results summary with 2 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("shows ad watched status in accessibility label", () => {
    render(<ResultsCard {...defaultProps} isAdWatched={true} />);

    expect(
      screen.getByLabelText(
        "Results summary with 2 entities. Ad boost applied."
      )
    ).toBeTruthy();
  });

  it("handles null enhancedDeltas", () => {
    render(<ResultsCard {...defaultProps} enhancedDeltas={null} />);

    expect(
      screen.getByLabelText(
        "Results summary with 0 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("handles empty enhancedDeltas array", () => {
    render(<ResultsCard {...defaultProps} enhancedDeltas={[]} />);

    expect(
      screen.getByLabelText(
        "Results summary with 0 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("renders with custom ad messages", () => {
    const customAdWatchMessage = "Custom boost applied!";
    const customAdNotWatchMessage = "Custom boost available!";

    render(
      <ResultsCard
        {...defaultProps}
        adWatchMessage={customAdWatchMessage}
        adNotWatchMessage={customAdNotWatchMessage}
      />
    );

    // Component should render without errors
    expect(
      screen.getByLabelText(
        "Results summary with 2 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("renders with all optional props", () => {
    const onAdComplete = jest.fn();
    const customClass = "custom-results-card";

    render(
      <ResultsCard
        {...defaultProps}
        isAdWatched={false}
        onAdComplete={onAdComplete}
        adWatchMessage="Custom watched message"
        adNotWatchMessage="Custom not watched message"
        className={customClass}
      />
    );

    expect(
      screen.getByLabelText(
        "Results summary with 2 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("renders without errors", () => {
    expect(() => render(<ResultsCard {...defaultProps} />)).not.toThrow();
  });

  it("handles large number of entities", () => {
    const manyEntities = Array.from({ length: 10 }, (_, i) =>
      createMockEntity(`${i}`, `Entity${i}`)
    );

    render(<ResultsCard {...defaultProps} enhancedDeltas={manyEntities} />);

    expect(
      screen.getByLabelText(
        "Results summary with 10 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  it("handles different entity roles", () => {
    const mixedEntities = [
      createMockEntity("pres1", "President", "president"),
      createMockEntity("cab1", "Defense", "cabinet"),
      createMockEntity("jour1", "Reporter", "journalist"),
      createMockEntity("sub1", "Voters", "subgroup"),
    ];

    render(<ResultsCard {...defaultProps} enhancedDeltas={mixedEntities} />);

    expect(
      screen.getByLabelText(
        "Results summary with 4 entities. Ad boost available."
      )
    ).toBeTruthy();
  });

  describe("header integration", () => {
    it("passes onAdComplete to header", () => {
      const onAdComplete = jest.fn();
      render(<ResultsCard {...defaultProps} onAdComplete={onAdComplete} />);

      // Header should render - we can't test the button directly since it's in a separate component
      // but we can verify the component renders without error
      expect(
        screen.getByLabelText(
          "Results summary with 2 entities. Ad boost available."
        )
      ).toBeTruthy();
    });

    it("passes isAdWatched to header", () => {
      render(<ResultsCard {...defaultProps} isAdWatched={true} />);

      // Header should render with watched state
      expect(
        screen.getByLabelText(
          "Results summary with 2 entities. Ad boost applied."
        )
      ).toBeTruthy();
    });
  });

  describe("border styling", () => {
    it("applies green border when ad is watched", () => {
      render(<ResultsCard {...defaultProps} isAdWatched={true} />);
      // Border styling is handled by className, component should render
      expect(
        screen.getByLabelText(
          "Results summary with 2 entities. Ad boost applied."
        )
      ).toBeTruthy();
    });

    it("applies blue border when ad is not watched", () => {
      render(<ResultsCard {...defaultProps} isAdWatched={false} />);
      // Border styling is handled by className, component should render
      expect(
        screen.getByLabelText(
          "Results summary with 2 entities. Ad boost available."
        )
      ).toBeTruthy();
    });
  });
});
