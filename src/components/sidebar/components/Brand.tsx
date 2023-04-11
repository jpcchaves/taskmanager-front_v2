// Chakra imports
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../../components/separator/Separator";
import logo from "../../../assets/img/logo/logo-light.png";
import { useNavigate } from "react-router-dom";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  const navigate = useNavigate();

  return (
    <Flex alignItems="center" flexDirection="column">
      <Box cursor="pointer" onClick={() => navigate("/tarefas")}>
        <Image src={logo} w={120} mb={15} />
      </Box>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
