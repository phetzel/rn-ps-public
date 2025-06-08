import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

describe("HeaderBackIcon", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with correct accessibility properties", () => {
    render(<HeaderBackIcon onPress={mockOnPress} />);

    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
    expect(screen.getByLabelText("Go back to previous screen")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    render(<HeaderBackIcon onPress={mockOnPress} />);

    const button = screen.getByRole("button");
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("has correct accessibility hint", () => {
    render(<HeaderBackIcon onPress={mockOnPress} />);

    const button = screen.getByRole("button");
    expect(button.props.accessibilityHint).toBe(
      "Navigates to the previous screen in the app"
    );
  });

  it("renders pressable component", () => {
    render(<HeaderBackIcon onPress={mockOnPress} />);

    // Check that the pressable renders (should find the button role)
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
