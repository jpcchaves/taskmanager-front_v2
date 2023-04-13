// Chakra imports
import CustomCard from "../customCard";
import { ReactNode } from "react";
import {
  Box,
  Button,
  Icon,
  SimpleGrid,
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
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Text
          color={colorMode === "light" ? "gray.700" : "white"}
          fontSize={"18px"}
          fontWeight={"bold"}
          mr={5}
        >
          Listagem de Tarefas
        </Text>
      </SimpleGrid>
      <FiltersBar />
      <Box position="absolute" right={5}>
        <Button size={"sm"} rounded={"full"} onClick={() => onOpen()}>
          <Icon as={MdOutlineAdd} boxSize={5} />
        </Button>
      </Box>
      {children}
    </CustomCard>
  );
};
