import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Logo } from "~/components/shared/Logo";

describe("Logo", () => {
  const renderWithSize = (size?: "small" | "medium" | "large") => {
    render(<Logo size={size} />);
  };

  it("renders with default medium size", () => {
    renderWithSize();
    const container = screen.getByLabelText(
      "Press Secretary app logo, medium size"
    );
    expect(container).toBeTruthy();
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Logo size="small" />);
    expect(
      screen.getByLabelText("Press Secretary app logo, small size")
    ).toBeTruthy();

    rerender(<Logo size="large" />);
    expect(
      screen.getByLabelText("Press Secretary app logo, large size")
    ).toBeTruthy();
  });

  it("has correct accessibility properties", () => {
    renderWithSize("small");
    const container = screen.getByLabelText(
      "Press Secretary app logo, small size"
    );
    expect(container).toHaveProp("accessible", true);
  });
});
