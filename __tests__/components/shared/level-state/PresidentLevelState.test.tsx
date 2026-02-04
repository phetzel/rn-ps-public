/**
 * PresidentLevelState Component Tests
 *
 * Tests the president monthly update component:
 * - President data display from game
 * - Approval and relationship progress with LevelProgress
 * - withObservables integration
 * - Political leaning badge display
 * - Conditional rendering based on data availability
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import PresidentLevelState from '~/components/connected/level-state/PresidentLevelState';

// Mock child components
jest.mock('~/components/shared/level-state/LevelProgress', () => () => null);

jest.mock('~/components/shared/entity/PoliticalLeaningBadge', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const PoliticalLeaningBadgeMock = ({ politicalLeaning }: any) =>
    React.createElement(Text, {}, `${politicalLeaning} Badge`);
  PoliticalLeaningBadgeMock.displayName = 'PoliticalLeaningBadgeMock';
  return PoliticalLeaningBadgeMock;
});

// Mock database helpers
jest.mock('~/lib/db/helpers', () => ({
  observeGame: jest.fn(),
}));

// Mock withObservables
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('PresidentLevelState', () => {
  const mockGame = {
    id: 'game1',
    presName: 'President Johnson',
    presLeaning: 'Liberal',
  };

  const mockOutcomeSnapshot = {
    initial: {
      president: {
        approvalRating: 55,
        psRelationship: 65,
      },
    },
    final: {
      president: {
        approvalRating: 60,
        psRelationship: 70,
      },
    },
  };

  const defaultProps = {
    gameId: 'game1',
    outcomeSnapshot: mockOutcomeSnapshot,
    game: mockGame,
  };

  it('renders president monthly update card', () => {
    render(<PresidentLevelState {...defaultProps} />);
    expect(screen.getByText('President Monthly Update')).toBeTruthy();
  });

  it('renders president name', () => {
    render(<PresidentLevelState {...defaultProps} />);
    expect(screen.getByText('President Johnson')).toBeTruthy();
  });

  it('renders political leaning badge', () => {
    render(<PresidentLevelState {...defaultProps} />);
    expect(screen.getByText('Liberal Badge')).toBeTruthy();
  });

  it('has accessibility label with president name and leaning', () => {
    render(<PresidentLevelState {...defaultProps} />);
    expect(
      screen.getByLabelText('President President Johnson, Liberal political leaning'),
    ).toBeTruthy();
  });

  it('returns null when game data is missing', () => {
    const propsWithoutGame = {
      ...defaultProps,
      game: null,
    };

    const { toJSON } = render(<PresidentLevelState {...propsWithoutGame} />);
    expect(toJSON()).toBeNull();
  });

  it('returns null when initial data is missing', () => {
    const propsWithoutInitial = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: null,
        final: mockOutcomeSnapshot.final,
      },
    };

    const { toJSON } = render(<PresidentLevelState {...propsWithoutInitial} />);
    expect(toJSON()).toBeNull();
  });

  it('returns null when final data is missing', () => {
    const propsWithoutFinal = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: mockOutcomeSnapshot.initial,
        final: null,
      },
    };

    const { toJSON } = render(<PresidentLevelState {...propsWithoutFinal} />);
    expect(toJSON()).toBeNull();
  });

  it('renders with different president names and leanings', () => {
    const propsWithDifferentPresident = {
      ...defaultProps,
      game: {
        ...mockGame,
        presName: 'President Smith',
        presLeaning: 'Conservative',
      },
    };

    render(<PresidentLevelState {...propsWithDifferentPresident} />);
    expect(screen.getByText('President Smith')).toBeTruthy();
    expect(screen.getByText('Conservative Badge')).toBeTruthy();
  });

  it('has accessibility label for president overview', () => {
    render(<PresidentLevelState {...defaultProps} />);
    expect(screen.getByLabelText('President President Johnson.')).toBeTruthy();
  });
});
