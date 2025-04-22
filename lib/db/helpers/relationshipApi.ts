import { Q } from "@nozbe/watermelondb";
import { database } from "~/lib/db";

import {
  President,
  CabinetMember,
  Publication,
  Journalist,
  SubgroupApproval,
  PressSecretary,
} from "~/lib/db/models";
import { RelationshipSnapshot } from "~/types";
export async function updateRelationships(
  president: President,
  cabinetMembers: CabinetMember[],
  publications: Publication[],
  journalists: Journalist[],
  subgroupApprovals: SubgroupApproval[],
  pressSecretary: PressSecretary,
  impacts: RelationshipSnapshot
) {
  return await database.write(async () => {
    // Update president
    await president.update((p) => {
      p.approvalRating = Math.max(
        0,
        Math.min(100, p.approvalRating + impacts.president.approvalRating)
      );
      p.psRelationship = Math.max(
        0,
        Math.min(100, p.psRelationship + impacts.president.psRelationship)
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

    // Update publications
    for (const pub of publications) {
      const impact = impacts.publications[pub.id];
      if (impact) {
        await pub.update((p) => {
          p.approvalRating = Math.max(
            0,
            Math.min(100, p.approvalRating + impact.approvalRating)
          );
        });
      }
    }

    // Update journalists
    for (const journalist of journalists) {
      const impact = impacts.journalists[journalist.id];
      if (impact) {
        await journalist.update((j) => {
          j.reputation = Math.max(
            0,
            Math.min(100, j.reputation + impact.reputation)
          );
          j.relationship = Math.max(
            0,
            Math.min(100, j.relationship + impact.relationship)
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

    // Update press secretary
    // await pressSecretary.update((ps) => {
    //   ps.approvalRating = Math.max(
    //     0,
    //     Math.min(100, ps.approvalRating + impacts.pressSecretary.approvalRating)
    //   );
    //   ps.credibility = Math.max(
    //     0,
    //     Math.min(
    //       100,
    //       Number(ps.credibility) + impacts.pressSecretary.credibility
    //     )
    //   );
    // });
  });
}
