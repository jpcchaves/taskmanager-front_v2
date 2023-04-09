import React, { useContext } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { TasksContext } from "../../../../../contexts/tasks/context/TasksContext";

interface IProps {
  openDeleteModal: boolean;
  toggleOpenDeleteModal: (id: string) => void;
  handleDelete: () => void;
}

const DeleteTaskModal = ({
  openDeleteModal,
  toggleOpenDeleteModal,
  handleDelete,
}: IProps) => {
  const { isLoading } = useContext(TasksContext);

  return (
    <Modal
      isOpen={openDeleteModal}
      onClose={() => toggleOpenDeleteModal("")}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cuidado!</ModalHeader>
        <ModalCloseButton disabled={isLoading} />
        <ModalBody>
          <Text>
            Esta ação acarretará na <strong>exclusão</strong> da tarefa. Deseja
            continuar?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            mr={3}
            onClick={() => toggleOpenDeleteModal("")}
            isLoading={isLoading}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => handleDelete()}
            isLoading={isLoading}
          >
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTaskModal;
