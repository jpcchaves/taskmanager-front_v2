// Chakra imports
import CustomCard from "../customCard";
import {ReactNode, useState} from "react";
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorMode
} from "@chakra-ui/react";
import {MdOutlineAdd} from 'react-icons/md'

// Custom components

interface IProps {
    children: ReactNode
}

export const TableWrapper = ({children}: IProps) => {
    const [openTaskModal, setOpenTaskModal] = useState(false);

    const {colorMode} = useColorMode()

    const toggleOpenModal = (): void => {
        setOpenTaskModal(prevState => !prevState);
    }

    return (
        <CustomCard>
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

            <Flex justifyContent='space-between' borderBottom='2' borderColor={'gray.300'}>
                <HStack>
                    <Text color={colorMode === 'light' ? "gray.700" : "white"} fontSize={'18px'} fontWeight={'bold'}>
                        Listagem de Tarefas
                    </Text>
                </HStack>
                <HStack>
                    <Button size={'sm'} rounded={'full'} onClick={() => toggleOpenModal()}>
                        <Icon as={MdOutlineAdd} boxSize={5}/>
                    </Button>
                </HStack>
            </Flex>
            {children}
        </CustomCard>
    );
}
