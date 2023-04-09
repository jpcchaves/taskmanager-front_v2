import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { TaskCreate } from "../../../types/tasks/TaskCreate";

export type TasksContextType = {
  isLoading: boolean;
  getAll: () => Promise<boolean>;
  create: (data: TaskCreate) => Promise<boolean>;
  tasks: TasksPaginated;
  task: Task;
};

export const TasksContext = createContext<TasksContextType>(null);
