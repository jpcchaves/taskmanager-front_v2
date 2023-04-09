import { AxiosResponse } from "axios";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";

export interface TasksService {
  getAll: () => Promise<AxiosResponse<TasksPaginated>>;
}
