import React from "react";
import { renderRouter, screen } from "expo-router/testing-library";
import { jest } from "@jest/globals";

describe("CurrentScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the current screen without routing errors", () => {
    // Use simple string paths for basic routing test
    renderRouter(["games/[id]/current"], {
      initialUrl: "/games/test-game/current",
    });

    // Should render without the unmatched route error
    expect(screen.queryByText("Unmatched Route")).toBeNull();

    // Should navigate to the correct route
    expect(screen).toHavePathname("/games/test-game/current");
  });

  it("displays basic routing functionality", () => {
    renderRouter(["games/[id]/current"], {
      initialUrl: "/games/test-game/current",
    });

    // Should be on the current route
    expect(screen).toHavePathname("/games/test-game/current");
  });
});
