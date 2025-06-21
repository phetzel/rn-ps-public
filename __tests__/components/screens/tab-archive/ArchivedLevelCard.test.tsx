import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { jest } from "@jest/globals";

import ArchivedLevelCard from "~/components/screens/tab-archive/ArchivedLevelCard";
import { LevelStatus } from "~/types";

// Mock withObservables HOC
jest.mock("@nozbe/watermelondb/react", () => ({
  withObservables: () => (Component: any) => Component,
}));

// Mock DB helpers
jest.mock("~/lib/db/helpers", () => ({
  observeLevel: jest.fn(),
  observeSituationsByLevelId: jest.fn(),
}));

// Mock expo-router
const mockPush = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock utils
jest.mock("~/lib/utils", () => ({
  formatDate: jest.fn((month: number, year: number) => `${month}/${year}`),
  cn: jest.fn((...classes) => classes.filter(Boolean).join(" ")),
}));

// Mock UI components
jest.mock("~/components/ui/card", () => ({
  Card: ({ children, className, ...props }: any) => {
    const { View } = require("react-native");
    return (
      <View {...props} testID="card">
        {children}
      </View>
    );
  },
  CardContent: ({ children, className, ...props }: any) => {
    const { View } = require("react-native");
    return (
      <View {...props} testID="card-content">
        {children}
      </View>
    );
  },
  CardHeader: ({ children, className, ...props }: any) => {
    const { View } = require("react-native");
    return (
      <View {...props} testID="card-header">
        {children}
      </View>
    );
  },
  CardTitle: ({ children, className, ...props }: any) => {
    const { Text } = require("react-native");
    return (
      <Text {...props} testID="card-title">
        {children}
      </Text>
    );
  },
  CardFooter: ({ children, className, ...props }: any) => {
    const { View } = require("react-native");
    return (
      <View {...props} testID="card-footer">
        {children}
      </View>
    );
  },
}));

jest.mock("~/components/ui/button", () => ({
  Button: ({ children, onPress, ...props }: any) => {
    const { Pressable } = require("react-native");
    return (
      <Pressable onPress={onPress} {...props} role="button">
        {children}
      </Pressable>
    );
  },
}));

jest.mock("~/components/ui/badge", () => ({
  Badge: ({ children, ...props }: any) => {
    const { Text } = require("react-native");
    return (
      <Text {...props} testID="badge">
        {children}
      </Text>
    );
  },
}));

jest.mock("~/components/ui/text", () => ({
  Text: ({ children, ...props }: any) => {
    const { Text: RNText } = require("react-native");
    return <RNText {...props}>{children}</RNText>;
  },
}));

// Mock icons
jest.mock("~/lib/icons", () => ({
  AlertCircle: ({ className, size, ...props }: any) => {
    const { View } = require("react-native");
    return <View {...props} testID="alert-circle-icon" />;
  },
  ArrowRight: ({ className, ...props }: any) => {
    const { View } = require("react-native");
    return <View {...props} testID="arrow-right-icon" />;
  },
  CalendarClock: ({ className, ...props }: any) => {
    const { View } = require("react-native");
    return <View {...props} testID="calendar-clock-icon" />;
  },
  CheckCircle2: ({ className, size, ...props }: any) => {
    const { View } = require("react-native");
    return <View {...props} testID="check-circle-icon" />;
  },
}));

describe("ArchivedLevelCard", () => {
  const mockSituations = [
    { id: "situation-1", title: "First Situation" },
    { id: "situation-2", title: "Second Situation" },
  ];

  const defaultProps = {
    levelId: "level-1",
    situations: mockSituations,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("with valid level data", () => {
    const mockLevel = {
      id: "level-1",
      month: 3,
      year: 2024,
      status: LevelStatus.Completed,
      parseOutcomeSnapshot: {
        final: {
          president: {
            approvalRating: 65,
            psRelationship: 75,
          },
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [],
        },
      },
    };

    it("should render level information correctly", () => {
      render(<ArchivedLevelCard {...defaultProps} level={mockLevel} />);

      expect(screen.getByText("3/2024")).toBeTruthy();
      expect(screen.getByText("65")).toBeTruthy();
      expect(screen.getByText("75")).toBeTruthy();
      expect(screen.getByText("2")).toBeTruthy(); // situations count
      expect(screen.getByText("No consequences")).toBeTruthy();
    });

    it("should have proper accessibility labels", () => {
      render(<ArchivedLevelCard {...defaultProps} level={mockLevel} />);

      expect(screen.getByLabelText(/Archived 3\/2024/)).toBeTruthy();
      expect(screen.getByLabelText(/President approval: 65%/)).toBeTruthy();
      expect(screen.getByLabelText(/President relationship: 75%/)).toBeTruthy();
      expect(screen.getByLabelText(/2 situations occurred/)).toBeTruthy();
      expect(screen.getByLabelText(/no major consequences/)).toBeTruthy();
    });

    it("should navigate to level details when View Details is pressed", () => {
      render(<ArchivedLevelCard {...defaultProps} level={mockLevel} />);

      const viewDetailsButton = screen.getByText("View Details");
      fireEvent.press(viewDetailsButton);

      expect(mockPush).toHaveBeenCalledWith("./archive/level-1");
    });
  });

  describe("with consequences", () => {
    const levelWithConsequences = {
      id: "level-2",
      month: 4,
      year: 2024,
      status: LevelStatus.Completed,
      parseOutcomeSnapshot: {
        final: {
          president: {
            approvalRating: 45,
            psRelationship: 30,
          },
        },
        consequences: {
          gameEnded: true,
          gameEndReason: "fired",
          cabinetMembersFired: ["secretary-1"],
        },
      },
    };

    it("should show consequences indicator", () => {
      render(
        <ArchivedLevelCard {...defaultProps} level={levelWithConsequences} />
      );

      expect(screen.getByText("Had consequences")).toBeTruthy();
      expect(screen.getByLabelText(/had serious consequences/)).toBeTruthy();
    });

    it("should show different approval ratings", () => {
      render(
        <ArchivedLevelCard {...defaultProps} level={levelWithConsequences} />
      );

      expect(screen.getByText("45")).toBeTruthy(); // approval rating
      expect(screen.getByText("30")).toBeTruthy(); // ps relationship
    });
  });

  describe("with cabinet members fired", () => {
    const levelWithCabinetFired = {
      id: "level-3",
      month: 5,
      year: 2024,
      status: LevelStatus.Completed,
      parseOutcomeSnapshot: {
        final: {
          president: {
            approvalRating: 55,
            psRelationship: 60,
          },
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: ["secretary-1", "secretary-2"],
        },
      },
    };

    it("should show consequences when cabinet members fired", () => {
      render(
        <ArchivedLevelCard {...defaultProps} level={levelWithCabinetFired} />
      );

      expect(screen.getByText("Had consequences")).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("should return null when level is undefined", () => {
      render(<ArchivedLevelCard {...defaultProps} level={undefined} />);

      // React Native Testing Library doesn't have container.children, so check for absence of key elements
      expect(screen.queryByText("View Details")).toBeNull();
      expect(screen.queryByText("President Approval:")).toBeNull();
    });

    it("should handle missing outcome snapshot", () => {
      const levelWithoutSnapshot = {
        id: "level-4",
        month: 6,
        year: 2024,
        status: LevelStatus.Completed,
        parseOutcomeSnapshot: null,
      };

      render(
        <ArchivedLevelCard {...defaultProps} level={levelWithoutSnapshot} />
      );

      expect(screen.getByText("6/2024")).toBeTruthy();
      expect(screen.getByText("View Details")).toBeTruthy();
    });

    it("should handle missing consequences", () => {
      const levelWithoutConsequences = {
        id: "level-5",
        month: 7,
        year: 2024,
        status: LevelStatus.Completed,
        parseOutcomeSnapshot: {
          final: {
            president: {
              approvalRating: 50,
              psRelationship: 50,
            },
          },
          consequences: null,
        },
      };

      render(
        <ArchivedLevelCard {...defaultProps} level={levelWithoutConsequences} />
      );

      expect(screen.getByText("No consequences")).toBeTruthy();
    });

    it("should handle empty situations array", () => {
      const mockLevel = {
        id: "level-6",
        month: 8,
        year: 2024,
        status: LevelStatus.Completed,
        parseOutcomeSnapshot: {
          final: {
            president: {
              approvalRating: 60,
              psRelationship: 70,
            },
          },
          consequences: {
            gameEnded: false,
            cabinetMembersFired: [],
          },
        },
      };

      render(
        <ArchivedLevelCard
          {...defaultProps}
          level={mockLevel}
          situations={[]}
        />
      );

      expect(screen.getByText("0")).toBeTruthy(); // situations count
      expect(screen.getByLabelText(/0 situations occurred/)).toBeTruthy();
    });
  });

  describe("navigation accessibility", () => {
    const mockLevel = {
      id: "level-1",
      month: 3,
      year: 2024,
      status: LevelStatus.Completed,
      parseOutcomeSnapshot: {
        final: {
          president: {
            approvalRating: 65,
            psRelationship: 75,
          },
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [],
        },
      },
    };

    it("should have proper button accessibility", () => {
      render(<ArchivedLevelCard {...defaultProps} level={mockLevel} />);

      const viewDetailsButton = screen.getByRole("button");
      expect(viewDetailsButton).toHaveProp(
        "accessibilityLabel",
        "View detailed breakdown for 3/2024"
      );
      expect(viewDetailsButton).toHaveProp(
        "accessibilityHint",
        "Shows press exchanges, situation outcomes, and media coverage for this month"
      );
    });
  });
});
