/**
 * SubgroupLevelState Component Tests
 *
 * Tests the subgroup monthly update component:
 * - Subgroup approvals data display grouped by category
 * - Approval changes with LevelProgress
 * - withObservables integration
 * - Category icons and organization
 * - Accessibility labels for subgroup updates
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import SubgroupLevelState from '~/components/connected/level-state/SubgroupLevelState';

// Mock child components
jest.mock('~/components/shared/level-state/LevelProgress', () => () => null);

jest.mock('~/components/shared/entity/SubgroupCategoryIcon', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    SubgroupCategoryIcon: ({ category }: any) => {
      return React.createElement(Text, {}, `${category} Icon`);
    },
  };
});

// Mock database helpers
jest.mock('~/lib/db/helpers', () => ({
  observeSubgroupApprovals: jest.fn(),
}));

// Mock withObservables
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('SubgroupLevelState', () => {
  const mockSubgroupApprovals = [
    {
      id: 'subgroup1',
      staticId: 'young_voters',
      staticData: {
        name: 'Young Voters',
        category: 'demographic',
      },
    },
    {
      id: 'subgroup2',
      staticId: 'union_workers',
      staticData: {
        name: 'Union Workers',
        category: 'economic',
      },
    },
    {
      id: 'subgroup3',
      staticId: 'seniors',
      staticData: {
        name: 'Senior Citizens',
        category: 'demographic',
      },
    },
  ];

  const mockOutcomeSnapshot = {
    initial: {
      subgroups: {
        young_voters: {
          approvalRating: 45,
        },
        union_workers: {
          approvalRating: 70,
        },
        seniors: {
          approvalRating: 55,
        },
      },
    },
    final: {
      subgroups: {
        young_voters: {
          approvalRating: 50,
        },
        union_workers: {
          approvalRating: 65,
        },
        seniors: {
          approvalRating: 60,
        },
      },
    },
  };

  const defaultProps = {
    gameId: 'game1',
    levelId: 'level1',
    outcomeSnapshot: mockOutcomeSnapshot,
    subgroupApprovals: mockSubgroupApprovals,
  };

  it('renders subgroup monthly update card', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(screen.getByText('Subgroup Monthly Update')).toBeTruthy();
  });

  it('renders subgroup names', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(screen.getByText('Young Voters')).toBeTruthy();
    expect(screen.getByText('Union Workers')).toBeTruthy();
    expect(screen.getByText('Senior Citizens')).toBeTruthy();
  });

  it('groups subgroups by category', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(screen.getByText('Demographic Groups')).toBeTruthy();
    expect(screen.getByText('Economic Groups')).toBeTruthy();
  });

  it('renders category icons', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(screen.getByText('demographic Icon')).toBeTruthy();
    expect(screen.getByText('economic Icon')).toBeTruthy();
  });

  it('has accessibility label with subgroup and category counts', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(
      screen.getByLabelText('Voter groups monthly update: 3 groups across 2 categories'),
    ).toBeTruthy();
  });

  it('has accessibility labels for categories', () => {
    render(<SubgroupLevelState {...defaultProps} />);
    expect(screen.getByLabelText('Demographic groups: 2 subgroups')).toBeTruthy();
    expect(screen.getByLabelText('Economic groups: 1 subgroups')).toBeTruthy();
  });

  it('has accessibility labels for individual subgroups', () => {
    render(<SubgroupLevelState {...defaultProps} />);

    // Young Voters: 45 → 50 (+5)
    expect(screen.getByLabelText('Young Voters. Approval changed by +5%.')).toBeTruthy();

    // Union Workers: 70 → 65 (-5)
    expect(screen.getByLabelText('Union Workers. Approval changed by -5%.')).toBeTruthy();

    // Seniors: 55 → 60 (+5)
    expect(screen.getByLabelText('Senior Citizens. Approval changed by +5%.')).toBeTruthy();
  });

  it('returns null when initial data is missing', () => {
    const propsWithoutInitial = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: null,
        final: mockOutcomeSnapshot.final,
      },
    };

    const { toJSON } = render(<SubgroupLevelState {...propsWithoutInitial} />);
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

    const { toJSON } = render(<SubgroupLevelState {...propsWithoutFinal} />);
    expect(toJSON()).toBeNull();
  });

  it('handles missing subgroup data gracefully', () => {
    const propsWithMissingData = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: {
          subgroups: {
            young_voters: mockOutcomeSnapshot.initial.subgroups.young_voters,
            // missing union_workers and seniors
          },
        },
        final: mockOutcomeSnapshot.final,
      },
    };

    render(<SubgroupLevelState {...propsWithMissingData} />);

    // Should only render Young Voters
    expect(screen.getByText('Young Voters')).toBeTruthy();
    expect(screen.queryByText('Union Workers')).toBeFalsy();
    expect(screen.queryByText('Senior Citizens')).toBeFalsy();
  });

  it('handles empty subgroup approvals array', () => {
    const propsWithNoSubgroups = {
      ...defaultProps,
      subgroupApprovals: [],
    };

    render(<SubgroupLevelState {...propsWithNoSubgroups} />);

    expect(screen.getByText('Subgroup Monthly Update')).toBeTruthy();
    expect(
      screen.getByLabelText('Voter groups monthly update: 0 groups across 0 categories'),
    ).toBeTruthy();
  });

  it('calculates negative approval changes correctly', () => {
    const propsWithNegativeChanges = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: {
          subgroups: {
            young_voters: {
              approvalRating: 60,
            },
          },
        },
        final: {
          subgroups: {
            young_voters: {
              approvalRating: 45,
            },
          },
        },
      },
      subgroupApprovals: [mockSubgroupApprovals[0]],
    };

    render(<SubgroupLevelState {...propsWithNegativeChanges} />);

    expect(screen.getByLabelText('Young Voters. Approval changed by -15%.')).toBeTruthy();
  });
});
