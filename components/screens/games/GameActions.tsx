// components/screens/games/GameActions.tsx
import * as React from "react";
import { View } from "react-native";
import { Trash2 } from "~/lib/icons/Trash2";
import { Play } from "~/lib/icons/Play";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
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
} from "~/components/ui/alert-dialog";
import type Game from "~/lib/db/models/Game";

interface GameActionsProps {
  game: Game;
  isLoading: boolean;
  onDelete: () => void;
  onLoad: () => void;
}

export function GameActions({
  game,
  isLoading,
  onDelete,
  onLoad,
}: GameActionsProps) {
  return (
    <View className="flex-row gap-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="icon" disabled={isLoading}>
            <Trash2 className="text-white" size={18} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              game save.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Text>Cancel</Text>
            </AlertDialogCancel>
            <AlertDialogAction onPress={onDelete} className="bg-destructive">
              <Text>Delete</Text>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button
        variant="default"
        size="icon"
        disabled={game.status !== "active" || isLoading}
        onPress={onLoad}
      >
        <Play className="text-background" size={18} />
      </Button>
    </View>
  );
}
