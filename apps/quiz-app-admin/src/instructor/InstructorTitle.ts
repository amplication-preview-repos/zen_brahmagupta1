import { Instructor as TInstructor } from "../api/instructor/Instructor";

export const INSTRUCTOR_TITLE_FIELD = "id";

export const InstructorTitle = (record: TInstructor): string => {
  return record.id?.toString() || String(record.id);
};
