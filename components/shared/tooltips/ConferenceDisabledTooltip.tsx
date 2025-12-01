import React from 'react';

import { Text } from '~/components/ui/text';

interface ConferenceDisabledTooltipProps {
  reason: string;
}

export default function ConferenceDisabledTooltip({ reason }: ConferenceDisabledTooltipProps) {
  return <Text className="text-xs text-center leading-tight">{reason}</Text>;
}
