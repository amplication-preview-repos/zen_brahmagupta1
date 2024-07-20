import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstructorService } from "./instructor.service";
import { InstructorControllerBase } from "./base/instructor.controller.base";

@swagger.ApiTags("instructors")
@common.Controller("instructors")
export class InstructorController extends InstructorControllerBase {
  constructor(protected readonly service: InstructorService) {
    super(service);
  }
}
