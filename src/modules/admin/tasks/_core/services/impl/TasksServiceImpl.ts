import { TasksService } from "../models/TasksService";
import { AxiosResponse } from "axios";
import http from "../../../../../../http-common/http";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";
import { Task } from "../../../../../../types/tasks/Task";
import { TaskCreate } from "../../../../../../types/tasks/TaskCreate";

class TasksServiceImpl implements TasksService {
  private readonly taskApiUrl = import.meta.env.VITE_API_TASKS_ENDPOINT;

  async getAll(): Promise<AxiosResponse<TasksPaginated>> {
    return http.get(this.taskApiUrl + "?size=100");
  }

  async create(data: TaskCreate): Promise<AxiosResponse<Task>> {
    return http.post(this.taskApiUrl, data);
  }

  async delete(id: string): Promise<void> {
    return http.delete(`${this.taskApiUrl}/${id}`);
  }

  async getById(id: string): Promise<AxiosResponse<Task>> {
    return http.get(`${this.taskApiUrl}/${id}`);
  }

  async update(id: string, data: Task): Promise<AxiosResponse<Task>> {
    return http.put(`${this.taskApiUrl}/${id}`, data);
  }
}

export default new TasksServiceImpl();
