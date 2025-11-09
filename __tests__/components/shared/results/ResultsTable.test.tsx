/**
 * ResultsTable Component Tests
 *
 * Tests results table component functionality:
 * - Renders table with entities, titles, and column headers
 * - Handles isAdWatched and showAdColumn props
 * - Shows/hides columns based on media data and props
 * - Calculates proper column widths
 * - Handles empty/null entity arrays
 * - Accessibility labels and table structure
 * - Passes correct props to ResultsEntityRow
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ResultsTable } from '~/components/shared/results/ResultsTable';

import type { EntityWithDelta, EntityWithMediaDelta } from '~/types';

// Mock ResultsEntityRow
jest.mock('~/components/shared/results/ResultsEntityRow', () => ({
  ResultsEntityRow: ({ entity, isAdWatched, showAdColumn }: any) => {
    return (
      <Text testID={`mocked-entity-row-${entity.id}`}>
        {`EntityRow: ${entity.name}, adWatched: ${isAdWatched}, showAdColumn: ${showAdColumn}`}
      </Text>
    );
  },
}));

// Mock calculateTableColumnWidths
jest.mock('~/lib/utils', () => ({
  ...jest.requireActual('~/lib/utils'),
  calculateTableColumnWidths: jest.fn(() => ({
    name: '40%',
    data: '20%',
  })),
}));

const createMockEntity = (
  id: string,
  name: string,
  overrides: Partial<EntityWithDelta> = {},
): EntityWithDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: 'cabinet' as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  ...overrides,
});

const createMockMediaEntity = (
  id: string,
  name: string,
  overrides: Partial<EntityWithMediaDelta> = {},
): EntityWithMediaDelta => ({
  id,
  name,
  title: `Title for ${name}`,
  role: 'cabinet' as any,
  currentValue: 50,
  delta: 5,
  adBoostedDelta: 8,
  preMediaDelta: 3,
  ...overrides,
});

describe('ResultsTable', () => {
  const defaultProps = {
    entities: [],
    title: 'Test Table',
    isAdWatched: false,
  };

  describe('empty/null data handling', () => {
    it('returns null when entities array is empty', () => {
      const result = render(<ResultsTable {...defaultProps} entities={[]} />);
      expect(result.toJSON()).toBeNull();
    });

    it('returns null when entities is null', () => {
      const result = render(<ResultsTable {...defaultProps} entities={null as any} />);
      expect(result.toJSON()).toBeNull();
    });

    it('returns null when entities is undefined', () => {
      const result = render(<ResultsTable {...defaultProps} entities={undefined as any} />);
      expect(result.toJSON()).toBeNull();
    });
  });

  describe('basic rendering', () => {
    it('renders table with title and entities', () => {
      const entities = [createMockEntity('1', 'Entity One'), createMockEntity('2', 'Entity Two')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByText('Test Table')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-1')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-2')).toBeTruthy();
    });

    it('renders section title with accessibility label', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByLabelText('Test Table section with 1 entities')).toBeTruthy();
    });

    it('renders table headers', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByText('Name')).toBeTruthy();
      expect(screen.getByText('Start')).toBeTruthy();
      expect(screen.getByText('Change')).toBeTruthy();
      expect(screen.getByText('Boosted')).toBeTruthy();
    });

    it('renders table header with accessibility label', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(
        screen.getByLabelText('Table columns: Entity name, Start value, Change, Ad boosted change'),
      ).toBeTruthy();
    });
  });

  describe('column display logic', () => {
    it('shows boosted column when showAdColumn is true (default)', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByText('Boosted')).toBeTruthy();
      expect(screen.queryByText('Base')).toBeNull();
    });

    it('hides boosted column when showAdColumn is false', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} showAdColumn={false} />);

      expect(screen.queryByText('Boosted')).toBeNull();
    });

    it('shows base column when media data present and showAdColumn is false', () => {
      const entities = [createMockMediaEntity('1', 'Media Entity')];

      render(<ResultsTable {...defaultProps} entities={entities} showAdColumn={false} />);

      expect(screen.getByText('Base')).toBeTruthy();
      expect(screen.queryByText('Boosted')).toBeNull();
    });

    it('does not show base column when media data present but showAdColumn is true', () => {
      const entities = [createMockMediaEntity('1', 'Media Entity')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.queryByText('Base')).toBeNull();
      expect(screen.getByText('Boosted')).toBeTruthy();
    });

    it('updates accessibility label based on shown columns', () => {
      const entities = [createMockMediaEntity('1', 'Media Entity')];

      render(<ResultsTable {...defaultProps} entities={entities} showAdColumn={false} />);

      expect(
        screen.getByLabelText('Table columns: Entity name, Start value, Base change, Change'),
      ).toBeTruthy();
    });
  });

  describe('prop passing to ResultsEntityRow', () => {
    it('passes isAdWatched prop to entity rows', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} isAdWatched={true} />);

      expect(
        screen.getByText('EntityRow: Entity One, adWatched: true, showAdColumn: true'),
      ).toBeTruthy();
    });

    it('passes showAdColumn prop to entity rows', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} showAdColumn={false} />);

      expect(
        screen.getByText('EntityRow: Entity One, adWatched: false, showAdColumn: false'),
      ).toBeTruthy();
    });

    it('uses default showAdColumn value when not provided', () => {
      const entities = [createMockEntity('1', 'Entity One')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(
        screen.getByText('EntityRow: Entity One, adWatched: false, showAdColumn: true'),
      ).toBeTruthy();
    });
  });

  describe('multiple entities', () => {
    it('renders all entities in the array', () => {
      const entities = [
        createMockEntity('1', 'Entity One'),
        createMockEntity('2', 'Entity Two'),
        createMockEntity('3', 'Entity Three'),
      ];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByTestId('mocked-entity-row-1')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-2')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-3')).toBeTruthy();
    });

    it('updates section title count for multiple entities', () => {
      const entities = [createMockEntity('1', 'Entity One'), createMockEntity('2', 'Entity Two')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByLabelText('Test Table section with 2 entities')).toBeTruthy();
    });
  });

  describe('mixed entity types', () => {
    it('handles mix of EntityWithDelta and EntityWithMediaDelta', () => {
      const entities = [
        createMockEntity('1', 'Regular Entity'),
        createMockMediaEntity('2', 'Media Entity'),
      ];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByTestId('mocked-entity-row-1')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-2')).toBeTruthy();
    });
  });

  describe('edge cases', () => {
    it('handles single entity', () => {
      const entities = [createMockEntity('1', 'Single Entity')];

      render(<ResultsTable {...defaultProps} entities={entities} />);

      expect(screen.getByLabelText('Test Table section with 1 entities')).toBeTruthy();
      expect(screen.getByTestId('mocked-entity-row-1')).toBeTruthy();
    });

    it('renders without errors', () => {
      const entities = [createMockEntity('1', 'Test Entity')];

      expect(() => render(<ResultsTable {...defaultProps} entities={entities} />)).not.toThrow();
    });
  });
});
