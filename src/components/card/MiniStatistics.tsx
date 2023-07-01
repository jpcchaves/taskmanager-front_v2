// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../components/card/Card";

import CountUp from "react-countup";

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  value: string | number;
}) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  const formatValue = (unformattedValue: string | number): number => {
    const newValue = String(unformattedValue).split("%")[0].replace(",", ".");
    return Number(Number(newValue).toFixed(2));
  };

  return (
    <Card py="15px" userSelect={"none"}>
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            <CountUp
              end={
                String(value).includes("%") ? formatValue(value) : Number(value)
              }
              decimals={String(value).includes("%") ? 2 : 0}
              suffix={String(value).includes("%") ? "%" : ""}
            />
          </StatNumber>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
