import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstructorServiceBase } from "./base/instructor.service.base";

@Injectable()
export class InstructorService extends InstructorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
