import { TasksContext } from "../context/TasksContext";
import { useState } from "react";
import { Task } from "../../../types/tasks/Task";
import TasksServiceImpl from "../../../modules/admin/tasks/_core/services/impl/TasksServiceImpl";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import { TaskCreateAndUpdate } from "../../../types/tasks/TaskCreateAndUpdate";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";
import { FormikValues } from "formik";

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

  const create = async (
    data: TaskCreateAndUpdate,
    onClose: () => void,
    validation: FormikValues
  ) => {
    toggleLoading();
    try {
      await TasksServiceImpl.create(data);
      await getAll();
      toggleLoading();

      makeToast(
        "Task criada com sucesso!",
        `Você criou a task: ${data?.task}`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      onClose();
      validation.resetForm();
    } catch (e: any) {
      toggleLoading();
      makeToast(
        "Ocorreu um erro!",
        e?.response?.data?.message ||
          "Ocorreu um erro inesperado! Por favor, tente novamente",
        ToastStatus.error,
        3000,
        "top-right",
        true
      );
    }
  };

  const getAll = async () => {
    toggleLoading();
    try {
      const { data: res } = await TasksServiceImpl.getAll();
      setTasks(res);
      toggleLoading();
    } catch (e) {
      toggleLoading();
      // console.log(e)
    }
  };

  const getById = async (id: string) => {
    toggleLoading();
    try {
      const { data: res } = await TasksServiceImpl.getById(id);
      setTask(res);
      toggleLoading();
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
      toggleLoading();
    }
  };

  const update = async (id: string, data: TaskCreateAndUpdate) => {
    toggleLoading();
    try {
      await TasksServiceImpl.update(id, data);

      makeToast(
        "Task editada com sucesso!",
        `Você editou a task: ${data?.task}`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      clearTask();

      getAll();

      toggleLoading();
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
      toggleLoading();
    }
  };

  const clearTask = () => {
    setTask(null);
  };

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        task,
        tasks,
        getAll,
        create,
        getById,
        clearTask,
        update,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;