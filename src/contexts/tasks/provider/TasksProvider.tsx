import { TasksContext } from "../context/TasksContext";
import { useState } from "react";
import { Task } from "../../../types/tasks/Task";
import TasksServiceImpl from "../../../modules/admin/tasks/_core/services/impl/TasksServiceImpl";
import { TasksPaginated } from "../../../types/tasks/TasksPaginated";
import Toast, { ToastStatus } from "../../../factories/toast/makeToastFactory";
import { IArgsUpdate } from "../types/IArgsUpdate";
import { IArgsCreate } from "../types/IArgsCreate";

interface IProps {
  children: JSX.Element;
}

const TasksProvider = ({ children }: IProps) => {
  const [task, setTask] = useState<Task>(null);
  const [tasks, setTasks] = useState<TasksPaginated>(null);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [makeToast] = Toast();

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const create = async ({ data, onClose, validation }: IArgsCreate) => {
    toggleLoading();
    try {
      await TasksServiceImpl.create(data);

      if (currentFilter) {
        const { data: res } = await TasksServiceImpl.getTasksByFilter(
          currentFilter
        );
        setFilteredTasks(res);
      } else {
        await getAll();
      }

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

  const update = async ({
    onClose,
    validation,
    id,
    data,
    navigate,
  }: IArgsUpdate) => {
    toggleLoading();
    try {
      await TasksServiceImpl.update(id, data);
      navigate("/tarefas");
      if (currentFilter) {
        const { data: res } = await TasksServiceImpl.getTasksByFilter(
          currentFilter
        );
        setFilteredTasks(res);
      } else {
        await getAll();
      }

      makeToast(
        "Task editada com sucesso!",
        `Você editou a task: ${data?.task}`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

      clearTask();

      onClose();
      validation.resetForm();
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

  const deleteTask = async (id: string) => {
    toggleLoading();
    try {
      await TasksServiceImpl.delete(id);

      if (currentFilter) {
        const { data: res } = await TasksServiceImpl.getTasksByFilter(
          currentFilter
        );
        setFilteredTasks(res);
      } else {
        await getAll();
      }

      makeToast(
        "Task deletada com sucesso!",
        `Você deletou uma task!`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

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

  const getTasksByFilter = async (situation: string) => {
    toggleLoading();
    setCurrentFilter(situation);
    try {
      const { data: res } = await TasksServiceImpl.getTasksByFilter(situation);
      setFilteredTasks(res);

      makeToast(
        "Filtro aplicado com sucesso!",
        `Você filtrou as tasks por: ${
          situation === "1" ? "Concluídas" : "Não Concluídas"
        }`,
        ToastStatus.success,
        3000,
        "top-right",
        true
      );

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
      // console.log(e);
    }
  };

  const clearTask = () => {
    setTask(null);
  };

  const clearFilter = async () => {
    setFilteredTasks(null);
    setCurrentFilter(null);
    await getAll();
  };

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        task,
        tasks,
        filteredTasks,
        getAll,
        create,
        getById,
        clearTask,
        clearFilter,
        update,
        deleteTask,
        getTasksByFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
