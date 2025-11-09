/**
 * SituationOutcomeExchanges Component Tests
 *
 * Tests container for exchanges affecting situation outcomes:
 * - Filters and displays only exchanges that affected outcomes
 * - Shows empty state when no relevant exchanges found
 * - Uses withObservables to get press exchanges for a situation
 * - Passes correct props to child components
 * - Comprehensive accessibility labels for the exchanges list
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { of } from 'rxjs';

import SituationOutcomeExchanges from '~/components/shared/situations-outcome-list/SituationOutcomeExchanges';
import { observePressExchangesForSituation } from '~/lib/db/helpers/observations';
import { AnswerType, OutcomeModifierWeight } from '~/types';

import type { PressExchange } from '~/lib/db/models';
import type { SituationOutcome } from '~/types';

// Mock withObservables HOC
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: jest.fn(() => (Component: React.ComponentType<any>) => {
    return function MockedComponent(props: any) {
      return <Component {...props} />;
    };
  }),
}));

// Mock the observations helper
jest.mock('~/lib/db/helpers/observations', () => ({
  observePressExchangesForSituation: jest.fn(),
}));

// Mock SituationOutcomeExchangeItem component
jest.mock('~/components/shared/situations-outcome-list/SituationOutcomeExchangeItem', () => {
  return function MockSituationOutcomeExchangeItem({ exchange, selectedOutcomeId }: any) {
    return (
      <Text>
        Exchange Item: {exchange.id} - Selected: {selectedOutcomeId}
      </Text>
    );
  };
});

describe('SituationOutcomeExchanges', () => {
  const mockSelectedOutcome: SituationOutcome = {
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
  };

  const mockAllOutcomes: SituationOutcome[] = [
    mockSelectedOutcome,
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

  const mockRelevantExchange = {
    id: 'exchange-1',
    parseContent: {
      rootQuestion: {
        id: 'q1',
        text: "What's the response?",
        answers: [
          {
            id: 'a1',
            text: "We're handling it",
            type: AnswerType.Inform,
            impacts: {},
            outcomeModifiers: {
              'outcome-1': OutcomeModifierWeight.SlightPositive,
            }, // Has impact
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
      currentQuestionId: null,
    },
  } as unknown as PressExchange;

  const mockIrrelevantExchange = {
    id: 'exchange-2',
    parseContent: {
      rootQuestion: {
        id: 'q1',
        text: 'Irrelevant question?',
        answers: [
          {
            id: 'a1',
            text: 'Some answer',
            type: AnswerType.Inform,
            impacts: {},
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
      currentQuestionId: null,
    },
  } as unknown as PressExchange;

  beforeEach(() => {
    (observePressExchangesForSituation as jest.Mock).mockReturnValue(
      of([mockRelevantExchange, mockIrrelevantExchange]),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders relevant exchanges that affected outcomes', () => {
    render(
      <SituationOutcomeExchanges
        pressExchanges={[mockRelevantExchange, mockIrrelevantExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    // Should show the relevant exchange
    expect(screen.getByText('Exchange Item: exchange-1 - Selected: outcome-1')).toBeTruthy();
    // Should not show the irrelevant exchange
    expect(screen.queryByText('Exchange Item: exchange-2 - Selected: outcome-1')).toBeNull();
  });

  it('has correct accessibility properties for container', () => {
    render(
      <SituationOutcomeExchanges
        pressExchanges={[mockRelevantExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    const container = screen.getByLabelText(
      '1 press exchanges that influenced outcome probabilities',
    );
    expect(container).toBeTruthy();
  });

  it('shows empty state when no relevant exchanges', () => {
    render(
      <SituationOutcomeExchanges
        pressExchanges={[mockIrrelevantExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    expect(screen.getByText('No press conference responses affected this outcome.')).toBeTruthy();
    expect(
      screen.getByLabelText('No press conference responses affected this outcome'),
    ).toBeTruthy();
  });

  it('shows empty state when no exchanges at all', () => {
    render(
      <SituationOutcomeExchanges
        pressExchanges={[]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    expect(screen.getByText('No press conference responses affected this outcome.')).toBeTruthy();
  });

  it('filters exchanges correctly using useMemo', () => {
    const multipleRelevantExchanges = [
      mockRelevantExchange,
      {
        ...mockRelevantExchange,
        id: 'exchange-3',
      } as PressExchange,
      mockIrrelevantExchange,
    ];

    render(
      <SituationOutcomeExchanges
        pressExchanges={multipleRelevantExchanges}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    expect(screen.getByText('Exchange Item: exchange-1 - Selected: outcome-1')).toBeTruthy();
    expect(screen.getByText('Exchange Item: exchange-3 - Selected: outcome-1')).toBeTruthy();
    expect(screen.queryByText('Exchange Item: exchange-2 - Selected: outcome-1')).toBeNull();

    const container = screen.getByLabelText(
      '2 press exchanges that influenced outcome probabilities',
    );
    expect(container).toBeTruthy();
  });

  it('handles exchanges with missing content', () => {
    const noContentExchange = {
      id: 'exchange-no-content',
      parseContent: null,
      parseProgress: { history: [] },
    } as unknown as PressExchange;

    render(
      <SituationOutcomeExchanges
        pressExchanges={[noContentExchange, mockRelevantExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    // Should only show the valid exchange
    expect(screen.getByText('Exchange Item: exchange-1 - Selected: outcome-1')).toBeTruthy();
    expect(screen.queryByText('Exchange Item: exchange-no-content')).toBeNull();
  });

  it('handles exchanges with missing progress', () => {
    const noProgressExchange = {
      id: 'exchange-no-progress',
      parseContent: {
        rootQuestion: { id: 'empty', text: '', answers: [] },
        secondaryQuestions: [],
        tertiaryQuestions: [],
      },
      parseProgress: null,
    } as unknown as PressExchange;

    render(
      <SituationOutcomeExchanges
        pressExchanges={[noProgressExchange, mockRelevantExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    // Should only show the valid exchange
    expect(screen.getByText('Exchange Item: exchange-1 - Selected: outcome-1')).toBeTruthy();
  });

  it('handles exchanges with skipped questions', () => {
    const skippedExchange = {
      id: 'exchange-skipped',
      parseContent: mockRelevantExchange.parseContent,
      parseProgress: {
        history: [
          {
            questionId: 'q1',
            answerId: null,
            skipped: true, // Question was skipped
          },
        ],
      },
    } as unknown as PressExchange;

    render(
      <SituationOutcomeExchanges
        pressExchanges={[skippedExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    // Skipped questions should not be considered as affecting outcomes
    expect(screen.getByText('No press conference responses affected this outcome.')).toBeTruthy();
  });

  it('handles exchanges with zero impact modifiers', () => {
    const zeroImpactExchange = {
      id: 'exchange-zero',
      parseContent: {
        rootQuestion: {
          id: 'q1',
          text: 'Question?',
          answers: [
            {
              id: 'a1',
              text: 'Answer',
              type: AnswerType.Inform,
              impacts: {},
              outcomeModifiers: {
                'outcome-1': OutcomeModifierWeight.Neutral,
              }, // Zero impact
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
        currentQuestionId: null,
      },
    } as unknown as PressExchange;

    render(
      <SituationOutcomeExchanges
        pressExchanges={[zeroImpactExchange]}
        selectedOutcome={mockSelectedOutcome}
        allOutcomes={mockAllOutcomes}
      />,
    );

    expect(screen.getByText('No press conference responses affected this outcome.')).toBeTruthy();
  });
});
