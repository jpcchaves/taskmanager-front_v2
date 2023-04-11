import { AxiosResponse } from "axios";
import { Dashboard } from "../../../../../../types/dashboard/Dashboard";

export interface DashboardService {
  getDashboard: () => Promise<AxiosResponse<Dashboard>>;
}
