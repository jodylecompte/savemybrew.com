import type { Question, Answer } from "@prisma/client";

export type QuestionWithAnswers = Question & {
  answers: Answer[];
};
