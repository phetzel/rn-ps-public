import * as React from "react";
import { View } from "react-native";
import { CardDescription, CardHeader } from "~/components/ui/card";
import { GameStatusBadge } from "./GameStatusBadge";
import type Game from "~/lib/db/models/Game";

interface GameCardHeaderProps {
  game: Game;
}

export function GameCardHeader({ game }: GameCardHeaderProps) {
  return (
    <CardHeader>
      <View className="flex-row items-center gap-2">
        <GameStatusBadge status={game.status} />
        <CardDescription className="text-lg text-muted-foreground">
          Year {game.currentYear}, Month {game.currentMonth}
        </CardDescription>
      </View>
    </CardHeader>
  );
}
