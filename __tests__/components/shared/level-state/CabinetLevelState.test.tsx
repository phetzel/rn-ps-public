/**
 * CabinetLevelState Component Tests
 *
 * Tests the cabinet members monthly update component:
 * - Cabinet members data display
 * - Approval and relationship changes with LevelProgress
 * - withObservables integration
 * - Conditional rendering based on outcome data
 * - Accessibility labels for cabinet updates
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import CabinetLevelState from '~/components/connected/level-state/CabinetLevelState';

// Mock child components
jest.mock('~/components/shared/level-state/LevelProgress', () => () => null);

jest.mock('~/components/shared/entity/CabinetMemberName', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    CabinetMemberName: ({ cabinetMember }: any) => {
      return React.createElement(Text, {}, cabinetMember.staticData.cabinetName);
    },
  };
});

// Mock database helpers
jest.mock('~/lib/db/helpers', () => ({
  observeCabinetMembersByLevel: jest.fn(),
}));

// Mock withObservables
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (component: any) => component,
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('CabinetLevelState', () => {
  const mockCabinetMembers = [
    {
      id: 'cabinet1',
      staticId: 'def_sec',
      staticData: {
        cabinetName: 'Defense Secretary',
        department: 'Defense',
      },
    },
  ];

  const mockOutcomeSnapshot = {
    initial: {
      cabinetMembers: {
        def_sec: {
          approvalRating: 60,
          psRelationship: 70,
        },
      },
    },
    final: {
      cabinetMembers: {
        def_sec: {
          approvalRating: 65,
          psRelationship: 75,
        },
      },
    },
  };

  const defaultProps = {
    levelId: 'level-1',
    outcomeSnapshot: mockOutcomeSnapshot,
    cabinetMembers: mockCabinetMembers,
  };

  it('renders cabinet monthly update card', () => {
    render(<CabinetLevelState {...defaultProps} />);
    expect(screen.getByText('Cabinet Monthly Update')).toBeTruthy();
  });

  it('renders cabinet member name', () => {
    render(<CabinetLevelState {...defaultProps} />);
    expect(screen.getByText('Defense Secretary')).toBeTruthy();
  });

  it('returns null when final outcome data is missing', () => {
    const propsWithoutFinal = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: mockOutcomeSnapshot.initial,
        final: null,
      },
    };

    const { toJSON } = render(<CabinetLevelState {...propsWithoutFinal} />);
    expect(toJSON()).toBeNull();
  });

  it('has accessibility label with cabinet member count', () => {
    render(<CabinetLevelState {...defaultProps} />);

    expect(screen.getByLabelText('Cabinet members monthly update: 1 members')).toBeTruthy();
  });

  it('has accessibility labels for individual cabinet members', () => {
    render(<CabinetLevelState {...defaultProps} />);

    expect(
      screen.getByLabelText(
        'Defense Secretary. Approval changed by +5%. Relationship changed by +5%.',
      ),
    ).toBeTruthy();
  });

  it('handles missing cabinet member data gracefully', () => {
    const propsWithMissingData = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: {
          cabinetMembers: {
            def_sec: {
              approvalRating: 60,
              psRelationship: 70,
            },
            // missing health_sec
          },
        },
        final: {
          cabinetMembers: {
            def_sec: {
              approvalRating: 65,
              psRelationship: 75,
            },
            health_sec: {
              approvalRating: 75,
              psRelationship: 80,
            },
          },
        },
      },
    };

    render(<CabinetLevelState {...propsWithMissingData} />);

    // Should only render Defense Secretary
    expect(screen.getByText('Defense Secretary')).toBeTruthy();
    expect(screen.queryByText('Health Secretary')).toBeFalsy();
  });

  it('handles empty cabinet members array', () => {
    const propsWithNoMembers = {
      ...defaultProps,
      cabinetMembers: [],
    };

    render(<CabinetLevelState {...propsWithNoMembers} />);

    expect(screen.getByText('Cabinet Monthly Update')).toBeTruthy();
    expect(screen.getByLabelText('Cabinet members monthly update: 0 members')).toBeTruthy();
  });

  it('calculates negative changes correctly', () => {
    const propsWithNegativeChanges = {
      ...defaultProps,
      outcomeSnapshot: {
        initial: {
          cabinetMembers: {
            def_sec: {
              approvalRating: 80,
              psRelationship: 85,
            },
          },
        },
        final: {
          cabinetMembers: {
            def_sec: {
              approvalRating: 70,
              psRelationship: 75,
            },
          },
        },
      },
      cabinetMembers: [mockCabinetMembers[0]],
    };

    render(<CabinetLevelState {...propsWithNegativeChanges} />);

    expect(
      screen.getByLabelText(
        'Defense Secretary. Approval changed by -10%. Relationship changed by -10%.',
      ),
    ).toBeTruthy();
  });
});
