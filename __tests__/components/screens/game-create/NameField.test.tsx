import React from "react";
import { render, screen } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { View } from "react-native";

import { NameField } from "~/components/screens/game-create/NameField";
import { CreateGameFormData } from "~/lib/schemas";

function Wrapper({ withError = false }: { withError?: boolean }) {
  const { control } = useForm<CreateGameFormData>({
    defaultValues: {
      pressSecretaryName: "",
      presidentName: "",
      presidentLeaning: "liberal" as any,
      pressOfficeBackground: "journalist" as any,
    },
  });
  return (
    <View>
      <NameField
        control={control}
        name="pressSecretaryName"
        label="Press Secretary Name"
        placeholder="Enter name"
        error={withError ? { type: "manual", message: "Name required" } : undefined}
      />
    </View>
  );
}

describe("NameField", () => {
  it("associates label and input via accessibilityLabelledBy", () => {
    render(<Wrapper />);
    // Label
    expect(screen.getByText("Press Secretary Name")).toBeTruthy();
    // Input should point to {name}Label
    const input = screen.getByPlaceholderText("Enter name");
    expect(input.props["accessibilityLabelledBy"]).toBe("pressSecretaryNameLabel");
  });

  it("sets aria-invalid and aria-describedby when error is present", () => {
    render(<Wrapper withError />);
    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.getByText("Name required")).toBeTruthy();
  });
});


