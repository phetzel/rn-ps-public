import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembers } from "~/lib/db/helpers";
import type CabinetMember from "~/lib/db/models/CabinetMember";
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

interface CabinetStateProps {
  cabinetMembers: CabinetMember[];
}

export function CabinetState({ cabinetMembers }: CabinetStateProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cabinet</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Text>Name</Text>
              </TableHead>
              <TableHead>
                <Text>Role</Text>
              </TableHead>
              <TableHead>
                <Text>Approval</Text>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cabinetMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">
                  <Text>{member.name}</Text>
                </TableCell>
                <TableCell>
                  <Text>{member.role}</Text>
                </TableCell>
                <TableCell>
                  <Text>{member.approvalRating}%</Text>
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
  cabinetMembers: observeCabinetMembers(gameId),
}));

export default enhance(CabinetState);
