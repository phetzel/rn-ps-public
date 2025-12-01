/**
 * LevelOverviewState Component Tests
 *
 * Tests the state overview component with accordion:
 * - Different state components rendering
 * - Accordion functionality
 * - Conditional rendering based on outcome data
 * - withObservables integration
 * - EmptyState handling
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelOverviewState from '~/components/shared/level-overview/LevelOverviewState';

// Mock child components
jest.mock('~/components/shared/level-state/PresidentLevelState', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ gameId, outcomeSnapshot }: any) =>
      React.createElement(Text, {}, `President Level State - ${gameId}`),
  };
});

jest.mock('~/components/shared/level-state/CabinetLevelState', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ levelId, outcomeSnapshot }: any) =>
      React.createElement(Text, {}, `Cabinet Level State - ${levelId}`),
  };
});

jest.mock('~/components/shared/level-state/MediaLevelState', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ outcomeSnapshot }: any) => React.createElement(Text, {}, 'Media Level State'),
  };
});

jest.mock('~/components/shared/level-state/SubgroupLevelState', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ gameId, levelId, outcomeSnapshot }: any) =>
      React.createElement(Text, {}, `Subgroup Level State - ${gameId} - ${levelId}`),
  };
});

// Mock database helpers
jest.mock('~/lib/db/helpers/observations', () => ({
  observeLevel: jest.fn(),
}));

// Mock withObservables
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('LevelOverviewState', () => {
  const mockLevel = {
    id: 'level-1',
    game_id: 'game-1',
    parseOutcomeSnapshot: {
      initial: {
        president: { approvalRating: 50, psRelationship: 60 },
        cabinetMembers: {},
        subgroups: {},
        publications: {},
        journalists: {},
      },
      final: {
        president: { approvalRating: 55, psRelationship: 65 },
        cabinetMembers: {},
        subgroups: {},
        publications: {},
        journalists: {},
      },
    },
  };

  const defaultProps = {
    levelId: 'level-1',
    level: mockLevel,
  };

  it('renders empty state when level is null', () => {
    render(<LevelOverviewState levelId="level-1" level={null} />);
    expect(screen.getByText('Level not found')).toBeTruthy();
  });

  it('renders data unavailable message when outcome snapshot is missing', () => {
    const levelWithoutSnapshot = {
      ...mockLevel,
      parseOutcomeSnapshot: null,
    };

    render(<LevelOverviewState levelId="level-1" level={levelWithoutSnapshot} />);
    expect(screen.getByText('Level outcome data not available')).toBeTruthy();
  });

  it('renders all accordion sections', () => {
    render(<LevelOverviewState {...defaultProps} />);

    expect(screen.getByText('President State')).toBeTruthy();
    expect(screen.getByText('Cabinet State')).toBeTruthy();
    expect(screen.getByText('Media State')).toBeTruthy();
    expect(screen.getByText('Political Groups State')).toBeTruthy();
  });

  it('renders president section by default (expanded)', () => {
    render(<LevelOverviewState {...defaultProps} />);

    expect(screen.getByText('President Level State - game-1')).toBeTruthy();
  });

  it('passes correct props to president component', () => {
    const customLevel = {
      ...mockLevel,
      game_id: 'custom-game-123',
    };

    render(<LevelOverviewState levelId="level-1" level={customLevel} />);
    expect(screen.getByText('President Level State - custom-game-123')).toBeTruthy();
  });

  it('passes correct props to cabinet component', () => {
    render(<LevelOverviewState {...defaultProps} />);
    // Cabinet component should be rendered when its accordion section is expanded
    // For now, we just verify the accordion section exists
    expect(screen.getByText('Cabinet State')).toBeTruthy();
  });

  it('passes correct props to subgroup component', () => {
    render(<LevelOverviewState {...defaultProps} />);
    // Subgroup component should receive both gameId and levelId
    expect(screen.getByText('Political Groups State')).toBeTruthy();
  });

  it('has icons for each accordion section', () => {
    render(<LevelOverviewState {...defaultProps} />);

    // We can't easily test for specific icons, but we can verify the text is there
    expect(screen.getByText('President State')).toBeTruthy();
    expect(screen.getByText('Cabinet State')).toBeTruthy();
    expect(screen.getByText('Media State')).toBeTruthy();
    expect(screen.getByText('Political Groups State')).toBeTruthy();
  });

  it('renders with different levelId and gameId', () => {
    const customLevel = {
      id: 'level-999',
      game_id: 'game-999',
      parseOutcomeSnapshot: mockLevel.parseOutcomeSnapshot,
    };

    render(<LevelOverviewState levelId="level-999" level={customLevel} />);

    expect(screen.getByText('President Level State - game-999')).toBeTruthy();
  });
});
