import { withObservables } from "@nozbe/watermelondb/react";

import { observePublications } from "~/lib/db/helpers";
import type Publication from "~/lib/db/models/Publication";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface MediaStateProps {
  publications: Publication[];
}

export function MediaState({ publications }: MediaStateProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Publications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Text>Name</Text>
              </TableHead>
              <TableHead>
                <Text>Political Leaning</Text>
              </TableHead>
              <TableHead>
                <Text>Reach</Text>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {publications.map((publication) => (
              <TableRow key={publication.id}>
                <TableCell className="font-medium">
                  <Text>{publication.name}</Text>
                </TableCell>
                <TableCell>
                  <Text>{publication.politicalLeaning}</Text>
                </TableCell>
                <TableCell>
                  <Text>{publication.reach.toLocaleString()}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  publications: observePublications(gameId),
}));

export default enhance(MediaState);
