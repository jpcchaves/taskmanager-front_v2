// Chakra imports
import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Assets
// Custom components
import { makeColumnsTasksList } from "./_core/factories/makeColumnsTasksList";
import { Datatable } from "./components/datatable";
import { TableWrapper } from "./components/tableWrapper";
import { useCallback, useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../contexts/tasks/context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import TasksFormModal from "./components/tasksModal";
import DeleteTaskModal from "./components/deleteTaskModal";

export default function TasksView() {
  const { tasks, getAll, getById, deleteTask, filteredTasks } =
    useContext(TasksContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskToDeleteId, setTaskToDeleteId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getTasks = useCallback(async () => {
    await getAll();
  }, []);

  const getTask = useCallback(async (id: string) => {
    await getById(id);
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  const handleEdit = async (id: string) => {
    await getTask(id);
    navigate(`/tarefas/editar/${id}`);
    onOpen();
  };

  const toggleOpenDeleteModal = (id?: string) => {
    setTaskToDeleteId(id);
    setOpenDeleteModal((prevState) => !prevState);
  };

  const handleDelete = async () => {
    await deleteTask(taskToDeleteId);
    toggleOpenDeleteModal();
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
        <TasksFormModal id={id} isOpen={isOpen} onClose={onClose} />
        <DeleteTaskModal
          openDeleteModal={openDeleteModal}
          toggleOpenDeleteModal={toggleOpenDeleteModal}
          handleDelete={handleDelete}
        />
        <TableWrapper onOpen={onOpen}>
          <Datatable
            columns={makeColumnsTasksList({
              handleEdit,
              toggleOpenDeleteModal,
            })}
            data={filteredTasks || tasks?.content || []}
          />
        </TableWrapper>
      </SimpleGrid>
    </Box>
  );
}
