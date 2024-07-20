import * as graphql from "@nestjs/graphql";
import { QuestionResolverBase } from "./base/question.resolver.base";
import { Question } from "./base/Question";
import { QuestionService } from "./question.service";

@graphql.Resolver(() => Question)
export class QuestionResolver extends QuestionResolverBase {
  constructor(protected readonly service: QuestionService) {
    super(service);
  }
}
