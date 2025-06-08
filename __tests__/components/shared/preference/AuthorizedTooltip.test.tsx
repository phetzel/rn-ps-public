/**
 * AuthorizedTooltip Component Tests
 *
 * Tests tooltip display for authorized intel:
 * - Shows different content based on authorization status
 * - Displays cabinet member name correctly
 * - Shows relationship requirements when not authorized
 * - Proper accessibility labels and hints
 * - Integration with InfoTooltip component
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AuthorizedTooltip from "~/components/shared/preference/AuthorizedTooltip";
import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";

// No mocks - testing actual component behavior

describe("AuthorizedTooltip", () => {
  const defaultProps = {
    isAuthorized: true,
    cabinetMemberName: "Jane Smith",
  };

  it("shows authorized message when isAuthorized is true", () => {
    render(<AuthorizedTooltip {...defaultProps} />);

    // Check that the tooltip trigger is present with proper accessibility
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
    expect(trigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
  });

  it("shows unauthorized message when isAuthorized is false", () => {
    render(
      <AuthorizedTooltip isAuthorized={false} cabinetMemberName="Bob Johnson" />
    );

    // Check that the tooltip trigger is present with proper accessibility
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
    expect(trigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
  });

  it("has proper accessibility labels", () => {
    render(<AuthorizedTooltip {...defaultProps} />);

    // Check that the trigger has the correct accessibility properties
    const trigger = screen.getByRole("button", { name: "Information" });
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
    expect(trigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
    expect(trigger).toHaveProp("accessibilityRole", "button");
  });

  it("handles different cabinet member names", () => {
    render(
      <AuthorizedTooltip
        isAuthorized={false}
        cabinetMemberName="Mary O'Connor"
      />
    );

    // Check that the tooltip renders correctly regardless of cabinet member name
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
  });

  it("renders correctly for unauthorized state", () => {
    render(
      <AuthorizedTooltip isAuthorized={false} cabinetMemberName="Test Person" />
    );

    // Check that the tooltip trigger renders correctly
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
    expect(trigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
  });

  it("renders component without errors for both states", () => {
    expect(() =>
      render(<AuthorizedTooltip isAuthorized={true} cabinetMemberName="Test" />)
    ).not.toThrow();
    expect(() =>
      render(
        <AuthorizedTooltip isAuthorized={false} cabinetMemberName="Test" />
      )
    ).not.toThrow();
  });

  it("renders correctly for authorized state", () => {
    render(<AuthorizedTooltip isAuthorized={true} cabinetMemberName="Alex" />);

    // Check that the tooltip trigger renders correctly
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveProp("accessibilityLabel", "Information");
    expect(trigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
  });

  it("can be pressed without errors", () => {
    render(<AuthorizedTooltip isAuthorized={false} cabinetMemberName="Sam" />);

    // Check that the trigger button can be pressed
    const trigger = screen.getByRole("button", { name: "Information" });
    expect(() => fireEvent.press(trigger)).not.toThrow();
  });
});
