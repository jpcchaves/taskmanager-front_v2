import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";

export type TasksContextType = {
  isLoading: boolean;
  getAll: () => Promise<boolean>;
  tasks: TasksPaginated;
  task: Task;
};

export const TasksContext = createContext<TasksContextType>(null);
