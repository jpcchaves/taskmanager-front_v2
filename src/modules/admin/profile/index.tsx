// Chakra imports
import {
  Box,
  Button,
  Divider,
  FormControl,
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

export default function ProfileOverview() {
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const { user } = useContext(AuthContext);

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
          <form>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap="20px">
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Nome de usuário
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <Input disabled />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Email
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <Input disabled />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Senha Atual
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Senha Nova
                  <Text display="inline" ml="1" color={brandStars}>
                    *
                  </Text>
                </FormLabel>
                <Input />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid mt="5">
              <Button colorScheme="brandScheme" color="white">
                Atualizar Perfil
              </Button>
            </SimpleGrid>
          </form>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
