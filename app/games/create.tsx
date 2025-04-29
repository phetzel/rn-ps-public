import React from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// import { useSaveManagerStore } from "~/lib/stores/saveManagerStore";
import { NewGameDetails, PoliticalParty } from "~/types";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { createGameSchema, type CreateGameFormData } from "~/lib/schemas";

const partyOptions = Object.values(PoliticalParty);

export default function CreateGameScreen() {
  const router = useRouter();
  const {
    createAndStartGame,
    isLoading,
    error: storeError,
  } = useGameManagerStore((state) => ({
    createAndStartGame: state.createAndStartGame,
    isLoading: state.isLoading,
    error: state.error,
  }));
  const { createNewLevel } = useCurrentLevelStore((state) => ({
    createNewLevel: state.createNewLevel,
  }));

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CreateGameFormData>({
    resolver: zodResolver(createGameSchema),
    defaultValues: {
      pressSecretaryName: "",
      presidentName: "",
      presidentParty: PoliticalParty.Republican,
    },
  });

  // Form submission handler
  const onSubmit = async (data: CreateGameFormData) => {
    const details: NewGameDetails = {
      pressSecretaryName: data.pressSecretaryName,
      presidentName: data.presidentName,
      presidentParty: data.presidentParty,
      // Map other fields later
    };

    const newGame = await createAndStartGame(details);

    if (newGame) {
      const newLevel = await createNewLevel(newGame);
      if (newLevel) {
        router.replace(`/games/${newGame.id}/(tabs)/current`);
      } else {
        setError("root.serverError", {
          type: "custom",
          message:
            useGameManagerStore.getState().error ||
            "An unknown error occurred creating the game.",
        });
      }
    } else {
      console.error(
        "Game creation failed, error should be in store state:",
        useGameManagerStore.getState().error
      );
    }
  };

  const formatParty = (party: PoliticalParty) => {
    return party.charAt(0).toUpperCase() + party.slice(1);
  };

  return (
    <ScrollView contentContainerClassName="p-4 flex-grow justify-center items-center bg-background">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-center">Create New Game</CardTitle>
        </CardHeader>

        <CardContent className="gap-5">
          {/* Display root form error (e.g., from server/store failure) */}
          {errors.root?.serverError && (
            <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive mb-4">
              <AlertCircle className="text-destructive mr-2" size={16} />
              <Text className="text-destructive flex-shrink">
                {errors.root.serverError.message}
              </Text>
            </View>
          )}
          {/* Display global store error if not handled by form-specific error */}
          {!errors.root?.serverError && storeError && (
            <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive mb-4">
              <AlertCircle className="text-destructive mr-2" size={16} />
              <Text className="text-destructive flex-shrink">{storeError}</Text>
            </View>
          )}

          {/* Press Secretary Name Input */}
          <View>
            <Label
              nativeID="nameLabel"
              className={errors.pressSecretaryName ? "text-destructive" : ""}
            >
              Press Secretary Name
            </Label>
            <Controller
              control={control}
              name="pressSecretaryName"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="e.g., George Akerson"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  aria-labelledbyledby="nameLabel"
                  aria-invalid={error ? "true" : "false"}
                  editable={!isLoading}
                  className={error ? "border-destructive" : ""}
                />
              )}
            />
            {errors.pressSecretaryName && (
              <Text className="text-destructive mt-1 text-sm">
                {errors.pressSecretaryName.message}
              </Text>
            )}
          </View>

          {/* President Name Input */}
          <View>
            <Label
              nativeID="presidentNameLabel"
              className={errors.presidentName ? "text-destructive" : ""}
            >
              President Name
            </Label>
            <Controller
              control={control}
              name="presidentName"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="e.g., George Washington"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  aria-labelledbyledby="presidentNameLabel"
                  aria-invalid={error ? "true" : "false"}
                  editable={!isLoading}
                  className={error ? "border-destructive" : ""}
                />
              )}
            />
            {errors.presidentName && (
              <Text className="text-destructive mt-1 text-sm">
                {errors.presidentName.message}
              </Text>
            )}
          </View>

          {/* President Party Radio Group */}
          <View>
            <Label
              nativeID="presidentPartyLabel"
              className={errors.presidentParty ? "text-destructive" : ""}
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
                  className="flex flex-col gap-2"
                  aria-labelledby="presidentPartyLabel"
                >
                  {partyOptions.map((party) => (
                    <View
                      key={party}
                      className="flex flex-row items-center gap-2"
                    >
                      <RadioGroupItem
                        value={party}
                        id={`party-${party}`}
                        aria-label={party}
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
            {errors.presidentParty && (
              <Text className="text-destructive mt-1 text-sm">
                {errors.presidentParty.message}
              </Text>
            )}
          </View>
        </CardContent>

        <CardFooter>
          <Button
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
            className="flex-1"
          >
            <Text>{isLoading ? "Creating..." : "Create & Start Game"}</Text>
          </Button>
        </CardFooter>
      </Card>
    </ScrollView>
  );
}
