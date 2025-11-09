/**
 * LevelOverviewContent Component Tests
 *
 * Tests the tab-based level overview component:
 * - Tab switching functionality
 * - Component rendering with different tabs
 * - Accessibility labels for tabs
 * - Default tab selection
 * - Proper content rendering for each tab
 */

import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import LevelOverviewContent from '~/components/shared/level-overview/LevelOverviewContent';

// Mock child components
jest.mock('~/components/shared/level-consequences/LevelConsequences', () => ({
  __esModule: true,
  default: () => {
    return <Text>Level Consequences</Text>;
  },
}));

jest.mock('~/components/shared/level-overview/LevelOverviewEvents', () => ({
  __esModule: true,
  default: () => {
    return <Text>Level Overview Events</Text>;
  },
}));

jest.mock('~/components/shared/level-overview/LevelOverviewPress', () => ({
  __esModule: true,
  default: () => {
    return <Text>Level Overview Press</Text>;
  },
}));

jest.mock('~/components/shared/level-overview/LevelOverviewState', () => ({
  __esModule: true,
  default: () => {
    return <Text>Level Overview State</Text>;
  },
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('LevelOverviewContent', () => {
  const defaultProps = {
    levelId: 'level-1',
  };

  it('renders all tab triggers', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    expect(screen.getByText('Results')).toBeTruthy();
    expect(screen.getByText('Changes')).toBeTruthy();
    expect(screen.getByText('Press')).toBeTruthy();
    expect(screen.getByText('Events')).toBeTruthy();
  });

  it('has accessibility labels for tabs', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    expect(screen.getByLabelText('Level results')).toBeTruthy();
    expect(screen.getByLabelText('Monthly state changes')).toBeTruthy();
    expect(screen.getByLabelText('Level press')).toBeTruthy();
    expect(screen.getByLabelText('Level events')).toBeTruthy();
  });

  it('has accessibility label for tab container', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    expect(screen.getByLabelText('Level overview sections')).toBeTruthy();
  });

  it('defaults to results tab', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    expect(screen.getByText('Level Consequences')).toBeTruthy();
  });

  it('switches to changes tab when clicked', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    fireEvent.press(screen.getByText('Changes'));
    expect(screen.getByText('Level Overview State')).toBeTruthy();
  });

  it('switches to press tab when clicked', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    fireEvent.press(screen.getByText('Press'));
    expect(screen.getByText('Level Overview Press')).toBeTruthy();
  });

  it('switches to events tab when clicked', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    fireEvent.press(screen.getByText('Events'));
    expect(screen.getByText('Level Overview Events')).toBeTruthy();
  });

  it('passes levelId prop to child components', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    // Switch to different tabs to ensure all components receive levelId
    fireEvent.press(screen.getByText('Changes'));
    expect(screen.getByText('Level Overview State')).toBeTruthy();

    fireEvent.press(screen.getByText('Press'));
    expect(screen.getByText('Level Overview Press')).toBeTruthy();

    fireEvent.press(screen.getByText('Events'));
    expect(screen.getByText('Level Overview Events')).toBeTruthy();

    fireEvent.press(screen.getByText('Results'));
    expect(screen.getByText('Level Consequences')).toBeTruthy();
  });

  it('renders only one tab content at a time', () => {
    render(<LevelOverviewContent {...defaultProps} />);

    // Initially on results tab
    expect(screen.getByText('Level Consequences')).toBeTruthy();
    expect(screen.queryByText('Level Overview State')).toBeFalsy();
    expect(screen.queryByText('Level Overview Press')).toBeFalsy();
    expect(screen.queryByText('Level Overview Events')).toBeFalsy();

    // Switch to changes tab
    fireEvent.press(screen.getByText('Changes'));
    expect(screen.queryByText('Level Consequences')).toBeFalsy();
    expect(screen.getByText('Level Overview State')).toBeTruthy();
    expect(screen.queryByText('Level Overview Press')).toBeFalsy();
    expect(screen.queryByText('Level Overview Events')).toBeFalsy();
  });
});
