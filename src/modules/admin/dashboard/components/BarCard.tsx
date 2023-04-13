// Chakra imports
import { Box, Flex, Select, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "../../../../variables/charts";
import { VSeparator } from "../../../../components/separator/Separator";
import BarChart from "../../../../components/charts/BarChart";

export default function BarCard(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card
      p="20px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Tarefas
        </Text>
      </Flex>

      <BarChart
        h="100%"
        w="100%"
        chartData={barChartDataConsumption}
        chartOptions={barChartOptionsConsumption}
      />
    </Card>
  );
}
