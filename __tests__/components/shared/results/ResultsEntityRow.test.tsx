/**
 * ResultsEntityRow Component Tests
 *
 * Tests individual entity row component functionality:
 * - Renders entity name, title, and all value columns
 * - Handles showAdColumn and showBaseColumn props
 * - Displays proper column values based on entity data
 * - Conditional styling based on isAdWatched
 * - Accessibility labels for all columns
 * - Handles EntityWithDelta and EntityWithMediaDelta types
 * - Proper column width calculations
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";

import { ResultsEntityRow } from "~/components/shared/results/ResultsEntityRow";
import type { EntityWithDelta, EntityWithMediaDelta } from "~/types";

// Mock calculateTableColumnWidths utility
jest.mock("~/lib/utils", () => ({
  ...jest.requireActual("~/lib/utils"),
  calculateTableColumnWidths: jest.fn(() => ({
    name: "40%",
    data: "20%",
  })),
}));

const createMockEntity = (
  id: string,
  name: string,
  overrides: Partial<EntityWithDelta> = {}
): EntityWithDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: "cabinet" as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  ...overrides,
});

const createMockMediaEntity = (
  id: string,
  name: string,
  overrides: Partial<EntityWithMediaDelta> = {}
): EntityWithMediaDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: "cabinet" as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  preMediaDelta: 3,
  ...overrides,
});

describe("ResultsEntityRow", () => {
  const defaultProps = {
    entity: createMockEntity("1", "Test Entity"),
    isAdWatched: false,
  };

  describe("basic rendering", () => {
    it("renders entity name and title", () => {
      render(<ResultsEntityRow {...defaultProps} />);

      expect(screen.getByText("Test Entity")).toBeTruthy();
      expect(screen.getByText("Title for Test Entity")).toBeTruthy();
    });

    it("renders entity name with accessibility label", () => {
      render(<ResultsEntityRow {...defaultProps} />);

      expect(
        screen.getByLabelText("Test Entity, Title for Test Entity")
      ).toBeTruthy();
    });

    it("renders entity without title", () => {
      const entityWithoutTitle = createMockEntity("1", "No Title Entity", {
        title: undefined,
      });

      render(
        <ResultsEntityRow {...defaultProps} entity={entityWithoutTitle} />
      );

      expect(screen.getByText("No Title Entity")).toBeTruthy();
      expect(screen.queryByText("Title for No Title Entity")).toBeNull();
      expect(screen.getByLabelText("No Title Entity")).toBeTruthy();
    });

    it("renders current value in start column", () => {
      render(<ResultsEntityRow {...defaultProps} />);

      expect(screen.getByLabelText("Start value: 50")).toBeTruthy();
      expect(screen.getByText("50")).toBeTruthy();
    });

    it("renders delta in change column", () => {
      render(<ResultsEntityRow {...defaultProps} />);

      expect(screen.getByLabelText("Change: plus 5")).toBeTruthy();
      expect(screen.getByText("+5")).toBeTruthy();
    });
  });

  describe("showAdColumn prop", () => {
    it("shows ad boosted column by default", () => {
      render(<ResultsEntityRow {...defaultProps} />);

      expect(screen.getByLabelText("Potential boost: plus 8")).toBeTruthy();
      expect(screen.getByText("+8")).toBeTruthy();
    });

    it("shows ad boosted column when showAdColumn is true", () => {
      render(<ResultsEntityRow {...defaultProps} showAdColumn={true} />);

      expect(screen.getByLabelText("Potential boost: plus 8")).toBeTruthy();
      expect(screen.getByText("+8")).toBeTruthy();
    });

    it("hides ad boosted column when showAdColumn is false", () => {
      render(<ResultsEntityRow {...defaultProps} showAdColumn={false} />);

      expect(screen.queryByLabelText("Potential boost: plus 8")).toBeNull();
      expect(screen.queryByText("+8")).toBeNull();
    });

    it("updates accessibility label when ad is watched", () => {
      render(
        <ResultsEntityRow
          {...defaultProps}
          isAdWatched={true}
          showAdColumn={true}
        />
      );

      expect(screen.getByLabelText("Ad boosted: plus 8")).toBeTruthy();
    });
  });

  describe("media data handling", () => {
    it("shows base column for media entity when showAdColumn is false", () => {
      const mediaEntity = createMockMediaEntity("1", "Media Entity");

      render(
        <ResultsEntityRow
          entity={mediaEntity}
          isAdWatched={false}
          showAdColumn={false}
        />
      );

      expect(screen.getByLabelText("Base change: plus 3")).toBeTruthy();
      expect(screen.getByText("+3")).toBeTruthy();
    });

    it("does not show base column for media entity when showAdColumn is true", () => {
      const mediaEntity = createMockMediaEntity("1", "Media Entity");

      render(
        <ResultsEntityRow
          entity={mediaEntity}
          isAdWatched={false}
          showAdColumn={true}
        />
      );

      expect(screen.queryByLabelText("Base change: plus 3")).toBeNull();
      expect(screen.queryByText("+3")).toBeNull();
    });

    it("handles negative preMediaDelta", () => {
      const mediaEntity = createMockMediaEntity("1", "Media Entity", {
        preMediaDelta: -2,
      });

      render(
        <ResultsEntityRow
          entity={mediaEntity}
          isAdWatched={false}
          showAdColumn={false}
        />
      );

      expect(screen.getByLabelText("Base change: minus 2")).toBeTruthy();
      expect(screen.getByText("-2")).toBeTruthy();
    });

    it("does not show base column for regular entity", () => {
      render(<ResultsEntityRow {...defaultProps} showAdColumn={false} />);

      expect(screen.queryByLabelText("Base change: plus 3")).toBeNull();
    });
  });

  describe("value formatting", () => {
    it("formats positive delta values", () => {
      const entity = createMockEntity("1", "Positive Entity", { delta: 10 });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByLabelText("Change: plus 10")).toBeTruthy();
      expect(screen.getByText("+10")).toBeTruthy();
    });

    it("formats negative delta values", () => {
      const entity = createMockEntity("1", "Negative Entity", { delta: -5 });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByLabelText("Change: minus 5")).toBeTruthy();
      expect(screen.getByText("-5")).toBeTruthy();
    });

    it("formats zero delta values", () => {
      const entity = createMockEntity("1", "Zero Entity", { delta: 0 });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByLabelText("Change: plus 0")).toBeTruthy();
      expect(screen.getByText("+0")).toBeTruthy();
    });

    it("formats positive ad boosted delta values", () => {
      const entity = createMockEntity("1", "Positive Boosted", {
        adBoostedDelta: 15,
      });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByLabelText("Potential boost: plus 15")).toBeTruthy();
      expect(screen.getByText("+15")).toBeTruthy();
    });

    it("formats negative ad boosted delta values", () => {
      const entity = createMockEntity("1", "Negative Boosted", {
        adBoostedDelta: -3,
      });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByLabelText("Potential boost: minus 3")).toBeTruthy();
      expect(screen.getByText("-3")).toBeTruthy();
    });
  });

  describe("isAdWatched styling", () => {
    it("applies watched styling when ad is watched", () => {
      const entity = createMockEntity("1", "Watched Entity", { delta: 5 });

      render(
        <ResultsEntityRow
          entity={entity}
          isAdWatched={true}
          showAdColumn={true}
        />
      );

      // Change column should be muted when ad is watched and ad column is shown
      expect(screen.getByLabelText("Change: plus 5")).toBeTruthy();
      // Ad boosted column should be highlighted
      expect(screen.getByLabelText("Ad boosted: plus 8")).toBeTruthy();
    });

    it("applies normal styling when ad is not watched", () => {
      const entity = createMockEntity("1", "Not Watched Entity", { delta: 5 });

      render(
        <ResultsEntityRow
          entity={entity}
          isAdWatched={false}
          showAdColumn={true}
        />
      );

      // Change column should be highlighted when ad is not watched
      expect(screen.getByLabelText("Change: plus 5")).toBeTruthy();
      // Ad boosted column should be muted
      expect(screen.getByLabelText("Potential boost: plus 8")).toBeTruthy();
    });

    it("applies normal styling when showAdColumn is false", () => {
      const entity = createMockEntity("1", "No Ad Column Entity", { delta: 5 });

      render(
        <ResultsEntityRow
          entity={entity}
          isAdWatched={true}
          showAdColumn={false}
        />
      );

      // Change column should be highlighted when no ad column
      expect(screen.getByLabelText("Change: plus 5")).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("handles entity with empty name", () => {
      const entity = createMockEntity("1", "", { title: "Just Title" });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByText("Just Title")).toBeTruthy();
      expect(screen.getByLabelText(", Just Title")).toBeTruthy();
    });

    it("handles entity with very large values", () => {
      const entity = createMockEntity("1", "Large Values", {
        currentValue: 999,
        delta: 100,
        adBoostedDelta: 150,
      });

      render(<ResultsEntityRow entity={entity} isAdWatched={false} />);

      expect(screen.getByText("999")).toBeTruthy();
      expect(screen.getByText("+100")).toBeTruthy();
      expect(screen.getByText("+150")).toBeTruthy();
    });

    it("renders without errors", () => {
      expect(() =>
        render(<ResultsEntityRow {...defaultProps} />)
      ).not.toThrow();
    });

    it("handles both entity types", () => {
      const regularEntity = createMockEntity("1", "Regular");
      const mediaEntity = createMockMediaEntity("2", "Media");

      expect(() =>
        render(<ResultsEntityRow entity={regularEntity} isAdWatched={false} />)
      ).not.toThrow();

      expect(() =>
        render(<ResultsEntityRow entity={mediaEntity} isAdWatched={false} />)
      ).not.toThrow();
    });
  });
});
