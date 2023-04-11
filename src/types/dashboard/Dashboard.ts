type DashboardResponse = {
  totalTasksAmount: number;
  totalTasksConcluded: number;
  totalTasksNotConcluded: number;
  concludedPercentage: string;
  notConcludedPercentage: string;
};

export type Dashboard = {
  dashboard: DashboardResponse;
};
