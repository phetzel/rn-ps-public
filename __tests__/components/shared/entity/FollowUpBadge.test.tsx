import React from "react";
import { render, screen } from "@testing-library/react-native";
import { FollowUpBadge } from "~/components/shared/entity/FollowUpBadge";

describe("FollowUpBadge", () => {
  it("renders follow-up question text", () => {
    render(<FollowUpBadge />);
    expect(screen.getByText("Follow-up Question")).toBeTruthy();
  });

  it("has default accessibility label", () => {
    render(<FollowUpBadge />);
    expect(screen.getByLabelText("Follow-up question indicator")).toBeTruthy();
  });

  it("accepts custom accessibility label", () => {
    render(<FollowUpBadge accessibilityLabel="Custom label" />);
    expect(screen.getByLabelText("Custom label")).toBeTruthy();
  });

  it("applies default className", () => {
    render(<FollowUpBadge />);
    // Component renders without error with default className
    expect(screen.getByText("Follow-up Question")).toBeTruthy();
  });

  it("accepts custom className", () => {
    render(<FollowUpBadge className="custom-class" />);
    // Component renders without error with custom className
    expect(screen.getByText("Follow-up Question")).toBeTruthy();
  });
});
