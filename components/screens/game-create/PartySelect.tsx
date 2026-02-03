import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';

import InfoTooltip from '~/components/shared/InfoTooltip';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Text } from '~/components/ui/text';
import { PoliticalLeaning } from '~/types';

import type { Control, FieldError } from 'react-hook-form';
import type { CreateLevelFormData } from '~/lib/schemas';

interface PartySelectProps {
  control: Control<CreateLevelFormData>;
  error?: FieldError;
  disabled?: boolean;
}

export function PartySelect({ control, error, disabled = false }: PartySelectProps) {
  const partyOptions = Object.values(PoliticalLeaning).filter(
    (party) => party !== PoliticalLeaning.Neutral,
  );

  const formatParty = (party: PoliticalLeaning) => {
    return party.charAt(0).toUpperCase() + party.slice(1);
  };

  const errorId = 'presidentLeaningError';

  return (
    <View className="gap-2">
      <View className="flex-row items-center gap-2">
        <Label nativeID="presidentLeaningLabel" className={error ? 'text-destructive' : ''}>
          President{"'"}s Political Leaning
        </Label>
        <View className="ml-auto">
          <Controller
            control={control}
            name="presidentLeaning"
            render={({ field: { value } }) => (
              <InfoTooltip tooltipId="form.presidentLeaning" tooltipParams={{ leaning: value }} />
            )}
          />
        </View>
      </View>
      <Controller
        control={control}
        name="presidentLeaning"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onValueChange={onChange}
            className="flex-row justify-between"
            accessibilityRole="radiogroup" // Explicit role
            accessibilityLabelledBy="presidentLeaningLabel"
            aria-describedby={error ? errorId : undefined}
          >
            {partyOptions.map((party) => (
              <View key={party} className="flex flex-row items-center gap-2">
                <RadioGroupItem
                  value={party}
                  id={`party-${party}`}
                  aria-label={party}
                  disabled={disabled}
                />
                <Label
                  nativeID={`party-${party}-label`}
                  htmlFor={`party-${party}`}
                  className={`${
                    party === PoliticalLeaning.Liberal ? 'text-blue-500' : 'text-red-500'
                  }`}
                >
                  {formatParty(party)}
                </Label>
              </View>
            ))}
          </RadioGroup>
        )}
      />
      {error && (
        <Text
          nativeID={errorId}
          accessibilityRole="alert"
          className="text-destructive mt-1 text-sm"
        >
          {error.message}
        </Text>
      )}
    </View>
  );
}
