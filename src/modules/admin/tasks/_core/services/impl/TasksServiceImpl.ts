import { TasksService } from "../models/TasksService";
import { AxiosResponse } from "axios";
import http from "../../../../../../http-common/http";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";
import { Task } from "../../../../../../types/tasks/Task";
import { TaskCreate } from "../../../../../../types/tasks/TaskCreate";

class TasksServiceImpl implements TasksService {
  async getAll(): Promise<AxiosResponse<TasksPaginated>> {
    return http.get(import.meta.env.VITE_API_TASKS_ENDPOINT + "?size=100");
  }

  async create(data: TaskCreate): Promise<AxiosResponse<Task>> {
    return Promise.resolve(undefined);
  }

  async delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  async getById(id: string): Promise<AxiosResponse<Task>> {
    return Promise.resolve(undefined);
  }

  async update(id: string, data: Task): Promise<AxiosResponse<Task>> {
    return Promise.resolve(undefined);
  }
}

export default new TasksServiceImpl();
