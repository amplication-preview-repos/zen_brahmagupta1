import { Module } from "@nestjs/common";
import { QuizModuleBase } from "./base/quiz.module.base";
import { QuizService } from "./quiz.service";
import { QuizController } from "./quiz.controller";
import { QuizResolver } from "./quiz.resolver";

@Module({
  imports: [QuizModuleBase],
  controllers: [QuizController],
  providers: [QuizService, QuizResolver],
  exports: [QuizService],
})
export class QuizModule {}
