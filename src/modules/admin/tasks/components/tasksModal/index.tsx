import React from "react";
import {
  Button,
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
} from "@chakra-ui/react";

interface IProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const TasksFormModal = ({ id, isOpen, onClose }: IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{id ? "Editar Tarefa" : "Criar Tarefa"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Tarefa</FormLabel>
            <Input variant="auth" placeholder="Tarefa" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Prazo</FormLabel>
            <Input variant="auth" type="date" placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            {id ? "Editar" : "Criar"}
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TasksFormModal;
