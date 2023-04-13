import React, { useContext, useRef } from "react";
import Lottie from "lottie-react";
import trashCamAnimation from "../../../../../assets/animations/trash-can.json";
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

  const style = {
    height: 350,
    margin: -50,
  };

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
          <Lottie animationData={trashCamAnimation} style={style} />
          <Text align="center" letterSpacing="wide">
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
