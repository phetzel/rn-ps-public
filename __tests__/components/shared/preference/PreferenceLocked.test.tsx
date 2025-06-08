/**
 * PreferenceLocked Component Tests
 *
 * Tests locked preference display:
 * - Shows locked state with Lock icon
 * - Displays cabinet member name and relationship requirements
 * - Shows current relationship vs required threshold
 * - Comprehensive accessibility labels
 * - Info tooltip with detailed requirements
 * - Proper styling and layout
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import PreferenceLocked from "~/components/shared/preference/PreferenceLocked";
import { CABINET_PREFERENCE_THRESHOLD } from "~/lib/constants";

// No mocks - testing actual component behavior

describe("PreferenceLocked", () => {
  const defaultProps = {
    cabinetMemberName: "Jane Smith",
    relationship: 25,
  };

  it("renders Lock icon", () => {
    render(<PreferenceLocked {...defaultProps} />);

    expect(
      screen.getAllByLabelText("Locked preference indicator").length
    ).toBeGreaterThan(0);
  });

  it("shows 'Preference Locked' text", () => {
    render(<PreferenceLocked {...defaultProps} />);

    expect(screen.getByText("Preference Locked")).toBeTruthy();
  });

  it("has comprehensive accessibility label for main container", () => {
    render(<PreferenceLocked {...defaultProps} />);

    expect(
      screen.getByLabelText(
        `Jane Smith's preference is locked. Current relationship: 25. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("has accessibility label for lock icon", () => {
    render(<PreferenceLocked {...defaultProps} />);

    expect(
      screen.getAllByLabelText("Locked preference indicator").length
    ).toBeGreaterThan(0);
  });

  it("renders info tooltip trigger button", () => {
    render(<PreferenceLocked {...defaultProps} />);

    // InfoTooltip only exposes trigger button with these accessibility properties
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();
  });

  it("tooltip trigger has proper accessibility hint", () => {
    render(<PreferenceLocked {...defaultProps} />);

    const tooltipTrigger = screen.getByRole("button", { name: "Information" });
    expect(tooltipTrigger).toHaveProp(
      "accessibilityHint",
      "Additional information available"
    );
  });

  it("shows cabinet member name in main accessibility label", () => {
    render(<PreferenceLocked {...defaultProps} />);

    // Cabinet member name should be in the main accessibility label
    expect(
      screen.getByLabelText(
        `Jane Smith's preference is locked. Current relationship: 25. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("displays required threshold in main accessibility label", () => {
    render(<PreferenceLocked {...defaultProps} />);

    // Threshold should be mentioned in the main accessibility label
    expect(
      screen.getByLabelText(
        `Jane Smith's preference is locked. Current relationship: 25. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("displays current relationship value in main accessibility label", () => {
    render(<PreferenceLocked {...defaultProps} />);

    // Relationship value should be mentioned in the main accessibility label
    expect(
      screen.getByLabelText(
        `Jane Smith's preference is locked. Current relationship: 25. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("handles different cabinet member names", () => {
    render(
      <PreferenceLocked cabinetMemberName="Bob Johnson" relationship={15} />
    );

    expect(
      screen.getByLabelText(
        `Bob Johnson's preference is locked. Current relationship: 15. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("handles zero relationship", () => {
    render(
      <PreferenceLocked cabinetMemberName="Zero Person" relationship={0} />
    );

    expect(
      screen.getByLabelText(
        `Zero Person's preference is locked. Current relationship: 0. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("handles negative relationship", () => {
    render(
      <PreferenceLocked
        cabinetMemberName="Negative Person"
        relationship={-10}
      />
    );

    expect(
      screen.getByLabelText(
        `Negative Person's preference is locked. Current relationship: -10. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();
  });

  it("tooltip trigger button can be pressed", () => {
    render(<PreferenceLocked {...defaultProps} />);

    const tooltipTrigger = screen.getByRole("button", { name: "Information" });

    // Should be able to press the tooltip trigger without errors
    expect(() => fireEvent.press(tooltipTrigger)).not.toThrow();
  });

  it("renders with proper structure and styling", () => {
    render(<PreferenceLocked {...defaultProps} />);

    // Main container should be accessible
    const mainContainer = screen.getByLabelText(
      `Jane Smith's preference is locked. Current relationship: 25. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
    );
    expect(mainContainer).toBeTruthy();

    // Should have lock icon and text (tooltip content is not accessible)
    expect(
      screen.getAllByLabelText("Locked preference indicator").length
    ).toBeGreaterThan(0);
    expect(screen.getByText("Preference Locked")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();
  });

  it("handles names with special characters", () => {
    render(
      <PreferenceLocked
        cabinetMemberName="Mary O'Connor-Smith"
        relationship={33}
      />
    );

    expect(
      screen.getByLabelText(
        `Mary O'Connor-Smith's preference is locked. Current relationship: 33. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`
      )
    ).toBeTruthy();

    // The cabinet member name appears in the main accessibility label
    // but the individual text nodes within the tooltip are not accessible
    expect(screen.getByRole("button", { name: "Information" })).toBeTruthy();
  });
});
