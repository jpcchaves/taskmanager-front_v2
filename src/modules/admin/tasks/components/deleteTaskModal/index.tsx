import React from "react";
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
  return (
    <Modal
      isOpen={openDeleteModal}
      onClose={() => toggleOpenDeleteModal("")}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cuidado!</ModalHeader>
        <ModalCloseButton />
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
          >
            Cancelar
          </Button>
          <Button colorScheme="red" onClick={() => handleDelete()}>
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTaskModal;
