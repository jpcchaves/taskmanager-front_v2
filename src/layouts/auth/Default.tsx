// Chakra imports
import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Footer from "../../components/footer/FooterAuth";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
// Custom components
// Assets

import registerAnimation from "../../assets/animations/register.json";
import Lottie from "lottie-react";

function AuthIllustration(props: {
  children: JSX.Element | string;
  illustrationBackground: string;
}) {
  const { children, illustrationBackground } = props;

  const style = {
    height: 450,
  };

  return (
    <Flex position="relative" h="max-content">
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w="100%"
        maxW={{ md: "66%", lg: "1313px" }}
        mx="auto"
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column"
      >
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h="100%"
          minH="100vh"
          w={{ lg: "50vw", "2xl": "44vw" }}
          position="absolute"
          right="0px"
        >
          {/*
           #0B1437
           #7551FF
           #A0AEC0
           */}
          <Flex
            justify="center"
            align="center"
            w="100%"
            h="100%"
            position="absolute"
            bgGradient={
              "linear(to-r, #0b1437, #0a1334, #091230, #09102d, #080f29, #080e26, #070c23, #060b20, #050a1d, #04081a, #020717, #010514)"
            }
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          >
            <Lottie animationData={registerAnimation} style={style} />
          </Flex>
          {/*<Flex*/}
          {/*  bg={`url(${illustrationBackground})`}*/}
          {/*  justify="center"*/}
          {/*  bgSize="cover"*/}
          {/*  align="end"*/}
          {/*  w="100%"*/}
          {/*  h="100%"*/}
          {/*  bgRepeat="no-repeat"*/}
          {/*  bgPosition="50%"*/}
          {/*  position="absolute"*/}
          {/*  borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}*/}
          {/*/>*/}
        </Box>
        <Footer />
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}

// PROPS

AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
