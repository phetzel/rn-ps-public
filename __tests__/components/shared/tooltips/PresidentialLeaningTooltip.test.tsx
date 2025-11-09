import { render, screen } from '@testing-library/react-native';
import React from 'react';

import PresidentialLeaningTooltip from '~/components/shared/tooltips/PresidentialLeaningTooltip';
import { PoliticalLeaning } from '~/types';

describe('PresidentialLeaningTooltip', () => {
  it('renders header and selected leaning label', () => {
    render(<PresidentialLeaningTooltip leaning={PoliticalLeaning.Liberal} />);
    expect(screen.getByText('Presidential Leaning')).toBeTruthy();
    expect(screen.getByText(/Liberal:/)).toBeTruthy();
  });

  it('renders at least one subgroup effect indicator for non-neutral leaning', () => {
    render(<PresidentialLeaningTooltip leaning={PoliticalLeaning.Liberal} />);
    const counts = [
      screen.queryAllByText('++').length,
      screen.queryAllByText('+').length,
      screen.queryAllByText('--').length,
      screen.queryAllByText('-').length,
    ];
    expect(counts.some((c) => c > 0)).toBe(true);
  });
});
