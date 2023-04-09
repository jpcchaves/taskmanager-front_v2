// Chakra imports
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
// Assets
// Custom components
import { makeColumnsTasksList } from "./_core/factories/makeColumnsTasksList";
import { Datatable } from "./components/datatable";
import { TableWrapper } from "./components/tableWrapper";
import { useContext, useEffect } from "react";
import { TasksContext } from "../../../contexts/tasks/context/TasksContext";

export default function TasksView() {
  const { isLoading, tasks, getAll } = useContext(TasksContext);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
        <TableWrapper>
          <Button isLoading={isLoading}>fdsfafdsa</Button>
          <Datatable
            columns={makeColumnsTasksList()}
            data={tasks?.content || []}
          />
        </TableWrapper>
      </SimpleGrid>
    </Box>
  );
}
