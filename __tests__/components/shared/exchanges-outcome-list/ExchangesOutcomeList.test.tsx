import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { of } from 'rxjs';

import ExchangesOutcomeList from '~/components/connected/exchanges-outcome-list/ExchangesOutcomeList';
import { observePressExchangesForLevel } from '~/lib/db/helpers/observations';

// Mock Accordion components to avoid asChild issues
jest.mock('~/components/ui/accordion', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Accordion: function MockAccordion({ children, ...props }: any) {
      return React.createElement(View, props, children);
    },
  };
});

// Mock withObservables HOC
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: jest.fn(
    (observablesGetter, observablesCreator) => (Component: React.ComponentType<any>) => {
      return function MockedComponent(props: any) {
        // Call the observables creator to trigger the observation function
        if (observablesCreator) {
          observablesCreator(props);
        }
        // For our tests, we'll pass the props directly without observables
        return <Component {...props} />;
      };
    },
  ),
}));

// Mock the observations helper
jest.mock('~/lib/db/helpers/observations', () => ({
  observePressExchangesForLevel: jest.fn(),
}));

// Mock Separator component
jest.mock('~/components/ui/separator', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Separator: function MockSeparator(props: any) {
      return React.createElement(View, { ...props, testID: 'separator' });
    },
  };
});

// Mock ExchangeOutcomeItem component
jest.mock('~/components/connected/exchanges-outcome-list/ExchangeOutcomeItem', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockExchangeOutcomeItem({ exchange }: any) {
    return React.createElement(Text, {}, `Exchange Outcome Item: ${exchange.id}`);
  };
});

describe('ExchangesOutcomeList', () => {
  const mockPressExchanges = [
    {
      id: 'exchange-1',
      journalist_id: 'journalist-1',
    },
    {
      id: 'exchange-2',
      journalist_id: 'journalist-2',
    },
  ] as any[];

  beforeEach(() => {
    (observePressExchangesForLevel as jest.Mock).mockReturnValue(of(mockPressExchanges));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithLevelId = (levelId = 'level-1', pressExchanges = mockPressExchanges) => {
    render(<ExchangesOutcomeList levelId={levelId} pressExchanges={pressExchanges} />);
  };

  it('renders press exchanges list', () => {
    renderWithLevelId();
    expect(screen.getByText('Press Exchanges')).toBeTruthy();
    expect(screen.getByText('Exchange Outcome Item: exchange-1')).toBeTruthy();
    expect(screen.getByText('Exchange Outcome Item: exchange-2')).toBeTruthy();
  });

  it('has correct accessibility properties for header', () => {
    renderWithLevelId();
    const header = screen.getByRole('header');
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent('Press Exchanges');
  });

  it('has correct accessibility properties for main container', () => {
    renderWithLevelId();
    const container = screen.getByLabelText(
      'Press exchanges: 2 journalists interacted with during the press conference',
    );
    expect(container).toBeTruthy();
  });

  it('has correct accessibility properties for accordion', () => {
    renderWithLevelId();
    const accordion = screen.getByLabelText('Expandable list of press exchanges');
    expect(accordion).toBeTruthy();
  });

  it('renders empty state when no press exchanges', () => {
    renderWithLevelId('level-1', []);
    expect(screen.getByText('No press exchanges found for this level.')).toBeTruthy();
    expect(screen.queryByText('Press Exchanges')).toBeNull();
  });

  it('renders empty state when press exchanges is null', () => {
    renderWithLevelId('level-1', null as any);
    expect(screen.getByText('No press exchanges found for this level.')).toBeTruthy();
  });

  it('renders separators between exchanges', () => {
    renderWithLevelId();
    // Should have separators between items but not after the last one
    const separators = screen.getAllByTestId('separator');
    expect(separators).toHaveLength(1); // 2 items = 1 separator
  });

  it('handles single press exchange', () => {
    const singleExchange = [mockPressExchanges[0]];
    renderWithLevelId('level-1', singleExchange);
    expect(screen.getByText('Exchange Outcome Item: exchange-1')).toBeTruthy();
    expect(screen.queryByTestId('separator')).toBeNull(); // No separators for single item
    const container = screen.getByLabelText(
      'Press exchanges: 1 journalists interacted with during the press conference',
    );
    expect(container).toBeTruthy();
  });

  it('handles large number of exchanges', () => {
    const manyExchanges = Array.from({ length: 5 }, (_, i) => ({
      id: `exchange-${i + 1}`,
      journalist_id: `journalist-${i + 1}`,
    }));

    renderWithLevelId('level-1', manyExchanges as any);
    expect(screen.getByText('Exchange Outcome Item: exchange-1')).toBeTruthy();
    expect(screen.getByText('Exchange Outcome Item: exchange-5')).toBeTruthy();
    const container = screen.getByLabelText(
      'Press exchanges: 5 journalists interacted with during the press conference',
    );
    expect(container).toBeTruthy();

    // Should have 4 separators for 5 items
    const separators = screen.getAllByTestId('separator');
    expect(separators).toHaveLength(4);
  });

  it('passes correct levelId to observable', () => {
    renderWithLevelId('test-level-123');
    expect(observePressExchangesForLevel).toHaveBeenCalledWith('test-level-123');
  });
});
