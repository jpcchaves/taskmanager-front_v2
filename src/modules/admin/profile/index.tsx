// Chakra imports
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Banner from "../../../modules/admin/profile/components/Banner";

// Assets
import banner from "../../../assets/img/auth/banner.png";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/context/AuthContext";
import Card from "../../../components/card/Card";
import { generateAvatar } from "./utils/helpers/generateAvatar";
import { trimUsernameOrName } from "./utils/helpers/trimUsernameOrName";
import { useFormik } from "formik";
import { updateUserValidation } from "./utils/validation/updateUserValidation";

export default function ProfileOverview() {
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const { user } = useContext(AuthContext);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user ? user.name : "",
      currentPassword: "",
      password: "",
    },
    validationSchema: updateUserValidation,
    onSubmit: (values) => console.log(values),
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
                <Input
                  variant="auth"
                  name="currentPassword"
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
                <Input
                  variant="auth"
                  name="password"
                  value={validation.values.password}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  isInvalid={
                    !!(
                      validation.touched.password && validation.errors.password
                    )
                  }
                />

                <FormErrorMessage>
                  {validation.errors.password}
                </FormErrorMessage>
              </FormControl>
            </SimpleGrid>
            <SimpleGrid mt="16">
              <Button colorScheme="brandScheme" color="white" type="submit">
                Atualizar Perfil
              </Button>
            </SimpleGrid>
          </form>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
