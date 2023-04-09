// Chakra imports
import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Assets
// Custom components
import { makeColumnsTasksList } from "./_core/factories/makeColumnsTasksList";
import { Datatable } from "./components/datatable";
import { TableWrapper } from "./components/tableWrapper";
import { useCallback, useContext, useEffect } from "react";
import { TasksContext } from "../../../contexts/tasks/context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import TasksFormModal from "./components/tasksModal";

export default function TasksView() {
  const { isLoading, tasks, getAll } = useContext(TasksContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id } = useParams();
  const navigate = useNavigate();

  const getTasks = useCallback(async () => {
    await getAll();
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/tarefas/editar/${id}`);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
        <TasksFormModal id={id} isOpen={isOpen} onClose={onClose} />
        <TableWrapper onOpen={onOpen}>
          <Datatable
            columns={makeColumnsTasksList({ handleEdit })}
            data={tasks?.content || []}
          />
        </TableWrapper>
      </SimpleGrid>
    </Box>
  );
}
