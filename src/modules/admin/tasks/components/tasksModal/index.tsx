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

interface IProps {
    openTaskModal: boolean
    toggleOpenModal: () => void
}

const TasksFormModal = ({openTaskModal, toggleOpenModal}: IProps) => {
    return (
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
    );
};

export default TasksFormModal;