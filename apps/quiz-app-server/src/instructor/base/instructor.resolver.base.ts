/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Instructor } from "./Instructor";
import { InstructorCountArgs } from "./InstructorCountArgs";
import { InstructorFindManyArgs } from "./InstructorFindManyArgs";
import { InstructorFindUniqueArgs } from "./InstructorFindUniqueArgs";
import { DeleteInstructorArgs } from "./DeleteInstructorArgs";
import { InstructorService } from "../instructor.service";
@graphql.Resolver(() => Instructor)
export class InstructorResolverBase {
  constructor(protected readonly service: InstructorService) {}

  async _instructorsMeta(
    @graphql.Args() args: InstructorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Instructor])
  async instructors(
    @graphql.Args() args: InstructorFindManyArgs
  ): Promise<Instructor[]> {
    return this.service.instructors(args);
  }

  @graphql.Query(() => Instructor, { nullable: true })
  async instructor(
    @graphql.Args() args: InstructorFindUniqueArgs
  ): Promise<Instructor | null> {
    const result = await this.service.instructor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Instructor)
  async deleteInstructor(
    @graphql.Args() args: DeleteInstructorArgs
  ): Promise<Instructor | null> {
    try {
      return await this.service.deleteInstructor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}