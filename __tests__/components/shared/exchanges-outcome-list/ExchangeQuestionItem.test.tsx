import { render, screen } from '@testing-library/react-native';

import ExchangeQuestionItem from '~/components/shared/exchanges-outcome-list/ExchangeQuestionItem';
import { useExchangeQuestion } from '~/lib/hooks/useExchangeQuestion';

import type { Question, ExchangeHistoryItem, JournalistStaticId } from '~/types';

// Mock the stores - simplified approach
const mockCurrentLevelStore = {
  currentLevelId: 'level-1' as string | null,
};

const mockGameManagerStore = {
  currentGameId: 'game-1' as string | null,
};

const mockUseExchangeQuestion = useExchangeQuestion as jest.MockedFunction<
  typeof useExchangeQuestion
>;

jest.mock('~/lib/stores/currentLevelStore', () => ({
  useCurrentLevelStore: () => mockCurrentLevelStore,
}));

jest.mock('~/lib/stores/gameManagerStore', () => ({
  useGameManagerStore: () => mockGameManagerStore,
}));

jest.mock('~/lib/hooks/useExchangeQuestion', () => ({
  useExchangeQuestion: jest.fn(),
}));

// Mock the ImpactList component
jest.mock('~/components/shared/impact/ImpactList', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockImpactList({ impacts }: any) {
    return React.createElement(Text, {}, `Impact List: ${JSON.stringify(impacts)}`);
  };
});

// Mock the ExchangeQuestionHeader component
jest.mock('~/components/shared/exchanges-outcome-list/ExchangeQuestionHeader', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockExchangeQuestionHeader(props: any) {
    return React.createElement(Text, {}, `Question Header: ${JSON.stringify(props)}`);
  };
});

// Mock the ExchangeQuestionAnswer component
jest.mock('~/components/shared/exchanges-outcome-list/ExchangeQuestionAnswer', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockExchangeQuestionAnswer(props: any) {
    return React.createElement(Text, {}, `Question Answer: ${JSON.stringify(props)}`);
  };
});

describe('ExchangeQuestionItem', () => {
  const mockQuestion: Question = {
    id: 'q1',
    text: 'What is your response to these allegations?',
    answers: [
      {
        id: 'a1',
        text: 'We categorically deny these allegations',
        type: 'deny' as any,
        impacts: {},
        outcomeModifiers: {},
      },
    ],
  };

  const mockInteraction: ExchangeHistoryItem = {
    questionId: 'q1',
    answerId: 'a1',
    skipped: false,
  };

  const mockJournalistStaticId: JournalistStaticId = 'journalist_sarah_chen' as JournalistStaticId;

  const mockJournalistImpact = {
    weight: 1,
    reaction: 'Question was answered',
  };

  const mockCombinedImpacts = {
    journalists: {
      [mockJournalistStaticId]: mockJournalistImpact,
    },
  };

  beforeEach(() => {
    mockCurrentLevelStore.currentLevelId = 'level-1';
    mockGameManagerStore.currentGameId = 'game-1';
    mockUseExchangeQuestion.mockReturnValue({
      answer: mockQuestion.answers[0],
      isAsked: true,
      isSkipped: false,
      journalistImpact: mockJournalistImpact,
      combinedImpacts: mockCombinedImpacts,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProps = (
    question: Question = mockQuestion,
    interaction?: ExchangeHistoryItem,
    isFirstQuestion = true,
    journalistStaticId = mockJournalistStaticId,
  ) => {
    render(
      <ExchangeQuestionItem
        question={question}
        interaction={interaction}
        isFirstQuestion={isFirstQuestion}
        journalistStaticId={journalistStaticId}
      />,
    );
  };

  it('renders question item with answer', () => {
    renderWithProps();
    expect(screen.getByText('Relationship Changes')).toBeTruthy();
    const header = screen.getByText('Relationship Changes');
    expect(header).toBeTruthy();
  });

  it('renders first question correctly', () => {
    renderWithProps(mockQuestion, mockInteraction, true);
    const container = screen.getByLabelText('Initial question. Answered.');
    expect(container).toBeTruthy();
  });

  it('renders follow-up question correctly', () => {
    renderWithProps(mockQuestion, mockInteraction, false);
    const container = screen.getByLabelText('Follow-up question. Answered.');
    expect(container).toBeTruthy();
  });

  it('handles skipped question', () => {
    mockUseExchangeQuestion.mockReturnValue({
      answer: null,
      isAsked: true,
      isSkipped: true,
      journalistImpact: { weight: -2, reaction: 'Question was skipped' },
      combinedImpacts: mockCombinedImpacts,
    });

    renderWithProps(mockQuestion, mockInteraction, true);
    const container = screen.getByLabelText('Initial question. Skipped.');
    expect(container).toBeTruthy();
  });

  it('handles ignored question', () => {
    mockUseExchangeQuestion.mockReturnValue({
      answer: null,
      isAsked: false,
      isSkipped: false,
      journalistImpact: { weight: -3, reaction: 'Journalist was ignored' },
      combinedImpacts: mockCombinedImpacts,
    });

    renderWithProps(mockQuestion, undefined, true);
    const container = screen.getByLabelText('Initial question. Ignored.');
    expect(container).toBeTruthy();
  });

  it('returns null when no current level or game', () => {
    mockCurrentLevelStore.currentLevelId = null;

    const result = render(
      <ExchangeQuestionItem
        question={mockQuestion}
        isFirstQuestion={true}
        journalistStaticId={mockJournalistStaticId}
      />,
    );
    expect(result.toJSON()).toBeNull();
  });

  it('returns null when no current game', () => {
    mockGameManagerStore.currentGameId = null;

    const result = render(
      <ExchangeQuestionItem
        question={mockQuestion}
        isFirstQuestion={true}
        journalistStaticId={mockJournalistStaticId}
      />,
    );
    expect(result.toJSON()).toBeNull();
  });

  it('has correct accessibility properties for relationship changes section', () => {
    renderWithProps();
    const impactSection = screen.getByLabelText(
      'Relationship change impacts from this interaction',
    );
    expect(impactSection).toBeTruthy();
    const header = screen.getByText('Relationship Changes');
    expect(header).toBeTruthy();
  });

  it('calls useExchangeQuestion with correct parameters', () => {
    renderWithProps(mockQuestion, mockInteraction, false, mockJournalistStaticId);
    expect(mockUseExchangeQuestion).toHaveBeenCalledWith({
      question: mockQuestion,
      interaction: mockInteraction,
      isFirstQuestion: false,
      journalistStaticId: mockJournalistStaticId,
    });
  });
});
