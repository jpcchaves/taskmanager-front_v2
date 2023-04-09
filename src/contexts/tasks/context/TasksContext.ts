import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { TaskCreate } from "../../../types/tasks/TaskCreate";
import { FormikValues } from "formik";

export type TasksContextType = {
  isLoading: boolean;
  getAll: () => Promise<boolean>;
  create: (
    data: TaskCreate,
    onClose: () => void,
    validation: FormikValues
  ) => Promise<boolean>;
  tasks: TasksPaginated;
  task: Task;
};

export const TasksContext = createContext<TasksContextType>(null);
