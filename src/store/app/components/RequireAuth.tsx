import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentToken, selectCurrentUser, setCredentials} from "../../auth/authSlice";
import {useLoginMutation} from "../../auth/authApiSlice.js";
import {Box, Button, Text} from "@chakra-ui/react";


const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const user = useSelector(selectCurrentUser)

    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useDispatch();

    const usuario = {
        usernameOrEmail: "jpcchaves",
        password: "123456"
    }

    const handleSubmit = async () => {
        try {
            const userData = await login(usuario).unwrap()
            dispatch(setCredentials(userData))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Box>
                <Button onClick={() => handleSubmit()}>
                    Logar
                </Button>
                <Text>{user ? `Usuário logado: ${user.name}` : "Não há ninguém logado!"}</Text>
            </Box>
        </>
    )
};

export default RequireAuth;
