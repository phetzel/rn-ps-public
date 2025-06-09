/**
 * SituationOutcomeExchangeImpactList Component Tests
 *
 * Tests exchange impact on outcomes display:
 * - Shows outcome probability changes from press exchanges
 * - Displays positive and negative impacts with appropriate icons
 * - Highlights the currently selected outcome
 * - Filters out zero impact changes
 * - Shows outcome names with change percentages
 * - Comprehensive accessibility labels for all impacts
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { SituationOutcomeExchangeImpactList } from "~/components/shared/situations-outcome-list/SituationOutcomeExchangeImpactList";

describe("SituationOutcomeExchangeImpactList", () => {
  const mockOutcomeModifiers = {
    "outcome-1": 15,
    "outcome-2": -10,
    "outcome-3": 0,
    "outcome-4": 5,
  };

  const mockOutcomeMap = {
    "outcome-1": "Crisis Escalation",
    "outcome-2": "Diplomatic Resolution",
    "outcome-3": "Status Quo Maintained",
    "outcome-4": "Economic Recovery",
  };

  it("renders outcome impacts with changes", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    expect(screen.getByText("Outcome Impacts")).toBeTruthy();
    expect(screen.getByText("Crisis Escalation")).toBeTruthy();
    expect(screen.getByText("Diplomatic Resolution")).toBeTruthy();
    expect(screen.getByText("Economic Recovery")).toBeTruthy();
  });

  it("displays positive and negative percentage changes", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    expect(screen.getByText("+15%")).toBeTruthy();
    expect(screen.getByText("-10%")).toBeTruthy();
    expect(screen.getByText("+5%")).toBeTruthy();
  });

  it("filters out zero impact changes", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    // Should not show "Status Quo Maintained" since it has 0 impact
    expect(screen.queryByText("Status Quo Maintained")).toBeNull();
  });

  it("highlights selected outcome with bold text", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    // The selected outcome should be bold (we can't directly test styles, but accessibility label includes this info)
    expect(
      screen.getByLabelText(
        "Crisis Escalation (current outcome): probability increased by 15%"
      )
    ).toBeTruthy();
  });

  it("shows non-selected outcomes without bold styling", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    expect(
      screen.getByLabelText(
        "Diplomatic Resolution: probability decreased by 10%"
      )
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Economic Recovery: probability increased by 5%")
    ).toBeTruthy();
  });

  it("has correct accessibility properties for container", () => {
    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={mockOutcomeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    const container = screen.getByLabelText(
      "Outcome impacts: 3 outcomes affected"
    );
    expect(container).toBeTruthy();
  });

  it("returns null when no relevant modifiers", () => {
    const result = render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={{}}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );
    expect(result.toJSON()).toBeNull();
  });

  it("returns null when all modifiers are zero", () => {
    const zeroModifiers = {
      "outcome-1": 0,
      "outcome-2": 0,
    };

    const result = render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={zeroModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );
    expect(result.toJSON()).toBeNull();
  });

  it("handles missing outcome names in map", () => {
    const modifiersWithMissingNames = {
      "outcome-unknown": 10,
      "outcome-1": 5,
    };

    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={modifiersWithMissingNames}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    expect(screen.getByText("Outcome outcome-unknown")).toBeTruthy();
    expect(screen.getByText("Crisis Escalation")).toBeTruthy();
  });

  it("handles large percentage changes", () => {
    const largeModifiers = {
      "outcome-1": 50,
      "outcome-2": -75,
    };

    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={largeModifiers}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    expect(screen.getByText("+50%")).toBeTruthy();
    expect(screen.getByText("-75%")).toBeTruthy();
  });

  it("handles single outcome impact", () => {
    const singleModifier = {
      "outcome-1": 20,
    };

    render(
      <SituationOutcomeExchangeImpactList
        outcomeModifiers={singleModifier}
        outcomeMap={mockOutcomeMap}
        selectedOutcomeId="outcome-1"
      />
    );

    const container = screen.getByLabelText(
      "Outcome impacts: 1 outcomes affected"
    );
    expect(container).toBeTruthy();
    expect(screen.getByText("+20%")).toBeTruthy();
  });
});
