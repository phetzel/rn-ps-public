import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { ThemeToggle } from "~/components/shared/layout/ThemeToggle";

// Mock the useColorScheme hook - matches the actual implementation (light mode only)
jest.mock("~/lib/useColorScheme", () => ({
  useColorScheme: () => ({
    isDarkColorScheme: false,
    colorScheme: "light",
    setColorScheme: jest.fn(),
    toggleColorScheme: jest.fn(),
  }),
}));

// Mock the android navigation bar
jest.mock("~/lib/android-navigation-bar", () => ({
  setAndroidNavigationBar: jest.fn(),
}));

// Mock utils
jest.mock("~/lib/utils", () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with correct accessibility properties", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    expect(button).toBeTruthy();
    expect(screen.getByLabelText("Switch")).toBeTruthy();
  });

  it("has correct accessibility hint for light theme", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    expect(button.props.accessibilityHint).toBe(
      "Currently using light theme. Tap to switch."
    );
  });

  it("has correct accessibility state for light mode", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    expect(button.props.accessibilityState).toEqual({ selected: false });
  });

  it("calls toggle function when pressed", () => {
    const { setAndroidNavigationBar } = require("~/lib/android-navigation-bar");

    render(<ThemeToggle />);

    const button = screen.getByRole("button");
    fireEvent.press(button);

    // Since light mode is active, it should attempt to switch to dark
    expect(setAndroidNavigationBar).toHaveBeenCalledWith("dark");
  });

  it("renders pressable component", () => {
    render(<ThemeToggle />);

    // Check that the pressable renders (should find the button role)
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
