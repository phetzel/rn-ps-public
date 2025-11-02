import React from "react";
import { render, screen } from "@testing-library/react-native";
import PressOfficeBackgroundTooltip from "~/components/shared/tooltips/PressOfficeBackgroundTooltip";
import { PressOfficeBackground } from "~/types";

describe("PressOfficeBackgroundTooltip", () => {
  it("renders header and selected background label", () => {
    render(<PressOfficeBackgroundTooltip background={PressOfficeBackground.Journalist} />);
    expect(screen.getByText("Press Office Background")).toBeTruthy();
    expect(screen.getByText(/Journalist:/)).toBeTruthy();
  });

  it("renders at least one cabinet effect indicator when background has effects", () => {
    render(<PressOfficeBackgroundTooltip background={PressOfficeBackground.Journalist} />);
    // We don't assert the exact cabinet, only that at least one symbol-only indicator appears
    // Expect one of "+", "++", "-", or "--" to be present
    const hasSymbol = screen.queryByText("++") || screen.queryByText("+") || screen.queryByText("--") || screen.queryByText("-");
    expect(hasSymbol).toBeTruthy();
  });
});


