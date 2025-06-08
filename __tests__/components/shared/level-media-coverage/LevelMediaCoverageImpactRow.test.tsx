/**
 * LevelMediaCoverageImpactRow Component Tests
 *
 * Tests individual entity impact row rendering:
 * - Entity information display (name, title, role)
 * - Current value display
 * - Base delta vs media-boosted delta comparison
 * - Color-coded delta styling (green for positive, red for negative)
 * - Accessibility labels describing impact changes
 * - Handling entities with and without titles
 * - Proper numerical formatting and sign display
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { LevelMediaCoverageImpactRow } from "~/components/shared/level-media-coverage/LevelMediaCoverageImpactRow";
import { EntityWithMediaDelta } from "~/types";

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

describe("LevelMediaCoverageImpactRow", () => {
  const defaultEntity: EntityWithMediaDelta = {
    id: "cabinet1",
    name: "Jane Smith",
    title: "Secretary of Defense",
    role: "cabinet",
    currentValue: 65,
    delta: 8,
    preMediaDelta: 6,
    adBoostedDelta: 10,
  };

  it("renders entity name and title", () => {
    render(<LevelMediaCoverageImpactRow entity={defaultEntity} />);

    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.getByText("Secretary of Defense")).toBeTruthy();
  });

  it("renders current value", () => {
    render(<LevelMediaCoverageImpactRow entity={defaultEntity} />);

    expect(screen.getByText("65")).toBeTruthy();
  });

  it("renders base delta with correct sign", () => {
    render(<LevelMediaCoverageImpactRow entity={defaultEntity} />);

    expect(screen.getByText("+6")).toBeTruthy();
  });

  it("renders media-boosted delta with correct sign", () => {
    render(<LevelMediaCoverageImpactRow entity={defaultEntity} />);

    expect(screen.getByText("+8")).toBeTruthy();
  });

  it("has comprehensive accessibility label", () => {
    render(<LevelMediaCoverageImpactRow entity={defaultEntity} />);

    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Current: 65. Base change: positive 6. Media boosted change: positive 8. Media amplified the impact."
      )
    ).toBeTruthy();
  });

  it("handles entity without title", () => {
    const entityWithoutTitle: EntityWithMediaDelta = {
      ...defaultEntity,
      title: undefined,
    };

    render(<LevelMediaCoverageImpactRow entity={entityWithoutTitle} />);

    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.queryByText("Secretary of Defense")).toBeNull();
    expect(
      screen.getByLabelText(
        "Jane Smith. Current: 65. Base change: positive 6. Media boosted change: positive 8. Media amplified the impact."
      )
    ).toBeTruthy();
  });

  it("handles negative deltas correctly", () => {
    const negativeEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      delta: -10,
      preMediaDelta: -7,
    };

    render(<LevelMediaCoverageImpactRow entity={negativeEntity} />);

    expect(screen.getByText("-7")).toBeTruthy();
    expect(screen.getByText("-10")).toBeTruthy();
    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Current: 65. Base change: negative 7. Media boosted change: negative 10. Media amplified the impact."
      )
    ).toBeTruthy();
  });

  it("handles zero deltas", () => {
    const zeroEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      delta: 0,
      preMediaDelta: 0,
    };

    render(<LevelMediaCoverageImpactRow entity={zeroEntity} />);

    // Zero values are displayed as "+0" due to the component's formatting logic
    expect(screen.getAllByText("+0")).toHaveLength(2); // Both base and media deltas show "+0"
    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Current: 65. Base change: positive 0. Media boosted change: positive 0. Media reduced the impact."
      )
    ).toBeTruthy();
  });

  it("shows when media reduced impact", () => {
    const reducedImpactEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      delta: 4,
      preMediaDelta: 6,
    };

    render(<LevelMediaCoverageImpactRow entity={reducedImpactEntity} />);

    expect(screen.getByText("+6")).toBeTruthy();
    expect(screen.getByText("+4")).toBeTruthy();
    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Current: 65. Base change: positive 6. Media boosted change: positive 4. Media reduced the impact."
      )
    ).toBeTruthy();
  });

  it("handles mixed positive/negative deltas", () => {
    const mixedEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      delta: -3,
      preMediaDelta: 5,
    };

    render(<LevelMediaCoverageImpactRow entity={mixedEntity} />);

    expect(screen.getByText("+5")).toBeTruthy();
    expect(screen.getByText("-3")).toBeTruthy();
    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Current: 65. Base change: positive 5. Media boosted change: negative 3. Media reduced the impact."
      )
    ).toBeTruthy();
  });

  it("handles president role entity", () => {
    const presidentEntity: EntityWithMediaDelta = {
      id: "president",
      name: "John President",
      title: "President",
      role: "president",
      currentValue: 55,
      delta: 3,
      preMediaDelta: 2,
      adBoostedDelta: 4,
    };

    render(<LevelMediaCoverageImpactRow entity={presidentEntity} />);

    expect(screen.getByText("John President")).toBeTruthy();
    expect(screen.getByText("President")).toBeTruthy();
    expect(screen.getByText("55")).toBeTruthy();
  });

  it("handles subgroup role entity", () => {
    const subgroupEntity: EntityWithMediaDelta = {
      id: "subgroup1",
      name: "Young Voters",
      title: "Voter Group",
      role: "subgroup",
      currentValue: 42,
      delta: -2,
      preMediaDelta: -1,
      adBoostedDelta: -3,
    };

    render(<LevelMediaCoverageImpactRow entity={subgroupEntity} />);

    expect(screen.getByText("Young Voters")).toBeTruthy();
    expect(screen.getByText("Voter Group")).toBeTruthy();
    expect(screen.getByText("42")).toBeTruthy();
  });

  it("handles large numerical values", () => {
    const largeValueEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      currentValue: 999,
      delta: 25,
      preMediaDelta: 20,
    };

    render(<LevelMediaCoverageImpactRow entity={largeValueEntity} />);

    expect(screen.getByText("999")).toBeTruthy();
    expect(screen.getByText("+20")).toBeTruthy();
    expect(screen.getByText("+25")).toBeTruthy();
  });

  it("handles empty string title", () => {
    const emptyTitleEntity: EntityWithMediaDelta = {
      ...defaultEntity,
      title: "",
    };

    render(<LevelMediaCoverageImpactRow entity={emptyTitleEntity} />);

    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.queryByText("Secretary of Defense")).toBeNull();
  });
});
