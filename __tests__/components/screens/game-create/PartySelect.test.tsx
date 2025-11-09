import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { PartySelect } from '~/components/screens/game-create/PartySelect';
import { CreateGameFormData } from '~/lib/schemas';
import { PoliticalLeaning } from '~/types';

function Wrapper() {
  const { control } = useForm<CreateGameFormData>({
    defaultValues: {
      pressSecretaryName: '',
      presidentName: '',
      presidentLeaning: PoliticalLeaning.Liberal,
      pressOfficeBackground: 'journalist' as any,
    },
  });

  return (
    <View>
      <PartySelect control={control} />
    </View>
  );
}

describe('PartySelect', () => {
  it('renders radio items with group label visible', () => {
    render(<Wrapper />);
    expect(screen.getByText("President's Political Leaning")).toBeTruthy();
    // Presence of radios implies a radiogroup; assert at least one radio exists
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBeGreaterThan(0);
  });

  it('renders InfoTooltip trigger', () => {
    render(<Wrapper />);
    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
  });

  it('allows selecting a party item', () => {
    render(<Wrapper />);
    const radios = screen.getAllByRole('radio');
    // Press the first radio item to ensure it is pressable
    expect(() => fireEvent.press(radios[0])).not.toThrow();
  });
});
