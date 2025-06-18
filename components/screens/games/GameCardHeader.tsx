import * as React from "react";
import { View } from "react-native";
import { CardDescription, CardHeader } from "~/components/ui/card";
import { GameStatusBadge } from "./GameStatusBadge";
import { formatDate } from "~/lib/utils";
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
          accessibilityLabel={`Currently in ${formatDate(
            game.currentMonth,
            game.currentYear
          )}`}
        >
          {formatDate(game.currentMonth, game.currentYear)}
        </CardDescription>
      </View>
    </CardHeader>
  );
}
