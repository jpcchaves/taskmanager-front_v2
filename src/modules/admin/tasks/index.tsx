// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import {Datatable} from "./components/datatable";
import {tableDataTasks} from "./variables/tableDataTasks";

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
