import { Task } from "./Task";

export type TasksPaginated = {
  content: Task[];
  last: boolean;
  pageNo: number;
  pageSize: number;
  totalElement: number;
  totalPages: number;
};
