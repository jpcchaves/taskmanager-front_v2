import { AxiosResponse } from "axios";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";
import { Task } from "../../../../../../types/tasks/Task";
import { TaskCreateAndUpdate } from "../../../../../../types/tasks/TaskCreateAndUpdate";

export interface TasksService {
  getAll: () => Promise<AxiosResponse<TasksPaginated>>;
  getById: (id: string) => Promise<AxiosResponse<Task>>;
  create: (data: TaskCreateAndUpdate) => Promise<AxiosResponse<Task>>;
  update: (id: string, data: Task) => Promise<AxiosResponse<Task>>;
  delete: (id: string) => Promise<void>;
}
