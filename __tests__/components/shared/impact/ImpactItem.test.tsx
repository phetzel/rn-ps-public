import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ImpactItem from '~/components/shared/impact/ImpactItem';

describe('ImpactItem', () => {
  const defaultProps = {
    title: 'Test Title',
    name: 'Test Name',
    weight: 5,
  };

  const renderWithProps = (overrides = {}) => {
    const props = { ...defaultProps, ...overrides };
    return render(<ImpactItem {...props} />);
  };

  it('renders basic impact item with name and title', () => {
    renderWithProps();
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Name')).toBeTruthy();
  });

  it('renders positive impact with correct formatting', () => {
    renderWithProps({ weight: 10 });
    expect(screen.getByText('+10')).toBeTruthy();
  });

  it('renders negative impact with correct formatting', () => {
    renderWithProps({ weight: -5 });
    expect(screen.getByText('-5')).toBeTruthy();
  });

  it('renders neutral impact with correct formatting', () => {
    renderWithProps({ weight: 0 });
    expect(screen.getByText('0')).toBeTruthy();
  });

  it('renders reaction text when provided', () => {
    renderWithProps({ reaction: 'This is a test reaction' });
    expect(screen.getByText('This is a test reaction')).toBeTruthy();
  });

  it('does not render reaction text when not provided', () => {
    renderWithProps();
    expect(screen.queryByText(/reaction/i)).toBeNull();
  });

  describe('Accessibility', () => {
    it('has correct accessibility label for positive impact', () => {
      renderWithProps({
        name: 'John Doe',
        title: 'Secretary',
        weight: 5,
        reaction: 'Very pleased with the response',
      });
      const container = screen.getByLabelText(
        'John Doe, Secretary. positive impact: +5 points. Reaction: Very pleased with the response',
      );
      expect(container).toBeTruthy();
    });

    it('has correct accessibility label for negative impact', () => {
      renderWithProps({
        name: 'Jane Smith',
        title: 'Minister',
        weight: -3,
        reaction: 'Disappointed with the outcome',
      });
      const container = screen.getByLabelText(
        'Jane Smith, Minister. negative impact: -3 points. Reaction: Disappointed with the outcome',
      );
      expect(container).toBeTruthy();
    });

    it('has correct accessibility label for neutral impact', () => {
      renderWithProps({
        name: 'Bob Johnson',
        title: 'Advisor',
        weight: 0,
      });
      const container = screen.getByLabelText('Bob Johnson, Advisor. no change impact: 0 points');
      expect(container).toBeTruthy();
    });

    it('has accessibility label without reaction when none provided', () => {
      renderWithProps({
        name: 'Alice Brown',
        title: 'Director',
        weight: 2,
      });
      const container = screen.getByLabelText('Alice Brown, Director. positive impact: +2 points');
      expect(container).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty strings for name and title', () => {
      renderWithProps({ name: '', title: '', weight: 1 });
      expect(screen.getByText('+1')).toBeTruthy();
    });

    it('handles large positive weight values', () => {
      renderWithProps({ weight: 999 });
      expect(screen.getByText('+999')).toBeTruthy();
    });

    it('handles large negative weight values', () => {
      renderWithProps({ weight: -999 });
      expect(screen.getByText('-999')).toBeTruthy();
    });

    it('handles very long reaction text', () => {
      const longReaction =
        'This is a very long reaction text that should still be displayed properly in the component without causing any layout issues';
      renderWithProps({ reaction: longReaction });
      expect(screen.getByText(longReaction)).toBeTruthy();
    });
  });
});
