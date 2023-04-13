import { TasksService } from "../models/TasksService";
import { AxiosResponse } from "axios";
import http from "../../../../../../http-common/http";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";
import { Task } from "../../../../../../types/tasks/Task";
import { TaskCreateAndUpdate } from "../../../../../../types/tasks/TaskCreateAndUpdate";

class TasksServiceImpl implements TasksService {
  private readonly taskApiUrl = import.meta.env.VITE_API_TASKS_ENDPOINT;

  async getAll(): Promise<AxiosResponse<TasksPaginated>> {
    return http.get(
      this.taskApiUrl + "?size=50&orderBy=createdAt&direction=DESC"
    );
  }

  async create(data: TaskCreateAndUpdate): Promise<AxiosResponse<Task>> {
    return http.post(this.taskApiUrl, data);
  }

  async delete(id: string): Promise<void> {
    return http.delete(`${this.taskApiUrl}/${id}`);
  }

  async getById(id: string): Promise<AxiosResponse<Task>> {
    return http.get(`${this.taskApiUrl}/${id}`);
  }

  async update(
    id: string,
    data: TaskCreateAndUpdate
  ): Promise<AxiosResponse<Task>> {
    return http.put(`${this.taskApiUrl}/${id}`, data);
  }

  async getTasksByFilter(situation: string): Promise<AxiosResponse<Task[]>> {
    if (situation === "1") {
      return http.get(`${this.taskApiUrl}/filter?concluded=${true}`);
    } else {
      return http.get(`${this.taskApiUrl}/filter?concluded=${false}`);
    }
  }
}

export default new TasksServiceImpl();
