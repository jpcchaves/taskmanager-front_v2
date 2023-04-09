import { TasksContext } from "../context/TasksContext";
import { useState } from "react";
import { Task } from "../../../types/tasks/Task";
import TasksServiceImpl from "../../../modules/admin/tasks/_core/services/impl/TasksServiceImpl";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";

interface IProps {
  children: JSX.Element;
}

const TasksProvider = ({ children }: IProps) => {
  const [task, setTask] = useState<Task>(null);
  const [tasks, setTasks] = useState<TasksPaginated>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const getAll = async () => {
    toggleLoading();
    try {
      const { data: res } = await TasksServiceImpl.getAll();
      setTasks(res);
      toggleLoading();
      return true;
    } catch (e) {
      toggleLoading();
      // console.log(e)
      return false;
    }
  };

  return (
    <TasksContext.Provider value={{ isLoading, task, tasks, getAll }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
