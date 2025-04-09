import { withObservables } from "@nozbe/watermelondb/react";

import { observePublications } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Accordion } from "~/components/ui/accordion";
import { Newspaper } from "~/lib/icons/Newspaper";
import PublicationStateItem from "~/components/tab-state/PublicationStateItem";

interface MediaStateCardProps {
  publications: Publication[];
}

const MediaStateCard = ({ publications }: MediaStateCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center gap-2">
        <Newspaper className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg">Media Outlets</CardTitle>
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
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  publications: observePublications(gameId),
}));

export default enhance(MediaStateCard);
