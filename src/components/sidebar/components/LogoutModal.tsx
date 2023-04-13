import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import logOutAnimation from "../../../assets/animations/log-out.json";

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
  handleLogout: () => void;
}

const LogoutModal = ({ toggleModal, handleLogout, isOpen }: IProps) => {
  const style = {
    height: "300px",
  };

  return (
    <Modal onClose={toggleModal} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Lottie animationData={logOutAnimation} style={style} />
          <Text align="center" letterSpacing="wide" fontSize="lg">
            Deseja sair?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleModal} mr="2">
            Cancelar
          </Button>
          <Button variant="brand" onClick={() => handleLogout()}>
            Sair
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
