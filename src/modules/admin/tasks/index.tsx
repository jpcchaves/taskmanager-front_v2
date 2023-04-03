// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import {Datatable} from "./components/datatable";
import {useGetTasksQuery} from "../../../store/tasks/tasksApiSlice";
import {useDispatch} from "react-redux";
import {setTasks} from "../../../store/tasks/taskSlice";
import {TableWrapper} from "./components/tableWrapper";
import {useEffect} from "react";
import {ITasks} from "./components/models/ITasks";

interface ITasksList {
    content: ITasks[],
    pageNo: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,
    last: boolean
}

export default function TasksView() {
    const dispatch = useDispatch();

    const {data, isLoading} = useGetTasksQuery(null)

    useEffect(() => {
        dispatch(setTasks(data?.content))
    }, [])

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
