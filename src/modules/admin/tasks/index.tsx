// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import tableDataTasks from "./variables/tableDataTasks";
import {Datatable} from "./components/datatable";

export default function TasksView() {

    // Chakra Color Mode
    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid columns={{base: 1, md: 1, xl: 1}} gap='20px'>
                <Datatable columns={makeColumnsTasksList()} data={tableDataTasks}/>
            </SimpleGrid>
        </Box>
    );
}
