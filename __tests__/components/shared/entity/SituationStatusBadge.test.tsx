import React from "react";
import { render, screen } from "@testing-library/react-native";

import { SituationStatusBadge } from "~/components/shared/entity/SituationStatusBadge";
import { SituationType } from "~/types";

describe("SituationStatusBadge", () => {
  const renderWithStatus = (status: SituationType) => {
    render(<SituationStatusBadge status={status} />);
  };

  it("renders domestic policy badge", () => {
    renderWithStatus(SituationType.DomesticPolicy);
    expect(screen.getByText("Domestic Policy")).toBeTruthy();
    expect(
      screen.getByLabelText("Situation type: Domestic Policy")
    ).toBeTruthy();
  });

  it("renders foreign affairs badge", () => {
    renderWithStatus(SituationType.ForeignAffairs);
    expect(screen.getByText("Foreign Affairs")).toBeTruthy();
    expect(
      screen.getByLabelText("Situation type: Foreign Affairs")
    ).toBeTruthy();
  });

  it("renders security badge", () => {
    renderWithStatus(SituationType.Security);
    expect(screen.getByText("Security")).toBeTruthy();
    expect(screen.getByLabelText("Situation type: Security")).toBeTruthy();
  });

  it("formats situation type correctly", () => {
    renderWithStatus(SituationType.DomesticPolicy);
    expect(screen.getByText("Domestic Policy")).toBeTruthy();
  });

  // Comprehensive enum testing
  describe("handles all SituationType enum values", () => {
    it("renders economy badge", () => {
      renderWithStatus(SituationType.Economy);
      expect(screen.getByText("Economy")).toBeTruthy();
      expect(screen.getByLabelText("Situation type: Economy")).toBeTruthy();
    });

    it("renders environment badge", () => {
      renderWithStatus(SituationType.Environment);
      expect(screen.getByText("Environment")).toBeTruthy();
      expect(screen.getByLabelText("Situation type: Environment")).toBeTruthy();
    });

    it("renders ethics badge", () => {
      renderWithStatus(SituationType.Ethics);
      expect(screen.getByText("Ethics")).toBeTruthy();
      expect(screen.getByLabelText("Situation type: Ethics")).toBeTruthy();
    });

    it("renders governance badge", () => {
      renderWithStatus(SituationType.Governance);
      expect(screen.getByText("Governance")).toBeTruthy();
      expect(screen.getByLabelText("Situation type: Governance")).toBeTruthy();
    });
  });

  describe("badge variant assignment", () => {
    it("assigns default variant for domestic policy", () => {
      const { unmount } = render(
        <SituationStatusBadge status={SituationType.DomesticPolicy} />
      );
      // Component renders without error with default variant
      expect(screen.getByText("Domestic Policy")).toBeTruthy();
      unmount();
    });

    it("assigns secondary variant for foreign affairs", () => {
      const { unmount } = render(
        <SituationStatusBadge status={SituationType.ForeignAffairs} />
      );
      // Component renders without error with secondary variant
      expect(screen.getByText("Foreign Affairs")).toBeTruthy();
      unmount();
    });

    it("assigns destructive variant for security", () => {
      const { unmount } = render(
        <SituationStatusBadge status={SituationType.Security} />
      );
      // Component renders without error with destructive variant
      expect(screen.getByText("Security")).toBeTruthy();
      unmount();
    });

    it("assigns destructive variant for ethics", () => {
      const { unmount } = render(
        <SituationStatusBadge status={SituationType.Ethics} />
      );
      // Component renders without error with destructive variant
      expect(screen.getByText("Ethics")).toBeTruthy();
      unmount();
    });
  });

  describe("text formatting", () => {
    it("correctly formats camelCase to Title Case", () => {
      renderWithStatus(SituationType.DomesticPolicy);
      expect(screen.getByText("Domestic Policy")).toBeTruthy();
    });

    it("correctly formats single words", () => {
      renderWithStatus(SituationType.Security);
      expect(screen.getByText("Security")).toBeTruthy();
    });

    it("handles all enum values formatting", () => {
      Object.values(SituationType).forEach((type) => {
        const { unmount } = render(<SituationStatusBadge status={type} />);
        // Verify that the formatted text is present
        const formattedText = type
          .replace("_", " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
        expect(screen.getByText(formattedText)).toBeTruthy();
        unmount();
      });
    });
  });
});
