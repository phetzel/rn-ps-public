import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import { Situation } from "~/lib/db/models";
import { SituationType, AnswerType } from "~/types";
import { SituationContent } from "~/types";

type SituationOverrides = {
  gameId: string; // Required association
  levelId: string; // Required association
} & Partial<{
  type: SituationType;
  title: string;
  description: string;
  content: object; // Stored as a string, but easier to override as an object
  outcomeId: string | null;
}>;

export async function createSituation(
  database: Database,
  overrides: SituationOverrides
): Promise<Situation> {
  const defaultContent: SituationContent = {
    preferences: {
      president: {
        answerType: AnswerType.Inform,
        rationale: faker.lorem.sentence(),
      },
    },
    outcomes: [
      {
        id: "outcome-1",
        title: "A Positive Outcome",
        description: faker.lorem.paragraph(),
        weight: 60,
        consequences: { approvalChanges: {} },
      },
      {
        id: "outcome-2",
        title: "A Negative Outcome",
        description: faker.lorem.paragraph(),
        weight: 40,
        consequences: { approvalChanges: {} },
      },
    ],
  };

  const defaultValues = {
    type: faker.helpers.enumValue(SituationType),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    content: defaultContent, // Keep as an object initially
    outcomeId: null,
  };

  const situationData = { ...defaultValues, ...overrides };

  const finalContent = JSON.stringify(situationData.content);

  return await database.write(async () => {
    return await database.get<Situation>("situations").create((situation) => {
      situation.game_id = situationData.gameId;
      situation.level_id = situationData.levelId;
      situation.type = situationData.type;
      situation.title = situationData.title;
      situation.description = situationData.description;
      situation.content = finalContent;
      situation.outcomeId = situationData.outcomeId;
    });
  });
}
