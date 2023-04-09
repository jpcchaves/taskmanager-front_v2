import { TasksService } from "../models/TasksService";
import { AxiosResponse } from "axios";
import http from "../../../../../../http-common/http";
import { TasksPaginated } from "../../../../../../types/tasks/TasksPaginated";

class TasksServiceImpl implements TasksService {
  async getAll(): Promise<AxiosResponse<TasksPaginated>> {
    return http.get(import.meta.env.VITE_API_TASKS_ENDPOINT);
  }
}

export default new TasksServiceImpl();
