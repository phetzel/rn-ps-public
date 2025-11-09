import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { View, Platform } from 'react-native';

import InfoTooltip from '~/components/shared/InfoTooltip';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Text } from '~/components/ui/text';
import { CreateGameFormData } from '~/lib/schemas';
import { PressOfficeBackground } from '~/types';

interface Props {
  control: Control<CreateGameFormData>;
  error?: FieldError;
  disabled?: boolean;
}

export function BackgroundSelect({ control, error, disabled = false }: Props) {
  const options = Object.values(PressOfficeBackground).map((value) => ({
    value,
    label: value.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
  const getLabel = (val?: string) => options.find((o) => o.value === val)?.label;
  const errorId = 'poBackgroundError';
  const contentInsets = {
    top: 0,
    bottom: Platform.select({ ios: 0, android: 24 }),
    left: 12,
    right: 12,
  };
  const [triggerWidth, setTriggerWidth] = React.useState<number | undefined>(undefined);

  return (
    <Controller
      control={control}
      name="pressOfficeBackground"
      render={({ field: { onChange, value } }) => (
        <View className="gap-2">
          <View className="flex-row items-center gap-2">
            <Label nativeID="poBackgroundLabel" className={error ? 'text-destructive' : ''}>
              Press Office Background
            </Label>
            <View className="ml-auto">
              <InfoTooltip tooltipId="form.pressBackground" tooltipParams={{ background: value }} />
            </View>
          </View>

          <Select
            value={value as any}
            onValueChange={(v) => {
              const next = typeof v === 'string' ? v : (v as any)?.value;
              onChange(next as PressOfficeBackground);
            }}
            disabled={disabled}
          >
            <View onLayout={(e) => setTriggerWidth(e.nativeEvent.layout.width)}>
              <SelectTrigger
                className="h-12 w-full"
                aria-labelledby="poBackgroundLabel"
                aria-describedby={error ? errorId : undefined}
              >
                {value ? (
                  <Text className="text-base">{getLabel(value as string)}</Text>
                ) : (
                  <SelectValue placeholder="Select background" className="text-base" />
                )}
              </SelectTrigger>
            </View>
            <SelectContent
              side="top"
              insets={contentInsets}
              style={triggerWidth ? { width: triggerWidth } : undefined}
            >
              <SelectGroup>
                {options.map((opt) => (
                  <SelectItem key={opt.value} label={opt.label} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

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
      )}
    />
  );
}
