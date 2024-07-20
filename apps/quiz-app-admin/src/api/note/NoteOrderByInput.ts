import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
