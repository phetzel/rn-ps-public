import React from "react";
import { render, screen } from "@testing-library/react-native";
import { jest } from "@jest/globals";

import { LevelStatusBadge } from "~/components/screens/tab-current/LevelStatusBadge";
import { LevelStatus } from "~/types";

// Mock the constants with string literals to avoid Jest scoping issues
jest.mock("~/lib/constants", () => ({
  LEVEL_STATUS_DISPLAY_NAMES: {
    briefing: "Briefing",
    press_conference: "Press Conference",
    press_results: "Press Results",
    situation_outcomes: "Situation Outcomes",
    completed: "Completed",
  },
}));

describe("LevelStatusBadge", () => {
  it("displays correct text for briefing status", () => {
    render(<LevelStatusBadge status={LevelStatus.Briefing} />);
    expect(screen.getByText("Briefing")).toBeTruthy();
  });

  it("displays correct text for press conference status", () => {
    render(<LevelStatusBadge status={LevelStatus.PressConference} />);
    expect(screen.getByText("Press Conference")).toBeTruthy();
  });

  it("displays correct text for press results status", () => {
    render(<LevelStatusBadge status={LevelStatus.PressResults} />);
    expect(screen.getByText("Press Results")).toBeTruthy();
  });

  it("displays correct text for situation outcomes status", () => {
    render(<LevelStatusBadge status={LevelStatus.SituationOutcomes} />);
    expect(screen.getByText("Situation Outcomes")).toBeTruthy();
  });

  it("displays correct text for completed status", () => {
    render(<LevelStatusBadge status={LevelStatus.Completed} />);
    expect(screen.getByText("Completed")).toBeTruthy();
  });

  it("renders without errors", () => {
    const { unmount } = render(
      <LevelStatusBadge status={LevelStatus.Briefing} />
    );
    expect(screen.getByText("Briefing")).toBeTruthy();
    unmount();
  });
});
