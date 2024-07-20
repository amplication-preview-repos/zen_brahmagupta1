import * as graphql from "@nestjs/graphql";
import { InstructorResolverBase } from "./base/instructor.resolver.base";
import { Instructor } from "./base/Instructor";
import { InstructorService } from "./instructor.service";

@graphql.Resolver(() => Instructor)
export class InstructorResolver extends InstructorResolverBase {
  constructor(protected readonly service: InstructorService) {
    super(service);
  }
}
