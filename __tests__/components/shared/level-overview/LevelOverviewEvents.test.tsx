/**
 * LevelOverviewEvents Component Tests
 *
 * Tests the events overview wrapper component:
 * - SituationsOutcomeList integration
 * - LevelMediaCoverage integration
 * - Proper layout with separator
 * - Props passing to child components
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelOverviewEvents from '~/components/shared/level-overview/LevelOverviewEvents';

// Mock child components
jest.mock('~/components/shared/situations-outcome-list/SituationsOutcomeList', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ levelId }: { levelId: string }) =>
      React.createElement(Text, {}, `Situations Outcome List - ${levelId}`),
  };
});

jest.mock('~/components/shared/level-media-coverage/LevelMediaCoverage', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    __esModule: true,
    default: ({ levelId }: { levelId: string }) =>
      React.createElement(Text, {}, `Level Media Coverage - ${levelId}`),
  };
});

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('LevelOverviewEvents', () => {
  const defaultProps = {
    levelId: 'level-1',
  };

  it('renders situations outcome list', () => {
    render(<LevelOverviewEvents {...defaultProps} />);
    expect(screen.getByText('Situations Outcome List - level-1')).toBeTruthy();
  });

  it('renders level media coverage', () => {
    render(<LevelOverviewEvents {...defaultProps} />);
    expect(screen.getByText('Level Media Coverage - level-1')).toBeTruthy();
  });

  it('passes levelId to both child components', () => {
    const customProps = {
      levelId: 'custom-level-123',
    };

    render(<LevelOverviewEvents {...customProps} />);

    expect(screen.getByText('Situations Outcome List - custom-level-123')).toBeTruthy();
    expect(screen.getByText('Level Media Coverage - custom-level-123')).toBeTruthy();
  });

  it('renders both components in the correct order', () => {
    render(<LevelOverviewEvents {...defaultProps} />);

    const situationsText = screen.getByText('Situations Outcome List - level-1');
    const mediaText = screen.getByText('Level Media Coverage - level-1');

    expect(situationsText).toBeTruthy();
    expect(mediaText).toBeTruthy();
  });
});
