import { database } from '~/lib/db';
import { cabinetCollection } from '~/lib/db/helpers/collections';
import { generateCabinetMemberName } from '~/lib/game/cabinet';

import type { CabinetStaticId } from '~/types';

/**
 * Hire new cabinet members to replace fired ones
 * Called at the start of the next level
 */
export async function hireReplacementCabinetMembers(
  gameId: string,
  firedPositions: CabinetStaticId[],
): Promise<void> {
  if (firedPositions.length === 0) return;

  await database.write(async () => {
    for (const staticId of firedPositions) {
      await cabinetCollection.create((member) => {
        member.game.id = gameId;
        member.staticId = staticId;
        member.name = generateCabinetMemberName(staticId);
        member.approvalRating = 50;
        member.psRelationship = 50;
        member.isActive = true;
      });
    }
  });
}
