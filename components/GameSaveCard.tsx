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
  status: string;
  currentYear: number;
  currentMonth: number;
  overallPublicApproval: number;
  updatedAt: Date;
}

function GameSaveCard({
  game,
  status,
  currentYear,
  currentMonth,
  overallPublicApproval,
  updatedAt,
}: GameSaveCardProps) {
  const router = useRouter();
  const { setCurrentGameId, deleteGame, isLoading } = useGameManagerStore(
    (state) => ({
      setCurrentGameId: state.setCurrentGameId,
      deleteGame: state.deleteGame,
      isLoading: state.isLoading, // Global loading for actions
    })
  );

  const handleLoad = () => {
    if (status !== "active") return;
    setCurrentGameId(game.id);
    router.push(`/games/${game.id}/(tabs)/current`);
  };

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error("Failed to delete game from card:", err);
    });
  };

  const lastPlayedDate = updatedAt.toLocaleDateString();
  const lastPlayedTime = updatedAt.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        {/* You can give games names later, for now use ID or Year/Month */}
        <CardTitle>
          Game #{game.id.substring(0, 6)}... - Year {currentYear}, Month{" "}
          {currentMonth}{" "}
        </CardTitle>
        <CardDescription>
          tatus: {status} | Last Played: {lastPlayedDate} {lastPlayedTime}{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display other relevant info like approval */}
        <Text>
          Public Approval: {Math.round(overallPublicApproval * 100)}%{" "}
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

const enhance = withObservables(["game"], ({ game }: { game: Game }) => ({
  game: game.observe(), // Observe the game model itself for actions
  // Observe specific fields needed for display
  status: game.status,
  currentYear: game.currentYear,
  currentMonth: game.currentMonth,
  overallPublicApproval: game.overallPublicApproval,
  updatedAt: game.updatedAt, // Observe the date field
}));

// --- Export Enhanced Component ---
export default enhance(GameSaveCard);
