import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types/tasks/Task";

interface TaskState {
  tasks: Task[];
  task: Task;
}

interface PayloadLoadTasks extends PayloadAction<Task[]> {}
interface PayloadTaskById extends PayloadAction<Task> {}

const initialState: TaskState = {
  tasks: [],
  task: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks: (state, action: PayloadLoadTasks) => {
      state.tasks = action.payload;
    },
    loadTasksById: (state, action: PayloadTaskById) => {
      state.task = action.payload;
    },
    createTask: (state, action: PayloadLoadTasks) => {},
    deleteTask: (state, action: PayloadLoadTasks) => {},
    updateTask: (state, action: PayloadLoadTasks) => {},
  },
});

export const { loadTasks, createTask, loadTasksById, deleteTask, updateTask } =
  taskSlice.actions;
