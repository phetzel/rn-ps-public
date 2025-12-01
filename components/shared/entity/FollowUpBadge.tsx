// components/shared/entity/FollowUpBadge.tsx
import React from 'react';

import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';

interface FollowUpBadgeProps {
  className?: string;
  accessibilityLabel?: string;
}

export function FollowUpBadge({
  className = 'my-2 self-center',
  accessibilityLabel = 'Follow-up question indicator',
}: FollowUpBadgeProps) {
  return (
    <Badge className={className} accessibilityLabel={accessibilityLabel}>
      <Text className="text-xs">Follow-up Question</Text>
    </Badge>
  );
}
