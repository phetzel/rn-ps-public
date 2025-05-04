import { database } from "~/lib/db";

import { CabinetMember, Journalist, SubgroupApproval } from "~/lib/db/models";
import { fetchGameEntities } from "./entityApi";
import {
  RelationshipSnapshot,
  CabinetStaticId,
  JournalistStaticId,
  SubgroupStaticId,
} from "~/types";

export async function updateRelationships(
  gameId: string,
  impacts: RelationshipSnapshot
) {
  // Fetch all needed entities
  const { game, cabinetMembers, publications, journalists, subgroups } =
    await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  // Helper function to format and prepare impacts for processing
  const formatImpacts = () => {
    // Create maps for quick lookup by static ID
    const cabinetMap = new Map(cabinetMembers.map((m) => [m.staticId, m]));
    const journalistMap = new Map(journalists.map((j) => [j.staticId, j]));
    const subgroupMap = new Map(subgroups.map((s) => [s.staticId, s]));

    // Format cabinet impacts
    const formattedCabinetImpacts = Object.entries(impacts.cabinetMembers || {})
      .map(([staticId, impact]) => {
        const member = cabinetMap.get(staticId as CabinetStaticId);
        return {
          member,
          staticId: staticId as CabinetStaticId,
          impact,
        };
      })
      .filter(
        (
          item
        ): item is {
          member: CabinetMember;
          staticId: CabinetStaticId;
          impact: { approvalRating: number; psRelationship: number };
        } => !!item.member && !!item.impact
      );

    // Format journalist impacts
    const formattedJournalistImpacts = Object.entries(impacts.journalists || {})
      .map(([staticId, impact]) => {
        const journalist = journalistMap.get(staticId as JournalistStaticId);
        return {
          journalist,
          staticId: staticId as JournalistStaticId,
          impact,
        };
      })
      .filter(
        (
          item
        ): item is {
          journalist: Journalist;
          staticId: JournalistStaticId;
          impact: { psRelationship: number };
        } => !!item.journalist && !!item.impact
      );

    // Format subgroup impacts
    const formattedSubgroupImpacts = Object.entries(impacts.subgroups || {})
      .map(([staticId, impact]) => {
        const subgroup = subgroupMap.get(staticId as SubgroupStaticId);
        return {
          subgroup,
          staticId: staticId as SubgroupStaticId,
          impact,
        };
      })
      .filter(
        (
          item
        ): item is {
          subgroup: SubgroupApproval;
          staticId: SubgroupStaticId;
          impact: { approvalRating: number };
        } => !!item.subgroup && !!item.impact
      );

    return {
      cabinetImpacts: formattedCabinetImpacts,
      journalistImpacts: formattedJournalistImpacts,
      subgroupImpacts: formattedSubgroupImpacts,
    };
  };

  return await database.write(async () => {
    // Update president
    await game.update((g) => {
      g.presPsRelationship = Math.max(
        0,
        Math.min(100, g.presPsRelationship + impacts.president.psRelationship)
      );
    });

    // Format impacts for better processing
    const { cabinetImpacts, journalistImpacts, subgroupImpacts } =
      formatImpacts();

    // Update cabinet members
    for (const { member, impact } of cabinetImpacts) {
      await member.update((m) => {
        m.psRelationship = Math.max(
          0,
          Math.min(100, m.psRelationship + impact.psRelationship)
        );
      });
    }

    // Update journalists
    for (const { journalist, impact } of journalistImpacts) {
      await journalist.update((j) => {
        j.psRelationship = Math.max(
          0,
          Math.min(100, j.psRelationship + impact.psRelationship)
        );
      });
    }

    // Update subgroups
    for (const { subgroup, impact } of subgroupImpacts) {
      await subgroup.update((s) => {
        s.approvalRating = Math.max(
          0,
          Math.min(100, s.approvalRating + impact.approvalRating)
        );
      });
    }
  });
}
