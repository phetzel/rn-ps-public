/**
 * PressResultsTotal Component Tests
 *
 * Tests the press results summary component:
 * - Basic rendering with null checks
 * - Props passing verification
 */

import { render } from '@testing-library/react-native';
import React from 'react';

import PressResultsTotal from '~/components/shared/level-overview/PressResultsTotal';
import { getEnhancedRelationshipDeltas } from '~/lib/db/helpers';

// Mock child components
jest.mock('~/components/shared/results/ResultsTableList', () => ({
  ResultsTableList: () => null,
}));

// Mock database helpers
jest.mock('~/lib/db/helpers/observations', () => ({
  observeLevel: jest.fn(),
}));

jest.mock('~/lib/db/helpers', () => ({
  getEnhancedRelationshipDeltas: jest.fn().mockResolvedValue([]),
}));

// Mock withObservables as simple passthrough
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('PressResultsTotal', () => {
  const mockLevel = {
    id: 'level-1',
    pressAdWatched: false,
  };

  const defaultProps = {
    levelId: 'level-1',
    level: mockLevel,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns null when level is null', () => {
    const { toJSON } = render(<PressResultsTotal levelId="level-1" level={null} />);
    expect(toJSON()).toBeNull();
  });

  it('calls getEnhancedRelationshipDeltas with correct levelId', () => {
    render(<PressResultsTotal {...defaultProps} />);
    expect(getEnhancedRelationshipDeltas).toHaveBeenCalledWith('level-1');
  });

  it('renders without crashing when level is provided', () => {
    const { toJSON } = render(<PressResultsTotal {...defaultProps} />);
    // Component renders (even if null initially due to async loading)
    expect(toJSON).toBeDefined();
  });
});
