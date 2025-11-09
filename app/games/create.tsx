import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';

import { BackgroundSelect } from '~/components/screens/game-create/BackgroundSelect';
import { NameField } from '~/components/screens/game-create/NameField';
import { PartySelect } from '~/components/screens/game-create/PartySelect';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import { Logo } from '~/components/shared/Logo';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { useGameNavigation } from '~/lib/hooks/useGameNavigation';
import { Save } from '~/lib/icons/Save';
import { createGameSchema, type CreateGameFormData } from '~/lib/schemas';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';
// Components
// Types
import { NewGameDetails, PoliticalLeaning } from '~/types';

export default function GameCreateScreen() {
  const { createGame } = useGameNavigation();
  const { isLoading, error: storeError } = useGameManagerStore((state) => ({
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
      pressSecretaryName: '',
      presidentName: '',
      presidentLeaning: PoliticalLeaning.Conservative,
      pressOfficeBackground: undefined, // explicitly undefined to force user selection
    },
  });

  // Form submission handler
  const onSubmit = async (data: CreateGameFormData) => {
    const details: NewGameDetails = {
      pressSecretaryName: data.pressSecretaryName,
      presidentName: data.presidentName,
      presidentLeaning: data.presidentLeaning,
      pressOfficeBackground: data.pressOfficeBackground,
    };

    const success = await createGame(details);

    if (!success) {
      setError('root.serverError', {
        type: 'custom',
        message:
          useGameManagerStore.getState().error || 'An unknown error occurred creating the game.',
      });
    }
  };

  return (
    <ScrollView contentContainerClassName="p-4 gap-8 flex-grow justify-center items-center bg-background">
      <Logo size="large" />

      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle className="text-center">New Press Secretary Career</CardTitle>
        </CardHeader>

        <CardContent className="gap-4">
          {/* Display root form error (e.g., from server/store failure) */}
          {errors.root?.serverError.message && (
            <ErrorDisplay message={errors.root.serverError.message} />
          )}
          {/* Display global store error if not handled by form-specific error */}
          {!errors.root?.serverError && storeError && <ErrorDisplay message={storeError} />}

          {/* President Name Input */}
          <NameField
            control={control}
            name="presidentName"
            label="President's Name"
            placeholder="George Washington..."
            error={errors.presidentName}
            disabled={isLoading}
          />

          {/* President Party Radio Group */}
          <PartySelect control={control} error={errors.presidentLeaning} disabled={isLoading} />

          {/* Press Secretary Name Input */}
          <NameField
            control={control}
            name="pressSecretaryName"
            label="Your Press Secretary Name"
            placeholder="George Akerson..."
            error={errors.pressSecretaryName}
            disabled={isLoading}
          />

          {/* Press Office Background */}
          <BackgroundSelect
            control={control}
            error={errors.pressOfficeBackground}
            disabled={isLoading}
          />
        </CardContent>

        <CardFooter>
          <Button
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
            className="flex-1 gap-2 flex-row"
          >
            <Save className="w-4 h-4 text-background" />
            <Text>{isLoading ? 'Creating...' : 'Create Game'}</Text>
          </Button>
        </CardFooter>
      </Card>
    </ScrollView>
  );
}
