/**
 * SubgroupApproval Model Tests
 *
 * Tests core functionality of the SubgroupApproval model including:
 * - Basic model operations (create, read, update)
 * - Static data integration
 * - Approval rating validation and normalization
 * - Game relationship management
 */

import { Database } from "@nozbe/watermelondb";
import { testDatabase, resetTestDatabase } from "../index";
import { createTestGame, createTestSubgroupApproval } from "../fixtures";
import { SubgroupStaticId, SubgroupCategory, PoliticalLeaning } from "~/types";

describe("SubgroupApproval Model", () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
  });

  describe("Basic Model Operations", () => {
    it("should create a subgroup approval with valid data", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 75,
      });

      expect(subgroup.staticId).toBe(SubgroupStaticId.LeftWingBase);
      expect(subgroup.approvalRating).toBe(75);
      expect(subgroup.game_id).toBe(game.id);
      expect(subgroup.createdAt).toBeInstanceOf(Date);
      expect(subgroup.updatedAt).toBeInstanceOf(Date);
    });

    it("should update subgroup approval rating", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.YouthVoters,
        approvalRating: 50,
      });

      // Fixed: Wrap update in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 85;
        });
      });

      expect(subgroup.approvalRating).toBe(85);
    });

    it("should maintain game relationship", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.BusinessLeaders,
        approvalRating: 60,
      });

      const relatedGame = await subgroup.game.fetch();
      expect(relatedGame.id).toBe(game.id);
    });
  });

  describe("Approval Rating Validation", () => {
    it("should clamp approval rating to 0-100 range on update", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.TechIndustry,
        approvalRating: 50,
      });

      // Test upper bound - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 150;
        });
      });
      expect(subgroup.approvalRating).toBe(100);

      // Test lower bound - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = -25;
        });
      });
      expect(subgroup.approvalRating).toBe(0);
    });

    it("should round decimal approval ratings on update", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RuralResidents,
        approvalRating: 50,
      });

      // Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 67.8;
        });
      });
      expect(subgroup.approvalRating).toBe(68);

      // Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 42.3;
        });
      });
      expect(subgroup.approvalRating).toBe(42);
    });

    it("should handle boundary values correctly", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.IndependentBase,
        approvalRating: 50,
      });

      // Test exact boundaries - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 0;
        });
      });
      expect(subgroup.approvalRating).toBe(0);

      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 100;
        });
      });
      expect(subgroup.approvalRating).toBe(100);
    });
  });

  describe("Static Data Integration", () => {
    it("should return correct static data for political subgroups", async () => {
      const game = await createTestGame(database);

      const testCases = [
        {
          staticId: SubgroupStaticId.LeftWingBase,
          expectedName: "Left Wing Base",
          expectedCategory: SubgroupCategory.Political,
          expectedLeaning: PoliticalLeaning.Liberal,
        },
        {
          staticId: SubgroupStaticId.RightWingBase,
          expectedName: "Right Wing Base",
          expectedCategory: SubgroupCategory.Political,
          expectedLeaning: PoliticalLeaning.Conservative,
        },
        {
          staticId: SubgroupStaticId.IndependentBase,
          expectedName: "Independent Base",
          expectedCategory: SubgroupCategory.Political,
          expectedLeaning: undefined,
        },
      ];

      for (const {
        staticId,
        expectedName,
        expectedCategory,
        expectedLeaning,
      } of testCases) {
        const subgroup = await createTestSubgroupApproval(database, {
          gameId: game.id,
          staticId,
          approvalRating: 50,
        });

        const staticData = subgroup.staticData;
        expect(staticData.name).toBe(expectedName);
        expect(staticData.category).toBe(expectedCategory);
        expect(staticData.defaultPoliticalLeaning).toBe(expectedLeaning);
      }
    });

    it("should return correct static data for demographic subgroups", async () => {
      const game = await createTestGame(database);

      const testCases = [
        {
          staticId: SubgroupStaticId.YouthVoters,
          expectedName: "Youth Voters",
          expectedCategory: SubgroupCategory.Demographic,
        },
        {
          staticId: SubgroupStaticId.SeniorsCitizens,
          expectedName: "Seniors Citizens",
          expectedCategory: SubgroupCategory.Demographic,
        },
        {
          staticId: SubgroupStaticId.RuralResidents,
          expectedName: "Rural Residents",
          expectedCategory: SubgroupCategory.Demographic,
        },
        {
          staticId: SubgroupStaticId.UrbanResidents,
          expectedName: "Urban Residents",
          expectedCategory: SubgroupCategory.Demographic,
        },
      ];

      for (const { staticId, expectedName, expectedCategory } of testCases) {
        const subgroup = await createTestSubgroupApproval(database, {
          gameId: game.id,
          staticId,
          approvalRating: 50,
        });

        const staticData = subgroup.staticData;
        expect(staticData.name).toBe(expectedName);
        expect(staticData.category).toBe(expectedCategory);
      }
    });

    it("should return correct static data for economic subgroups", async () => {
      const game = await createTestGame(database);

      const testCases = [
        {
          staticId: SubgroupStaticId.LaborUnions,
          expectedName: "Labor Unions",
          expectedCategory: SubgroupCategory.Economic,
          expectedLeaning: PoliticalLeaning.Liberal,
        },
        {
          staticId: SubgroupStaticId.BusinessLeaders,
          expectedName: "Business Leaders",
          expectedCategory: SubgroupCategory.Economic,
          expectedLeaning: PoliticalLeaning.Conservative,
        },
        {
          staticId: SubgroupStaticId.TechIndustry,
          expectedName: "Tech Industry",
          expectedCategory: SubgroupCategory.Economic,
          expectedLeaning: undefined,
        },
      ];

      for (const {
        staticId,
        expectedName,
        expectedCategory,
        expectedLeaning,
      } of testCases) {
        const subgroup = await createTestSubgroupApproval(database, {
          gameId: game.id,
          staticId,
          approvalRating: 50,
        });

        const staticData = subgroup.staticData;
        expect(staticData.name).toBe(expectedName);
        expect(staticData.category).toBe(expectedCategory);
        expect(staticData.defaultPoliticalLeaning).toBe(expectedLeaning);
      }
    });
  });

  describe("Game Integration Scenarios", () => {
    it("should handle multiple subgroups for the same game", async () => {
      const game = await createTestGame(database);

      const leftWing = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 80,
      });

      const rightWing = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RightWingBase,
        approvalRating: 30,
      });

      const youth = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.YouthVoters,
        approvalRating: 70,
      });

      // Verify all belong to the same game
      expect(leftWing.game_id).toBe(game.id);
      expect(rightWing.game_id).toBe(game.id);
      expect(youth.game_id).toBe(game.id);

      // Verify they have different approval ratings
      expect(leftWing.approvalRating).toBe(80);
      expect(rightWing.approvalRating).toBe(30);
      expect(youth.approvalRating).toBe(70);

      // Verify they can be fetched through game relationship
      const gameSubgroupApprovals = await game.subgroupApprovals.fetch();
      expect(gameSubgroupApprovals).toHaveLength(3);
    });

    it("should work with subgroups from all categories in the same game", async () => {
      const game = await createTestGame(database);

      const allSubgroups = [
        {
          staticId: SubgroupStaticId.LeftWingBase,
          expectedName: "Left Wing Base",
        },
        {
          staticId: SubgroupStaticId.YouthVoters,
          expectedName: "Youth Voters",
        },
        {
          staticId: SubgroupStaticId.LaborUnions,
          expectedName: "Labor Unions",
        },
      ];

      const createdSubgroups = await Promise.all(
        allSubgroups.map(({ staticId }) =>
          createTestSubgroupApproval(database, {
            gameId: game.id,
            staticId,
            approvalRating: 50,
          })
        )
      );

      // Verify static data integration works for mixed categories
      createdSubgroups.forEach((subgroup, index) => {
        const expected = allSubgroups[index];
        expect(subgroup.staticData.name).toBe(expected.expectedName);
      });

      // Verify they all belong to the game
      const gameSubgroupApprovals = await game.subgroupApprovals.fetch();
      expect(gameSubgroupApprovals).toHaveLength(3);

      // Verify categories are represented
      const categories = gameSubgroupApprovals.map(
        (sg) => sg.staticData.category
      );
      expect(categories).toContain(SubgroupCategory.Political);
      expect(categories).toContain(SubgroupCategory.Demographic);
      expect(categories).toContain(SubgroupCategory.Economic);
    });

    it("should maintain data integrity across game operations", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.TechIndustry,
        approvalRating: 45,
      });

      // Update game month - Fixed: Wrap in database.write()
      await database.write(async () => {
        await game.update((g) => {
          g.currentMonth = 5;
        });
      });

      // Verify subgroup still relates correctly
      const relatedGame = await subgroup.game.fetch();
      expect(relatedGame.currentMonth).toBe(5);
      expect(relatedGame.id).toBe(game.id);

      // Verify subgroup data remains intact
      expect(subgroup.approvalRating).toBe(45);
      expect(subgroup.staticData.name).toBe("Tech Industry");
    });
  });

  describe("Edge Cases", () => {
    it("should handle multiple updates in sequence", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.UrbanResidents,
        approvalRating: 50,
      });

      // Perform multiple updates - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 25;
        });
      });

      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 75;
        });
      });

      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 90;
        });
      });

      expect(subgroup.approvalRating).toBe(90);
    });

    it("should handle extreme approval rating values gracefully", async () => {
      const game = await createTestGame(database);
      const subgroup = await createTestSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.BusinessLeaders,
        approvalRating: 50,
      });

      // Test with very large numbers - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = 999999;
        });
      });
      expect(subgroup.approvalRating).toBe(100);

      // Test with very negative numbers - Fixed: Wrap in database.write()
      await database.write(async () => {
        await subgroup.update((sg) => {
          sg.approvalRating = -999999;
        });
      });
      expect(subgroup.approvalRating).toBe(0);
    });
  });
});
