import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { PublicationStateHeader } from '~/components/shared/entity/PublicationStateHeader';
import { PoliticalLeaning } from '~/types';

describe('PublicationStateHeader', () => {
  const renderWithProps = (props = {}) => {
    const defaultProps = {
      name: 'The Tribune',
      politicalLeaning: PoliticalLeaning.Liberal,
    };
    render(<PublicationStateHeader {...defaultProps} {...props} />);
  };

  it('renders publication name and political leaning', () => {
    renderWithProps();
    expect(screen.getByText('The Tribune')).toBeTruthy();
    expect(screen.getByText('Liberal')).toBeTruthy();
  });

  it('renders with optional description', () => {
    renderWithProps({ description: 'A leading news publication' });
    expect(screen.getByText('The Tribune')).toBeTruthy();
    expect(screen.getByText('A leading news publication')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithProps({ description: 'Test description' });
    const container = screen.getByLabelText(
      'Publication: The Tribune, liberal leaning. Test description',
    );
    expect(container).toBeTruthy();
  });

  it('handles different political leanings', () => {
    renderWithProps({ politicalLeaning: PoliticalLeaning.Conservative });
    expect(screen.getByText('Conservative')).toBeTruthy();
  });
});
