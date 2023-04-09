import { ITasks } from "../../modules/admin/tasks/models/ITasks";

export type TasksPaginated = {
  content: ITasks[];
  last: boolean;
  pageNo: number;
  pageSize: number;
  totalElement: number;
  totalPages: number;
};
