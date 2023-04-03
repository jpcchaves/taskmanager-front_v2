// Chakra imports
import CustomCard from "../customCard";
import {ReactNode} from "react";
import {Button, Flex, HStack, Icon, Text, useColorMode} from "@chakra-ui/react";
import {MdOutlineAdd} from 'react-icons/md'

// Custom components

interface IProps {
    children: ReactNode
    toggleOpenModal: () => void
}

export const TableWrapper = ({children, toggleOpenModal}: IProps) => {

    const {colorMode} = useColorMode()

    return (
        <CustomCard>
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
