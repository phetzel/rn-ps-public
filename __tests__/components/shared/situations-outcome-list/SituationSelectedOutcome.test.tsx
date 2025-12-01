/**
 * SituationSelectedOutcome Component Tests
 *
 * Tests selected outcome display:
 * - Shows outcome title and description
 * - Displays probability percentage and progress bar
 * - Has proper accessibility labels for all elements
 * - Handles different probability values correctly
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { SituationSelectedOutcome } from '~/components/shared/situations-outcome-list/SituationSelectedOutcome';

import type { SituationOutcomeWeight } from '~/types';

describe('SituationSelectedOutcome', () => {
  const mockOutcome: SituationOutcomeWeight = {
    id: 'outcome-1',
    title: 'Crisis Successfully Resolved',
    description:
      "The administration's quick response and diplomatic efforts led to a peaceful resolution of the crisis.",
    finalWeight: 65,
    baseWeight: 50,
    modifier: 15,
  };

  it('displays outcome title and description', () => {
    render(<SituationSelectedOutcome outcome={mockOutcome} />);

    expect(screen.getByText('Situation Outcome:')).toBeTruthy();
    expect(screen.getByText('Crisis Successfully Resolved')).toBeTruthy();
    expect(
      screen.getByText(
        "The administration's quick response and diplomatic efforts led to a peaceful resolution of the crisis.",
      ),
    ).toBeTruthy();
  });

  it('shows probability percentage', () => {
    render(<SituationSelectedOutcome outcome={mockOutcome} />);

    expect(screen.getByText('Outcome Probability')).toBeTruthy();
    expect(screen.getByText('65%')).toBeTruthy();
  });

  it('has correct accessibility properties for container', () => {
    render(<SituationSelectedOutcome outcome={mockOutcome} />);

    const container = screen.getByLabelText(
      "Selected outcome: Crisis Successfully Resolved with 65% probability. The administration's quick response and diplomatic efforts led to a peaceful resolution of the crisis.",
    );
    expect(container).toBeTruthy();
  });

  it('handles low probability outcomes', () => {
    const lowProbOutcome: SituationOutcomeWeight = {
      id: 'outcome-low',
      title: 'Worst Case Scenario',
      description: 'Everything goes wrong',
      finalWeight: 5,
      baseWeight: 10,
      modifier: -5,
    };

    render(<SituationSelectedOutcome outcome={lowProbOutcome} />);

    expect(screen.getByText('5%')).toBeTruthy();
    expect(
      screen.getByLabelText(
        'Selected outcome: Worst Case Scenario with 5% probability. Everything goes wrong',
      ),
    ).toBeTruthy();
  });

  it('handles high probability outcomes', () => {
    const highProbOutcome: SituationOutcomeWeight = {
      id: 'outcome-high',
      title: 'Almost Certain Success',
      description: 'Success is nearly guaranteed',
      finalWeight: 95,
      baseWeight: 90,
      modifier: 5,
    };

    render(<SituationSelectedOutcome outcome={highProbOutcome} />);

    expect(screen.getByText('95%')).toBeTruthy();
    expect(
      screen.getByLabelText(
        'Selected outcome: Almost Certain Success with 95% probability. Success is nearly guaranteed',
      ),
    ).toBeTruthy();
  });

  it('handles zero probability outcomes', () => {
    const zeroOutcome: SituationOutcomeWeight = {
      id: 'outcome-zero',
      title: 'Impossible Outcome',
      description: 'This cannot happen',
      finalWeight: 0,
      baseWeight: 0,
      modifier: 0,
    };

    render(<SituationSelectedOutcome outcome={zeroOutcome} />);

    expect(screen.getByText('0%')).toBeTruthy();
  });

  it('handles 100% probability outcomes', () => {
    const certainOutcome: SituationOutcomeWeight = {
      id: 'outcome-certain',
      title: 'Guaranteed Outcome',
      description: 'This will definitely happen',
      finalWeight: 100,
      baseWeight: 100,
      modifier: 0,
    };

    render(<SituationSelectedOutcome outcome={certainOutcome} />);

    expect(screen.getByText('100%')).toBeTruthy();
  });

  it('handles long titles and descriptions', () => {
    const longOutcome: SituationOutcomeWeight = {
      id: 'outcome-long',
      title: 'An Extremely Long Outcome Title That Should Still Display Properly',
      description:
        'This is a very long description that explains in great detail what this outcome means for the administration and the country as a whole, including all the various implications and consequences that may arise from this particular situation.',
      finalWeight: 42,
      baseWeight: 40,
      modifier: 2,
    };

    render(<SituationSelectedOutcome outcome={longOutcome} />);

    expect(
      screen.getByText('An Extremely Long Outcome Title That Should Still Display Properly'),
    ).toBeTruthy();
    expect(
      screen.getByText(
        'This is a very long description that explains in great detail what this outcome means for the administration and the country as a whole, including all the various implications and consequences that may arise from this particular situation.',
      ),
    ).toBeTruthy();
  });

  it('renders without errors', () => {
    expect(() => render(<SituationSelectedOutcome outcome={mockOutcome} />)).not.toThrow();
  });
});
