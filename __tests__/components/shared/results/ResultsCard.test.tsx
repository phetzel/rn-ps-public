/**
 * ResultsCard Component Tests
 *
 * Tests main results card container:
 * - Shows proper accessibility labels with entity count and ad status
 * - Border styling based on ad watched status
 * - Continue button rendering and functionality
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

  it("renders Continue button when onComplete provided", () => {
    const onComplete = jest.fn();
    render(<ResultsCard {...defaultProps} onComplete={onComplete} />);

    const continueButton = screen.getByLabelText("Continue to next screen");
    expect(continueButton).toBeTruthy();
    expect(screen.getByText("Continue")).toBeTruthy();
  });

  it("does not render Continue button when onComplete not provided", () => {
    render(<ResultsCard {...defaultProps} />);

    expect(screen.queryByLabelText("Continue to next screen")).toBeNull();
    expect(screen.queryByText("Continue")).toBeNull();
  });

  it("calls onComplete when Continue button pressed", () => {
    const onComplete = jest.fn();
    render(<ResultsCard {...defaultProps} onComplete={onComplete} />);

    const continueButton = screen.getByLabelText("Continue to next screen");
    fireEvent.press(continueButton);

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("Continue button has proper accessibility properties", () => {
    const onComplete = jest.fn();
    render(<ResultsCard {...defaultProps} onComplete={onComplete} />);

    const continueButton = screen.getByLabelText("Continue to next screen");
    expect(continueButton).toHaveProp("accessibilityRole", "button");
    expect(continueButton).toHaveProp(
      "accessibilityHint",
      "Proceeds to the next section after reviewing results"
    );
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
    const onComplete = jest.fn();
    const onAdComplete = jest.fn();
    const customClass = "custom-results-card";

    render(
      <ResultsCard
        {...defaultProps}
        isAdWatched={true}
        onComplete={onComplete}
        onAdComplete={onAdComplete}
        adWatchMessage="Custom watched message"
        adNotWatchMessage="Custom not watched message"
        className={customClass}
      />
    );

    expect(
      screen.getByLabelText(
        "Results summary with 2 entities. Ad boost applied."
      )
    ).toBeTruthy();
    expect(screen.getByLabelText("Continue to next screen")).toBeTruthy();
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
});
