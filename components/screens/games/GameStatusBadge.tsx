import * as React from 'react';

import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';

interface GameStatusBadgeProps {
  status: string;
}

export function GameStatusBadge({ status }: GameStatusBadgeProps) {
  const isActive = status === 'active';

  return (
    <Badge
      variant={status === 'active' ? 'default' : 'secondary'}
      accessible={true}
      accessibilityLabel={`Game status: ${isActive ? 'Active' : 'Completed'}`}
      accessibilityHint={isActive ? 'This game can be continued' : 'This game has been finished'}
    >
      <Text
        className={cn(
          'text-base font-medium',
          status === 'active' ? 'text-background' : 'text-secondary-foreground',
        )}
      >
        {isActive ? 'Active' : 'Completed'}
      </Text>
    </Badge>
  );
}
