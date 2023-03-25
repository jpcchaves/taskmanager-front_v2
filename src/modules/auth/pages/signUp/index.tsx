import React, {useState} from "react";
import {NavLink} from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
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
    useToast,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {RiEyeCloseLine} from "react-icons/ri";

import {useFormik} from "formik";
import * as Yup from 'yup'
import {IUserRegisterRequest} from "../../models/IUserRegisterRequest";
import {useRegisterMutation} from "../../../../store/auth/authApiSlice";

function SignUp() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");

    const [show, setShow] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toast = useToast();
    const handleClick = (selector: string) => {
        if (selector === "password") {
            setShow(prevState => !prevState)
        } else {
            setShowConfirmPassword(prevState => !prevState)
        }
    };

    const [register, {isLoading}] = useRegisterMutation();


    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string(),
            username: Yup.string().required("O nome de usuário é obrigatório!"),
            email: Yup.string().email("Insira um email válido!").required("O email é obrigatório!"),
            password: Yup.string().required("A senha é obrigatória"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], "As senhas não correspondem").required("A senha é obrigatória"),
        }),
        onSubmit: async (values: IUserRegisterRequest) => {
            await register(values)
                .unwrap()
                .then(() => toast({
                    title: 'Conta criada.',
                    description: "Nós criamos uma conta para você.",
                    status: 'success',
                    duration: 3000,
                    position: "top-end",
                    isClosable: true
                }))
                .catch(err => toast({
                    title: 'Ocorreu um erro ao criar a conta.',
                    description: `${err?.data?.message}`,
                    status: 'error',
                    duration: 3000,
                    position: "top-end",
                    isClosable: true
                }))
        }
    })

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
                mb={{base: "30px", md: "60px", lg: "80px"}}
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
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            validation.handleSubmit()
                            return false
                        }
                        }

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
                                fontSize="sm"
                                ms={{base: "0px", md: "0px"}}
                                mb="24px"
                                placeholder="Digite seu nome"
                                name='name'
                                fontWeight="500"
                                size="lg"
                                onChange={(e) => {
                                    validation.handleChange(e);
                                }}
                                value={validation.values.name || ''}
                            />
                        </FormControl>

                        <FormControl isInvalid={!!(
                            validation.touched.username &&
                            validation.errors.username
                        )}>
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
                                fontSize="sm"
                                ms={{base: "0px", md: "0px"}}
                                mb={!!(
                                    validation.touched.username &&
                                    validation.errors.username
                                ) ? "" : "24px"}
                                placeholder="Digite seu nome de usuário"
                                name='username'
                                fontWeight="500"
                                size="lg"
                                onChange={(e) => {
                                    validation.handleChange(e);
                                }}
                                value={validation.values.username || ''}
                            />
                            <FormErrorMessage mb='10px'>
                                {validation.errors.username}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!(
                            validation.touched.email &&
                            validation.errors.email
                        )}>
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
                                fontSize="sm"
                                name="email"
                                ms={{base: "0px", md: "0px"}}
                                placeholder="email@exemple.com"
                                mb={!!(
                                    validation.touched.email &&
                                    validation.errors.email
                                ) ? "" : "24px"}
                                fontWeight="500"
                                size="lg"
                                onChange={(e) => {
                                    validation.handleChange(e);
                                }}
                                value={validation.values.email || ''}
                            />
                            <FormErrorMessage mb='10px'>
                                {validation.errors.email}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!(
                            validation.touched.password &&
                            validation.errors.password)}>
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
                                    placeholder="Digite sua senha"
                                    mb={!!(
                                        validation.touched.password &&
                                        validation.errors.password
                                    ) ? "" : "24px"}
                                    size="lg"
                                    name='password'
                                    onChange={(e) => {
                                        validation.handleChange(e);
                                    }}
                                    value={validation.values.password}
                                    type={show ? "text" : "password"}
                                />
                                <InputRightElement display="flex" alignItems="center" mt="4px">
                                    <Icon
                                        color={textColorSecondary}
                                        _hover={{cursor: "pointer"}}
                                        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                        onClick={() => handleClick("password")}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage mb='10px'>
                                {validation.errors.password}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!(
                            validation.touched.confirmPassword &&
                            validation.errors.confirmPassword)}>
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
                                    fontSize="sm"
                                    placeholder="Confirme sua senha"
                                    mb={!!(
                                        validation.touched.confirmPassword &&
                                        validation.errors.confirmPassword
                                    ) ? "" : "24px"}
                                    size="lg"
                                    name='confirmPassword'
                                    onChange={(e) => {
                                        validation.handleChange(e);
                                    }}
                                    value={validation.values.confirmPassword}
                                    type={showConfirmPassword ? "text" : "password"}
                                />
                                <InputRightElement display="flex" alignItems="center" mt="4px">
                                    <Icon
                                        color={textColorSecondary}
                                        _hover={{cursor: "pointer"}}
                                        as={showConfirmPassword ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                        onClick={() => handleClick("confirmPassword")}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage mb='24px'>
                                {validation.errors.confirmPassword}
                            </FormErrorMessage>
                        </FormControl>


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
                            Cadastrar
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
                            Já possui conta?
                            <NavLink to="/">
                                <Text
                                    color={textColorBrand}
                                    as="span"
                                    ms="5px"
                                    fontWeight="500"
                                >
                                    Acesse agora!
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
