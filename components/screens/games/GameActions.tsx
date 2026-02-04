import * as React from 'react';
import { View } from 'react-native';

import { Play } from '~/components/icons/Play';
import { Trash2 } from '~/components/icons/Trash2';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

import type Game from '~/types/view-models/Game';

interface GameActionsProps {
  game: Game;
  isLoading: boolean;
  onDelete: () => void;
  onLoad: () => void;
}

export function GameActions({ game, isLoading, onDelete, onLoad }: GameActionsProps) {
  return (
    <View className="flex-row gap-2" accessibilityLabel={`Actions for ${game.presName} game`}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            size="icon"
            disabled={isLoading}
            accessibilityLabel={`Delete ${game.presName} game`}
            accessibilityHint="Opens confirmation dialog to permanently delete this game"
            testID="delete-game-button"
          >
            <Trash2 className="text-white" size={18} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle accessibilityRole="header">Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this game save.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              accessibilityLabel="Cancel deletion"
              accessibilityHint="Closes dialog without deleting the game"
            >
              <Text>Cancel</Text>
            </AlertDialogCancel>
            <AlertDialogAction
              onPress={onDelete}
              className="bg-destructive"
              accessibilityLabel={`Confirm delete ${game.presName} game`}
              accessibilityHint="Permanently deletes this game save"
              testID="confirm-delete-button"
            >
              <Text>Delete</Text>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button
        variant="default"
        size="icon"
        disabled={game.status !== 'active' || isLoading}
        onPress={onLoad}
        accessibilityLabel={
          game.status !== 'active'
            ? `Cannot load completed game for ${game.presName}`
            : `Load ${game.presName} game`
        }
        accessibilityHint={
          game.status !== 'active'
            ? 'This game has been completed and cannot be loaded'
            : 'Continue playing this Press Secretary game'
        }
        accessibilityState={{ disabled: game.status !== 'active' || isLoading }}
        testID="load-game-button"
      >
        <Play className="text-background" size={18} />
      </Button>
    </View>
  );
}
