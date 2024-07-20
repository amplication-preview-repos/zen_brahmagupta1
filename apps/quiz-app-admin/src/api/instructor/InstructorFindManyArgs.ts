import { InstructorWhereInput } from "./InstructorWhereInput";
import { InstructorOrderByInput } from "./InstructorOrderByInput";

export type InstructorFindManyArgs = {
  where?: InstructorWhereInput;
  orderBy?: Array<InstructorOrderByInput>;
  skip?: number;
  take?: number;
};
