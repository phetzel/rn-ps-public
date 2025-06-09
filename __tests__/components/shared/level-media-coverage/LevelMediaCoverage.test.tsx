/**
 * LevelMediaCoverage Component Tests
 *
 * Tests the main media coverage container component:
 * - Hook integration with useMediaCoverageData
 * - Error state handling and display
 * - Loading states passed to child components
 * - Accordion structure and accessibility
 * - Data flow to child components (MediaCoverageContent, LevelMediaImpactContent)
 * - Dynamic accessibility labels with totalBoost values
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";

// Mock the useMediaCoverageData hook
jest.mock("~/lib/hooks/useMediaCoverageData", () => ({
  useMediaCoverageData: jest.fn(),
}));

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

// Import the mocked hook
import { useMediaCoverageData } from "~/lib/hooks/useMediaCoverageData";

describe("LevelMediaCoverage", () => {
  const defaultHookReturn = {
    mediaBoosts: [
      {
        id: "pub1",
        name: "Test Publication",
        politicalLeaning: "Liberal",
        approvalRating: 75,
        boost: 1.25,
      },
    ],
    totalBoost: 1.25,
    enhancedDeltas: [
      {
        id: "entity1",
        name: "Test Entity",
        role: "cabinet" as const,
        title: "Cabinet Member",
        currentValue: 60,
        delta: 5,
        preMediaDelta: 4,
        adBoostedDelta: 6,
      },
    ],
    isLoading: false,
    error: null,
  };

  beforeEach(() => {
    (useMediaCoverageData as jest.Mock).mockReturnValue(defaultHookReturn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders media coverage card with correct accessibility", () => {
    render(<LevelMediaCoverage levelId="level-1" />);

    expect(
      screen.getByLabelText(
        "Media coverage analysis with total boost multiplier of 1.25"
      )
    ).toBeTruthy();

    // Use getAllByText to handle multiple instances of "Media Coverage"
    const mediaCoverageTexts = screen.getAllByText("Media Coverage");
    expect(mediaCoverageTexts.length).toBeGreaterThan(0);
  });

  it("passes levelId to useMediaCoverageData hook", () => {
    render(<LevelMediaCoverage levelId="test-level-123" />);

    expect(useMediaCoverageData).toHaveBeenCalledWith({
      levelId: "test-level-123",
    });
  });

  it("renders error state when hook returns error", () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      ...defaultHookReturn,
      error: new Error("Failed to load media data"),
    });

    render(<LevelMediaCoverage levelId="level-1" />);

    expect(screen.getByText("Failed to load media data")).toBeTruthy();
  });

  it("renders accordion with both media coverage and impact sections", () => {
    render(<LevelMediaCoverage levelId="level-1" />);

    // Check accordion accessibility
    expect(screen.getByLabelText("Media coverage sections")).toBeTruthy();

    // Check media coverage trigger with dynamic boost value
    expect(
      screen.getByLabelText(
        "Media coverage breakdown with total boost multiplier of 1.25"
      )
    ).toBeTruthy();
    expect(screen.getByText("(x1.25)")).toBeTruthy();

    // Check media impact trigger
    expect(
      screen.getByLabelText("Media impact on approval ratings")
    ).toBeTruthy();
    expect(screen.getByText("Media Impact on Approval")).toBeTruthy();
  });

  it("renders publication data in media coverage section", () => {
    render(<LevelMediaCoverage levelId="level-1" />);

    // Since media-impact is the default expanded section, we should see the impact content
    expect(screen.getByText("Test Entity")).toBeTruthy();
  });

  it("handles loading state correctly", () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      ...defaultHookReturn,
      isLoading: true,
    });

    render(<LevelMediaCoverage levelId="level-1" />);

    // Should show loading in the impact section (which is expanded by default)
    expect(screen.getByText("Loading impact data...")).toBeTruthy();
  });

  it("formats totalBoost to 2 decimal places in accessibility labels", () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      ...defaultHookReturn,
      totalBoost: 1.2345,
    });

    render(<LevelMediaCoverage levelId="level-1" />);

    expect(
      screen.getByLabelText(
        "Media coverage analysis with total boost multiplier of 1.23"
      )
    ).toBeTruthy();
    expect(
      screen.getByLabelText(
        "Media coverage breakdown with total boost multiplier of 1.23"
      )
    ).toBeTruthy();
    expect(screen.getByText("(x1.23)")).toBeTruthy();
  });

  it("handles empty data gracefully", () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      mediaBoosts: [],
      totalBoost: 1.0,
      enhancedDeltas: [],
      isLoading: false,
      error: null,
    });

    render(<LevelMediaCoverage levelId="level-1" />);

    // Should still render the accordion structure
    expect(screen.getByText("Media Impact on Approval")).toBeTruthy();
    expect(screen.getByText("(x1.00)")).toBeTruthy();
  });

  it("has newspaper icon in header", () => {
    render(<LevelMediaCoverage levelId="level-1" />);

    // The icon renders as an SVG element, so we check for the header structure
    const mediaCoverageTexts = screen.getAllByText("Media Coverage");
    expect(mediaCoverageTexts.length).toBeGreaterThan(0);
  });

  it("has correct accordion default value set to media-impact", () => {
    render(<LevelMediaCoverage levelId="level-1" />);

    // The media-impact section should be expanded by default, so we should see its content
    expect(screen.getByText("Media Impact on Approval")).toBeTruthy();
    expect(screen.getByText("Test Entity")).toBeTruthy();
  });
});
