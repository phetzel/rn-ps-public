/**
 * SituationAlternativeOutcomes Component Tests
 *
 * Tests alternative outcomes display:
 * - Shows list of alternative outcomes with titles and probabilities
 * - Displays outcome descriptions
 * - Shows probability badges for each outcome
 * - Handles empty outcomes list
 * - Comprehensive accessibility labels for all outcomes
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import SituationAlternativeOutcomes from '~/components/shared/situations-outcome-list/SituationAlternativeOutcomes';

import type { SituationOutcomeWeight } from '~/types';

describe('SituationAlternativeOutcomes', () => {
  const mockOutcomes: SituationOutcomeWeight[] = [
    {
      id: 'outcome-1',
      title: 'Crisis Escalation',
      description: 'The situation worsens and public confidence drops',
      finalWeight: 25,
      baseWeight: 30,
      modifier: -5,
    },
    {
      id: 'outcome-2',
      title: 'Diplomatic Resolution',
      description: 'A peaceful solution is found through negotiations',
      finalWeight: 35,
      baseWeight: 25,
      modifier: 10,
    },
    {
      id: 'outcome-3',
      title: 'Status Quo Maintained',
      description: 'No significant change in the current situation',
      finalWeight: 15,
      baseWeight: 20,
      modifier: -5,
    },
  ];

  it('renders all alternative outcomes', () => {
    render(<SituationAlternativeOutcomes outcomes={mockOutcomes} />);

    expect(screen.getByText('Crisis Escalation')).toBeTruthy();
    expect(screen.getByText('Diplomatic Resolution')).toBeTruthy();
    expect(screen.getByText('Status Quo Maintained')).toBeTruthy();
  });

  it('displays outcome descriptions', () => {
    render(<SituationAlternativeOutcomes outcomes={mockOutcomes} />);

    expect(screen.getByText('The situation worsens and public confidence drops')).toBeTruthy();
    expect(screen.getByText('A peaceful solution is found through negotiations')).toBeTruthy();
    expect(screen.getByText('No significant change in the current situation')).toBeTruthy();
  });

  it('shows probability badges for each outcome', () => {
    render(<SituationAlternativeOutcomes outcomes={mockOutcomes} />);

    expect(screen.getByText('25% Chance')).toBeTruthy();
    expect(screen.getByText('35% Chance')).toBeTruthy();
    expect(screen.getByText('15% Chance')).toBeTruthy();
  });

  it('has correct accessibility properties for container', () => {
    render(<SituationAlternativeOutcomes outcomes={mockOutcomes} />);

    const container = screen.getByLabelText('3 alternative outcomes available');
    expect(container).toBeTruthy();
  });

  it('has correct accessibility properties for each outcome', () => {
    render(<SituationAlternativeOutcomes outcomes={mockOutcomes} />);

    expect(
      screen.getByLabelText(
        'Crisis Escalation: 25% probability. The situation worsens and public confidence drops',
      ),
    ).toBeTruthy();

    expect(
      screen.getByLabelText(
        'Diplomatic Resolution: 35% probability. A peaceful solution is found through negotiations',
      ),
    ).toBeTruthy();

    expect(
      screen.getByLabelText(
        'Status Quo Maintained: 15% probability. No significant change in the current situation',
      ),
    ).toBeTruthy();
  });

  it('returns null when outcomes array is empty', () => {
    const result = render(<SituationAlternativeOutcomes outcomes={[]} />);
    expect(result.toJSON()).toBeNull();
  });

  it('handles single outcome', () => {
    const singleOutcome = [mockOutcomes[0]];
    render(<SituationAlternativeOutcomes outcomes={singleOutcome} />);

    const container = screen.getByLabelText('1 alternative outcomes available');
    expect(container).toBeTruthy();
    expect(screen.getByText('Crisis Escalation')).toBeTruthy();
  });

  it('handles high probability outcomes', () => {
    const highProbOutcome: SituationOutcomeWeight[] = [
      {
        id: 'outcome-high',
        title: 'Highly Likely Outcome',
        description: 'This outcome is very probable',
        finalWeight: 90,
        baseWeight: 85,
        modifier: 5,
      },
    ];

    render(<SituationAlternativeOutcomes outcomes={highProbOutcome} />);

    expect(screen.getByText('90% Chance')).toBeTruthy();
    expect(
      screen.getByLabelText(
        'Highly Likely Outcome: 90% probability. This outcome is very probable',
      ),
    ).toBeTruthy();
  });

  it('handles zero probability outcomes', () => {
    const zeroOutcome: SituationOutcomeWeight[] = [
      {
        id: 'outcome-zero',
        title: 'Impossible Outcome',
        description: 'This outcome cannot happen',
        finalWeight: 0,
        baseWeight: 10,
        modifier: -10,
      },
    ];

    render(<SituationAlternativeOutcomes outcomes={zeroOutcome} />);

    expect(screen.getByText('0% Chance')).toBeTruthy();
  });
});
