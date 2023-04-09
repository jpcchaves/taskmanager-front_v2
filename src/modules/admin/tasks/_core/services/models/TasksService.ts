import { AxiosResponse } from "axios";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";
import { Task } from "../../../../../../types/tasks/Task";
import { TaskCreate } from "../../../../../../types/tasks/TaskCreate";

export interface TasksService {
  getAll: () => Promise<AxiosResponse<TasksPaginated>>;
  getById: (id: string) => Promise<AxiosResponse<Task>>;
  create: (data: TaskCreate) => Promise<AxiosResponse<Task>>;
  update: (id: string, data: Task) => Promise<AxiosResponse<Task>>;
  delete: (id: string) => Promise<void>;
}
