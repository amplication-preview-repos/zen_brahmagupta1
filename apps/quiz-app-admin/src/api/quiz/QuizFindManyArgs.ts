import { QuizWhereInput } from "./QuizWhereInput";
import { QuizOrderByInput } from "./QuizOrderByInput";

export type QuizFindManyArgs = {
  where?: QuizWhereInput;
  orderBy?: Array<QuizOrderByInput>;
  skip?: number;
  take?: number;
};
