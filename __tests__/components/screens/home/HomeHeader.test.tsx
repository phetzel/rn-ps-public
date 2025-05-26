import React from "react";
import { render, screen } from "@testing-library/react-native";

import { HomeHeader } from "~/components/screens/home/HomeHeader";

describe("HomeHeader", () => {
  it("renders the logo and title text", () => {
    render(<HomeHeader />);

    // Check that main title and subtitle are rendered
    expect(screen.getByText("Press Office")).toBeTruthy();
    expect(screen.getByText("Command the Podium")).toBeTruthy();
  });
});
