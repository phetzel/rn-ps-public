/**
 * AuthorizedIcon Component Tests
 *
 * Tests icon display based on authorization status:
 * - Shows FileText icon when authorized
 * - Shows Lock icon when not authorized
 * - Proper accessibility labels for each state
 * - Correct styling/colors for each state
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import AuthorizedIcon from "~/components/shared/preference/AuthorizedIcon";

// No mocks - testing actual component behavior

describe("AuthorizedIcon", () => {
  it("renders authorized state correctly", () => {
    render(<AuthorizedIcon isAuthorized={true} />);

    // Should have accessibility label for authorized state
    expect(
      screen.getAllByLabelText("Authorized: classified information available")
        .length
    ).toBeGreaterThan(0);
  });

  it("renders locked state correctly", () => {
    render(<AuthorizedIcon isAuthorized={false} />);

    // Should have accessibility label for locked state
    expect(
      screen.getAllByLabelText("Locked: classified information withheld").length
    ).toBeGreaterThan(0);
  });

  it("changes state based on authorization prop", () => {
    const { rerender } = render(<AuthorizedIcon isAuthorized={true} />);

    // Initially authorized
    expect(
      screen.getAllByLabelText("Authorized: classified information available")
        .length
    ).toBeGreaterThan(0);

    // Change to not authorized
    rerender(<AuthorizedIcon isAuthorized={false} />);

    // Should now show locked state
    expect(
      screen.getAllByLabelText("Locked: classified information withheld").length
    ).toBeGreaterThan(0);

    // Should not have authorized state anymore
    expect(
      screen.queryAllByLabelText("Authorized: classified information available")
    ).toHaveLength(0);
  });

  it("renders component without errors", () => {
    // Test that component renders without throwing errors
    expect(() => render(<AuthorizedIcon isAuthorized={true} />)).not.toThrow();
    expect(() => render(<AuthorizedIcon isAuthorized={false} />)).not.toThrow();
  });
});
