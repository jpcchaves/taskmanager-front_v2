// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import {Datatable} from "./components/datatable";
import {useGetTasksQuery} from "../../../store/tasks/tasksApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectTasksList, setTasks} from "../../../store/tasks/taskSlice";
import {TableWrapper} from "./components/tableWrapper";

export default function TasksView() {
    const dispatch = useDispatch();
    const {data, isLoading} = useGetTasksQuery(null)

    if (data) {
        dispatch(setTasks(data.content))
    }

    const tasksList = useSelector(selectTasksList)

    console.log(tasksList)

    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid columns={{base: 1, md: 1, xl: 1}} gap='20px'>
                <TableWrapper>
                    <Datatable columns={makeColumnsTasksList()} data={data?.content || []}/>
                </TableWrapper>
            </SimpleGrid>
        </Box>
    );
}
