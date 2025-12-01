import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { CabinetMemberName } from '~/components/shared/entity/CabinetMemberName';

describe('CabinetMemberName', () => {
  const mockCabinetMember = {
    name: 'John Smith',
    staticData: {
      cabinetName: 'Secretary of Defense',
    },
  } as any;

  const renderWithMember = (member = mockCabinetMember) => {
    render(<CabinetMemberName cabinetMember={member} />);
  };

  it('renders member name and cabinet position', () => {
    renderWithMember();
    expect(screen.getByText('John Smith')).toBeTruthy();
    expect(screen.getByText('Secretary of Defense')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithMember();
    const container = screen.getByRole('header');
    expect(container).toHaveProp('accessibilityLabel', 'John Smith, Secretary of Defense');
  });

  it('handles different cabinet positions', () => {
    const member = {
      name: 'Jane Doe',
      staticData: { cabinetName: 'Attorney General' },
    } as any;

    renderWithMember(member);
    expect(screen.getByText('Jane Doe')).toBeTruthy();
    expect(screen.getByText('Attorney General')).toBeTruthy();
  });
});
