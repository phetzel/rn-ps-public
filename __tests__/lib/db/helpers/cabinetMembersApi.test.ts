import { Database } from "@nozbe/watermelondb";

import { testDatabase, resetTestDatabase } from "../index";
import { createGameScenario } from "../fixtures";
import { hireReplacementCabinetMembers } from "~/lib/db/helpers/cabinetMembersApi";
import { CabinetStaticId } from "~/types";

// Mock the production database to use test database
jest.mock("~/lib/db", () => ({
  database: require("../index").testDatabase,
}));

// Mock the collections to use test database
jest.mock("~/lib/db/helpers/collections", () => ({
  cabinetCollection: require("../index").testDatabase.get("cabinet_members"),
}));
describe("Cabinet Members API", () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
  });

  describe("hireReplacementCabinetMembers", () => {
    it("should do nothing when no positions need replacement", async () => {
      const { game } = await createGameScenario(database);

      await hireReplacementCabinetMembers(game.id, []);

      const cabinetMembers = await game.cabinetMembers.fetch();
      expect(cabinetMembers).toHaveLength(3); // Only original members
    });

    it("should hire replacement cabinet members", async () => {
      const { game } = await createGameScenario(database); // Creates 3 active members

      const firedPositions = [CabinetStaticId.State, CabinetStaticId.Treasury];
      await hireReplacementCabinetMembers(game.id, firedPositions);

      const allCabinetMembers = await game.cabinetMembers.fetch();
      expect(allCabinetMembers).toHaveLength(5); // 3 original + 2 new ✅

      // Test that we have the right ACTIVE members
      const activeMembers = allCabinetMembers.filter((m) => m.isActive);
      expect(activeMembers).toHaveLength(5); // All should be active initially

      // Test that the new ones have correct properties
      const newMembers = activeMembers.filter(
        (m) => firedPositions.includes(m.staticId) && m.approvalRating === 50 // New members start at 50
      );
      expect(newMembers).toHaveLength(2);
    });

    it("should hire multiple replacement members with unique names", async () => {
      const { game } = await createGameScenario(database);

      const allPositions = Object.values(CabinetStaticId);

      await hireReplacementCabinetMembers(game.id, allPositions);

      const allCabinetMembers = await game.cabinetMembers.fetch();
      const newMembers = allCabinetMembers.filter((m) => m.isActive);

      // Check that all names are unique
      const names = newMembers.map((m) => m.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);

      // Check that all positions are covered
      const positions = newMembers.map((m) => m.staticId);
      allPositions.forEach((position) => {
        expect(positions).toContain(position);
      });
    });
  });
});
