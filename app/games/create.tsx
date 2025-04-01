import React from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useSaveManagerStore } from "~/lib/stores/saveManagerStore";
import { NewGameDetails } from "~/types";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AlertCircle } from "~/lib/icons/AlertCircle";

// Define Zod schema for validation
const createGameSchema = z.object({
  pressSecretaryName: z
    .string()
    .trim()
    .min(1, { message: "Press Secretary name is required" }),
});

// Infer the type from the schema
type CreateGameFormData = z.infer<typeof createGameSchema>;

export default function CreateGameScreen() {
  const router = useRouter();
  const {
    createAndStartGame,
    isLoading,
    error: globalError,
  } = useSaveManagerStore((state) => ({
    createAndStartGame: state.createAndStartGame,
    isLoading: state.isLoading,
    error: state.error,
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
    },
  });

  // Form submission handler
  const onSubmit = async (data: CreateGameFormData) => {
    console.log("Form data submitted:", data);
    const details: NewGameDetails = {
      pressSecretaryName: data.pressSecretaryName,
      // Map other fields later
    };

    // Call the Zustand action
    const newGame = await createAndStartGame(details);

    if (newGame) {
      //   router.replace(`/game/${newGame.id}`);
    } else {
      setError("root.serverError", {
        type: "custom",
        message:
          useSaveManagerStore.getState().error ||
          "An unknown error occurred creating the game.",
      });
      console.error(
        "Game creation failed, error should be in store state:",
        useSaveManagerStore.getState().error
      );
    }
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
          {!errors.root?.serverError && globalError && (
            <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive mb-4">
              <AlertCircle className="text-destructive mr-2" size={16} />
              <Text className="text-destructive flex-shrink">
                {globalError}
              </Text>
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
                  placeholder="e.g., C.J. Cregg"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
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
