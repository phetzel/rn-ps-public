/**
 * ResultsCardHeader Component Tests
 *
 * Tests header section of results card:
 * - Ad watched state: shows CheckCircle2 icon and success message
 * - Ad not watched state: shows Film icon, boost message, and Watch Ad button
 * - Button functionality and callbacks
 * - Proper accessibility labels and roles
 * - Background styling changes based on ad status
 * - Icon accessibility labels
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import ResultsCardHeader from "~/components/shared/results/ResultsCardHeader";

// No mocks - testing actual component behavior

describe("ResultsCardHeader", () => {
  const defaultProps = {
    isAdWatched: false,
  };

  describe("when ad is not watched", () => {
    it("renders boost message and watch button", () => {
      render(<ResultsCardHeader {...defaultProps} />);

      expect(screen.getByText("Boost Your Results")).toBeTruthy();
      expect(screen.getByText("Watch Ad")).toBeTruthy();
    });

    it("shows Film icon", () => {
      render(<ResultsCardHeader {...defaultProps} />);

      expect(screen.getAllByLabelText("Video ad icon").length).toBeGreaterThan(
        0
      );
    });

    it("shows Play icon in button", () => {
      render(<ResultsCardHeader {...defaultProps} />);

      expect(screen.getAllByLabelText("Play button").length).toBeGreaterThan(0);
    });

    it("has proper accessibility label for header section", () => {
      render(<ResultsCardHeader {...defaultProps} />);

      expect(
        screen.getByLabelText(
          "Ad boost section: Ad boost available to enhance your results"
        )
      ).toBeTruthy();
    });

    it("Watch Ad button has proper accessibility properties", () => {
      render(<ResultsCardHeader {...defaultProps} />);

      const watchButton = screen.getByLabelText(
        "Watch advertisement to boost results"
      );
      expect(watchButton).toBeTruthy();
      expect(watchButton).toHaveProp("accessibilityRole", "button");
      expect(watchButton).toHaveProp(
        "accessibilityHint",
        "Plays a short ad that will increase your approval rating changes"
      );
    });

    it("calls onAdComplete when Watch Ad button pressed", () => {
      const onAdComplete = jest.fn();
      render(
        <ResultsCardHeader {...defaultProps} onAdComplete={onAdComplete} />
      );

      const watchButton = screen.getByLabelText(
        "Watch advertisement to boost results"
      );
      fireEvent.press(watchButton);

      expect(onAdComplete).toHaveBeenCalledTimes(1);
    });

    it("does not call onAdComplete when undefined", () => {
      render(<ResultsCardHeader {...defaultProps} onAdComplete={undefined} />);

      const watchButton = screen.getByLabelText(
        "Watch advertisement to boost results"
      );

      // Should not throw error when onAdComplete is undefined
      expect(() => fireEvent.press(watchButton)).not.toThrow();
    });
  });

  describe("when ad is watched", () => {
    const watchedProps = {
      isAdWatched: true,
    };

    it("renders success message", () => {
      render(<ResultsCardHeader {...watchedProps} />);

      expect(screen.getByText("Ad Boost Applied!")).toBeTruthy();
    });

    it("shows CheckCircle2 icon", () => {
      render(<ResultsCardHeader {...watchedProps} />);

      expect(
        screen.getAllByLabelText("Success checkmark").length
      ).toBeGreaterThan(0);
    });

    it("does not show Watch Ad button", () => {
      render(<ResultsCardHeader {...watchedProps} />);

      expect(screen.queryByText("Watch Ad")).toBeNull();
      expect(
        screen.queryByLabelText("Watch advertisement to boost results")
      ).toBeNull();
    });

    it("does not show Film or Play icons", () => {
      render(<ResultsCardHeader {...watchedProps} />);

      expect(screen.queryByLabelText("Video ad icon")).toBeNull();
      expect(screen.queryByLabelText("Play button")).toBeNull();
    });

    it("has proper accessibility label for header section", () => {
      render(<ResultsCardHeader {...watchedProps} />);

      expect(
        screen.getByLabelText(
          "Ad boost section: Ad boost has been applied to your results"
        )
      ).toBeTruthy();
    });
  });

  describe("prop handling", () => {
    it("handles missing onAdComplete prop gracefully", () => {
      render(<ResultsCardHeader isAdWatched={false} />);

      const watchButton = screen.getByLabelText(
        "Watch advertisement to boost results"
      );
      expect(() => fireEvent.press(watchButton)).not.toThrow();
    });

    it("handles isAdWatched undefined as falsy", () => {
      render(<ResultsCardHeader />);

      // Should behave like isAdWatched=false
      expect(screen.getByText("Boost Your Results")).toBeTruthy();
      expect(screen.getByText("Watch Ad")).toBeTruthy();
    });

    it("explicitly tests isAdWatched false", () => {
      render(<ResultsCardHeader isAdWatched={false} />);

      expect(screen.getByText("Boost Your Results")).toBeTruthy();
      expect(screen.queryByText("Ad Boost Applied!")).toBeNull();
    });

    it("explicitly tests isAdWatched true", () => {
      render(<ResultsCardHeader isAdWatched={true} />);

      expect(screen.getByText("Ad Boost Applied!")).toBeTruthy();
      expect(screen.queryByText("Boost Your Results")).toBeNull();
    });
  });

  describe("accessibility", () => {
    it("has accessible header sections", () => {
      render(<ResultsCardHeader isAdWatched={false} />);

      const headerSection = screen.getByLabelText(
        "Ad boost section: Ad boost available to enhance your results"
      );
      expect(headerSection).toBeTruthy();
    });

    it("icons have proper accessibility labels", () => {
      render(<ResultsCardHeader isAdWatched={false} />);

      expect(screen.getAllByLabelText("Video ad icon").length).toBeGreaterThan(
        0
      );
      expect(screen.getAllByLabelText("Play button").length).toBeGreaterThan(0);
    });

    it("success state has proper accessibility", () => {
      render(<ResultsCardHeader isAdWatched={true} />);

      expect(
        screen.getAllByLabelText("Success checkmark").length
      ).toBeGreaterThan(0);
    });
  });

  describe("rendering", () => {
    it("renders without errors", () => {
      expect(() => render(<ResultsCardHeader />)).not.toThrow();
    });

    it("renders with all props", () => {
      const onAdComplete = jest.fn();
      expect(() =>
        render(
          <ResultsCardHeader isAdWatched={true} onAdComplete={onAdComplete} />
        )
      ).not.toThrow();
    });
  });
});
