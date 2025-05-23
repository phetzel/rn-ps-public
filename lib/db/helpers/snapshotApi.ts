import { fetchGameEntities } from "~/lib/db/helpers";
import {
  RelationshipSnapshot,
  CabinetStaticId,
  JournalistStaticId,
  SubgroupStaticId,
  PublicationStaticId,
} from "~/types";

// Take a snapshot of the game entities
export async function takeSnapshot(
  gameId: string
): Promise<RelationshipSnapshot> {
  // Fetch all game entities
  const { game, cabinetMembers, journalists, subgroups, publications } =
    await fetchGameEntities(gameId);

  if (!game) {
    throw new Error("No game found with ID: " + gameId);
  }

  // Calculate publication approval ratings
  const publicationApprovals = await Promise.all(
    publications.map(async (publication) => [
      publication.staticId as PublicationStaticId,
      { approvalRating: await publication.getApprovalRating() },
    ])
  );
  console.log("publicationApprovals", publicationApprovals);

  // Create the snapshot
  return {
    president: {
      approvalRating: game.presApprovalRating,
      psRelationship: game.presPsRelationship,
    },
    cabinetMembers: Object.fromEntries(
      cabinetMembers.map((member) => [
        member.staticId as CabinetStaticId,
        {
          approvalRating: member.approvalRating,
          psRelationship: member.psRelationship,
        },
      ])
    ) as Record<
      CabinetStaticId,
      { approvalRating: number; psRelationship: number }
    >,
    journalists: Object.fromEntries(
      journalists.map((journalist) => [
        journalist.staticId as JournalistStaticId,
        {
          psRelationship: journalist.psRelationship,
        },
      ])
    ) as Record<JournalistStaticId, { psRelationship: number }>,
    subgroups: Object.fromEntries(
      subgroups.map((subgroup) => [
        subgroup.staticId as SubgroupStaticId,
        { approvalRating: subgroup.approvalRating },
      ])
    ) as Record<SubgroupStaticId, { approvalRating: number }>,
    publications: Object.fromEntries(publicationApprovals) as Record<
      PublicationStaticId,
      { approvalRating: number }
    >,
  };
}
