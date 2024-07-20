import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestionService } from "./question.service";
import { QuestionControllerBase } from "./base/question.controller.base";

@swagger.ApiTags("questions")
@common.Controller("questions")
export class QuestionController extends QuestionControllerBase {
  constructor(protected readonly service: QuestionService) {
    super(service);
  }
}
