import React from "react";
import { View } from "react-native";
import { Control, Controller, FieldError } from "react-hook-form";
import { PoliticalParty } from "~/types";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { CreateGameFormData } from "~/lib/schemas";

interface PartySelectProps {
  control: Control<CreateGameFormData>;
  error?: FieldError;
  disabled?: boolean;
}

export function PartySelect({
  control,
  error,
  disabled = false,
}: PartySelectProps) {
  const partyOptions = Object.values(PoliticalParty);

  const formatParty = (party: PoliticalParty) => {
    return party.charAt(0).toUpperCase() + party.slice(1);
  };

  return (
    <View>
      <Label
        nativeID="presidentPartyLabel"
        className={error ? "text-destructive" : ""}
      >
        President's Political Party
      </Label>
      <Controller
        control={control}
        name="presidentParty"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onValueChange={onChange}
            className="flex-row justify-between"
            aria-labelledby="presidentPartyLabel"
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
                    party === PoliticalParty.Democrat
                      ? "text-blue-500"
                      : "text-red-500"
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
        <Text className="text-destructive mt-1 text-sm">{error.message}</Text>
      )}
    </View>
  );
}
