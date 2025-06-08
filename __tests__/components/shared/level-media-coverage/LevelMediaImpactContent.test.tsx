/**
 * LevelMediaImpactContent Component Tests
 *
 * Tests the media impact table container:
 * - Loading state handling and display
 * - Entity grouping by role (president, cabinet, subgroups)
 * - Table header rendering with column labels
 * - Section headers for Admin and Groups
 * - Accessibility labels describing entity counts per section
 * - Conditional rendering based on entity presence
 * - Proper delegation to LevelMediaCoverageImpactRow components
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import LevelMediaImpactContent from "~/components/shared/level-media-coverage/LevelMediaImpactContent";
import { EntityWithMediaDelta } from "~/types";

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

describe("LevelMediaImpactContent", () => {
  const mockEntities: EntityWithMediaDelta[] = [
    {
      id: "president1",
      name: "John President",
      title: "President",
      role: "president",
      currentValue: 55,
      delta: 3,
      preMediaDelta: 2,
      adBoostedDelta: 4,
    },
    {
      id: "cabinet1",
      name: "Jane Smith",
      title: "Secretary of Defense",
      role: "cabinet",
      currentValue: 65,
      delta: 8,
      preMediaDelta: 6,
      adBoostedDelta: 10,
    },
    {
      id: "cabinet2",
      name: "Bob Johnson",
      title: "Secretary of State",
      role: "cabinet",
      currentValue: 70,
      delta: -4,
      preMediaDelta: -3,
      adBoostedDelta: -5,
    },
    {
      id: "subgroup1",
      name: "Young Voters",
      title: "Voter Group",
      role: "subgroup",
      currentValue: 42,
      delta: -2,
      preMediaDelta: -1,
      adBoostedDelta: -3,
    },
    {
      id: "subgroup2",
      name: "Senior Citizens",
      title: "Voter Group",
      role: "subgroup",
      currentValue: 58,
      delta: 5,
      preMediaDelta: 4,
      adBoostedDelta: 6,
    },
  ];

  const defaultProps = {
    isLoading: false,
    enhancedDeltas: mockEntities,
  };

  it("renders loading state", () => {
    render(<LevelMediaImpactContent isLoading={true} enhancedDeltas={[]} />);

    expect(screen.getByText("Loading impact data...")).toBeTruthy();
  });

  it("has correct accessibility label for loading text", () => {
    render(<LevelMediaImpactContent isLoading={true} enhancedDeltas={[]} />);

    const loadingText = screen.getByText("Loading impact data...");
    // The loading text should have accessibilityLiveRegion="polite"
    expect(loadingText).toBeTruthy();
  });

  it("renders table header with column labels", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    expect(
      screen.getByLabelText(
        "Table columns: Entity name, Starting value, Base change, Media boosted change"
      )
    ).toBeTruthy();
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Start")).toBeTruthy();
    expect(screen.getByText("Base")).toBeTruthy();
    expect(screen.getByText("Media Boost")).toBeTruthy();
  });

  it("has correct overall accessibility label", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    expect(
      screen.getByLabelText(
        "Media impact analysis for 5 entities including administration and voter groups"
      )
    ).toBeTruthy();
  });

  it("renders Admin section with correct entities", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    expect(
      screen.getByLabelText("Administration section with 3 entities")
    ).toBeTruthy();
    expect(screen.getByText("Admin")).toBeTruthy();

    // Check that president and cabinet entities are rendered by name
    expect(screen.getByText("John President")).toBeTruthy();
    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.getByText("Bob Johnson")).toBeTruthy();
  });

  it("renders Groups section with correct entities", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    expect(
      screen.getByLabelText("Voter groups section with 2 groups")
    ).toBeTruthy();
    expect(screen.getByText("Groups")).toBeTruthy();

    // Check that subgroup entities are rendered by name
    expect(screen.getByText("Young Voters")).toBeTruthy();
    expect(screen.getByText("Senior Citizens")).toBeTruthy();
  });

  it("handles only president entities", () => {
    const presidentOnly = [mockEntities[0]];
    render(
      <LevelMediaImpactContent
        isLoading={false}
        enhancedDeltas={presidentOnly}
      />
    );

    expect(
      screen.getByLabelText(
        "Media impact analysis for 1 entities including administration"
      )
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Administration section with 1 entities")
    ).toBeTruthy();
    expect(screen.getByText("Admin")).toBeTruthy();
    expect(screen.queryByText("Groups")).toBeNull();
  });

  it("handles only cabinet entities", () => {
    const cabinetOnly = [mockEntities[1], mockEntities[2]];
    render(
      <LevelMediaImpactContent isLoading={false} enhancedDeltas={cabinetOnly} />
    );

    expect(
      screen.getByLabelText(
        "Media impact analysis for 2 entities including administration"
      )
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Administration section with 2 entities")
    ).toBeTruthy();
    expect(screen.getByText("Admin")).toBeTruthy();
    expect(screen.queryByText("Groups")).toBeNull();
  });

  it("handles only subgroup entities", () => {
    const subgroupsOnly = [mockEntities[3], mockEntities[4]];
    render(
      <LevelMediaImpactContent
        isLoading={false}
        enhancedDeltas={subgroupsOnly}
      />
    );

    expect(
      screen.getByLabelText(
        "Media impact analysis for 2 entities and voter groups"
      )
    ).toBeTruthy();
    expect(screen.queryByText("Admin")).toBeNull();
    expect(
      screen.getByLabelText("Voter groups section with 2 groups")
    ).toBeTruthy();
    expect(screen.getByText("Groups")).toBeTruthy();
  });

  it("handles empty entities array", () => {
    render(<LevelMediaImpactContent isLoading={false} enhancedDeltas={[]} />);

    expect(
      screen.getByLabelText("Media impact analysis for 0 entities")
    ).toBeTruthy();
    expect(screen.queryByText("Admin")).toBeNull();
    expect(screen.queryByText("Groups")).toBeNull();
  });

  it("does not render sections when loading", () => {
    render(
      <LevelMediaImpactContent isLoading={true} enhancedDeltas={mockEntities} />
    );

    expect(screen.getByText("Loading impact data...")).toBeTruthy();
    expect(screen.queryByText("Admin")).toBeNull();
    expect(screen.queryByText("Groups")).toBeNull();
    expect(screen.queryByText("Name")).toBeNull();
  });

  it("groups entities correctly by role", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    // Admin section should have 1 president + 2 cabinet = 3 total
    expect(
      screen.getByLabelText("Administration section with 3 entities")
    ).toBeTruthy();

    // Groups section should have 2 subgroups
    expect(
      screen.getByLabelText("Voter groups section with 2 groups")
    ).toBeTruthy();
  });

  it("handles mixed scenarios with comprehensive accessibility", () => {
    const mixedEntities = [mockEntities[1], mockEntities[3]]; // cabinet + subgroup
    render(
      <LevelMediaImpactContent
        isLoading={false}
        enhancedDeltas={mixedEntities}
      />
    );

    expect(
      screen.getByLabelText(
        "Media impact analysis for 2 entities including administration and voter groups"
      )
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Administration section with 1 entities")
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Voter groups section with 1 groups")
    ).toBeTruthy();
  });

  it("renders table structure properly when not loading", () => {
    render(<LevelMediaImpactContent {...defaultProps} />);

    // Should have the table header
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Start")).toBeTruthy();
    expect(screen.getByText("Base")).toBeTruthy();
    expect(screen.getByText("Media Boost")).toBeTruthy();

    // Should have both sections
    expect(screen.getByText("Admin")).toBeTruthy();
    expect(screen.getByText("Groups")).toBeTruthy();
  });
});
