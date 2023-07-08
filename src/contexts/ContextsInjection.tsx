import React from "react";
import AuthProvider from "./auth/provider/AuthProvider";
import TasksProvider from "./tasks/provider/TasksProvider";
import DashboardProvider from "./dashboard/provider/DashboardProvider";
import { Provider } from "react-redux";
import { store } from "../store";

interface IProps {
  children: JSX.Element;
}

const ContextsInjection = ({ children }: IProps) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <TasksProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </TasksProvider>
      </Provider>
    </AuthProvider>
  );
};

export default ContextsInjection;
