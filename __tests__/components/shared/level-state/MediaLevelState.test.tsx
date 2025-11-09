import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import MediaLevelState from '~/components/shared/level-state/MediaLevelState';

// Mock child components
jest.mock('~/components/shared/level-state/LevelProgress', () => () => null);
jest.mock('~/components/shared/entity/PublicationStateHeader', () => ({
  PublicationStateHeader: ({ name }: any) => {
    return <Text>{name}</Text>;
  },
}));

// Mock static data
jest.mock('~/lib/data/staticMedia', () => ({
  staticPublications: {
    lib_primary: {
      name: 'Liberal Herald',
      politicalLeaning: 'Liberal',
    },
  },
  staticJournalists: {
    lib_primary_a: {
      name: 'John Reporter',
      publicationStaticId: 'lib_primary',
    },
  },
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('MediaLevelState', () => {
  const mockOutcomeSnapshot = {
    initial: {
      president: {
        approvalRating: 50,
        psRelationship: 60,
      },
      cabinetMembers: {},
      subgroups: {},
      publications: {
        lib_primary: {
          approvalRating: 60,
        },
      },
      journalists: {
        lib_primary_a: {
          psRelationship: 70,
        },
      },
    },
    final: {
      president: {
        approvalRating: 55,
        psRelationship: 65,
      },
      cabinetMembers: {},
      subgroups: {},
      publications: {
        lib_primary: {
          approvalRating: 65,
        },
      },
      journalists: {
        lib_primary_a: {
          psRelationship: 75,
        },
      },
    },
  };

  const defaultProps = {
    outcomeSnapshot: mockOutcomeSnapshot,
  };

  it('renders media monthly update card', () => {
    render(<MediaLevelState {...defaultProps} />);
    expect(screen.getByText('Media Monthly Update')).toBeTruthy();
  });

  it('renders publication name', () => {
    render(<MediaLevelState {...defaultProps} />);
    expect(screen.getByText('Liberal Herald')).toBeTruthy();
  });

  it('renders journalist name', () => {
    render(<MediaLevelState {...defaultProps} />);
    expect(screen.getByText('John Reporter')).toBeTruthy();
  });
});
