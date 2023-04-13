/*eslint-disable*/

import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Task Manager. All Rights Reserved. Made with love by
          <Link
            mx="3px"
            color={textColor}
            href="https://www.github.com/jpcchaves"
            target="_blank"
            fontWeight="700"
          >
            jpcchaves
          </Link>
        </Text>
      </Text>
    </Flex>
  );
}
