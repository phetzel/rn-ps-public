/**
 * LevelMediaCoverage Component Tests
 *
 * Tests the main media coverage container component:
 * - Hook integration with useMediaCoverageData
 * - Error state handling and display
 * - Component structure and accessibility
 * - Data flow from withObservables HOC
 * - Ad watched status handling from level prop
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelMediaCoverage from '~/components/shared/level-media-coverage/LevelMediaCoverage';
// Import the mocked hook
import { useMediaCoverageData } from '~/lib/hooks/useMediaCoverageData';

// Mock the useMediaCoverageData hook
jest.mock('~/lib/hooks/useMediaCoverageData', () => ({
  useMediaCoverageData: jest.fn(),
}));

// Mock child components
jest.mock('~/components/shared/results/ResultsTableList', () => ({
  ResultsTableList: () => null,
}));

jest.mock('~/components/shared/level-media-coverage/LevelMediaCoverageContent', () => () => null);

// Mock observeLevel from db helpers
jest.mock('~/lib/db/helpers/observations', () => ({
  observeLevel: jest.fn(),
}));

// Mock withObservables - simple passthrough
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

// Mock level data
const mockLevel = {
  id: 'level-1',
  situationAdWatched: false,
} as any;

describe('LevelMediaCoverage', () => {
  const defaultHookReturn = {
    mediaBoosts: [
      {
        id: 'pub1',
        name: 'Test Publication',
        politicalLeaning: 'Liberal',
        approvalRating: 75,
        boost: 1.25,
      },
    ],
    totalBoost: 1.25,
    enhancedDeltas: [
      {
        id: 'entity1',
        name: 'Test Entity',
        role: 'cabinet' as const,
        title: 'Cabinet Member',
        currentValue: 60,
        delta: 5,
        preMediaDelta: 4,
        adBoostedDelta: 6,
      },
    ],
    isLoading: false,
    error: null,
  };

  beforeEach(() => {
    (useMediaCoverageData as jest.Mock).mockReturnValue(defaultHookReturn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders media coverage card with correct accessibility', () => {
    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    expect(
      screen.getByLabelText('Media coverage analysis with total boost multiplier of 1.25'),
    ).toBeTruthy();
  });

  it('includes ad status in accessibility label when ad watched', () => {
    const adWatchedLevel = { ...mockLevel, situationAdWatched: true };
    render(<LevelMediaCoverage levelId="level-1" level={adWatchedLevel} />);

    expect(
      screen.getByLabelText(
        'Media coverage analysis with total boost multiplier of 1.25 with ad boost applied',
      ),
    ).toBeTruthy();
  });

  it('passes levelId to useMediaCoverageData hook', () => {
    render(<LevelMediaCoverage levelId="test-level-123" level={mockLevel} />);

    expect(useMediaCoverageData).toHaveBeenCalledWith({
      levelId: 'test-level-123',
    });
  });

  it('renders error state when hook returns error', () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      ...defaultHookReturn,
      error: new Error('Failed to load media data'),
    });

    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    expect(screen.getByText('Failed to load media data')).toBeTruthy();
  });

  it('renders accordion with both media coverage and impact sections', () => {
    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    // Check accordion accessibility
    expect(screen.getByLabelText('Media coverage sections')).toBeTruthy();

    // Check media coverage trigger with dynamic boost value
    expect(
      screen.getByLabelText('Media coverage breakdown with total boost multiplier of 1.25'),
    ).toBeTruthy();
    expect(screen.getByText('(x1.25)')).toBeTruthy();

    // Check media impact trigger
    expect(screen.getByLabelText('Media impact on approval ratings')).toBeTruthy();
    expect(screen.getByText('Media Impact on Approval')).toBeTruthy();
  });

  it('handles null level gracefully', () => {
    render(<LevelMediaCoverage levelId="level-1" level={null} />);

    // Should still render the main card
    expect(
      screen.getByLabelText('Media coverage analysis with total boost multiplier of 1.25'),
    ).toBeTruthy();
  });

  it('formats totalBoost to 2 decimal places in accessibility labels', () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      ...defaultHookReturn,
      totalBoost: 1.2345,
    });

    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    expect(
      screen.getByLabelText('Media coverage analysis with total boost multiplier of 1.23'),
    ).toBeTruthy();
    expect(
      screen.getByLabelText('Media coverage breakdown with total boost multiplier of 1.23'),
    ).toBeTruthy();
    expect(screen.getByText('(x1.23)')).toBeTruthy();
  });

  it('has correct card structure with title', () => {
    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    // Check for Media Coverage title - there might be multiple instances
    const mediaCoverageTexts = screen.getAllByText('Media Coverage');
    expect(mediaCoverageTexts.length).toBeGreaterThan(0);
  });

  it('handles empty data gracefully', () => {
    (useMediaCoverageData as jest.Mock).mockReturnValue({
      mediaBoosts: [],
      totalBoost: 1.0,
      enhancedDeltas: [],
      isLoading: false,
      error: null,
    });

    render(<LevelMediaCoverage levelId="level-1" level={mockLevel} />);

    // Should still render the accordion structure
    expect(screen.getByText('Media Impact on Approval')).toBeTruthy();
    expect(screen.getByText('(x1.00)')).toBeTruthy();
  });
});
