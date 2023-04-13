import { Task } from "../../../types/tasks/Task";
import { createContext } from "react";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { IArgsUpdate } from "../types/IArgsUpdate";
import { IArgsCreate } from "../types/IArgsCreate";

export type TasksContextType = {
  isLoading: boolean;
  create: ({ data, onClose, validation }: IArgsCreate) => Promise<void>;
  getAll: () => Promise<void>;
  getById: (id: string) => Promise<void>;
  update: ({ onClose, validation, data, id }: IArgsUpdate) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getTasksByFilter: (situation: string) => Promise<void>;
  clearFilter: () => void;
  clearTask: () => void;
  clearTasks: () => void;
  tasks: TasksPaginated;
  task: Task;
  filteredTasks: Task[];
};

export const TasksContext = createContext<TasksContextType>(null);
