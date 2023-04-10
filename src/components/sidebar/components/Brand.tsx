// Chakra imports
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../../components/separator/Separator";
import logo from "../../../assets/img/logo/logo-light.png";
import { HorizonLogo } from "../../icons/Icons";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Box>
        <Image src={logo} w={150} mb={15} />
      </Box>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
