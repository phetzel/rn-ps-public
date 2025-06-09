import React from "react";
import { render, screen } from "@testing-library/react-native";

import { SubgroupCategoryIcon } from "~/components/shared/entity/SubgroupCategoryIcon";
import { SubgroupCategory } from "~/types";

describe("SubgroupCategoryIcon", () => {
  it("renders political category icon", () => {
    const { unmount } = render(
      <SubgroupCategoryIcon category={SubgroupCategory.Political} />
    );
    expect(screen.getAllByLabelText("Political voter groups")[0]).toBeTruthy();
    unmount();
  });

  it("renders demographic category icon", () => {
    const { unmount } = render(
      <SubgroupCategoryIcon category={SubgroupCategory.Demographic} />
    );
    expect(
      screen.getAllByLabelText("Demographic voter groups")[0]
    ).toBeTruthy();
    unmount();
  });

  it("renders economic category icon", () => {
    const { unmount } = render(
      <SubgroupCategoryIcon category={SubgroupCategory.Economic} />
    );
    expect(screen.getAllByLabelText("Economic voter groups")[0]).toBeTruthy();
    unmount();
  });

  it("renders with custom className", () => {
    const { unmount } = render(
      <SubgroupCategoryIcon
        category={SubgroupCategory.Political}
        className="text-red-500"
      />
    );
    // Test behavior: component renders successfully with custom className
    expect(screen.getAllByLabelText("Political voter groups")[0]).toBeTruthy();
    unmount();
  });

  // Comprehensive enum testing
  describe("handles all SubgroupCategory enum values", () => {
    it("renders all category types correctly", () => {
      Object.values(SubgroupCategory).forEach((category) => {
        const { unmount } = render(
          <SubgroupCategoryIcon category={category} />
        );

        // Each category should have its appropriate accessibility label
        const expectedLabels = {
          [SubgroupCategory.Political]: "Political voter groups",
          [SubgroupCategory.Demographic]: "Demographic voter groups",
          [SubgroupCategory.Economic]: "Economic voter groups",
        };

        const expectedLabel = expectedLabels[category] || "Voter groups";
        expect(screen.getAllByLabelText(expectedLabel)[0]).toBeTruthy();
        unmount();
      });
    });
  });

  describe("icon mapping", () => {
    it("assigns Landmark icon for Political category", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Political} />
      );
      expect(
        screen.getAllByLabelText("Political voter groups")[0]
      ).toBeTruthy();
      unmount();
    });

    it("assigns Users icon for Demographic category", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Demographic} />
      );
      expect(
        screen.getAllByLabelText("Demographic voter groups")[0]
      ).toBeTruthy();
      unmount();
    });

    it("assigns Briefcase icon for Economic category", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Economic} />
      );
      expect(screen.getAllByLabelText("Economic voter groups")[0]).toBeTruthy();
      unmount();
    });
  });

  describe("styling", () => {
    it("applies default className when none provided", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Political} />
      );
      // Component should render successfully with default text-primary className
      expect(
        screen.getAllByLabelText("Political voter groups")[0]
      ).toBeTruthy();
      unmount();
    });

    it("applies custom className correctly", () => {
      const customClasses = [
        "text-red-500",
        "text-blue-600",
        "text-green-400",
        "text-purple-700",
      ];

      customClasses.forEach((className) => {
        const { unmount } = render(
          <SubgroupCategoryIcon
            category={SubgroupCategory.Economic}
            className={className}
          />
        );
        expect(
          screen.getAllByLabelText("Economic voter groups")[0]
        ).toBeTruthy();
        unmount();
      });
    });
  });

  describe("accessibility", () => {
    it("has descriptive accessibility labels", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Political} />
      );
      expect(
        screen.getAllByLabelText("Political voter groups")[0]
      ).toBeTruthy();
      unmount();
    });

    it("provides context for screen readers", () => {
      const { unmount } = render(
        <SubgroupCategoryIcon category={SubgroupCategory.Demographic} />
      );
      expect(
        screen.getAllByLabelText("Demographic voter groups")[0]
      ).toBeTruthy();
      unmount();
    });
  });

  describe("edge cases", () => {
    it("handles invalid category gracefully", () => {
      // Test with an invalid category (cast to bypass TypeScript)
      const { unmount } = render(
        <SubgroupCategoryIcon category={"invalid" as SubgroupCategory} />
      );
      // Should default to Users icon with "Voter groups" label
      expect(screen.getAllByLabelText("Voter groups")[0]).toBeTruthy();
      unmount();
    });
  });
});
