import React from "react";
import {NavLink} from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
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
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {RiEyeCloseLine} from "react-icons/ri";

function SignUp() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{base: "100%", md: "max-content"}}
                w="100%"
                mx={{base: "auto", lg: "0px"}}
                me="auto"
                h="100%"
                alignItems="start"
                justifyContent="center"
                mb={{base: "30px", md: "60px"}}
                px={{base: "25px", md: "0px"}}
                mt={{base: "40px", md: "14vh"}}
                flexDirection="column"
            >
                <Box me="auto">
                    <Heading color={textColor} fontSize="36px" mb="10px">
                        Cadastrar
                    </Heading>
                    <Text
                        mb="36px"
                        ms="4px"
                        color={textColorSecondary}
                        fontWeight="400"
                        fontSize="md"
                    >
                        Realize seu cadastro agora para acessar!
                    </Text>
                </Box>
                <Flex
                    zIndex="2"
                    direction="column"
                    w={{base: "100%", md: "420px"}}
                    maxW="100%"
                    background="transparent"
                    borderRadius="15px"
                    mx={{base: "auto", lg: "unset"}}
                    me="auto"
                    mb={{base: "20px", md: "auto"}}
                >
                    <FormControl>
                        <FormLabel
                            display="flex"
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            mb="8px"
                        >
                            Nome
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant="auth"
                            fontSize="sm"
                            ms={{base: "0px", md: "0px"}}
                            mb="24px"
                            placeholder="Digite seu nome"
                            name='name'
                            fontWeight="500"
                            size="lg"
                        />
                        <FormLabel
                            display="flex"
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            mb="8px"
                        >
                            Nome de usuário<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant="auth"
                            fontSize="sm"
                            ms={{base: "0px", md: "0px"}}
                            mb="24px"
                            placeholder="Digite seu nome de usuário"
                            name='username'
                            fontWeight="500"
                            size="lg"
                        />
                        <FormLabel
                            display="flex"
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            mb="8px"
                        >
                            Email<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant="auth"
                            fontSize="sm"
                            ms={{base: "0px", md: "0px"}}
                            placeholder="email@exemple.com"
                            mb="24px"
                            fontWeight="500"
                            size="lg"
                        />
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
                                isRequired={true}
                                fontSize="sm"
                                placeholder="Digite sua senha"
                                mb="24px"
                                size="lg"
                                name='password'
                                type={show ? "text" : "password"}
                                variant="auth"
                            />
                            <InputRightElement display="flex" alignItems="center" mt="4px">
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{cursor: "pointer"}}
                                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                        <FormLabel
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            display="flex"
                        >
                            Confirme a senha<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <InputGroup size="md">
                            <Input
                                isRequired={true}
                                fontSize="sm"
                                placeholder="Confirme sua senha"
                                mb="24px"
                                size="lg"
                                name='confirmPassword'
                                type={show ? "text" : "password"}
                                variant="auth"
                            />
                            <InputRightElement display="flex" alignItems="center" mt="4px">
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{cursor: "pointer"}}
                                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                        <Flex justifyContent="space-between" align="center" mb="24px">
                            <FormControl display="flex" alignItems="center">
                                <Checkbox
                                    id="remember-login"
                                    colorScheme="brandScheme"
                                    me="10px"
                                />
                                <FormLabel
                                    htmlFor="remember-login"
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
                        >
                            Entrar
                        </Button>
                    </FormControl>
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="start"
                        maxW="100%"
                        mt="0px"
                    >
                        <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                            Não possui conta?
                            <NavLink to="/auth/sign-up">
                                <Text
                                    color={textColorBrand}
                                    as="span"
                                    ms="5px"
                                    fontWeight="500"
                                >
                                    Crie uma agora
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default SignUp;
