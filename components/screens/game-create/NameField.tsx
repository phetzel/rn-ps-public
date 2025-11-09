import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { View } from 'react-native';

import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { CreateGameFormData } from '~/lib/schemas';

interface NameFieldProps {
  control: Control<CreateGameFormData>;
  name: keyof CreateGameFormData;
  label: string;
  placeholder: string;
  error?: FieldError;
  disabled?: boolean;
}

export function NameField({
  control,
  name,
  label,
  placeholder,
  error,
  disabled = false,
}: NameFieldProps) {
  const labelId = `${name}Label`;
  const errorId = `${name}Error`;

  return (
    <View>
      <Label nativeID={labelId} className={error ? 'text-destructive' : ''}>
        {label}
      </Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { error: fieldError } }) => (
          <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoCapitalize="words"
            accessibilityLabelledBy={labelId}
            aria-describedby={fieldError ? errorId : undefined}
            aria-invalid={fieldError ? 'true' : 'false'}
            editable={!disabled}
            className={fieldError ? 'border-destructive' : ''}
          />
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
