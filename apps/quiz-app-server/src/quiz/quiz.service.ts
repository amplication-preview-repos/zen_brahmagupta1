import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuizServiceBase } from "./base/quiz.service.base";

@Injectable()
export class QuizService extends QuizServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
