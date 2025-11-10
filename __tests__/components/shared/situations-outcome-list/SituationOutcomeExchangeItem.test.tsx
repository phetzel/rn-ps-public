/**
 * SituationOutcomeExchangeItem Component Tests
 *
 * Tests individual exchange impact on situation outcomes:
 * - Shows journalist information and their questions/answers
 * - Displays only questions that affected outcomes (non-zero modifiers)
 * - Shows impact of each exchange on outcome probabilities
 * - Handles exchanges with multiple questions
 * - Returns null when no relevant exchanges found
 * - Comprehensive accessibility labels for exchange details
 */

import { render, screen } from '@testing-library/react-native';

import SituationOutcomeExchangeItem from '~/components/shared/situations-outcome-list/SituationOutcomeExchangeItem';

import type { SituationOutcome } from '~/types';

// Mock JournalistDisplay component
jest.mock('~/components/shared/entity/JournalistDisplay', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockJournalistDisplay({ journalistId }: { journalistId: string }) {
    return React.createElement(Text, {}, `Journalist Display: ${journalistId}`);
  };
});

// Mock QuestionDisplay component
jest.mock('~/components/shared/entity/QuestionDisplay', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    QuestionDisplay: function MockQuestionDisplay({ question }: { question: string }) {
      return React.createElement(Text, {}, `Question: ${question}`);
    },
  };
});

// Mock AnswerDisplay component
jest.mock('~/components/shared/entity/AnswerDisplay', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    AnswerDisplay: function MockAnswerDisplay({ answer }: { answer: string }) {
      return React.createElement(Text, {}, `Answer: ${answer}`);
    },
  };
});

// Mock SituationOutcomeExchangeImpactList component
jest.mock('~/components/shared/situations-outcome-list/SituationOutcomeExchangeImpactList', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    SituationOutcomeExchangeImpactList: function MockImpactList(props: any) {
      return React.createElement(Text, {}, `Impact List: ${JSON.stringify(props)}`);
    },
  };
});

describe('SituationOutcomeExchangeItem', () => {
  const mockAllOutcomes: SituationOutcome[] = [
    {
      id: 'outcome-1',
      title: 'Crisis Escalation',
      description: 'The situation worsens',
      weight: 30,
      consequences: {
        approvalChanges: {
          cabinet: {},
          subgroups: {},
        },
      },
    },
    {
      id: 'outcome-2',
      title: 'Diplomatic Resolution',
      description: 'A peaceful solution is found',
      weight: 60,
      consequences: {
        approvalChanges: {
          cabinet: {},
          subgroups: {},
        },
      },
    },
  ];

  const mockExchangeContent = {
    rootQuestion: {
      id: 'q1',
      text: 'What is your response to the crisis?',
      answers: [
        {
          id: 'a1',
          text: 'We are handling it appropriately',
          outcomeModifiers: {
            'outcome-1': -10,
            'outcome-2': 15,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: 'q2',
        text: 'Will you resign over this?',
        answers: [
          {
            id: 'a2',
            text: 'Absolutely not',
            outcomeModifiers: {
              'outcome-1': 5,
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: 'q3',
        text: 'What about the economy?',
        answers: [
          {
            id: 'a3',
            text: "That's a separate issue",
            outcomeModifiers: {}, // No impact
          },
        ],
      },
    ],
  };

  const mockExchangeProgress = {
    history: [
      {
        questionId: 'q1',
        answerId: 'a1',
        skipped: false,
      },
      {
        questionId: 'q2',
        answerId: 'a2',
        skipped: false,
      },
      {
        questionId: 'q3',
        answerId: 'a3',
        skipped: false,
      },
    ],
  };

  const mockExchange = {
    id: 'exchange-1',
    journalist_id: 'journalist-1',
    parseContent: mockExchangeContent,
    parseProgress: mockExchangeProgress,
  } as any;

  it('renders exchange with relevant questions only', () => {
    render(
      <SituationOutcomeExchangeItem
        exchange={mockExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    expect(screen.getByText('Journalist Display: journalist-1')).toBeTruthy();
    expect(screen.getByText('Question: What is your response to the crisis?')).toBeTruthy();
    expect(screen.getByText('Question: Will you resign over this?')).toBeTruthy();
    // Should not show q3 since it has no outcome modifiers
    expect(screen.queryByText('Question: What about the economy?')).toBeNull();
  });

  it('shows answers for relevant questions', () => {
    render(
      <SituationOutcomeExchangeItem
        exchange={mockExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    expect(screen.getByText('Answer: We are handling it appropriately')).toBeTruthy();
    expect(screen.getByText('Answer: Absolutely not')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    render(
      <SituationOutcomeExchangeItem
        exchange={mockExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    const container = screen.getByLabelText(
      'Press exchange with 2 questions that affected outcomes',
    );
    expect(container).toBeTruthy();
  });

  it('shows individual question accessibility labels', () => {
    render(
      <SituationOutcomeExchangeItem
        exchange={mockExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    expect(screen.getByLabelText('Question 1: What is your response to the crisis?')).toBeTruthy();
    expect(screen.getByLabelText('Question 2: Will you resign over this?')).toBeTruthy();
  });

  it('returns null when no relevant exchanges', () => {
    const noImpactExchange = {
      ...mockExchange,
      parseContent: {
        rootQuestion: {
          id: 'q1',
          text: 'Irrelevant question',
          answers: [
            {
              id: 'a1',
              text: 'Some answer',
              outcomeModifiers: {}, // No impact
            },
          ],
        },
        secondaryQuestions: [],
        tertiaryQuestions: [],
      },
      parseProgress: {
        history: [
          {
            questionId: 'q1',
            answerId: 'a1',
            skipped: false,
          },
        ],
      },
    };

    const result = render(
      <SituationOutcomeExchangeItem
        exchange={noImpactExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );
    expect(result.toJSON()).toBeNull();
  });

  it('returns null when no content', () => {
    const noContentExchange = {
      ...mockExchange,
      parseContent: null,
    };

    const result = render(
      <SituationOutcomeExchangeItem
        exchange={noContentExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );
    expect(result.toJSON()).toBeNull();
  });

  it('returns null when no progress', () => {
    const noProgressExchange = {
      ...mockExchange,
      parseProgress: null,
    };

    const result = render(
      <SituationOutcomeExchangeItem
        exchange={noProgressExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );
    expect(result.toJSON()).toBeNull();
  });

  it('handles skipped questions correctly', () => {
    const skippedExchange = {
      ...mockExchange,
      parseProgress: {
        history: [
          {
            questionId: 'q1',
            answerId: 'a1',
            skipped: false,
          },
          {
            questionId: 'q2',
            answerId: null,
            skipped: true, // This question was skipped
          },
        ],
      },
    };

    render(
      <SituationOutcomeExchangeItem
        exchange={skippedExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    // Should only show the first question since the second was skipped
    expect(screen.getByText('Question: What is your response to the crisis?')).toBeTruthy();
    expect(screen.queryByText('Question: Will you resign over this?')).toBeNull();
  });

  it('handles missing questions gracefully', () => {
    const invalidExchange = {
      ...mockExchange,
      parseProgress: {
        history: [
          {
            questionId: 'q1',
            answerId: 'a1',
            skipped: false,
          },
          {
            questionId: 'q-nonexistent',
            answerId: 'a-nonexistent',
            skipped: false,
          },
        ],
      },
    };

    render(
      <SituationOutcomeExchangeItem
        exchange={invalidExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    // Should still render the valid question
    expect(screen.getByText('Question: What is your response to the crisis?')).toBeTruthy();
  });

  it('handles missing answers gracefully', () => {
    const noAnswerExchange = {
      ...mockExchange,
      parseContent: {
        rootQuestion: {
          id: 'q1',
          text: 'What is your response?',
          answers: [
            {
              id: 'a1',
              text: 'Response',
              outcomeModifiers: { 'outcome-1': 10 },
            },
          ],
        },
        secondaryQuestions: [],
        tertiaryQuestions: [],
      },
      parseProgress: {
        history: [
          {
            questionId: 'q1',
            answerId: 'a-nonexistent', // Answer doesn't exist
            skipped: false,
          },
        ],
      },
    };

    const result = render(
      <SituationOutcomeExchangeItem
        exchange={noAnswerExchange}
        allOutcomes={mockAllOutcomes}
        selectedOutcomeId="outcome-1"
      />,
    );

    // Should return null because there are no valid answers with outcome modifiers
    expect(result.toJSON()).toBeNull();
  });
});
