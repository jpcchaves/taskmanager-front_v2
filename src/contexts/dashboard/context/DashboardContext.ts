import { createContext } from "react";

export type DashboardContextType = {
  isLoading: boolean;
  getDashboard: () => Promise<void>;
};

export const DashboardContext = createContext<DashboardContextType>(null);
