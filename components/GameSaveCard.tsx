import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import type Game from "~/lib/db/models/Game";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Icons
import { Award } from "~/lib/icons/Award";
import { Trash2 } from "~/lib/icons/Trash2";
import { Play } from "~/lib/icons/Play";
import { User } from "~/lib/icons/User";
import { Clock } from "~/lib/icons/Clock";
// UI
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
import PoliticalLeaningBadge from "~/components/PoliticalLeaningBadge";

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
  const { setGameCurrentLevel } = useCurrentLevelStore((state) => ({
    setGameCurrentLevel: state.setGameCurrentLevel,
  }));

  const handleLoad = async () => {
    if (game.status !== "active") return;

    try {
      setCurrentGameId(game.id);
      const level = await setGameCurrentLevel(game.id);

      if (level) {
        router.push(`/games/${game.id}/(tabs)/current`);
      } else {
        console.warn("No level found for this game");
      }
    } catch (error) {
      console.error("Failed to load game:", error);
    }
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
    <Card className="w-full overflow-hidden border-l-4 border-l-primary">
      <CardHeader>
        <View className="flex-row items-center gap-2">
          <Badge variant={game.status === "active" ? "default" : "secondary"}>
            <Text>{game.status === "active" ? "Active" : "Completed"}</Text>
          </Badge>

          <CardDescription>
            Year {game.currentYear}, Month {game.currentMonth}{" "}
          </CardDescription>
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        <View className="flex-row items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <Text className="text-xl">{game.presName}</Text>
        </View>

        <View className="flex-col gap-2">
          <View className="flex-row items-center gap-2">
            <Award className="h-2 w-2 text-muted-foreground" />
            <Text>President {game.presName}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <PoliticalLeaningBadge politicalLeaning={game.presParty} />
            <Text className="text-sm text-muted-foreground">
              ({game.presApprovalRating}% approval)
            </Text>
          </View>
        </View>
      </CardContent>

      <CardFooter className="flex-row justify-between items-center p-3 bg-muted/30 border-t border-border">
        <View className="flex-row items-center">
          <Clock className="h-3 w-3 mr-1 text-xs text-muted-foreground" />
          <View>
            <Text className="text-xs text-muted-foreground">Last played:</Text>
            <Text className="text-xs text-muted-foreground">
              {lastPlayedDate} at {lastPlayedTime}
            </Text>
          </View>
        </View>

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
                  This action cannot be undone. This will permanently delete
                  this game save.
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
            disabled={game.status !== "active" || isLoading}
            onPress={handleLoad}
          >
            <Play className="text-background" size={18} />
          </Button>
        </View>
      </CardFooter>
    </Card>
  );
}

export default GameSaveCard;
