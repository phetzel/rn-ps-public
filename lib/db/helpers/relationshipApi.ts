import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import {
  Game,
  CabinetMember,
  Publication,
  Journalist,
  SubgroupApproval,
} from "~/lib/db/models";
import { RelationshipSnapshot } from "~/types";

export async function updateRelationships(
  game: Game,
  cabinetMembers: CabinetMember[],
  publications: Publication[],
  journalists: Journalist[],
  subgroupApprovals: SubgroupApproval[],
  impacts: RelationshipSnapshot
) {
  return await database.write(async () => {
    // Update president
    await game.update((g) => {
      g.presPsRelationship = Math.max(
        0,
        Math.min(100, g.presPsRelationship + impacts.president.psRelationship)
      );
    });

    // Update cabinet members
    for (const member of cabinetMembers) {
      const impact = impacts.cabinetMembers[member.id];
      if (impact) {
        await member.update((m) => {
          m.approvalRating = Math.max(
            0,
            Math.min(100, m.approvalRating + impact.approvalRating)
          );
          m.psRelationship = Math.max(
            0,
            Math.min(100, m.psRelationship + impact.psRelationship)
          );
        });
      }
    }

    // Update journalists
    for (const journalist of journalists) {
      const impact = impacts.journalists[journalist.id];
      if (impact) {
        await journalist.update((j) => {
          j.psRelationship = Math.max(
            0,
            Math.min(100, j.psRelationship + impact.psRelationship)
          );
        });
      }
    }

    // Update subgroups
    for (const subgroup of subgroupApprovals) {
      const impact = impacts.subgroups[subgroup.id];
      if (impact) {
        await subgroup.update((s) => {
          s.approvalRating = Math.max(
            0,
            Math.min(100, s.approvalRating + impact.approvalRating)
          );
        });
      }
    }
  });
}
