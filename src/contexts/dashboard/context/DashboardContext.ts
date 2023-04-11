import { createContext } from "react";
import { Dashboard } from "../../../types/dashboard/Dashboard";

export type DashboardContextType = {
  isLoading: boolean;
  dashboardData: Dashboard;
  getDashboard: () => Promise<void>;
};

export const DashboardContext = createContext<DashboardContextType>(null);
