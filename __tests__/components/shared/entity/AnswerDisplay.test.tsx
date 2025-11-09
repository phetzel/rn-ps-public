import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { AnswerDisplay } from '~/components/shared/entity/AnswerDisplay';

describe('AnswerDisplay', () => {
  const renderWithAnswer = (answer: string) => {
    render(<AnswerDisplay answer={answer} />);
  };

  it('renders the provided answer', () => {
    renderWithAnswer('We are taking this very seriously');
    expect(screen.getByText('We are taking this very seriously')).toBeTruthy();
    expect(screen.getByText('Your Response')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithAnswer('Test response');
    const container = screen.getByLabelText('Your response: Test response');
    expect(container).toBeTruthy();
  });

  it('handles empty answer', () => {
    renderWithAnswer('');
    expect(screen.getByText('Your Response')).toBeTruthy();
  });
});
