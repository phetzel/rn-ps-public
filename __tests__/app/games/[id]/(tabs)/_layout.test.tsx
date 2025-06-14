import React from "react";
import { renderRouter, screen } from "expo-router/testing-library";
import { jest } from "@jest/globals";

// Mock navigation functions
const mockNavigate = jest.fn();
const mockReplace = jest.fn();

// Mock only the useRouter hook that the layout component uses
jest.mock("expo-router", () => ({
  useRouter: () => ({
    navigate: mockNavigate,
    replace: mockReplace,
  }),
}));

describe("GameTabLayout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the tab layout without errors", () => {
    // Use simple string paths to create null components for basic routing test
    renderRouter(["games/[id]/(tabs)/_layout", "games/[id]/(tabs)/current"], {
      initialUrl: "/games/test-game/current",
    });

    // Should render without the unmatched route error
    expect(screen.queryByText("Unmatched Route")).toBeNull();
  });

  it("navigates to correct route", () => {
    renderRouter(["games/[id]/(tabs)/_layout", "games/[id]/(tabs)/current"], {
      initialUrl: "/games/test-game/current",
    });

    // Should be on the current route
    expect(screen).toHavePathname("/games/test-game/current");
  });
});
