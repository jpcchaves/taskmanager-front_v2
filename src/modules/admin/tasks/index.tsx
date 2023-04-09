// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
// Assets
// Custom components
import { makeColumnsTasksList } from "./_core/factories/makeColumnsTasksList";
import { Datatable } from "./components/datatable";
import { TableWrapper } from "./components/tableWrapper";
import { useCallback, useContext, useEffect } from "react";
import { TasksContext } from "../../../contexts/tasks/context/TasksContext";

export default function TasksView() {
  const { isLoading, tasks, getAll } = useContext(TasksContext);

  const getTasks = useCallback(async () => {
    await getAll();
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
        <TableWrapper>
          <Datatable
            columns={makeColumnsTasksList()}
            data={tasks?.content || []}
          />
        </TableWrapper>
      </SimpleGrid>
    </Box>
  );
}
