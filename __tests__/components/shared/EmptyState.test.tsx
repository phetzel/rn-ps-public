import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { EmptyState } from '~/components/shared/EmptyState';

describe('EmptyState', () => {
  const renderWithMessage = (message: string) => {
    render(<EmptyState message={message} />);
  };

  it('renders the provided message', () => {
    renderWithMessage('No items found');
    expect(screen.getByText('No items found')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithMessage('Empty state message');
    const container = screen.getByRole('text');
    expect(container).toBeTruthy();
    expect(container).toHaveProp('accessibilityLabel', 'Empty state: Empty state message');
  });

  it('handles empty message', () => {
    renderWithMessage('');
    expect(screen.getByRole('text')).toBeTruthy();
  });
});
