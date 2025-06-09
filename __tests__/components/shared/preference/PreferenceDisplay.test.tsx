/**
 * PreferenceDisplay Component Tests
 *
 * Tests preference display functionality:
 * - Renders preference rationale text
 * - Shows correct answer type labels
 * - Applies appropriate colors for each answer type
 * - Accessibility labels and structure
 * - Visual styling and layout
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import PreferenceDisplay from "~/components/shared/preference/PreferenceDisplay";
import { AnswerType, Preference } from "~/types";

// No mocks - testing actual component behavior

describe("PreferenceDisplay", () => {
  const basePreference: Preference = {
    rationale: "This is the best approach for this situation",
    answerType: AnswerType.Inform,
  };

  it("renders preference rationale", () => {
    render(<PreferenceDisplay preference={basePreference} />);

    expect(
      screen.getByText("This is the best approach for this situation")
    ).toBeTruthy();
  });

  it("shows approach label", () => {
    render(<PreferenceDisplay preference={basePreference} />);

    expect(screen.getByText("Approach:")).toBeTruthy();
    expect(screen.getByText("Inform")).toBeTruthy();
  });

  it("has comprehensive accessibility label", () => {
    render(<PreferenceDisplay preference={basePreference} />);

    expect(
      screen.getByLabelText(
        "Preferred approach: Inform. Rationale: This is the best approach for this situation"
      )
    ).toBeTruthy();
  });

  describe("Answer Type Labels", () => {
    const testCases = [
      { answerType: AnswerType.Deflect, expectedLabel: "Deflect" },
      { answerType: AnswerType.Reassure, expectedLabel: "Reassure" },
      { answerType: AnswerType.Challenge, expectedLabel: "Challenge" },
      { answerType: AnswerType.Admit, expectedLabel: "Admit" },
      { answerType: AnswerType.Deny, expectedLabel: "Deny" },
      { answerType: AnswerType.Inform, expectedLabel: "Inform" },
      { answerType: AnswerType.Authorized, expectedLabel: "Authorized" },
    ];

    testCases.forEach(({ answerType, expectedLabel }) => {
      it(`shows correct label for ${expectedLabel}`, () => {
        const preference: Preference = {
          rationale: "Test rationale",
          answerType,
        };

        render(<PreferenceDisplay preference={preference} />);

        expect(screen.getByText(expectedLabel)).toBeTruthy();
        expect(
          screen.getByLabelText(
            `Preferred approach: ${expectedLabel}. Rationale: Test rationale`
          )
        ).toBeTruthy();
      });
    });
  });

  describe("Answer Type Colors", () => {
    const colorTestCases = [
      {
        answerType: AnswerType.Deflect,
        expectedColors: "text-purple-600 bg-purple-50",
      },
      {
        answerType: AnswerType.Reassure,
        expectedColors: "text-blue-600 bg-blue-50",
      },
      {
        answerType: AnswerType.Challenge,
        expectedColors: "text-red-600 bg-red-50",
      },
      {
        answerType: AnswerType.Admit,
        expectedColors: "text-amber-600 bg-amber-50",
      },
      {
        answerType: AnswerType.Deny,
        expectedColors: "text-orange-600 bg-orange-50",
      },
      {
        answerType: AnswerType.Inform,
        expectedColors: "text-teal-600 bg-teal-50",
      },
      {
        answerType: AnswerType.Authorized,
        expectedColors: "text-emerald-600 bg-emerald-50",
      },
    ];

    colorTestCases.forEach(({ answerType, expectedColors }) => {
      const answerTypeLabel =
        answerType === AnswerType.Deflect
          ? "Deflect"
          : answerType === AnswerType.Reassure
          ? "Reassure"
          : answerType === AnswerType.Challenge
          ? "Challenge"
          : answerType === AnswerType.Admit
          ? "Admit"
          : answerType === AnswerType.Deny
          ? "Deny"
          : answerType === AnswerType.Inform
          ? "Inform"
          : answerType === AnswerType.Authorized
          ? "Authorized"
          : "Unknown";

      it(`applies correct colors for ${answerTypeLabel}`, () => {
        const preference: Preference = {
          rationale: "Test rationale",
          answerType,
        };

        render(<PreferenceDisplay preference={preference} />);

        const answerTypeElement = screen.getByText(answerTypeLabel);
        expect(answerTypeElement.props.className).toContain(expectedColors);
      });
    });
  });

  it("handles empty rationale", () => {
    const preferenceWithEmptyRationale: Preference = {
      rationale: "",
      answerType: AnswerType.Inform,
    };

    render(<PreferenceDisplay preference={preferenceWithEmptyRationale} />);

    expect(screen.getByText("Inform")).toBeTruthy();
    expect(
      screen.getByLabelText("Preferred approach: Inform. Rationale: ")
    ).toBeTruthy();
  });

  it("renders with proper structure and styling", () => {
    render(<PreferenceDisplay preference={basePreference} />);

    // Should have main container with background styling
    const container = screen.getByLabelText(
      "Preferred approach: Inform. Rationale: This is the best approach for this situation"
    );
    expect(container).toBeTruthy();

    // Should have approach label and answer type badge
    expect(screen.getByText("Approach:")).toBeTruthy();
    expect(screen.getByText("Inform")).toBeTruthy();

    // Should have rationale text
    expect(
      screen.getByText("This is the best approach for this situation")
    ).toBeTruthy();
  });

  it("handles long rationale text", () => {
    const longRationale =
      "This is a very long rationale that explains in great detail why this particular approach is the most suitable for the current situation, taking into account various factors and considerations that are important for the decision-making process.";

    const preferenceWithLongRationale: Preference = {
      rationale: longRationale,
      answerType: AnswerType.Challenge,
    };

    render(<PreferenceDisplay preference={preferenceWithLongRationale} />);

    expect(screen.getByText(longRationale)).toBeTruthy();
    expect(screen.getByText("Challenge")).toBeTruthy();
  });
});
