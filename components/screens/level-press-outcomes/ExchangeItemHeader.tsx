import React from "react";

import type { PressExchange } from "~/lib/db/models";
import { CardHeader } from "~/components/ui/card";
import JournalistDisplay from "~/components/shared/JournalistDisplay";

interface ExchangeItemHeaderProps {
  exchange: PressExchange;
}

function ExchangeItemHeader({ exchange }: ExchangeItemHeaderProps) {
  const journalist = exchange?.journalist_id;
  if (!journalist) {
    return null;
  }

  return (
    <CardHeader>
      <JournalistDisplay
        journalistId={exchange.journalist_id}
        nameClassName="text-lg font-medium"
        pubClassName="text-base text-muted-foreground"
      />
    </CardHeader>
  );
}

export default ExchangeItemHeader;
