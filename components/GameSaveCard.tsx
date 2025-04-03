import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";

import type Game from "~/lib/db/models/Game";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
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

interface GameSaveCardProps {
  game: Game;
}

function GameSaveCard({ game }: GameSaveCardProps) {
  const router = useRouter();
  const { setCurrentGameId, deleteGame, isLoading } = useGameManagerStore(
    (state) => ({
      setCurrentGameId: state.setCurrentGameId,
      deleteGame: state.deleteGame,
      isLoading: state.isLoading,
    })
  );

  const handleLoad = () => {
    if (game.status !== "active") return;
    setCurrentGameId(game.id);
    router.push(`/games/play/(tabs)/current`);
  };

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error("Failed to delete game from card:", err);
    });
  };

  const lastPlayedDate = game.updatedAt.toLocaleDateString();
  const lastPlayedTime = game.updatedAt.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Year {game.currentYear}, Month {game.currentMonth}{" "}
        </CardTitle>
        <CardDescription>
          Status: {game.status} | Last Played: {lastPlayedDate} {lastPlayedTime}{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Public Approval: {Math.round(game.overallPublicApproval * 100)}%{" "}
        </Text>
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
              <AlertDialogCancel>
                <Text>Cancel</Text>
              </AlertDialogCancel>
              <AlertDialogAction
                onPress={handleDelete}
                className="bg-destructive"
              >
                <Text>Delete</Text>
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

export default GameSaveCard;
