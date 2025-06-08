/**
 * AuthorizedIntel Component Tests
 *
 * Tests classified intel display based on relationship:
 * - Shows authorized content when relationship meets threshold
 * - Shows withheld message when relationship is insufficient
 * - Displays cabinet member name and relationship requirements
 * - Comprehensive accessibility labels describing authorization status
 * - Integration with AuthorizedIcon and AuthorizedTooltip
 * - Proper content visibility based on authorization
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import AuthorizedIntel from "~/components/shared/preference/AuthorizedIntel";
import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";

// No mocks - testing actual component behavior

describe("AuthorizedIntel", () => {
  const defaultProps = {
    cabinetMemberName: "Jane Smith",
    relationship: CABINET_AUTHORIZED_THRESHOLD + 5, // Above threshold
    authorizedContent: "This is classified information about the situation.",
  };

  it("shows authorized content when relationship meets threshold", () => {
    render(<AuthorizedIntel {...defaultProps} />);

    expect(screen.getByText("Classified Info Authorized")).toBeTruthy();
    expect(
      screen.getByText("This is classified information about the situation.")
    ).toBeTruthy();
  });

  it("shows withheld message when relationship is insufficient", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Bob Johnson"
        relationship={CABINET_AUTHORIZED_THRESHOLD - 5} // Below threshold
        authorizedContent="Secret info"
      />
    );

    expect(screen.getByText("Classified Info Withheld")).toBeTruthy();
    expect(screen.queryByText("Secret info")).toBeNull();
  });

  it("has comprehensive accessibility label when authorized", () => {
    render(<AuthorizedIntel {...defaultProps} />);

    expect(
      screen.getByLabelText(
        `Classified information from Jane Smith: Authorized and available. This is classified information about the situation.`
      )
    ).toBeTruthy();
  });

  it("has comprehensive accessibility label when not authorized", () => {
    const relationship = CABINET_AUTHORIZED_THRESHOLD - 10;
    render(
      <AuthorizedIntel
        cabinetMemberName="Bob Johnson"
        relationship={relationship}
        authorizedContent="Secret info"
      />
    );

    expect(
      screen.getByLabelText(
        `Classified information from Bob Johnson: Withheld due to insufficient relationship. Need ${CABINET_AUTHORIZED_THRESHOLD} relationship, currently ${relationship}.`
      )
    ).toBeTruthy();
  });

  it("displays authorized icon when authorized", () => {
    render(<AuthorizedIntel {...defaultProps} />);

    expect(
      screen.getAllByLabelText("Authorized: classified information available")
        .length
    ).toBeGreaterThan(0);
  });

  it("displays locked icon when not authorized", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Test Person"
        relationship={10}
        authorizedContent="Secret"
      />
    );

    expect(
      screen.getAllByLabelText("Locked: classified information withheld").length
    ).toBeGreaterThan(0);
  });

  it("handles edge case at exact threshold", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Edge Case"
        relationship={CABINET_AUTHORIZED_THRESHOLD} // Exactly at threshold
        authorizedContent="Edge case content"
      />
    );

    // Should be authorized at exact threshold
    expect(screen.getByText("Classified Info Authorized")).toBeTruthy();
    expect(screen.getByText("Edge case content")).toBeTruthy();
  });

  it("handles edge case just below threshold", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Just Below"
        relationship={CABINET_AUTHORIZED_THRESHOLD - 1} // Just below threshold
        authorizedContent="Should not see this"
      />
    );

    // Should not be authorized
    expect(screen.getByText("Classified Info Withheld")).toBeTruthy();
    expect(screen.queryByText("Should not see this")).toBeNull();
  });

  it("handles empty authorized content", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Empty Content"
        relationship={CABINET_AUTHORIZED_THRESHOLD + 10}
        authorizedContent=""
      />
    );

    expect(screen.getByText("Classified Info Authorized")).toBeTruthy();
    // Empty content should still render but be empty
    expect(screen.queryByText("undefined")).toBeNull();
  });

  it("handles very high relationship values", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="High Relationship"
        relationship={100}
        authorizedContent="Very trusted content"
      />
    );

    expect(screen.getByText("Classified Info Authorized")).toBeTruthy();
    expect(screen.getByText("Very trusted content")).toBeTruthy();
  });

  it("handles negative relationship values", () => {
    render(
      <AuthorizedIntel
        cabinetMemberName="Negative Relationship"
        relationship={-20}
        authorizedContent="Should not see this"
      />
    );

    expect(screen.getByText("Classified Info Withheld")).toBeTruthy();
    expect(screen.queryByText("Should not see this")).toBeNull();
  });

  it("renders component without errors", () => {
    expect(() => render(<AuthorizedIntel {...defaultProps} />)).not.toThrow();
  });
});
