// Chakra imports
import CustomCard from "../customCard";
import { ReactNode } from "react";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdOutlineAdd } from "react-icons/md";
import FiltersBar from "../filtersBar";

// Custom components

interface IProps {
  children: ReactNode;
  onOpen: () => void;
}

export const TableWrapper = ({ children, onOpen }: IProps) => {
  const { colorMode } = useColorMode();

  return (
    <CustomCard>
      <Flex
        justifyContent="space-between"
        borderBottom="2"
        borderColor={"gray.300"}
        mb={6}
      >
        <HStack>
          <Text
            color={colorMode === "light" ? "gray.700" : "white"}
            fontSize={"18px"}
            fontWeight={"bold"}
            mr={5}
          >
            Listagem de Tarefas
          </Text>
          <FiltersBar />
        </HStack>
        <HStack>
          <Button size={"sm"} rounded={"full"} onClick={() => onOpen()}>
            <Icon as={MdOutlineAdd} boxSize={5} />
          </Button>
        </HStack>
      </Flex>
      {children}
    </CustomCard>
  );
};
