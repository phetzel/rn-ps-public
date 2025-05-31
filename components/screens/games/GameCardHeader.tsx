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
      <View
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityLabel={`Game progress and status`}
      >
        <GameStatusBadge status={game.status} />
        <CardDescription
          className="text-lg text-muted-foreground"
          accessibilityLabel={`Currently in Year ${game.currentYear}, Month ${game.currentMonth}`}
        >
          Year {game.currentYear}, Month {game.currentMonth}
        </CardDescription>
      </View>
    </CardHeader>
  );
}
