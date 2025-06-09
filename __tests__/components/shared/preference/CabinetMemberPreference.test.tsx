/**
 * CabinetMemberPreference Component Tests
 *
 * Tests cabinet member preference display:
 * - Shows cabinet member name and title
 * - Displays preference when relationship meets threshold
 * - Shows locked state when relationship is insufficient
 * - Handles authorized intel content when available
 * - Comprehensive accessibility labels for all states
 * - Integration with PreferenceDisplay, PreferenceLocked, and AuthorizedIntel
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import CabinetMemberPreference from "~/components/shared/preference/CabinetMemberPreference";
import {
  CABINET_PREFERENCE_THRESHOLD,
  CABINET_AUTHORIZED_THRESHOLD,
} from "~/lib/constants";
import { AnswerType, CabinetPreference } from "~/types";

// No mocks - testing actual component behavior

// Mock cabinet member data
const createMockCabinetMember = (psRelationship: number) =>
  ({
    id: "cabinet1",
    name: "Jane Smith",
    staticId: "defense" as const,
    staticData: {
      cabinetName: "Secretary of Defense",
    },
    psRelationship,
    approvalRating: 65,
  } as any);

const createMockPreference = (
  authorizedContent?: string
): CabinetPreference => ({
  preference: {
    answerType: AnswerType.Inform,
    rationale: "This is the best approach based on current intelligence",
  },
  authorizedContent,
});

describe("CabinetMemberPreference", () => {
  it("displays cabinet member name when preference is available", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 10
    );
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.getByText("Secretary of Defense")).toBeTruthy();
  });

  it("shows preference content when relationship meets threshold", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 5
    );
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.getByText("Approach:")).toBeTruthy();
    expect(screen.getByText("Inform")).toBeTruthy();
    expect(
      screen.getByText(
        "This is the best approach based on current intelligence"
      )
    ).toBeTruthy();
  });

  it("shows locked state when relationship is below threshold", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD - 5
    );
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.getByText("Preference Locked")).toBeTruthy();
    expect(screen.queryByText("Approach:")).toBeNull();
    expect(screen.queryByText("Inform")).toBeNull();
  });

  it("displays authorized intel when available and authorized", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_AUTHORIZED_THRESHOLD + 10
    );
    const cabinetPreference = createMockPreference(
      "Classified intelligence suggests this approach will have maximum impact."
    );

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    // Check for authorized intel through accessibility label
    expect(
      screen.getByLabelText(
        "Classified information from Jane Smith: Authorized and available. Classified intelligence suggests this approach will have maximum impact."
      )
    ).toBeTruthy();

    // Check for the actual content text
    expect(
      screen.getByText(
        "Classified intelligence suggests this approach will have maximum impact."
      )
    ).toBeTruthy();
  });

  it("does not display authorized intel section when none available", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 10
    );
    const cabinetPreference = createMockPreference(); // No authorized content

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.queryByText("Classified Info Authorized")).toBeNull();
    expect(screen.queryByText("Classified Info Withheld")).toBeNull();
  });

  it("has comprehensive accessibility label when preference is available", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 5
    );
    const cabinetPreference = createMockPreference("Secret intel");

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(
      screen.getByLabelText(
        "Jane Smith, Secretary of Defense. Preference available: This is the best approach based on current intelligence Includes classified intel."
      )
    ).toBeTruthy();
  });

  it("has comprehensive accessibility label when preference is locked", () => {
    const relationship = CABINET_PREFERENCE_THRESHOLD - 10;
    const cabinetMember = createMockCabinetMember(relationship);
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(
      screen.getByLabelText(
        `Jane Smith, Secretary of Defense. Preference locked due to low relationship (${relationship}). Need ${CABINET_PREFERENCE_THRESHOLD} minimum.`
      )
    ).toBeTruthy();
  });

  it("handles edge case at exact threshold", () => {
    const cabinetMember = createMockCabinetMember(CABINET_PREFERENCE_THRESHOLD);
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    // Should show preference since it meets threshold
    expect(screen.getByText("Approach:")).toBeTruthy();
    expect(screen.queryByText("Preference Locked")).toBeNull();
  });

  it("handles edge case just below threshold", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD - 1
    );
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    // Should be locked
    expect(screen.getByText("Preference Locked")).toBeTruthy();
    expect(screen.queryByText("Approach:")).toBeNull();
  });

  it("handles different answer types", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 5
    );
    const cabinetPreference: CabinetPreference = {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "We need to be more aggressive on this issue",
      },
    };

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.getByText("Challenge")).toBeTruthy();
    expect(
      screen.getByText("We need to be more aggressive on this issue")
    ).toBeTruthy();
  });

  it("handles different cabinet member names and titles", () => {
    const cabinetMember = {
      ...createMockCabinetMember(CABINET_PREFERENCE_THRESHOLD + 5),
      name: "Bob Johnson",
      staticData: {
        cabinetName: "Secretary of State",
      },
    };
    const cabinetPreference = createMockPreference();

    render(
      <CabinetMemberPreference
        cabinetMember={cabinetMember}
        cabinetPreference={cabinetPreference}
      />
    );

    expect(screen.getByText("Bob Johnson")).toBeTruthy();
    expect(screen.getByText("Secretary of State")).toBeTruthy();
  });

  it("renders component without errors", () => {
    const cabinetMember = createMockCabinetMember(
      CABINET_PREFERENCE_THRESHOLD + 5
    );
    const cabinetPreference = createMockPreference();

    expect(() =>
      render(
        <CabinetMemberPreference
          cabinetMember={cabinetMember}
          cabinetPreference={cabinetPreference}
        />
      )
    ).not.toThrow();
  });
});
