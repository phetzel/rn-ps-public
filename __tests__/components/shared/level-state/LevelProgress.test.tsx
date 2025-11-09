/**
 * LevelProgress Component Tests
 *
 * Tests the progress bar component that displays:
 * - Before/after values with visual progress bars
 * - Trend indicators (up/down arrows with colors)
 * - Accessibility labels for screen readers
 * - Different size variants (small/medium)
 * - Proper formatting of percentage values
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelProgress from '~/components/shared/level-state/LevelProgress';

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('LevelProgress', () => {
  const defaultProps = {
    label: 'Test Progress',
    initialValue: 50,
    finalValue: 75,
  };

  it('renders with basic props', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByText('Test Progress')).toBeTruthy();
    expect(screen.getByText('Before: 50%')).toBeTruthy();
    expect(screen.getByText('After: 75%')).toBeTruthy();
  });

  it('shows positive change with up trend indicator', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByText('+25%')).toBeTruthy();
    expect(screen.getByLabelText('Positive change: +25%')).toBeTruthy();
  });

  it('shows negative change with down trend indicator', () => {
    render(<LevelProgress label="Declining Progress" initialValue={75} finalValue={50} />);

    expect(screen.getByText('-25%')).toBeTruthy();
    expect(screen.getByLabelText('Negative change: -25%')).toBeTruthy();
  });

  it('handles no change scenario', () => {
    render(<LevelProgress label="No Change" initialValue={50} finalValue={50} />);

    expect(screen.getByText('Before: 50%')).toBeTruthy();
    expect(screen.getByText('After: 50%')).toBeTruthy();
    expect(screen.getByLabelText('No Change: No change. Remains at 50%.')).toBeTruthy();
  });

  it('handles edge values (0 and 100)', () => {
    render(<LevelProgress label="Full Range" initialValue={0} finalValue={100} />);

    expect(screen.getByText('Before: 0%')).toBeTruthy();
    expect(screen.getByText('After: 100%')).toBeTruthy();
    expect(screen.getByText('+100%')).toBeTruthy();
  });

  it('renders with medium size variant', () => {
    render(<LevelProgress {...defaultProps} size="medium" />);

    expect(screen.getByText('Test Progress')).toBeTruthy();
    expect(screen.getByText('+25%')).toBeTruthy();
  });

  it('renders with small size variant (default)', () => {
    render(<LevelProgress {...defaultProps} size="small" />);

    expect(screen.getByText('Test Progress')).toBeTruthy();
    expect(screen.getByText('+25%')).toBeTruthy();
  });

  it('has correct accessibility label for positive change', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(
      screen.getByLabelText('Test Progress: increased from 50% to 75%. Change of +25%.'),
    ).toBeTruthy();
  });

  it('has correct accessibility label for negative change', () => {
    render(<LevelProgress label="Declining Progress" initialValue={75} finalValue={25} />);

    expect(
      screen.getByLabelText('Declining Progress: decreased from 75% to 25%. Change of -50%.'),
    ).toBeTruthy();
  });

  it('has progress visualization accessibility label', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByLabelText('Progress visualization for Test Progress')).toBeTruthy();
  });

  it('formats decimal values correctly', () => {
    render(<LevelProgress label="Decimal Test" initialValue={33.33} finalValue={66.66} />);

    expect(screen.getByText('Before: 33.33%')).toBeTruthy();
    expect(screen.getByText('After: 66.66%')).toBeTruthy();
    expect(screen.getByText('+33.33%')).toBeTruthy();
  });

  it('handles very small changes', () => {
    render(<LevelProgress label="Small Change" initialValue={50} finalValue={50.1} />);

    expect(screen.getByText('Before: 50%')).toBeTruthy();
    expect(screen.getByText('After: 50.1%')).toBeTruthy();
    // Due to floating point precision, 50.1 - 50 = 0.10000000000000142
    expect(screen.getByText('+0.10000000000000142%')).toBeTruthy();
  });

  it('has accessible labels for before and after values', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByLabelText('Before: 50%')).toBeTruthy();
    expect(screen.getByLabelText('After: 75%')).toBeTruthy();
  });

  it('has change indicator accessibility label', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByLabelText('Change indicator: +25%')).toBeTruthy();
  });

  it('has initial value accessibility label', () => {
    render(<LevelProgress {...defaultProps} />);

    expect(screen.getByLabelText('Initial value: 50%')).toBeTruthy();
  });
});
