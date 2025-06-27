import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AdCardHeader from "~/components/shared/ad-card/AdCardHeader";

// Mock icons - simplified
jest.mock("~/lib/icons/Play", () => ({
  Play: () => null,
}));

jest.mock("~/lib/icons/CheckCircle2", () => ({
  CheckCircle2: () => null,
}));

jest.mock("~/lib/icons/Film", () => ({
  Film: () => null,
}));

describe("AdCardHeader", () => {
  const mockOnWatchAd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Ad Watched State", () => {
    it("renders correctly when ad is watched", () => {
      render(
        <AdCardHeader
          isAdWatched={true}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={false}
          canRequestAds={true}
        />
      );

      expect(screen.getByText("Ad Boost Applied!")).toBeTruthy();
      expect(screen.queryByText("Watch Ad")).toBeFalsy();
    });

    it("has correct accessibility when ad is watched", () => {
      render(<AdCardHeader isAdWatched={true} />);

      const header = screen.getByLabelText(/Boost has been applied/);
      expect(header).toBeTruthy();
    });
  });

  describe("Ad Not Watched State - Can Request Ads", () => {
    it("renders correctly when ad is not watched and ads can be requested", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={false}
          canRequestAds={true}
        />
      );

      expect(screen.getByText("Boost Your Results")).toBeTruthy();
      expect(screen.getByText("Watch Ad")).toBeTruthy();
    });

    it("calls onWatchAd when button is pressed", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={false}
          canRequestAds={true}
        />
      );

      const button = screen.getByRole("button");
      fireEvent.press(button);

      expect(mockOnWatchAd).toHaveBeenCalledTimes(1);
    });

    it("has correct accessibility when ad is available", () => {
      render(<AdCardHeader isAdWatched={false} canRequestAds={true} />);

      const header = screen.getByLabelText(/Boost available by watching ad/);
      expect(header).toBeTruthy();

      const button = screen.getByLabelText(
        "Watch advertisement to boost results"
      );
      expect(button).toBeTruthy();
    });
  });

  describe("Ad Not Watched State - Cannot Request Ads", () => {
    it("renders correctly when ads cannot be requested", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={true}
          canRequestAds={false}
        />
      );

      expect(screen.getByText("Boost Unavailable")).toBeTruthy();
      expect(screen.getByText("Consent required for ad boosts")).toBeTruthy();
      expect(screen.queryByRole("button")).toBeFalsy();
    });

    it("has correct accessibility when ads cannot be requested", () => {
      render(<AdCardHeader isAdWatched={false} canRequestAds={false} />);

      const header = screen.getByLabelText(
        /Boost not available due to consent settings/
      );
      expect(header).toBeTruthy();
    });
  });

  describe("Button States", () => {
    it("renders button when isButtonDisabled is true", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={true}
          canRequestAds={true}
        />
      );

      const button = screen.getByRole("button");
      expect(button).toBeTruthy();
      expect(screen.getByText("Loading...")).toBeTruthy();
    });

    it("renders button when isButtonDisabled is false", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={false}
          canRequestAds={true}
        />
      );

      const button = screen.getByRole("button");
      expect(button).toBeTruthy();
      expect(screen.getByText("Watch Ad")).toBeTruthy();
    });

    it("does not render button when ad is watched", () => {
      render(
        <AdCardHeader
          isAdWatched={true}
          onWatchAd={mockOnWatchAd}
          isButtonDisabled={false}
          canRequestAds={true}
        />
      );

      expect(screen.queryByRole("button")).toBeFalsy();
    });
  });

  describe("Default Props", () => {
    it("renders with minimal props", () => {
      render(<AdCardHeader />);

      expect(screen.getByText("Boost Your Results")).toBeTruthy();
    });

    it("defaults canRequestAds to true", () => {
      render(<AdCardHeader isAdWatched={false} />);

      expect(screen.getByText("Boost Your Results")).toBeTruthy();
      expect(screen.queryByText("Boost Unavailable")).toBeFalsy();
    });

    it("handles undefined onWatchAd", () => {
      render(
        <AdCardHeader
          isAdWatched={false}
          onWatchAd={undefined}
          canRequestAds={true}
        />
      );

      const button = screen.getByRole("button");
      expect(() => fireEvent.press(button)).not.toThrow();
    });
  });

  describe("Edge Cases", () => {
    it("does not crash with all props undefined", () => {
      expect(() => render(<AdCardHeader />)).not.toThrow();
    });

    it("handles isAdWatched false with canRequestAds false", () => {
      render(<AdCardHeader isAdWatched={false} canRequestAds={false} />);

      expect(screen.getByText("Boost Unavailable")).toBeTruthy();
      expect(screen.getByText("Consent required for ad boosts")).toBeTruthy();
    });

    it("handles button press when onWatchAd is not provided", () => {
      render(<AdCardHeader isAdWatched={false} canRequestAds={true} />);

      const button = screen.getByRole("button");
      expect(() => fireEvent.press(button)).not.toThrow();
    });
  });
});
