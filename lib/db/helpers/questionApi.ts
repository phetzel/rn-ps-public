import { database } from "~/lib/db";
import { Q } from "@nozbe/watermelondb";

import { QuestionStatus } from "~/types";
import { Level, Journalist, Situation, Question } from "~/lib/db/models";
import { journalistCollection, questionCollection } from "./collections";
import { mockQuestions } from "~/lib/data/mockQuestionData";

// Fetch questions for a level
export async function fetchQuestionsForLevel(
  levelId: string
): Promise<Question[]> {
  return await questionCollection.query(Q.where("level_id", levelId)).fetch();
}

// Create questions for a press conference
export interface PreparedQuestionData {
  level: Level;
  situation: Situation;
  journalist: Journalist;
  questionText: string;
  questionData: string; // JSON stringified data
  displayOrder: number;
}

export async function createQuestionsForPressConference(
  preparedQuestions: PreparedQuestionData[]
): Promise<Question[]> {
  return await database.write(async () => {
    // Create a question record for each prepared question
    const createdQuestions = await Promise.all(
      preparedQuestions.map(async (preparedQuestion) => {
        const question = await questionCollection.create((q) => {
          q.level.set(preparedQuestion.level);
          q.situation.set(preparedQuestion.situation);
          q.journalist.set(preparedQuestion.journalist);
          q.questionText = preparedQuestion.questionText;
          q.data = preparedQuestion.questionData;
          q.status = QuestionStatus.Pending;
          q.selectedAnswerIndex = null;
        });

        return question;
      })
    );

    return createdQuestions;
  });
}
