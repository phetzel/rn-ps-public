import React from "react";
import { render, screen } from "@testing-library/react-native";

import { QuestionDisplay } from "~/components/shared/entity/QuestionDisplay";

describe("QuestionDisplay", () => {
  const renderWithProps = (props = {}) => {
    const defaultProps = {
      question: "What is your response to this situation?",
    };
    render(<QuestionDisplay {...defaultProps} {...props} />);
  };

  it("renders the provided question", () => {
    renderWithProps();
    expect(
      screen.getByText("What is your response to this situation?")
    ).toBeTruthy();
  });

  it("renders follow-up question badge when specified", () => {
    renderWithProps({ isFollowUpQuestion: true });
    expect(screen.getByText("Follow-up Question")).toBeTruthy();
  });

  it("has correct accessibility properties for regular question", () => {
    renderWithProps();
    const container = screen.getByLabelText(
      "Question: What is your response to this situation?"
    );
    expect(container).toBeTruthy();
  });

  it("has correct accessibility properties for follow-up question", () => {
    renderWithProps({ isFollowUpQuestion: true });
    const container = screen.getByLabelText(
      "Follow-up question: What is your response to this situation?"
    );
    expect(container).toBeTruthy();
  });
});
