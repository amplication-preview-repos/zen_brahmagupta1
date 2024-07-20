import { Quiz as TQuiz } from "../api/quiz/Quiz";

export const QUIZ_TITLE_FIELD = "id";

export const QuizTitle = (record: TQuiz): string => {
  return record.id?.toString() || String(record.id);
};
