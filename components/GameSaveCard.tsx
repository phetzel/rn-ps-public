import * as React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";

import type Game from "~/lib/db/models/Game";
import type PressSecretary from "~/lib/db/models/PressSecretary";
import type President from "~/lib/db/models/President";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
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

interface GameSaveCardProps {
  game: Game;
  pressSecretaries?: PressSecretary[];
  presidents?: President[];
}

function GameSaveCard({
  game,
  pressSecretaries,
  presidents,
}: GameSaveCardProps) {
  console.log("GameSaveCard pressSecretaries", pressSecretaries);
  console.log("GameSaveCard presidents", presidents);

  const president: President | undefined = presidents?.[0];
  const pressSecretary: PressSecretary | undefined = pressSecretaries?.[0];

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
        {pressSecretary && (
          <View className="flex-row items-center gap-2">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <Text className="font-medium">{pressSecretary.name}</Text>
            <Text className="text-xs text-muted-foreground">
              ({pressSecretary.approvalRating}% approval)
            </Text>
          </View>
        )}

        {president && (
          <View className="flex-row items-center gap-2">
            <Award className="h-3.5 w-3.5 text-muted-foreground" />
            <Text className="text-sm">President {president.name}</Text>
            <Text className="text-xs text-muted-foreground">
              ({president.approvalRating}% approval)
            </Text>
          </View>
        )}
      </CardContent>

      <CardFooter className="flex-row justify-between items-center p-3 bg-muted/30 border-t">
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

const enhance = withObservables(["game"], ({ game }) => ({
  game,
  pressSecretaries: game.pressSecretaries.observe(),
  presidents: game.presidents.observe(),
}));

export default enhance(GameSaveCard);
