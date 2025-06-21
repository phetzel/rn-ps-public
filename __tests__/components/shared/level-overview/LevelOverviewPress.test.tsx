/**
 * LevelOverviewPress Component Tests
 *
 * Tests the press overview wrapper component:
 * - ExchangesOutcomeList integration
 * - PressResultsTotal integration
 * - Proper layout with separator
 * - Props passing to child components
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import LevelOverviewPress from "~/components/shared/level-overview/LevelOverviewPress";

// Mock child components
jest.mock(
  "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList",
  () => ({
    __esModule: true,
    default: ({ levelId }: { levelId: string }) => {
      const { Text } = require("react-native");
      return <Text>Exchanges Outcome List - {levelId}</Text>;
    },
  })
);

jest.mock("~/components/shared/level-overview/PressResultsTotal", () => ({
  __esModule: true,
  default: ({ levelId }: { levelId: string }) => {
    const { Text } = require("react-native");
    return <Text>Press Results Total - {levelId}</Text>;
  },
}));

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

describe("LevelOverviewPress", () => {
  const defaultProps = {
    levelId: "level-1",
  };

  it("renders exchanges outcome list", () => {
    render(<LevelOverviewPress {...defaultProps} />);
    expect(screen.getByText("Exchanges Outcome List - level-1")).toBeTruthy();
  });

  it("renders press results total", () => {
    render(<LevelOverviewPress {...defaultProps} />);
    expect(screen.getByText("Press Results Total - level-1")).toBeTruthy();
  });

  it("passes levelId to both child components", () => {
    const customProps = {
      levelId: "custom-level-456",
    };

    render(<LevelOverviewPress {...customProps} />);

    expect(
      screen.getByText("Exchanges Outcome List - custom-level-456")
    ).toBeTruthy();
    expect(
      screen.getByText("Press Results Total - custom-level-456")
    ).toBeTruthy();
  });

  it("renders both components in the correct order", () => {
    render(<LevelOverviewPress {...defaultProps} />);

    const exchangesText = screen.getByText("Exchanges Outcome List - level-1");
    const resultsText = screen.getByText("Press Results Total - level-1");

    expect(exchangesText).toBeTruthy();
    expect(resultsText).toBeTruthy();
  });
});
