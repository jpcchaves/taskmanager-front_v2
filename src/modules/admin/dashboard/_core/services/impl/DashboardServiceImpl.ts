import { DashboardService } from "../model/DashboardService";
import { Dashboard } from "../../../../../../types/dashboard/Dashboard";
import { AxiosResponse } from "axios";
import http from "../../../../../../http-common/http";

class DashboardServiceImpl implements DashboardService {
  private readonly taskApiUrl = import.meta.env.VITE_API_TASKS_ENDPOINT;

  getDashboard(): Promise<AxiosResponse<Dashboard>> {
    return http.get(`${this.taskApiUrl}/dashboard`);
  }
}

export default new DashboardServiceImpl();
