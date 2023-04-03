import React from 'react';
import {
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
    ModalOverlay
} from "@chakra-ui/react";
import {FormikValues} from "formik";

interface IProps {
    openTaskModal: boolean
    toggleOpenModal: () => void
    validation: FormikValues
}

const TasksFormModal = ({openTaskModal, toggleOpenModal, validation}: IProps) => {
    return (
        <Modal
            isOpen={openTaskModal}
            isCentered
            onClose={() => toggleOpenModal()}
        >
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                validation.handleSubmit()
                return false;
            }
            }>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Adicione novas tarefas</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Tarefa</FormLabel>
                            <Input
                                variant="auth"
                                placeholder='Tarefa'
                                name='task'
                                onChange={validation.handleChange}
                                value={validation.values.task}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Prazo</FormLabel>
                            <Input
                                variant="auth"
                                type='datetime-local'
                                name='deadline'
                                onChange={validation.handleChange}
                                value={validation.values.deadline}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <Checkbox
                                name='concluded'
                                onChange={validation.handleChange}
                                defaultChecked={validation.values.concluded}
                            >
                                Concluida?
                            </Checkbox>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' colorScheme='blue' mr={3}>
                            Adicionar
                        </Button>
                        <Button onClick={() => toggleOpenModal()}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

export default TasksFormModal;