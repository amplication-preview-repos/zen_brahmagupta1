import * as graphql from "@nestjs/graphql";
import { QuizResolverBase } from "./base/quiz.resolver.base";
import { Quiz } from "./base/Quiz";
import { QuizService } from "./quiz.service";

@graphql.Resolver(() => Quiz)
export class QuizResolver extends QuizResolverBase {
  constructor(protected readonly service: QuizService) {
    super(service);
  }
}
