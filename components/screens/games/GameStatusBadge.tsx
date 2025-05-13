import * as React from "react";

import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

interface GameStatusBadgeProps {
  status: string;
}

export function GameStatusBadge({ status }: GameStatusBadgeProps) {
  return (
    <Badge variant={status === "active" ? "default" : "secondary"}>
      <Text
        className={cn(
          "text-base font-medium",
          status === "active" ? "text-background" : "text-secondary-foreground"
        )}
      >
        {status === "active" ? "Active" : "Completed"}
      </Text>
    </Badge>
  );
}
