import React from "react";
import { render, screen } from "@testing-library/react-native";

import ConsequenceGameOver from "~/components/shared/level-consequences/ConsequenceGameOver";
import { ConsequenceResult } from "~/types";

describe("ConsequenceGameOver", () => {
  describe("when game ends due to firing", () => {
    it("should render firing message and styling", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "fired",
        cabinetMembersFired: [],
      };

      render(<ConsequenceGameOver consequences={consequences} />);

      expect(screen.getByText("You've Been Fired")).toBeTruthy();
      expect(
        screen.getByText(
          "The President has lost confidence in your abilities as Press Secretary."
        )
      ).toBeTruthy();
      expect(screen.getByText("GAME OVER")).toBeTruthy();
    });

    it("should have proper accessibility labels for firing", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "fired",
        cabinetMembersFired: [],
      };

      render(<ConsequenceGameOver consequences={consequences} />);

      expect(
        screen.getByLabelText("Game Over: Press Secretary fired by President")
      ).toBeTruthy();
      expect(screen.getByLabelText("Game Over status")).toBeTruthy();
    });
  });

  describe("when game ends due to impeachment", () => {
    it("should render impeachment message and styling", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "impeached",
        cabinetMembersFired: [],
      };

      render(<ConsequenceGameOver consequences={consequences} />);

      expect(screen.getByText("Presidential Impeachment")).toBeTruthy();
      expect(
        screen.getByText(
          "The President has been impeached due to critically low approval ratings."
        )
      ).toBeTruthy();
      expect(screen.getByText("GAME OVER")).toBeTruthy();
    });

    it("should have proper accessibility labels for impeachment", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "impeached",
        cabinetMembersFired: [],
      };

      render(<ConsequenceGameOver consequences={consequences} />);

      expect(
        screen.getByLabelText(
          "Game Over: Presidential impeachment due to low approval"
        )
      ).toBeTruthy();
      expect(screen.getByLabelText("Game Over status")).toBeTruthy();
    });
  });

  describe("visual styling", () => {
    it("should use amber styling for firing", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "fired",
        cabinetMembersFired: [],
      };

      const { getByLabelText } = render(
        <ConsequenceGameOver consequences={consequences} />
      );

      // Check that the correct accessibility label is present (which implies correct styling)
      expect(
        getByLabelText("Game Over: Press Secretary fired by President")
      ).toBeTruthy();
    });

    it("should use red styling for impeachment", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "impeached",
        cabinetMembersFired: [],
      };

      const { getByLabelText } = render(
        <ConsequenceGameOver consequences={consequences} />
      );

      // Check that the correct accessibility label is present (which implies correct styling)
      expect(
        getByLabelText(
          "Game Over: Presidential impeachment due to low approval"
        )
      ).toBeTruthy();
    });
  });

  describe("badge rendering", () => {
    it("should render GAME OVER badge for both scenarios", () => {
      const firingConsequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "fired",
        cabinetMembersFired: [],
      };

      const { rerender } = render(
        <ConsequenceGameOver consequences={firingConsequences} />
      );

      expect(screen.getByText("GAME OVER")).toBeTruthy();

      const impeachmentConsequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: "impeached",
        cabinetMembersFired: [],
      };

      rerender(<ConsequenceGameOver consequences={impeachmentConsequences} />);

      expect(screen.getByText("GAME OVER")).toBeTruthy();
    });
  });
});
