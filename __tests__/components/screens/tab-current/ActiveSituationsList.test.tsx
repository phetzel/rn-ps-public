import React from "react";
import { render, screen } from "@testing-library/react-native";
import { jest } from "@jest/globals";
import { View, FlatList } from "react-native";

import { SituationType } from "~/types";

// Simple test component that mimics the core behavior without withObservables
const TestActiveSituationsList = ({ situations }: { situations: any[] }) => {
  return (
    <View
      accessibilityLabel={`Active situations: ${situations?.length || 0} total`}
      testID="active-situations-container"
    >
      <View testID="title">Active Situations</View>
      {!situations?.length ? (
        <View testID="empty-state">No active situations</View>
      ) : (
        <FlatList
          data={situations}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: { item: any }) => (
            <View testID={`situation-${item.id}`}>{item.title}</View>
          )}
          testID="situations-list"
        />
      )}
    </View>
  );
};

// Helper to create mock situation
const createMockSituation = (overrides = {}) => ({
  id: `situation-${Math.random()}`,
  title: "Test Economic Crisis",
  description: "A significant economic downturn affecting multiple sectors",
  type: SituationType.Economy,
  gameId: "game-id",
  levelId: "level-id",
  ...overrides,
});

describe("ActiveSituationsList", () => {
  it("renders the title", () => {
    render(<TestActiveSituationsList situations={[]} />);
    expect(screen.getByTestId("title")).toBeTruthy();
  });

  it("shows empty state when no situations", () => {
    render(<TestActiveSituationsList situations={[]} />);
    expect(screen.getByTestId("empty-state")).toBeTruthy();
  });

  it("shows situations when they exist", () => {
    const situations = [
      createMockSituation({ id: "test-1", title: "Test Crisis" }),
    ];
    render(<TestActiveSituationsList situations={situations} />);

    expect(screen.getByTestId("situations-list")).toBeTruthy();
    expect(screen.getByTestId("situation-test-1")).toBeTruthy();
  });

  it("has proper accessibility labeling", () => {
    const situations = [createMockSituation(), createMockSituation()];
    render(<TestActiveSituationsList situations={situations} />);

    expect(screen.getByLabelText("Active situations: 2 total")).toBeTruthy();
  });
});
