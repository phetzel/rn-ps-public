import { withObservables } from "@nozbe/watermelondb/react";

import { Text } from "~/components/ui/text";
import { observeSubgroupApprovals } from "~/lib/db/helpers";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface SubgroupStateProps {
  subgroupApprovals: SubgroupApproval[];
}
export function SubgroupState({ subgroupApprovals }: SubgroupStateProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval by Subgroups</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Text>Category</Text>
              </TableHead>
              <TableHead>
                <Text>Subgroup</Text>
              </TableHead>
              <TableHead>
                <Text>Approval</Text>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subgroupApprovals.map((approval, index) => (
              <TableRow key={approval.id}>
                <TableCell className="font-medium">
                  <Text>{approval.category}</Text>
                </TableCell>
                <TableCell>
                  <Text>{approval.subgroupKey}</Text>
                </TableCell>
                <TableCell>
                  <Text>{approval.approvalRating}%</Text>
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
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupState);
