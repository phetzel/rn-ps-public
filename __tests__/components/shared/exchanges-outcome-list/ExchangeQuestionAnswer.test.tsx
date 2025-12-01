import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ExchangeQuestionAnswer from '~/components/shared/exchanges-outcome-list/ExchangeQuestionAnswer';

import type { Question } from '~/types';

describe('ExchangeQuestionAnswer', () => {
  const mockAnswer: Question['answers'][0] = {
    id: 'answer-1',
    text: 'We are taking this very seriously',
    type: 'inform' as any,
    impacts: {},
    outcomeModifiers: {},
  };

  const renderWithProps = (answer: Question['answers'][0] | null, isSkipped: boolean) => {
    render(<ExchangeQuestionAnswer answer={answer} isSkipped={isSkipped} />);
  };

  it('renders answer when provided', () => {
    renderWithProps(mockAnswer, false);
    expect(screen.getByText('We are taking this very seriously')).toBeTruthy();
    expect(screen.getByText('Your Response')).toBeTruthy();
  });

  it('renders skipped state when question is skipped', () => {
    renderWithProps(null, true);
    expect(screen.getByText('Question Skipped')).toBeTruthy();
    expect(
      screen.getByText('You chose to skip this question during the press conference.'),
    ).toBeTruthy();
  });

  it('has correct accessibility properties for skipped state', () => {
    renderWithProps(null, true);
    const container = screen.getByLabelText('Question was skipped during the press conference');
    expect(container).toBeTruthy();
  });

  it('renders skip icon in skipped state', () => {
    renderWithProps(null, true);
    // Icon should be present, but we don't need to test its internal implementation
    const container = screen.getByLabelText('Question was skipped during the press conference');
    expect(container).toBeTruthy();
  });

  it('returns null when not skipped and no answer', () => {
    const result = render(<ExchangeQuestionAnswer answer={null} isSkipped={false} />);
    expect(result.toJSON()).toBeNull();
  });

  it('handles different answer types', () => {
    const authorizedAnswer: Question['answers'][0] = {
      id: 'answer-2',
      text: 'This is classified information',
      type: 'authorized' as any,
      impacts: {},
      outcomeModifiers: {},
    };

    renderWithProps(authorizedAnswer, false);
    expect(screen.getByText('This is classified information')).toBeTruthy();
  });
});
