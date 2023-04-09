import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { TaskCreateAndUpdate } from "../../../types/tasks/TaskCreateAndUpdate";
import { FormikValues } from "formik";

export type TasksContextType = {
  isLoading: boolean;
  create: (
    data: TaskCreateAndUpdate,
    onClose: () => void,
    validation: FormikValues
  ) => Promise<void>;
  getAll: () => Promise<void>;
  getById: (id: string) => Promise<void>;
  update: (id: string, data: TaskCreateAndUpdate) => Promise<void>;
  clearTask: () => void;
  tasks: TasksPaginated;
  task: Task;
};

export const TasksContext = createContext<TasksContextType>(null);
