import React from "react";
import AuthProvider from "./auth/provider/AuthProvider";
import TasksProvider from "./tasks/provider/TasksProvider";
import DashboardProvider from "./dashboard/provider/DashboardProvider";

interface IProps {
  children: JSX.Element;
}

const ContextsInjection = ({ children }: IProps) => {
  return (
    <AuthProvider>
      <TasksProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </TasksProvider>
    </AuthProvider>
  );
};

export default ContextsInjection;
