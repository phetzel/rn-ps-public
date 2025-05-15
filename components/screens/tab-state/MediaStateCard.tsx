import React from "react";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePublications } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Accordion } from "~/components/ui/accordion";
import { Newspaper } from "~/lib/icons/Newspaper";

import PublicationStateItem from "~/components/screens/tab-state/PublicationStateItem";

interface MediaStateCardProps {
  publications: Publication[];
  isLoading?: boolean;
  error?: string | null;
}

interface MediaStateCardProps {
  publications: Publication[];
}

export function MediaStateCard({ publications }: MediaStateCardProps) {
  return (
    <Card>
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Newspaper className="text-primary" />
        <CardTitle>Media Outlets</CardTitle>
      </CardHeader>

      <CardContent>
        <Accordion type="multiple" className="w-full">
          {publications.map((publication) => (
            <PublicationStateItem
              key={publication.id}
              publication={publication}
            />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  publications: observePublications(gameId),
}));

export default enhance(MediaStateCard);
