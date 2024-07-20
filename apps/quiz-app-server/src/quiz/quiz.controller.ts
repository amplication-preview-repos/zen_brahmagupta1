import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuizService } from "./quiz.service";
import { QuizControllerBase } from "./base/quiz.controller.base";

@swagger.ApiTags("quizzes")
@common.Controller("quizzes")
export class QuizController extends QuizControllerBase {
  constructor(protected readonly service: QuizService) {
    super(service);
  }
}
