// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
// Assets
// Custom components
import { makeColumnsTasksList } from "./_core/factories/makeColumnsTasksList";
import { Datatable } from "./components/datatable";
import { TableWrapper } from "./components/tableWrapper";

export default function TasksView() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
        <TableWrapper>
          <Datatable columns={makeColumnsTasksList()} data={[]} />
        </TableWrapper>
      </SimpleGrid>
    </Box>
  );
}
