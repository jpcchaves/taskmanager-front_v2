import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import emptyBoxAnimation from "../../../../../../../assets/animations/empty-box.json";

const NoDataComponent = () => {
  const style = {
    height: "200px",
  };

  return (
    <SimpleGrid columns={1} alignContent="center" justifyContent="center">
      <Box my="10">
        <Lottie animationData={emptyBoxAnimation} style={style} />
        <Text textAlign="center">Ainda não há tarefas cadastras!</Text>
      </Box>
    </SimpleGrid>
  );
};

export default NoDataComponent;
