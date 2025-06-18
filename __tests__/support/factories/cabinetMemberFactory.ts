import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";

import { CabinetMember } from "~/lib/db/models";
import { CabinetStaticId } from "~/types";

type CabinetMemberOverrides = {
  gameId: string; // Required association
} & Partial<{
  staticId: CabinetStaticId;
  name: string;
  approvalRating: number;
  psRelationship: number;
  isActive: boolean;
}>;

export async function createCabinetMember(
  database: Database,
  overrides: CabinetMemberOverrides
): Promise<CabinetMember> {
  const defaultValues = {
    staticId: faker.helpers.enumValue(CabinetStaticId),
    name: faker.person.fullName(),
    approvalRating: faker.number.int({ min: 20, max: 80 }),
    psRelationship: faker.number.int({ min: 30, max: 90 }),
    isActive: true,
  };

  const memberData = { ...defaultValues, ...overrides };

  return await database.write(async () => {
    return await database
      .get<CabinetMember>("cabinet_members")
      .create((member) => {
        member.game_id = memberData.gameId;
        member.staticId = memberData.staticId;
        member.name = memberData.name;
        member.approvalRating = memberData.approvalRating;
        member.psRelationship = memberData.psRelationship;
        member.isActive = memberData.isActive;
      });
  });
}
