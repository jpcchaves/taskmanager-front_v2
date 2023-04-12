// Chakra imports
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Banner from "../../../modules/admin/profile/components/Banner";

// Assets
import banner from "../../../assets/img/auth/banner.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth/context/AuthContext";
import Card from "../../../components/card/Card";
import { generateAvatar } from "./utils/helpers/generateAvatar";
import { trimUsernameOrName } from "./utils/helpers/trimUsernameOrName";
import { useFormik } from "formik";
import { updateUserValidation } from "./utils/validation/updateUserValidation";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function ProfileOverview() {
  const [show, setShow] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColorSecondary = "gray.400";

  const { user, update, isLoading } = useContext(AuthContext);

  const handleClick = (input: string) => {
    if (input === "password") {
      setShow((prevState) => !prevState);
    } else {
      setShowCurrentPassword((prevState) => !prevState);
    }
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user ? user.name : "",
      currentPassword: "",
      password: "",
    },
    validationSchema: updateUserValidation,
    onSubmit: async (values) => {
      const valuesToSubmit = {
        id: user.id,
        name: values.name,
        currentPassword: values.currentPassword,
        password: values.password,
      };

      await update(valuesToSubmit, validation);
    },
  });

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <SimpleGrid columns={1}>
        <Card mb={{ base: "0px", lg: "20px" }}>
          <Banner
            banner={banner}
            avatar={
              user?.name
                ? generateAvatar(
                    trimUsernameOrName(user?.name),
                    "white",
                    "#7551ff"
                  )
                : generateAvatar(
                    trimUsernameOrName(user?.username),
                    "white",
                    "#7551ff"
                  )
            }
            name={user?.name ? user?.name : user?.username}
          />
          <Heading fontSize="lg" mt="5">
            Dados do Perfil
          </Heading>
          <Text>Atualize os dados do seu perfil</Text>
          <Divider mt="1" mb="6" />
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap="20px">
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  variant="auth"
                  name="name"
                  value={validation.values.name}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Nome de usuário
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <Input
                  variant="auth"
                  disabled
                  cursor="not-allowed"
                  value={user ? user.username : ""}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Email
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>

                <Input
                  variant="auth"
                  disabled
                  cursor="not-allowed"
                  value={user ? user.email : ""}
                />
              </FormControl>
              <FormControl
                isInvalid={
                  !!(
                    validation.touched.currentPassword &&
                    validation.errors.currentPassword
                  )
                }
              >
                <FormLabel>
                  Senha Atual
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <InputGroup>
                  <Input
                    variant="auth"
                    name="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    value={validation.values.currentPassword}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    isInvalid={
                      !!(
                        validation.touched.currentPassword &&
                        validation.errors.currentPassword
                      )
                    }
                  />
                  <InputRightElement display="flex" alignItems="center">
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={
                        showCurrentPassword
                          ? RiEyeCloseLine
                          : MdOutlineRemoveRedEye
                      }
                      onClick={() => handleClick("currentPassword")}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {validation.errors.currentPassword}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!(validation.touched.password && validation.errors.password)
                }
              >
                <FormLabel>
                  Senha Nova
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <InputGroup>
                  <Input
                    variant="auth"
                    name="password"
                    type={show ? "text" : "password"}
                    value={validation.values.password}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    isInvalid={
                      !!(
                        validation.touched.password &&
                        validation.errors.password
                      )
                    }
                  />
                  <InputRightElement display="flex" alignItems="center">
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={() => handleClick("password")}
                    />
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>
                  {validation.errors.password}
                </FormErrorMessage>
              </FormControl>
            </SimpleGrid>
            <SimpleGrid mt="16">
              <Button
                colorScheme="brandScheme"
                color="white"
                type="submit"
                isLoading={isLoading}
              >
                Atualizar Perfil
              </Button>
            </SimpleGrid>
          </form>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
