import { TasksContext } from "../context/TasksContext";
import { useState } from "react";
import { Task } from "../../../types/tasks/Task";
import TasksServiceImpl from "../../../modules/admin/tasks/_core/services/impl/TasksServiceImpl";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { TaskCreate } from "../../../types/tasks/TaskCreate";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";

interface IProps {
  children: JSX.Element;
}

const TasksProvider = ({ children }: IProps) => {
  const [task, setTask] = useState<Task>(null);
  const [tasks, setTasks] = useState<TasksPaginated>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [makeToast] = Toast();

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const create = async (data: TaskCreate) => {
    toggleLoading();
    try {
      await TasksServiceImpl.create(data);
      toggleLoading();

      makeToast(
        "Task criada",
        `Você criou a task: ${data?.task}`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );
      return true;
    } catch (e: any) {
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
      return false;
    }
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
    <TasksContext.Provider value={{ isLoading, task, tasks, getAll, create }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
