// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid
} from '@chakra-ui/react';
// Assets
// Custom components
import {makeColumnsTasksList} from "./_core/factories/makeColumnsTasksList";
import {Datatable} from "./components/datatable";
import {useGetTasksQuery} from "../../../store/tasks/tasksApiSlice";
import {useDispatch} from "react-redux";
import {setTasks} from "../../../store/tasks/taskSlice";
import {TableWrapper} from "./components/tableWrapper";
import {useEffect, useState} from "react";
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
    const [openTaskModal, setOpenTaskModal] = useState(false);

    const dispatch = useDispatch();

    const toggleOpenModal = (): void => {
        setOpenTaskModal(prevState => !prevState);
    }

    const {data, isLoading} = useGetTasksQuery(null)

    useEffect(() => {
        dispatch(setTasks(data?.content))
    }, [])

    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid columns={{base: 1, md: 1, xl: 1}} gap='20px'>
                <Modal
                    isOpen={openTaskModal}
                    isCentered
                    onClose={() => toggleOpenModal()}
                >
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Adicione novas tarefas</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Tarefa</FormLabel>
                                <Input variant="auth" placeholder='Tarefa'/>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Prazo</FormLabel>
                                <Input variant="auth" type='datetime-local'/>
                            </FormControl>

                            <FormControl mt={4}>
                                <Checkbox>
                                    Concluida?
                                </Checkbox>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Adicionar
                            </Button>
                            <Button onClick={() => toggleOpenModal()}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <TableWrapper toggleOpenModal={toggleOpenModal}>
                    <Datatable columns={makeColumnsTasksList()} data={data?.content || []}/>
                </TableWrapper>
            </SimpleGrid>
        </Box>
    );
}
