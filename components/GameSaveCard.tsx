import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { useSaveManagerStore } from "~/lib/stores/saveManagerStore";
import { Trash2 } from "~/lib/icons/Trash2";
import { Play } from "~/lib/icons/Play";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
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
import { Game } from "~/types";

interface GameSaveCardProps {
  game: Game;
}

export default function GameSaveCard({ game }: GameSaveCardProps) {
  const router = useRouter();
  const { loadGameToPlay, deleteGame, isLoading } = useSaveManagerStore(
    (state) => ({
      loadGameToPlay: state.loadGameToPlay,
      deleteGame: state.deleteGame,
      isLoading: state.isLoading, // To disable buttons while actions are processing
    })
  );

  const handleLoad = () => {
    if (game.status !== "active") return; // Should already be disabled, but double-check
    loadGameToPlay(game.id)
      .then(() => {
        // router.push(`/game/${game.id}`);
      })
      .catch((err) => {
        console.error("Failed to load game from card:", err);
      });
  };

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error("Failed to delete game from card:", err);
      // Error state is handled globally by the store
    });
  };

  const lastPlayedDate = new Date(game.updated_at * 1000).toLocaleDateString();
  const lastPlayedTime = new Date(game.updated_at * 1000).toLocaleTimeString(
    [],
    { hour: "numeric", minute: "2-digit" }
  );

  return (
    <Card className="w-full">
      <CardHeader>
        {/* You can give games names later, for now use ID or Year/Month */}
        <CardTitle>
          Game #{game.id} - Year {game.current_year}, Month {game.current_month}
        </CardTitle>
        <CardDescription>
          Status: {game.status} | Last Played: {lastPlayedDate} {lastPlayedTime}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display other relevant info like approval */}
        <Text>
          Public Approval: {Math.round(game.overall_public_approval * 100)}%
        </Text>
        {/* Add more details as needed */}
      </CardContent>
      <CardFooter className="flex-row justify-end gap-2">
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
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onPress={handleDelete}
                className="bg-destructive"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button
          variant="default"
          size="icon"
          disabled={game.status !== "active" || isLoading} // Disable if not active or loading
          onPress={handleLoad}
        >
          <Play className="text-background" size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}
