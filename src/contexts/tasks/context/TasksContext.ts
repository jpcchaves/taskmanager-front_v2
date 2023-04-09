import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";

export type TasksContextType = {
  tasks: Task[];
  task: Task;
};

export const TasksContext = createContext<TasksContextType>(null);
