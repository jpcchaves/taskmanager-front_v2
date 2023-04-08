import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "../../../../layouts/auth/Default";
// Assets
import illustration from "../../../../assets/img/auth/auth.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useFormik } from "formik";
import { signInValidation } from "../../utils/validation/signInValidation";
import { IUserRegisterResponse } from "../../models/register/IUserRegisterResponse";

import { connect } from "react-redux";
import { login } from "../../../../store/actions/user/actions";
import { AuthContext } from "../../../../contexts/auth/context/AuthContext";
import { SessionStorageUtils } from "../../../../utils/SessionStorageUtils";

function SignIn(props: any) {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const { login, isLoading } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const cachedUser: IUserRegisterResponse = SessionStorageUtils.getItem("user");

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      usernameOrEmail: cachedUser
        ? cachedUser.email || cachedUser.username
        : "",
      password: "",
      remember: !!cachedUser,
    },
    validationSchema: signInValidation,
    onSubmit: async (values) => {
      try {
        await login(values);
      } catch (e) {
        console.log(values);
      }
    },
  });

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Entrar
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Insira seu e-mail e senha para acessar!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <FormControl
              isInvalid={
                !!(
                  validation.touched.usernameOrEmail &&
                  validation.errors.usernameOrEmail
                )
              }
            >
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Usuário ou Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                fontSize="sm"
                variant="auth"
                ms={{ base: "0px", md: "0px" }}
                name="usernameOrEmail"
                placeholder="Digite seu usuário ou email"
                fontWeight="500"
                size="lg"
                mb={
                  !!(
                    validation.touched.usernameOrEmail &&
                    validation.errors.usernameOrEmail
                  )
                    ? ""
                    : "24px"
                }
                onChange={(e) => {
                  validation.handleChange(e);
                }}
                value={validation.values.usernameOrEmail || ""}
                isInvalid={
                  !!(
                    validation.touched.usernameOrEmail &&
                    validation.errors.usernameOrEmail
                  )
                }
              />
              <FormErrorMessage mb="10px">
                {validation.errors.usernameOrEmail}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={
                !!(validation.touched.password && validation.errors.password)
              }
            >
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Senha<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  fontSize="sm"
                  variant="auth"
                  placeholder="Digite sua senha"
                  name="password"
                  size="lg"
                  type={show ? "text" : "password"}
                  mb={
                    !!(
                      validation.touched.password && validation.errors.password
                    )
                      ? ""
                      : "24px"
                  }
                  onChange={(e) => {
                    validation.handleChange(e);
                  }}
                  value={validation.values.password}
                  isInvalid={
                    !!(
                      validation.touched.password && validation.errors.password
                    )
                  }
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage mb="24px">
                {validation.errors.password}
              </FormErrorMessage>
            </FormControl>

            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember"
                  colorScheme="brandScheme"
                  me="10px"
                  onChange={(e) => {
                    validation.handleChange(e);
                  }}
                  defaultChecked={validation.values.remember}
                />
                <FormLabel
                  htmlFor="remember"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Lembrar de mim
                </FormLabel>
              </FormControl>
            </Flex>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              type="submit"
              isLoading={isLoading}
            >
              Entrar
            </Button>
          </form>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Não possui conta?
              <NavLink to="/register">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Crie uma agora!
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(login(params)),
});

export default connect(null, mapDispatchToProps)(SignIn);
