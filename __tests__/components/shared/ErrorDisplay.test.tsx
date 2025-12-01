import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { ErrorDisplay } from '~/components/shared/ErrorDisplay';

describe('ErrorDisplay', () => {
  const renderWithMessage = (message: string) => {
    render(<ErrorDisplay message={message} />);
  };

  it('renders the provided error message', () => {
    renderWithMessage('Something went wrong');
    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithMessage('Error message');
    const container = screen.getByRole('alert');
    expect(container).toBeTruthy();
    expect(container).toHaveProp('accessibilityLabel', 'Error: Error message');
    expect(container).toHaveProp('accessibilityLiveRegion', 'polite');
  });

  it('handles empty message', () => {
    renderWithMessage('');
    expect(screen.getByRole('alert')).toBeTruthy();
  });
});
