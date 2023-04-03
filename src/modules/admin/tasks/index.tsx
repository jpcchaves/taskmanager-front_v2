// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import {Datatable} from "./components/datatable";
import {useAddTaskMutation, useGetTasksQuery} from "../../../store/tasks/tasksApiSlice";
import {useDispatch} from "react-redux";
import {TableWrapper} from "./components/tableWrapper";
import {useState} from "react";
import {ITasks} from "./components/models/ITasks";
import TasksFormModal from "./components/tasksModal";
import {useFormik} from "formik";

import moment from 'moment'

import * as Yup from 'yup'
import {useParams} from "react-router-dom";

interface ITasksList {
    content: ITasks[],
    pageNo: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,
    last: boolean
}

export default function TasksView() {
    const [openTaskModal, setOpenTaskModal] = useState(false);

    const {id} = useParams();

    const dispatch = useDispatch();

    const [addTask, {isLoading: addTaskLoading}] = useAddTaskMutation();

    const toggleOpenModal = (): void => {
        setOpenTaskModal(prevState => !prevState);
    }

    const {data, isLoading} = useGetTasksQuery(null)

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: '',
            deadline: '',
            concluded: false,
        },
        validationSchema: Yup.object().shape({
            task: Yup.string().trim().required('A task é obrigatória!'),
            deadline: Yup.date().required('O prazo é obrigatório!'),
            concluded: Yup.boolean(),
        }),
        onSubmit: async values => {
            const {task, deadline} = values;

            const formattedDate = moment(deadline).utc().format("YYYY-MM-DDTHH:mm")

            const valuesToSubmit = {
                task,
                deadline: formattedDate
            }

            if (id) {
                console.log({id, values})
            } else {
                await addTask(valuesToSubmit);
                validation.resetForm();
                toggleOpenModal();
            }

        }
    })

    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid columns={{base: 1, md: 1, xl: 1}} gap='20px'>

                <TasksFormModal
                    openTaskModal={openTaskModal}
                    toggleOpenModal={toggleOpenModal}
                    validation={validation}
                />

                <TableWrapper toggleOpenModal={toggleOpenModal}>
                    <Datatable columns={makeColumnsTasksList()} data={data?.content || []}/>
                </TableWrapper>
            </SimpleGrid>
        </Box>
    );
}
