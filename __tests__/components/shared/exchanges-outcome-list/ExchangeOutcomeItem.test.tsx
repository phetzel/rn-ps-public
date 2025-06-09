import React from "react";
import { render, screen } from "@testing-library/react-native";
import { of } from "rxjs";
import { Text, View } from "react-native";

import ExchangeOutcomeItem from "~/components/shared/exchanges-outcome-list/ExchangeOutcomeItem";

// Mock Accordion components to avoid asChild issues
jest.mock("~/components/ui/accordion", () => ({
  AccordionItem: function MockAccordionItem({ children, ...props }: any) {
    const { View } = require("react-native");
    return <View {...props}>{children}</View>;
  },
  AccordionTrigger: function MockAccordionTrigger({ children, ...props }: any) {
    const { View } = require("react-native");
    return <View {...props}>{children}</View>;
  },
  AccordionContent: function MockAccordionContent({ children, ...props }: any) {
    const { View } = require("react-native");
    return <View {...props}>{children}</View>;
  },
}));

// Mock withObservables HOC
jest.mock("@nozbe/watermelondb/react", () => ({
  withObservables: jest.fn(() => (Component: React.ComponentType<any>) => {
    return function MockedComponent(props: any) {
      // For our tests, we'll pass the props directly without observables
      return <Component {...props} />;
    };
  }),
}));

// Mock JournalistDisplay component
jest.mock("~/components/shared/entity/JournalistDisplay", () => {
  return function MockJournalistDisplay({
    journalistId,
  }: {
    journalistId: string;
  }) {
    const { Text } = require("react-native");
    return <Text>Journalist Display: {journalistId}</Text>;
  };
});

// Mock ExchangeQuestionItem component
jest.mock(
  "~/components/shared/exchanges-outcome-list/ExchangeQuestionItem",
  () => {
    return function MockExchangeQuestionItem(props: any) {
      const { Text } = require("react-native");
      return <Text>Exchange Question Item: {JSON.stringify(props)}</Text>;
    };
  }
);

describe("ExchangeOutcomeItem", () => {
  const mockSituation = {
    id: "situation-1",
    title: "Budget Crisis Resolution",
  } as any;

  const mockJournalist = {
    id: "journalist-1",
    staticId: "journalist_sarah_chen",
    staticData: {
      name: "Sarah Chen",
    },
  } as any;

  const mockExchangeContent = {
    questions: {
      q1: {
        id: "q1",
        text: "What is the administration's stance on the budget crisis?",
        answers: [
          {
            id: "a1",
            text: "We are working around the clock to resolve this issue",
            type: "reassure",
            impacts: {},
          },
        ],
        followUpQuestions: {},
      },
    },
    rootQuestionId: "q1",
  };

  const mockExchangeProgress = {
    history: [
      {
        questionId: "q1",
        answerId: "a1",
        timestamp: Date.now(),
      },
    ],
    currentQuestionId: null,
  };

  const mockExchange = {
    id: "exchange-1",
    journalist_id: "journalist-1",
    parseContent: mockExchangeContent,
    parseProgress: mockExchangeProgress,
    situation: {
      observe: jest.fn(() => of(mockSituation)),
    },
    journalist: {
      observe: jest.fn(() => of(mockJournalist)),
    },
  } as any;

  const renderWithExchange = (
    exchange = mockExchange,
    situation = mockSituation,
    journalist = mockJournalist
  ) => {
    render(
      <ExchangeOutcomeItem
        exchange={exchange}
        situation={situation}
        journalist={journalist}
      />
    );
  };

  it("renders exchange with journalist called on", () => {
    renderWithExchange();
    expect(screen.getByText("Budget Crisis Resolution")).toBeTruthy();
    expect(screen.getByText("Context")).toBeTruthy();
  });

  it("has correct accessibility properties for accordion", () => {
    renderWithExchange();
    const accordion = screen.getByLabelText(
      "Exchange with Sarah Chen. 1 questions answered."
    );
    expect(accordion).toBeTruthy();
  });

  it("has correct accessibility properties for accordion trigger", () => {
    renderWithExchange();
    const trigger = screen.getByLabelText(
      "Expand to view exchange details with Sarah Chen"
    );
    expect(trigger).toBeTruthy();
  });

  it("has correct accessibility properties for accordion content", () => {
    renderWithExchange();
    const content = screen.getByLabelText(
      "Exchange details for Sarah Chen regarding Budget Crisis Resolution"
    );
    expect(content).toBeTruthy();
  });

  it("renders context section correctly", () => {
    renderWithExchange();
    const context = screen.getByLabelText("Context: Budget Crisis Resolution");
    expect(context).toBeTruthy();
  });

  it("handles journalist not called on", () => {
    const notCalledExchange = {
      ...mockExchange,
      parseProgress: {
        history: [],
        currentQuestionId: null,
      },
    };

    renderWithExchange(notCalledExchange);
    const accordion = screen.getByLabelText(
      "Exchange with Sarah Chen. Journalist was not called on."
    );
    expect(accordion).toBeTruthy();
    const trigger = screen.getByLabelText(
      "View exchange details with Sarah Chen"
    );
    expect(trigger).toBeTruthy();
  });

  it("handles exchange with pending follow-up", () => {
    const followUpExchange = {
      ...mockExchange,
      parseContent: {
        ...mockExchangeContent,
        questions: {
          ...mockExchangeContent.questions,
          q2: {
            id: "q2",
            text: "Follow-up: Can you provide more details?",
            answers: [],
            followUpQuestions: {},
          },
        },
      },
      parseProgress: {
        history: [
          {
            questionId: "q1",
            answerId: "a1",
            timestamp: Date.now(),
          },
        ],
        currentQuestionId: "q2",
      },
    };

    renderWithExchange(followUpExchange);
    const content = screen.getByLabelText(
      "1 questions and answers with one unanswered follow-up"
    );
    expect(content).toBeTruthy();
  });

  it("handles exchange with multiple history items", () => {
    const multipleHistoryExchange = {
      ...mockExchange,
      parseProgress: {
        history: [
          { questionId: "q1", answerId: "a1", timestamp: Date.now() },
          { questionId: "q2", answerId: "a2", timestamp: Date.now() + 1000 },
        ],
        currentQuestionId: null,
      },
    };

    renderWithExchange(multipleHistoryExchange);
    const accordion = screen.getByLabelText(
      "Exchange with Sarah Chen. 2 questions answered."
    );
    expect(accordion).toBeTruthy();
    const content = screen.getByLabelText(
      "2 questions and answers with all questions addressed"
    );
    expect(content).toBeTruthy();
  });

  it("returns null when content is missing", () => {
    const noContentExchange = {
      ...mockExchange,
      parseContent: null,
    };

    const result = render(
      <ExchangeOutcomeItem
        exchange={noContentExchange}
        situation={mockSituation}
        journalist={mockJournalist}
      />
    );
    expect(result.toJSON()).toBeNull();
  });

  it("returns null when progress is missing", () => {
    const noProgressExchange = {
      ...mockExchange,
      parseProgress: null,
    };

    const result = render(
      <ExchangeOutcomeItem
        exchange={noProgressExchange}
        situation={mockSituation}
        journalist={mockJournalist}
      />
    );
    expect(result.toJSON()).toBeNull();
  });

  it("handles missing question in history gracefully", () => {
    const invalidHistoryExchange = {
      ...mockExchange,
      parseContent: {
        questions: {
          q1: mockExchangeContent.questions.q1,
        },
        rootQuestionId: "q1",
      },
      parseProgress: {
        history: [
          { questionId: "q1", answerId: "a1", timestamp: Date.now() },
          {
            questionId: "q-nonexistent",
            answerId: "a2",
            timestamp: Date.now() + 1000,
          },
        ],
        currentQuestionId: null,
      },
    };

    renderWithExchange(invalidHistoryExchange);
    // Should still render but skip the invalid history item
    expect(screen.getByText("Budget Crisis Resolution")).toBeTruthy();
  });
});
